/**
 * Configuração da integração com n8n para pagamento PIX
 */

// Webhooks do n8n
export const N8N_CONFIG = {
    // Webhook para gerar QR Code PIX
    GENERATE_PIX: 'https://n8n.srv1218600.hstgr.cloud/webhook/7cf7bfaa-8cb8-4214-960e-21f0bc5e9837',

    // Webhook para verificar status da transação
    CHECK_TRANSACTION: 'https://n8n.srv1218600.hstgr.cloud/webhook/d26a4673-9b8d-4e5e-896f-fac6bfcf871f',

    // Intervalo de polling (5 segundos)
    POLLING_INTERVAL: 5000,

    // Timeout máximo para aguardar pagamento (15 minutos)
    MAX_POLLING_TIME: 15 * 60 * 1000
};

/**
 * Interface para a resposta do n8n (Geração de PIX)
 */
export interface PixResponse {
    qrcode: string;          // String do código PIX copia e cola ou imagem base64
    transaction_id: string;  // ID único da transação
    status: string;          // "pending"
    error?: string;
}

/**
 * Interface para o status do n8n (Polling)
 */
export interface TransactionStatus {
    status: 'approved' | 'pending' | 'rejected' | 'expired';
    paid: boolean;
}

/**
 * Gera QR Code PIX via n8n
 */
export const generatePixQRCode = async (data: { name: string, email: string, total: number, cpf: string }): Promise<PixResponse> => {
    const payload = {
        name: data.name,
        email: data.email,
        total: data.total,
        cpf: data.cpf.replace(/\D/g, ''), // Adicionando CPF por segurança
        products: [{
            id: "mentoria_2026",
            name: "Curso Reforma Tributária 2026",
            price: data.total,
            quantity: 1
        }]
    };

    if (import.meta.env.DEV) {
        console.log('--- ENVIANDO DADOS PARA N8N (GERAR PIX) ---');
        console.log('URL:', N8N_CONFIG.GENERATE_PIX);
        console.log('Payload:', JSON.stringify(payload, null, 2));
    }

    try {
        const response = await fetch(N8N_CONFIG.GENERATE_PIX, {
            method: 'POST',
            mode: 'cors', // Garantindo modo CORS
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Erro na resposta do n8n:', errorText);
            throw new Error(`Erro HTTP: ${response.status} - ${errorText}`);
        }

        const result = await response.json();

        if (import.meta.env.DEV) {
            console.log('--- RESPOSTA N8N (GERAR PIX) ---');
            console.log(result);
        }

        return result;
    } catch (error) {
        console.error('Falha crítica no fetch do n8n:', error);
        throw error;
    }
};

/**
 * Verifica status da transação via n8n
 */
export const checkTransactionStatus = async (transaction_id: string, email: string): Promise<TransactionStatus> => {
    const payload = { transaction_id, email };

    try {
        const response = await fetch(N8N_CONFIG.CHECK_TRANSACTION, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        return await response.json();
    } catch (error) {
        console.error('[DEBUG] Polling error:', error);
        return {
            status: 'pending',
            paid: false
        };
    }
};
