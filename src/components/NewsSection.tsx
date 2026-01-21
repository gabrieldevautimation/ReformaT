import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

const newsItems = [
    {
        category: "Economia",
        title: "Senado aprova texto-base da regulamentação da Reforma Tributária com novas isenções.",
        date: "10 Jan 2025",
        link: "#"
    },
    {
        category: "Consumidor",
        title: "Cashback para famílias de baixa renda: Veja como vai funcionar o sistema de devolução.",
        date: "08 Jan 2025",
        link: "#"
    },
    {
        category: "Empresas",
        title: "Fim do IPI, PIS e COFINS: O que muda na nota fiscal da sua empresa a partir de 2026.",
        date: "05 Jan 2025",
        link: "#"
    },
    {
        category: "Imposto Seletivo",
        title: "Novo 'Imposto do Pecado' taxará veículos, bebidas e mineração. Veja as alíquotas.",
        date: "02 Jan 2025",
        link: "#"
    }
];

export function NewsSection() {
    return (
        <section className="bg-gov-light py-16">
            <div className="gov-container">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <span className="text-gov-blue font-bold text-sm uppercase tracking-wider">Acompanhe as Mudanças</span>
                        <h2 className="text-3xl font-black text-gov-text mt-2">Últimas Notícias da Reforma</h2>
                    </div>
                    <a href="#" className="hidden md:flex items-center text-gov-blue font-bold hover:underline">
                        Ver todas as notícias <ChevronRight size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {newsItems.map((news, idx) => (
                        <article key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                            <span className="text-xs font-bold text-gov-blue bg-blue-50 px-2 py-1 rounded w-fit mb-3">
                                {news.category}
                            </span>
                            <h3 className="text-lg font-bold text-gray-800 mb-4 flex-grow leading-snug hover:text-gov-blue cursor-pointer">
                                {news.title}
                            </h3>
                            <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-gray-500 text-xs mt-auto">
                                <Calendar size={14} />
                                {news.date}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 bg-white rounded-xl p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gov-text mb-2">Por que você precisa entender isso AGORA?</h3>
                        <p className="text-gray-600">
                            A transição começa em 2026. Quem não se adequar vai perder competitividade e dinheiro. O sistema cumulativo vai acabar, e o crédito tributário será a nova moeda.
                        </p>
                    </div>
                    <div className="bg-gov-yellow/10 border border-gov-yellow text-yellow-800 p-4 rounded-lg font-semibold text-sm max-w-md">
                        <span className="block font-bold mb-1">Impacto Real:</span>
                        Com o split payment, o recolhimento do imposto será no momento da transação. O fluxo de caixa das empresas vai mudar drasticamente.
                    </div>
                </div>
            </div>
        </section>
    );
}
