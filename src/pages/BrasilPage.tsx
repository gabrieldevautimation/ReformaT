import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Globe, MapPin, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BrasilPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gov-text flex flex-col">
            <Header />
            <main className="flex-1 py-12">
                <div className="gov-container max-w-6xl">
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-6">
                            <Globe className="text-gov-blue" size={40} />
                            <div>
                                <h1 className="text-3xl font-black text-gov-blue">Brasil</h1>
                                <p className="text-gray-600">Portal oficial do governo brasileiro</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="bg-gov-light p-6 rounded-lg border border-gray-200">
                                <MapPin className="text-gov-blue mb-3" size={32} />
                                <h3 className="font-bold text-lg mb-2">Serviços por Região</h3>
                                <p className="text-sm text-gray-600">Encontre serviços públicos específicos da sua região.</p>
                            </div>

                            <div className="bg-gov-light p-6 rounded-lg border border-gray-200">
                                <Users className="text-gov-blue mb-3" size={32} />
                                <h3 className="font-bold text-lg mb-2">Canais de Atendimento</h3>
                                <p className="text-sm text-gray-600">Central de atendimento 24h para o cidadão.</p>
                            </div>

                            <div className="bg-gov-light p-6 rounded-lg border border-gray-200">
                                <TrendingUp className="text-gov-blue mb-3" size={32} />
                                <h3 className="font-bold text-lg mb-2">Dados Abertos</h3>
                                <p className="text-sm text-gray-600">Transparência e acesso a dados governamentais.</p>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                            <h3 className="text-lg font-bold text-gov-blue mb-2">Reforma Tributária</h3>
                            <p className="text-gray-700 mb-4">
                                Acesse nosso guia completo sobre as mudanças tributárias que impactam o Brasil.
                            </p>
                            <Link to="/" className="inline-flex items-center gap-2 bg-gov-blue hover:bg-gov-dark text-white font-bold py-3 px-6 rounded-lg transition-colors">
                                VER CONTEÚDO SOBRE REFORMA
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
