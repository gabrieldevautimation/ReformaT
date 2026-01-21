/**
 * Sanitização de inputs SEM dependências externas
 * Proteção contra XSS básica
 */

/**
 * Remove tags HTML e caracteres perigosos
 */
export const sanitizeInput = (dirty: string): string => {
    if (!dirty) return '';

    return dirty
        .replace(/[<>]/g, '') // Remove < e >
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+=/gi, '') // Remove event handlers (onclick=, onerror=, etc)
        .replace(/data:/gi, '') // Remove data: protocol
        .trim()
        .slice(0, 500); // Limite de caracteres
};

/**
 * Sanitiza HTML permitindo apenas texto
 */
export const sanitizeHTML = (dirty: string): string => {
    if (!dirty) return '';

    const div = document.createElement('div');
    div.textContent = dirty; // textContent escapa HTML automaticamente
    return div.innerHTML;
};

/**
 * Valida e sanitiza URLs
 */
export const sanitizeURL = (url: string): string => {
    if (!url) return '#';

    try {
        const parsed = new URL(url);
        // Permite apenas http: e https:
        if (!['http:', 'https:'].includes(parsed.protocol)) {
            return '#';
        }
        return parsed.toString();
    } catch {
        return '#';
    }
};

/**
 * Escapa caracteres especiais para uso em atributos HTML
 */
export const escapeHTML = (str: string): string => {
    const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;',
    };
    return str.replace(/[&<>"'/]/g, (char) => map[char]);
};
