import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FileSearch, Download, Shield, Phone } from 'lucide-react';

export function AcessoInformacaoPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gov-text flex flex-col">
            <Header />
            <main className="flex-1 py-12">
                <div className="gov-container max-w-6xl">
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-6">
                            <FileSearch className="text-gov-blue" size={40} />
                            <div>
                                <h1 className="text-3xl font-black text-gov-blue">Acesso à Informação</h1>
                                <p className="text-gray-600">Lei nº 12.527/2011 - Transparência Pública</p>
                            </div>
                        </div>

                        <div className="prose max-w-none">
                            <h2 className="text-2xl font-bold text-gov-text mt-8 mb-4">O que é a LAI?</h2>
                            <p className="text-gray-700 leading-relaxed">
                                A Lei de Acesso à Informação (LAI) garante o direito constitucional de acesso às informações públicas.
                                Qualquer pessoa pode solicitar dados e informações dos órgãos públicos.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                <div className="bg-gov-light p-6 rounded-lg border border-gray-200">
                                    <Shield className="text-gov-blue mb-3" size={32} />
                                    <h3 className="font-bold text-lg mb-2">Seus Direitos</h3>
                                    <ul className="text-sm text-gray-700 space-y-2">
                                        <li>• Solicitar informações públicas</li>
                                        <li>• Obter cópias de documentos</li>
                                        <li>• Acompanhar processos</li>
                                        <li>• Recurso em caso de negativa</li>
                                    </ul>
                                </div>

                                <div className="bg-gov-light p-6 rounded-lg border border-gray-200">
                                    <Phone className="text-gov-blue mb-3" size={32} />
                                    <h3 className="font-bold text-lg mb-2">Como Solicitar</h3>
                                    <ul className="text-sm text-gray-700 space-y-2">
                                        <li>• Portal e-SIC (online)</li>
                                        <li>• Presencialmente no órgão</li>
                                        <li>• Por telefone (0800)</li>
                                        <li>• Via correio</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                                <h3 className="text-lg font-bold text-gov-blue mb-2">
                                    <Download className="inline mr-2" size={20} />
                                    Dados sobre a Reforma Tributária
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Acesse todos os documentos, pareceres técnicos e dados públicos sobre a Reforma Tributária 2026.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
