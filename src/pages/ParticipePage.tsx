
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MessageSquare, Users, Vote, Megaphone } from 'lucide-react';

export function ParticipePage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gov-text flex flex-col">
            <Header />
            <main className="flex-1 py-12">
                <div className="gov-container max-w-6xl">
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-6">
                            <MessageSquare className="text-gov-blue" size={40} />
                            <div>
                                <h1 className="text-3xl font-black text-gov-blue">Participe</h1>
                                <p className="text-gray-600">Sua voz importa para o Brasil</p>
                            </div>
                        </div>

                        <div className="prose max-w-none">
                            <h2 className="text-2xl font-bold text-gov-text mt-8 mb-4">Canais de Participação Social</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                O governo brasileiro oferece diversos canais para que você, cidadão, possa participar ativamente
                                das decisões públicas e contribuir com sugestões e críticas.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gov-light p-6 rounded-lg border border-gray-200">
                                    <Vote className="text-gov-blue mb-3" size={32} />
                                    <h3 className="font-bold text-lg mb-2">Consultas Públicas</h3>
                                    <p className="text-sm text-gray-700 mb-4">
                                        Opine sobre propostas de leis, decretos e políticas públicas antes de serem implementadas.
                                    </p>
                                    <button className="text-gov-blue font-bold text-sm hover:underline">
                                        Ver consultas ativas →
                                    </button>
                                </div>

                                <div className="bg-gov-light p-6 rounded-lg border border-gray-200">
                                    <Users className="text-gov-blue mb-3" size={32} />
                                    <h3 className="font-bold text-lg mb-2">Conselhos Participativos</h3>
                                    <p className="text-sm text-gray-700 mb-4">
                                        Participe de conselhos federais, estaduais e municipais sobre temas de seu interesse.
                                    </p>
                                    <button className="text-gov-blue font-bold text-sm hover:underline">
                                        Encontrar conselhos →
                                    </button>
                                </div>

                                <div className="bg-gov-light p-6 rounded-lg border border-gray-200">
                                    <Megaphone className="text-gov-blue mb-3" size={32} />
                                    <h3 className="font-bold text-lg mb-2">Ouvidoria Nacional</h3>
                                    <p className="text-sm text-gray-700 mb-4">
                                        Registre elogios, sugestões, reclamações e denúncias sobre serviços públicos.
                                    </p>
                                    <button className="text-gov-blue font-bold text-sm hover:underline">
                                        Acessar Ouvidoria →
                                    </button>
                                </div>

                                <div className="bg-gov-light p-6 rounded-lg border border-gray-200">
                                    <MessageSquare className="text-gov-blue mb-3" size={32} />
                                    <h3 className="font-bold text-lg mb-2">Plataforma Brasil Participativo</h3>
                                    <p className="text-sm text-gray-700 mb-4">
                                        Acompanhe e participe de debates sobre políticas públicas em andamento.
                                    </p>
                                    <button className="text-gov-blue font-bold text-sm hover:underline">
                                        Ir para plataforma →
                                    </button>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
                                <h3 className="text-lg font-bold text-yellow-800 mb-2">Consulta Pública Ativa</h3>
                                <p className="text-gray-700 text-sm mb-4">
                                    <strong>Regulamentação da Reforma Tributária - Phase 2</strong><br />
                                    Participe da discussão sobre os ajustes finos da implementação do IVA Dual.
                                </p>
                                <button className="bg-gov-blue hover:bg-gov-dark text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors">
                                    PARTICIPAR AGORA
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
