
import { ArrowRight, AlertTriangle, FileText, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <section className="bg-white border-b border-gray-200">
            <div className="gov-container py-12 lg:py-20 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-gov-yellow/20 text-yellow-800 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide border border-gov-yellow/50">
                        <AlertTriangle size={14} /> ⏰ TURMA ENCERRA EM 48H - Últimas 15 vagas
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-gov-blue leading-tight">
                        Reforma Tributária: <br />
                        <span className="text-gov-text">O Impacto é Inevitável.</span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                        A maior mudança fiscal dos últimos 30 anos já começou. O sistema tributário brasileiro foi reiniciado. Sua empresa e seu patrimônio estão preparados para o <strong>IVA Dual</strong>, o <strong>Imposto Seletivo</strong> e as novas regras do <strong>Cashback</strong>?
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a href="https://ambienteseguro.org.ua/c/370fa74274" className="flex items-center justify-center gap-2 bg-gov-green hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all">
                            SIM, QUERO ME PREPARAR AGORA
                            <ArrowRight size={20} />
                        </a>

                        <Link to="/legislacao" className="flex items-center justify-center gap-2 bg-white border-2 border-gov-blue text-gov-blue hover:bg-blue-50 font-bold py-4 px-8 rounded-full text-lg transition-all">
                            Ler a Legislação Completa
                        </Link>
                    </div>

                    <p className="text-xs text-gray-500 mt-4">
                        *Curso atualizado conforme a Emenda Constitucional 132/2023.
                    </p>
                </div>

                <div className="flex-1 w-full max-w-lg">
                    <div className="bg-gov-light border border-gray-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-gov-blue font-bold text-xl mb-4 flex items-center gap-2">
                            <TrendingUp size={24} />
                            Dados em Tempo Real
                        </h3>
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded border border-gray-100 shadow-sm">
                                <span className="text-xs text-gray-500 uppercase">Alíquota Padrão Estimada</span>
                                <div className="text-3xl font-black text-gov-text">26,5% <span className="text-sm font-normal text-gray-400">a 27%</span></div>
                                <div className="h-1 bg-gray-200 rounded mt-2 overflow-hidden">
                                    <div className="h-full bg-gov-yellow w-[70%]"></div>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded border border-gray-100 shadow-sm">
                                <span className="text-xs text-gray-500 uppercase">Período de Transição</span>
                                <div className="text-3xl font-black text-gov-text">2026 <span className="text-sm font-normal text-gray-400">- 2032</span></div>
                                <p className="text-xs text-red-600 mt-1 font-semibold">O INÍCIO É AGORA.</p>
                            </div>

                            <div className="bg-gov-blue/5 p-4 rounded border border-blue-100">
                                <p className="text-sm text-gov-blue font-semibold flex gap-2">
                                    <FileText size={20} />
                                    Entenda o que muda no seu bolso com nosso guia completo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
