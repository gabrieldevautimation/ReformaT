/**
 * Validação e utilitários SEM dependência do Zod
 */

/**
 * Validação COMPLETA de CPF com dígitos verificadores
 * Algoritmo oficial da Receita Federal
 */
export const validateCPF = (cpf: string): boolean => {
    const numbers = cpf.replace(/\D/g, '');

    // Verifica tamanho
    if (numbers.length !== 11) return false;

    // Verifica sequências inválidas (111.111.111-11, etc.)
    if (/^(\d)\1{10}$/.test(numbers)) return false;

    // Validação do primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(numbers.charAt(i)) * (10 - i);
    }
    let remainder = sum % 11;
    let digit1 = remainder < 2 ? 0 : 11 - remainder;

    if (digit1 !== parseInt(numbers.charAt(9))) return false;

    // Validação do segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(numbers.charAt(i)) * (11 - i);
    }
    remainder = sum % 11;
    let digit2 = remainder < 2 ? 0 : 11 - remainder;

    if (digit2 !== parseInt(numbers.charAt(10))) return false;

    return true;
};

/**
 * Formata CPF para o padrão 000.000.000-00
 */
export const formatCPF = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
        return numbers
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    return value;
};

/**
 * Mascara CPF para logs (123.***.***-00)
 */
export const maskCPF = (cpf: string): string => {
    const numbers = cpf.replace(/\D/g, '');
    if (numbers.length !== 11) return cpf;
    return `${numbers.slice(0, 3)}.***.***-${numbers.slice(-2)}`;
};

/**
 * Validação de email (regex básico)
 */
export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 255;
};

/**
 * Validação de nome
 */
export const validateName = (name: string): boolean => {
    if (name.length < 3 || name.length > 100) return false;
    // Permite letras, espaços, acentos, apóstrofos e hífens
    const nameRegex = /^[a-zA-ZÀ-ú\s'-]+$/;
    return nameRegex.test(name);
};

/**
 * Interface para dados de checkout
 */
export interface CheckoutFormData {
    nome: string;
    email: string;
    cpf: string;
}

/**
 * Validação completa de formulário de checkout
 */
export const validateCheckoutForm = (data: CheckoutFormData): { valid: boolean; errors: Record<string, string> } => {
    const errors: Record<string, string> = {};

    // Validação nome
    if (!data.nome) {
        errors.nome = 'Nome é obrigatório';
    } else if (!validateName(data.nome)) {
        if (data.nome.length < 3) {
            errors.nome = 'Nome muito curto (mínimo 3 caracteres)';
        } else if (data.nome.length > 100) {
            errors.nome = 'Nome muito longo (máximo 100 caracteres)';
        } else {
            errors.nome = 'Nome contém caracteres inválidos';
        }
    }

    // Validação email
    if (!data.email) {
        errors.email = 'Email é obrigatório';
    } else if (!validateEmail(data.email)) {
        errors.email = 'Email inválido';
    }

    // Validação CPF
    if (!data.cpf) {
        errors.cpf = 'CPF é obrigatório';
    } else if (!validateCPF(data.cpf)) {
        errors.cpf = 'CPF inválido. Verifique os números digitados.';
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors
    };
};
