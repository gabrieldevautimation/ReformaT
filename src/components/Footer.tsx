

export function Footer() {
    return (
        <footer className="bg-gov-dark text-white pt-10 pb-6 w-full mt-auto">
            <div className="gov-container grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-sm">
                <div>
                    <h3 className="font-bold mb-4 text-lg">Assuntos</h3>
                    <ul className="space-y-2 opacity-90">
                        <li><a href="#" className="hover:underline">Reforma sobre Renda</a></li>
                        <li><a href="#" className="hover:underline">Reforma sobre Consumo</a></li>
                        <li><a href="#" className="hover:underline">IVA Dual (CBS e IBS)</a></li>
                        <li><a href="#" className="hover:underline">Cashback do Povo</a></li>
                        <li><a href="#" className="hover:underline">Cesta Básica Nacional</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4 text-lg">Serviços</h3>
                    <ul className="space-y-2 opacity-90">
                        <li><a href="#" className="hover:underline">Calculadora de Impostos</a></li>
                        <li><a href="#" className="hover:underline">Cadastrar no Cashback</a></li>
                        <li><a href="#" className="hover:underline">Simulador de Alíquota</a></li>
                        <li><a href="#" className="hover:underline">Dúvidas Frequentes</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4 text-lg">Canais</h3>
                    <ul className="space-y-2 opacity-90">
                        <li><a href="#" className="hover:underline">Ouvidoria</a></li>
                        <li><a href="#" className="hover:underline">Imprensa</a></li>
                        <li><a href="#" className="hover:underline">Dados Abertos</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4 text-lg">Redes Sociais</h3>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">F</div>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">I</div>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">T</div>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">Y</div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/20 pt-6">
                <div className="gov-container flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-70">
                    <p>Todo o conteúdo deste site está publicado sob a licença Creative Commons Atribuição-SemDerivações 3.0 Não Adaptada.</p>
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-lg uppercase">Em parceria com a unec</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
