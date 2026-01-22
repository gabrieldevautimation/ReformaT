import { useEffect } from 'react';

/**
 * PixelTracker - Monitoramento Global de Interações (God Mode)
 * Este componente escuta todos os cliques no site e envia eventos customizados para o Meta Pixel.
 */
export function PixelTracker() {
    useEffect(() => {
        const handleGlobalClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            // Encontra o elemento clicado ou o pai (se for um ícone dentro de um botão, por exemplo)
            const clickableElement = target.closest('button, a');

            if (clickableElement) {
                const element = clickableElement as HTMLElement;
                const isLink = element.tagName === 'A';
                const text = element.textContent || (element as HTMLButtonElement).value || 'Sem texto';
                const id = element.id || 'Sem ID';
                const href = isLink ? (element as HTMLAnchorElement).href : 'Botão';

                // Dispara o evento customizado Interaction para o Pixel
                if (window.fbq) {
                    window.fbq('trackCustom', 'Interaction', {
                        element_type: clickableElement.tagName,
                        element_text: text.trim().substring(0, 50),
                        element_id: id,
                        element_href: href,
                        page_path: window.location.pathname
                    });

                    // Se for um link de WhatsApp ou Checkout externo, podemos categorizar diferente
                    if (href.includes('wa.me') || href.includes('ambienteseguro')) {
                        window.fbq('track', 'Contact', {
                            content_name: 'External Link Click',
                            content_category: text.trim()
                        });
                    }
                }
            }
        };

        // Adiciona o listener no documento inteiro
        document.addEventListener('click', handleGlobalClick);

        return () => {
            // Limpa o listener ao desmontar
            document.removeEventListener('click', handleGlobalClick);
        };
    }, []);

    return null; // Componente invisível
}
