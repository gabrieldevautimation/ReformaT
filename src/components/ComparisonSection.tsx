import { X, Check, AlertTriangle } from 'lucide-react';


export function ComparisonSection() {
    return (
        <section className="py-16 bg-white">
            <div className="gov-container max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-gov-heading mb-4">
                        O Que Acontece Se Você NÃO Fizer Este Curso?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A reforma já começou. A pergunta não é "se" você vai se adaptar, mas "quando".
                        Veja a diferença entre agir agora ou deixar para depois:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Sem o curso */}
                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 bg-red-600 rounded-full">
                                <X className="text-white" size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-red-900">Sem o Curso</h3>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "Risco de multas por não conformidade (R$ 10k - R$ 500k)",
                                "Perda de competitividade no mercado",
                                "Decisões tributárias erradas custando milhares",
                                "Clientes migrando para profissionais atualizados",
                                "Stress e insegurança em cada transação",
                                "Dependência cara de consultorias externas"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-red-900">
                                    <X className="text-red-600 flex-shrink-0 mt-0.5" size={16} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 p-4 bg-red-600 text-white rounded-lg">
                            <AlertTriangle className="mb-2" size={24} />
                            <p className="text-sm font-bold">Custo Estimado de Inação:</p>
                            <p className="text-2xl font-black">R$ 15.000 - R$ 200.000</p>
                            <p className="text-xs mt-1 opacity-90">em multas, perda de receita e oportunidades nos próximos 12 meses</p>
                        </div>
                    </div>

                    {/* Com o curso */}
                    <div className="bg-green-50 border-2 border-gov-green rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 bg-gov-green rounded-full">
                                <Check className="text-white" size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-green-900">Com o Curso</h3>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "100% em conformidade com a EC 132/2023",
                                "Economize até 30% em tributação com planejamento",
                                "Decisões tributárias seguras e lucrativas",
                                "Autoridade no assunto = mais clientes e receita",
                                "Tranquilidade em todas as operações fiscais",
                                "Autonomia total (sem gastar com consultorias)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-green-900">
                                    <Check className="text-gov-green flex-shrink-0 mt-0.5" size={16} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 p-4 bg-gov-green text-white rounded-lg">
                            <Check className="mb-2" size={24} />
                            <p className="text-sm font-bold">Investimento Total:</p>
                            <p className="text-2xl font-black">R$ 89,00</p>
                            <p className="text-xs mt-1 opacity-90">Retorno estimado: 50x - 1.000x nos próximos 12 meses</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="https://ambienteseguro.org.ua/c/370fa74274"
                        className="inline-flex items-center gap-2 bg-gov-green hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition-all"
                    >
                        SIM, QUERO ME PREPARAR AGORA
                    </a>
                    <p className="text-xs text-gray-500 mt-3">Decisão sem risco - Garantia incondicional de 7 dias</p>
                </div>
            </div>
        </section>
    );
}
