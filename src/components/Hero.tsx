
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <section className="bg-white border-b border-gray-200">
            <div className="gov-container py-12 lg:py-20 flex flex-col items-center gap-8">
                <div className="w-full max-w-4xl space-y-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-gov-yellow/20 text-yellow-800 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide border border-gov-yellow/50 mx-auto">
                        <AlertTriangle size={14} /> ⏰ TURMA ENCERRA EM 48H - Últimas 15 vagas
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-gov-blue leading-tight">
                        Reforma Tributária: <br />
                        <span className="text-gov-text">O Impacto é Inevitável.</span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        A maior mudança fiscal dos últimos 30 anos já começou. O sistema tributário brasileiro foi reiniciado. Sua empresa e seu patrimônio estão preparados para o <strong>IVA Dual</strong>, o <strong>Imposto Seletivo</strong> e as novas regras do <strong>Cashback</strong>?
                    </p>

                    <div className="w-full rounded-xl overflow-hidden shadow-2xl border-4 border-gov-blue/10 bg-black my-8">
                        <video
                            width="100%"
                            height="500"
                            controls
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-cover"
                            poster="/placeholder-video.jpg" // Optional: add if you want a thumbnail before load
                        >
                            <source src="/video-reforma.mp4" type="video/mp4" />
                            Seu navegador não suporta este vídeo.
                        </video>
                    </div>

                    <p className="text-center text-sm text-gray-500 mt-2 font-medium">
                        Assista ao vídeo explicativo (3min)
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="https://ambienteseguro.org.ua/c/370fa74274" className="flex items-center justify-center gap-2 bg-gov-green hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all">
                            SIM, QUERO ME PREPARAR AGORA
                            <ArrowRight size={20} />
                        </a>

                        <Link to="/legislacao" className="flex items-center justify-center gap-2 bg-white border-2 border-gov-blue text-gov-blue hover:bg-blue-50 font-bold py-4 px-8 rounded-full text-lg transition-all">
                            Ler a Legislação Completa
                        </Link>
                    </div>

                    <p className="text-xs text-gray-500 mt-4">
                        *Curso atualizado conforme a Emenda Constitucional 132/2023.
                    </p>
                </div>
            </div>
        </section>
    );
}
