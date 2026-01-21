
import { CheckCircle, BookOpen, FileCheck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CourseSection() {
    return (
        <section className="py-20 bg-white">
            <div className="gov-container">
                <div className="text-center mb-16">
                    <span className="bg-blue-100 text-gov-blue px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                        Capacitação Oficial
                    </span>
                    <h2 className="text-4xl font-black text-gov-text mt-4">Programa Completo de Adaptação Tributária</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
                        Domine as novas regras do sistema tributário brasileiro. O único curso desenhado para empresários, contadores e advogados que precisam de clareza imediata.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-xl text-gov-blue mb-4 flex items-center gap-2">
                                <BookOpen /> O que você vai aprender
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Evite multas de R$ 10k-500k por não conformidade",
                                    "Economize até 30% em tributação com planejamento estratégico",
                                    "Cashback: Como seus clientes vão economizar (e você lucrar)",
                                    "Produtos que vão ficar mais caros - prepare seus clientes",
                                    "Simples Nacional: Como não perder benefícios na transição",
                                    "Split Payment: Melhore seu fluxo de caixa em 40%"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="text-gov-green flex-shrink-0" size={20} />
                                        <span className="text-gov-text font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-4 border border-gray-100 rounded-lg shadow-sm text-center">
                            <FileCheck className="mx-auto text-gov-blue mb-2" size={32} />
                            <div className="font-bold text-2xl">100%</div>
                            <div className="text-xs text-gray-500 uppercase">Atualizado</div>
                        </div>
                    </div>
                </div>

                <div className="bg-gov-blue text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>

                    <div className="relative z-10 text-center">
                        <h3 className="text-2xl font-bold mb-2">Investimento Único</h3>
                        <p className="text-blue-200 text-sm mb-8">Acesso vitalício + Atualizações de 2025</p>

                        <div className="text-6xl font-black mb-8">R$ 179<span className="text-2xl font-medium">,00</span></div>

                        <Link to="/checkout" className="w-full bg-gov-green hover:bg-green-600 text-white font-bold py-4 rounded-lg text-lg shadow-lg transform transition active:scale-95 mb-6 flex items-center justify-center gap-2">
                            <ShieldCheck />
                            SIM, QUERO GARANTIR MINHA VAGA
                        </Link>

                        <div className="text-center mb-4">
                            <div className="inline-block bg-gov-yellow text-gov-dark px-4 py-2 rounded-full text-sm font-bold mb-2">
                                ⚡ Restam apenas 15 vagas nesta turma
                            </div>
                        </div>

                        <div className="text-xs text-blue-200">
                            <p>Compra segura e verificada.</p>
                            <p>Garantia incondicional de 7 dias.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
