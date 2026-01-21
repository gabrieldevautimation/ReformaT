import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowLeft, CheckCircle, Lock, Shield, CreditCard, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// ⚠️ Mestre, substitua este link pelo seu checkout real da Paradise!
const PARADISE_CHECKOUT_URL = "https://paradise.checkout/SEU-LINK-AQUI";

export function CheckoutPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gov-text flex flex-col">
            <Header />
            <main className="flex-1 py-12">
                <div className="gov-container max-w-4xl">
                    <Link to="/" className="flex items-center gap-2 text-gov-blue font-bold mb-8 hover:underline">
                        <ArrowLeft size={20} /> Voltar
                    </Link>

                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                        <div className="text-center mb-10">
                            <h1 className="text-3xl font-black text-gov-blue mb-4">Quase lá!</h1>
                            <p className="text-gray-600 text-lg">
                                Você está a um passo de garantir sua vaga na <strong className="text-gov-blue">Reforma Tributária 2026</strong>.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Resumo do Pedido */}
                            <div className="bg-gov-light p-8 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 text-gov-blue">Resumo do Pedido</h3>
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                        <span className="font-medium">Curso Completo</span>
                                        <span className="font-bold text-gray-900">R$ 179,00</span>
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-gov-green" /> Acesso Vitalício</li>
                                        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-gov-green" /> Certificado 40h</li>
                                        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-gov-green" /> Suporte Premium</li>
                                        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-gov-green" /> Atualizações 2026/2027</li>
                                    </ul>
                                </div>
                                <div className="flex justify-between items-center text-2xl font-black text-gov-blue pt-2">
                                    <span>Total:</span>
                                    <span>R$ 179,00</span>
                                </div>
                            </div>

                            {/* Botão de Ação */}
                            <div className="flex flex-col gap-4">
                                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg flex items-start gap-3">
                                    <Shield className="text-yellow-600 flex-shrink-0" size={24} />
                                    <p className="text-sm text-yellow-800">
                                        <strong>Ambiente 100% Seguro.</strong> Você será redirecionado para nosso checkout oficial blindado para finalizar o pagamento.
                                    </p>
                                </div>

                                <a
                                    href={PARADISE_CHECKOUT_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-gov-green hover:bg-green-700 text-white font-bold py-5 rounded-lg flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                                >
                                    <Lock size={20} />
                                    FINALIZAR PAGAMENTO
                                    <ArrowRight size={20} />
                                </a>

                                <div className="flex items-center justify-center gap-4 text-gray-400 grayscale opacity-70 mt-2">
                                    <div className="flex items-center gap-1 text-xs"><CreditCard size={12} /> Cartão de Crédito</div>
                                    <div className="flex items-center gap-1 text-xs"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg" className="h-3 w-auto" alt="Pix" /> Pix</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
