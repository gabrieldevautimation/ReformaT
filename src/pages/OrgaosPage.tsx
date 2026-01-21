import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Building2, Search } from 'lucide-react';

export function OrgaosPage() {
    const orgaos = [
        { nome: 'Ministério da Fazenda', sigla: 'MF', area: 'Economia' },
        { nome: 'Receita Federal', sigla: 'RFB', area: 'Tributação' },
        { nome: 'Banco Central', sigla: 'BCB', area: 'Monetária' },
        { nome: 'Ministério da Saúde', sigla: 'MS', area: 'Saúde' },
        { nome: 'Ministério da Educação', sigla: 'MEC', area: 'Educação' },
        { nome: 'Ministério do Trabalho', sigla: 'MTE', area: 'Trabalho' },
        { nome: 'INSS', sigla: 'INSS', area: 'Previdência' },
        { nome: 'Polícia Federal', sigla: 'PF', area: 'Segurança' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gov-text flex flex-col">
            <Header />
            <main className="flex-1 py-12">
                <div className="gov-container max-w-6xl">
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-6">
                            <Building2 className="text-gov-blue" size={40} />
                            <div>
                                <h1 className="text-3xl font-black text-gov-blue">Instituições Relacionadas</h1>
                                <p className="text-gray-600">Estrutura Institucional</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Buscar órgão ou ministério..."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-gov-blue"
                                />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {orgaos.map((orgao, i) => (
                                <div key={i} className="border border-gray-200 rounded-lg p-4 hover:border-gov-blue transition-colors cursor-pointer">
                                    <div className="flex items-start justify-between mb-2">
                                        <Building2 className="text-gov-blue flex-shrink-0" size={24} />
                                        <span className="text-xs bg-blue-100 text-gov-blue px-2 py-1 rounded font-bold">{orgao.sigla}</span>
                                    </div>
                                    <h3 className="font-bold text-sm mb-1">{orgao.nome}</h3>
                                    <p className="text-xs text-gray-500">{orgao.area}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                            <h3 className="text-lg font-bold text-gov-blue mb-2">Reforma Tributária</h3>
                            <p className="text-gray-700 text-sm mb-4">
                                Coordenada pelo <strong>Ministério da Fazenda</strong> e <strong>Receita Federal</strong>, a Reforma Tributária é uma das maiores transformações da estrutura governamental.
                            </p>
                            <div className="flex gap-4">
                                <div className="bg-white p-3 rounded border border-gray-200 flex-1">
                                    <div className="text-xs text-gray-500">Órgão Responsável</div>
                                    <div className="font-bold text-sm">Ministério da Fazenda</div>
                                </div>
                                <div className="bg-white p-3 rounded border border-gray-200 flex-1">
                                    <div className="text-xs text-gray-500">Órgão Executor</div>
                                    <div className="font-bold text-sm">Receita Federal do Brasil</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
