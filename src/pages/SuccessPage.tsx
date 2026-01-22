import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CheckCircle, Download, FileText, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SuccessPage() {
    useEffect(() => {
        // Verifica se realmente houve pagamento aprovado
        const paymentApproved = localStorage.getItem('paymentApproved');
        const transactionId = localStorage.getItem('transactionId');

        if (!paymentApproved || !transactionId) {
            // Se não há confirmação de pagamento, redireciona para home
            window.location.href = '/';
        } else {
            // Pixel: Compra realizada
            if (window.fbq) {
                window.fbq('track', 'Purchase', {
                    value: 49.90, // Valor padrão do produto, se houver
                    currency: 'BRL'
                });
            }
        }
    }, []);

    const handleDownloadCourse = () => {
        // Download do PDF do curso
        const link = document.createElement('a');
        link.href = '/curso-reforma-tributaria.pdf';
        link.download = 'Curso-Reforma-Tributaria-2026.pdf';
        link.click();
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gov-text flex flex-col">
            <Header />
            <main className="flex-1 py-12">
                <div className="gov-container max-w-3xl">
                    {/* Success Message */}
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="text-green-600" size={64} />
                        </div>

                        <h1 className="text-3xl font-black text-gray-900 mb-3">
                            Pagamento Confirmado!
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Seja bem-vindo ao <strong>Curso de Reforma Tributária 2026</strong>
                        </p>

                        {/* Download Button */}
                        <button
                            onClick={handleDownloadCourse}
                            className="inline-flex items-center gap-3 bg-gov-blue hover:bg-gov-dark text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-colors mb-8"
                        >
                            <Download size={24} />
                            BAIXAR CURSO COMPLETO (PDF)
                        </button>

                        {/* Course Details */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
                            <h2 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                                <FileText className="text-gov-blue" size={24} />
                                O que você receberá:
                            </h2>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-gov-green flex-shrink-0 mt-0.5" size={18} />
                                    <span><strong>Material Completo:</strong> PDF com todo o conteúdo do curso</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-gov-green flex-shrink-0 mt-0.5" size={18} />
                                    <span><strong>Acesso Vitalício:</strong> Curso seu para sempre, sem prazo de expiração</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-gov-green flex-shrink-0 mt-0.5" size={18} />
                                    <span><strong>Atualizações 2025:</strong> Todas as mudanças legislativas inclusas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-gov-green flex-shrink-0 mt-0.5" size={18} />
                                    <span><strong>Certificado de 40h:</strong> Válido como atividade complementar</span>
                                </li>
                            </ul>
                        </div>

                        {/* Additional Info */}
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                            <div className="flex items-center gap-2 text-green-800 text-sm">
                                <Award size={20} className="flex-shrink-0" />
                                <p>
                                    <strong>Importante:</strong> O PDF foi enviado também para seu e-mail.
                                    Verifique sua caixa de entrada (e spam).
                                </p>
                            </div>
                        </div>

                        {/* Back to Home */}
                        <Link
                            to="/"
                            className="inline-block text-gov-blue font-bold hover:underline"
                        >
                            ← Voltar para a Página Inicial
                        </Link>
                    </div>

                    {/* Support */}
                    <div className="mt-8 text-center text-sm text-gray-600">
                        <p>
                            Problemas com o download? Entre em contato:{' '}
                            <a href="mailto:suporte@reformatributaria.com" className="text-gov-blue font-bold hover:underline">
                                suporte@reformatributaria.com
                            </a>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
