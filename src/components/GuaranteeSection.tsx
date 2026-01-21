import { Shield, Check } from 'lucide-react';

export function GuaranteeSection() {
    return (
        <section className="py-12 bg-gradient-to-br from-green-50 to-blue-50">
            <div className="gov-container max-w-4xl">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-4 border-gov-green">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                            <div className="w-32 h-32 bg-gov-green rounded-full flex items-center justify-center shadow-lg">
                                <Shield className="text-white" size={64} />
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl font-black text-gov-heading mb-3">
                                Garantia Incondicional de 7 Dias
                            </h2>
                            <p className="text-lg text-gray-700 mb-4">
                                Você tem <strong className="text-gov-green">7 dias completos</strong> para assistir, aplicar e testar todo o conteúdo.
                                Se por qualquer motivo você não ficar 100% satisfeito, devolvemos seu dinheiro.
                                <strong> Sem perguntas. Sem burocracia.</strong>
                            </p>

                            <div className="grid md:grid-cols-2 gap-3 mt-6">
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <Check className="text-gov-green flex-shrink-0" size={18} />
                                    <span>Reembolso em até 48h</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <Check className="text-gov-green flex-shrink-0" size={18} />
                                    <span>100% do valor devolvido</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <Check className="text-gov-green flex-shrink-0" size={18} />
                                    <span>Sem letras miúdas</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <Check className="text-gov-green flex-shrink-0" size={18} />
                                    <span>Ambiente seguro</span>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                <p className="text-sm text-green-900 font-semibold">
                                    🏆 Por que oferecemos essa garantia? Porque temos CERTEZA de que o conteúdo vai entregar valor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
