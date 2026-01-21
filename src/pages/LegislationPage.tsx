
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowLeft, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LegislationPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gov-text flex flex-col">
            <Header />
            <main className="flex-1 py-12">
                <div className="gov-container max-w-5xl">
                    <Link to="/" className="flex items-center gap-2 text-gov-blue font-bold mb-8 hover:underline">
                        <ArrowLeft size={20} /> Voltar
                    </Link>

                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-6">
                            <FileText className="text-gov-blue" size={40} />
                            <div>
                                <h1 className="text-3xl font-black text-gov-blue">Legislação da Reforma Tributária</h1>
                                <p className="text-gray-600">Emenda Constitucional 132/2023</p>
                            </div>
                        </div>

                        <div className="prose max-w-none">
                            <h2 className="text-2xl font-bold text-gov-text mt-8 mb-4">Resumo Executivo</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                A Emenda Constitucional nº 132, de 20 de dezembro de 2023, instituiu a Reforma Tributária sobre o consumo no Brasil,
                                substituindo cinco tributos (IPI, PIS, Cofins, ICMS e ISS) por três novos impostos: o Imposto sobre Bens e Serviços (IBS),
                                a Contribuição sobre Bens e Serviços (CBS) e o Imposto Seletivo (IS).
                            </p>

                            <h3 className="text-xl font-bold text-gov-text mt-6 mb-3">Principais Mudanças</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex gap-2">
                                    <span className="text-gov-blue font-bold">•</span>
                                    <span><strong>IVA Dual:</strong> Criação do CBS (federal) e IBS (estadual/municipal)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-gov-blue font-bold">•</span>
                                    <span><strong>Período de Transição:</strong> 2026 a 2032 (eliminação gradual dos tributos antigos)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-gov-blue font-bold">•</span>
                                    <span><strong>Alíquota Padrão:</strong> Estimativa entre 26,5% e 27% (uma das maiores do mundo)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-gov-blue font-bold">•</span>
                                    <span><strong>Imposto Seletivo:</strong> Incidência sobre produtos prejudiciais à saúde e ao meio ambiente</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-gov-blue font-bold">•</span>
                                    <span><strong>Cashback:</strong> Devolução parcial de tributos para famílias de baixa renda</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-gov-blue font-bold">•</span>
                                    <span><strong>Cesta Básica Nacional:</strong> Alíquota zero para itens essenciais</span>
                                </li>
                            </ul>

                            <h3 className="text-xl font-bold text-gov-text mt-8 mb-3">Cronograma de Implementação</h3>
                            <div className="bg-gov-light p-6 rounded-lg">
                                <table className="w-full text-sm">
                                    <tbody>
                                        <tr className="border-b border-gray-200">
                                            <td className="py-3 font-bold">2026</td>
                                            <td className="py-3">Teste do CBS e IBS (alíquota de 1%)</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="py-3 font-bold">2027</td>
                                            <td className="py-3">Início da transição - Redução gradual de PIS/Cofins</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="py-3 font-bold">2029</td>
                                            <td className="py-3">Início da redução do ICMS e ISS</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 font-bold">2033</td>
                                            <td className="py-3">Conclusão da transição - Sistema totalmente implementado</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                                <h3 className="text-lg font-bold text-gov-blue mb-2">Quer entender todos os detalhes?</h3>
                                <p className="text-gray-700 mb-4">
                                    Nosso curso detalha cada artigo da reforma de forma clara e aplicada ao seu negócio.
                                </p>
                                <a href="https://ambienteseguro.org.ua/c/370fa74274" className="inline-flex items-center gap-2 bg-gov-green hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                                    ACESSAR O CURSO COMPLETO
                                </a>
                            </div>

                            <div className="mt-8 flex gap-4">
                                <a href="#" className="flex items-center gap-2 text-gov-blue font-bold hover:underline text-sm">
                                    <Download size={16} />
                                    Baixar EC 132/2023 (PDF)
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
