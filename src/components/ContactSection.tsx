import React from 'react';
import { Plus, Minus } from 'lucide-react';

export function ContactSection() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    const faqs = [
        {
            q: "O curso serve para quem não é contador?",
            a: "Sim. A linguagem é adaptada para empresários, gestores e qualquer cidadão que deseja entender o impacto no seu bolso."
        },
        {
            q: "Para quem este curso NÃO é?",
            a: "Este curso NÃO é para quem: busca soluções mágicas sem estudar, quer apenas certificado sem aplicar o conhecimento, ou não trabalha com empresas/finanças. Se você não se encaixa nisso, este curso é para você."
        },
        {
            q: "Quanto tempo até ver resultados práticos?",
            a: "A maioria dos alunos consegue aplicar os primeiros conceitos em 48-72 horas. Em 7 dias você já terá clareza total sobre como a reforma impacta sua área de atuação."
        },
        {
            q: "O acesso é vitalício?",
            a: "Sim, você terá acesso permanente ao conteúdo e todas as atualizações legislativas de 2025 sem custo extra."
        },
        {
            q: "Tem certificado?",
            a: "Sim, certificado de conclusão de 40 horas válido como atividade complementar."
        }
    ];

    return (
        <section className="bg-gov-light py-16 border-t border-gray-200">
            <div className="gov-container max-w-3xl">
                <h2 className="text-3xl font-black text-gov-text text-center mb-12">Dúvidas Frequentes</h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-4 text-left font-bold text-gov-text hover:bg-gray-50 transition"
                            >
                                {faq.q}
                                {openIndex === i ? <Minus size={20} className="text-gov-blue" /> : <Plus size={20} className="text-gray-400" />}
                            </button>
                            {openIndex === i && (
                                <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 mt-2">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
                    <a href="#" className="font-bold text-gov-blue hover:underline">Fale com nosso suporte oficial no WhatsApp</a>
                </div>
            </div>
        </section>
    );
}
