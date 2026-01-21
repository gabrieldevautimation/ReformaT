import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Folder, TrendingUp, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AssuntosPage() {
    const assuntos = [
        {
            icon: TrendingUp,
            title: 'Economia & Tributação',
            desc: 'Reforma tributária, impostos, incentivos fiscais',
            link: '/',
            destaque: true
        },
        {
            icon: Briefcase,
            title: 'Trabalho & Previdência',
            desc: 'Direitos trabalhistas, aposentadoria, INSS',
            link: '/'
        },
        {
            icon: GraduationCap,
            title: 'Educação',
            desc: 'ENEM, ProUni, FIES, educação básica',
            link: '/'
        },
        {
            icon: Heart,
            title: 'Saúde',
            desc: 'SUS, vacinação, programas de saúde',
            link: '/'
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gov-text flex flex-col">
            <Header />
            <main className="flex-1 py-12">
                <div className="gov-container max-w-6xl">
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-6">
                            <Folder className="text-gov-blue" size={40} />
                            <div>
                                <h1 className="text-3xl font-black text-gov-blue">Assuntos</h1>
                                <p className="text-gray-600">Explore temas de interesse público</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                            {assuntos.map((assunto, i) => {
                                const Icon = assunto.icon;
                                return (
                                    <Link
                                        key={i}
                                        to={assunto.link}
                                        className={`p-6 rounded-lg border-2 transition-all hover:shadow-lg ${assunto.destaque
                                                ? 'bg-blue-50 border-gov-blue'
                                                : 'bg-gov-light border-gray-200 hover:border-gov-blue'
                                            }`}
                                    >
                                        <Icon className="text-gov-blue mb-3" size={32} />
                                        <h3 className="font-bold text-lg mb-2">{assunto.title}</h3>
                                        <p className="text-sm text-gray-600">{assunto.desc}</p>
                                        {assunto.destaque && (
                                            <span className="inline-block mt-3 text-xs bg-gov-yellow text-yellow-800 px-2 py-1 rounded font-bold">
                                                EM DESTAQUE
                                            </span>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="mt-8 p-6 bg-gov-blue text-white rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Reforma Tributária 2026</h3>
                            <p className="text-blue-100 mb-4">
                                O assunto mais importante do momento. Entenda como as mudanças fiscais vão impactar sua vida e seu negócio.
                            </p>
                            <Link to="/" className="inline-flex bg-white text-gov-blue font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                                EXPLORAR CONTEÚDO
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
