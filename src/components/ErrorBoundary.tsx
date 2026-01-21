import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

/**
 * Error Boundary para capturar erros do React
 * Previne exposição de stack traces em produção
 */
export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Em produção, enviar para serviço de logging (Sentry, Logtail, etc.)
        if (import.meta.env.PROD) {
            // TODO: Integrar com serviço de logging
            console.error('React Error:', {
                message: error.message,
                // NÃO enviar stack completo em produção
                componentStack: errorInfo.componentStack?.slice(0, 200)
            });
        } else {
            // Em desenvolvimento, mostrar erro completo
            console.error('React Error Boundary caught:', error, errorInfo);
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                    <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                            Ops! Algo deu errado
                        </h1>
                        <p className="text-gray-600 mb-6">
                            Ocorreu um erro inesperado. Por favor, recarregue a página ou tente novamente mais tarde.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-gov-blue hover:bg-gov-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                            Recarregar Página
                        </button>
                        {!import.meta.env.PROD && this.state.error && (
                            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded text-left">
                                <p className="text-xs font-mono text-red-900 break-all">
                                    {this.state.error.message}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
