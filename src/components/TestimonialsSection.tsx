import { Star, Quote, Briefcase, User } from 'lucide-react';

const testimonials = [
    {
        name: "Dr. Carlos Mendes",
        role: "Contador - CRC/SP 127.543",
        company: "Mendes Contabilidade",
        text: "Finalmente um curso que explica a reforma de forma PRÁTICA. Em 3 dias já consegui orientar meus clientes sobre o IBS. Investimento que se paga na primeira consultoria.",
        rating: 5,
        image: "https://i.pravatar.cc/150?img=12"
    },
    {
        name: "Mariana Oliveira",
        role: "CFO",
        company: "TechStart Solutions",
        text: "Evitamos uma multa de R$ 47 mil porque entendemos o split payment a tempo. O curso pagou por si mesmo 262 vezes. Recomendo para todo empresário.",
        rating: 5,
        image: "https://i.pravatar.cc/150?img=47"
    },
    {
        name: "Roberto Alves",
        role: "Advogado Tributarista",
        company: "Alves & Associados",
        text: "Conteúdo atualizado, direto ao ponto. Hoje sou referência em reforma tributária no escritório graças a este curso. Meus honorários aumentaram 40%.",
        rating: 5,
        image: "https://i.pravatar.cc/150?img=33"
    },
];

export function TestimonialsSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="gov-container">
                <div className="text-center mb-12">
                    <div className="inline-block bg-gov-yellow/20 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                        ⭐ 4.9/5.0 - Avaliação Média
                    </div>
                    <h2 className="text-3xl font-black text-gov-heading mb-2">
                        1.247 Profissionais Já Se Atualizaram
                    </h2>
                    <p className="text-gray-600">Veja o que contadores, advogados e empresários estão dizendo:</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {testimonials.map((testimonial, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-2 mb-4">
                                {[...Array(testimonial.rating)].map((_, idx) => (
                                    <Star key={idx} className="text-gov-yellow fill-gov-yellow" size={16} />
                                ))}
                            </div>

                            <Quote className="text-gov-blue/20 mb-3" size={32} />

                            <p className="text-gray-700 text-sm mb-4 italic leading-relaxed">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <div className="font-bold text-sm text-gov-text">{testimonial.name}</div>
                                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                                    <div className="text-xs text-gray-400">{testimonial.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
                    <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                        <User className="mx-auto text-gov-blue mb-2" size={24} />
                        <div className="font-black text-2xl text-gov-text">1.247</div>
                        <div className="text-xs text-gray-500">Alunos ativos</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                        <Briefcase className="mx-auto text-gov-blue mb-2" size={24} />
                        <div className="font-black text-2xl text-gov-text">98%</div>
                        <div className="text-xs text-gray-500">Taxa de satisfação</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                        <Star className="mx-auto text-gov-yellow fill-gov-yellow mb-2" size={24} />
                        <div className="font-black text-2xl text-gov-text">4.9/5</div>
                        <div className="text-xs text-gray-500">Avaliação média</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
