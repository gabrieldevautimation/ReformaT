import { useState, useEffect } from 'react';
import { CheckCircle, Clock, Copy, QrCode, AlertCircle, Loader } from 'lucide-react';
import { checkTransactionStatus, N8N_CONFIG } from '../lib/payment';

interface PixPaymentProps {
    transaction_id: string;
    email: string;
    qrcode: string;
    onSuccess: () => void;
    onExpired: () => void;
}

export function PixPayment({ transaction_id, email, qrcode, onSuccess, onExpired }: PixPaymentProps) {
    const [status, setStatus] = useState<'pending' | 'checking' | 'approved' | 'expired'>('pending');
    const [copied, setCopied] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);

    // Detectar se o qrcode é uma imagem ou texto
    const isImage = qrcode.startsWith('data:image') || qrcode.startsWith('http');

    useEffect(() => {
        let pollingInterval: NodeJS.Timeout;
        let timeoutId: NodeJS.Timeout;

        const checkPayment = async () => {
            setStatus('checking');
            const result = await checkTransactionStatus(transaction_id, email);

            if (result.status === 'approved' && result.paid) {
                setStatus('approved');
                clearInterval(pollingInterval);
                clearTimeout(timeoutId);

                localStorage.setItem('paymentApproved', 'true');
                localStorage.setItem('transactionId', transaction_id);

                setTimeout(() => {
                    onSuccess();
                }, 2000);
            } else if (result.status === 'expired' || result.status === 'rejected') {
                setStatus('expired');
                clearInterval(pollingInterval);
                clearTimeout(timeoutId);
                onExpired();
            } else {
                setStatus('pending');
            }
        };

        pollingInterval = setInterval(checkPayment, N8N_CONFIG.POLLING_INTERVAL);

        timeoutId = setTimeout(() => {
            clearInterval(pollingInterval);
            setStatus('expired');
            onExpired();
        }, N8N_CONFIG.MAX_POLLING_TIME);

        const timerInterval = setInterval(() => {
            setTimeElapsed(prev => prev + 1);
        }, 1000);

        checkPayment();

        return () => {
            clearInterval(pollingInterval);
            clearInterval(timerInterval);
            clearTimeout(timeoutId);
        };
    }, [transaction_id, email, onSuccess, onExpired]);

    const copyToClipboard = () => {
        if (!isImage) {
            navigator.clipboard.writeText(qrcode);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    if (status === 'approved') {
        return (
            <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle className="text-green-600" size={48} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Pagamento Aprovado!</h2>
                <p className="text-gray-600">Redirecionando para o curso...</p>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        {status === 'checking' ? (
                            <Loader className="text-blue-600 animate-spin" size={32} />
                        ) : (
                            <QrCode className="text-blue-600" size={32} />
                        )}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Pague com PIX</h2>
                    <p className="text-gray-600">Escaneie o QR Code ou copie o código abaixo</p>

                    <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                        <Clock size={16} />
                        <span>Aguardando pagamento: {formatTime(timeElapsed)}</span>
                    </div>
                </div>

                {isImage ? (
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-white border-4 border-gray-200 rounded-lg">
                            <img src={qrcode} alt="PIX" className="w-64 h-64" />
                        </div>
                    </div>
                ) : (
                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Código PIX:</label>
                        <div className="relative">
                            <textarea
                                readOnly
                                value={qrcode}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 bg-gray-50 font-mono text-xs h-24 resize-none"
                            />
                            <button
                                onClick={copyToClipboard}
                                className="absolute right-2 top-2 p-2 hover:bg-gray-200 rounded transition-colors"
                            >
                                <Copy size={20} className={copied ? 'text-green-600' : 'text-gray-600'} />
                            </button>
                        </div>
                        {copied && <p className="text-xs text-green-600 mt-1">Código copiado!</p>}
                    </div>
                )}

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="text-blue-600 mt-0.5" size={20} />
                        <div>
                            <h3 className="font-bold text-blue-900 text-sm">Status: {status === 'checking' ? 'Verificando...' : 'Aguardando'}</h3>
                            <p className="text-xs text-blue-700">Assim que o pagamento for confirmado, esta tela atualizará automaticamente.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
