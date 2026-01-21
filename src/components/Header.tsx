import React from 'react';
import { Menu, Search, User } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="w-full font-sans">
            {/* Top Bar */}
            <div className="w-full bg-[#0c326f] text-white py-1.5">
                <div className="gov-container flex justify-between items-center text-xs sm:text-sm font-medium">
                    <div className="flex gap-4">
                        <Link to="/brasil" className="uppercase cursor-pointer hover:underline">Brasil</Link>
                        <Link to="/acesso-informacao" className="hidden sm:inline cursor-pointer hover:underline">Acesso à informação</Link>
                        <Link to="/participe" className="hidden sm:inline cursor-pointer hover:underline">Participe</Link>
                        <Link to="/legislacao" className="hidden sm:inline cursor-pointer hover:underline">Legislação</Link>
                        <Link to="/orgaos" className="hidden sm:inline cursor-pointer hover:underline">Órgãos do Governo</Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-white border-b border-gray-200 shadow-sm">
                <div className="gov-container py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4 self-start md:self-auto">
                        <div className="bg-gov-blue text-white p-2 rounded md:hidden">
                            <Menu size={24} />
                        </div>

                        <Link to="/" className="flex flex-col hover:opacity-80 transition-opacity">
                            <h1 className="text-3xl font-extrabold text-gov-blue tracking-tight leading-none">
                                gov.br
                            </h1>
                            <span className="text-gov-text text-sm font-semibold uppercase tracking-wider">
                                Reforma Tributária
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative w-full md:w-96">
                            <input
                                type="text"
                                placeholder="O que você procura?"
                                className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gov-blue focus:border-transparent text-sm"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gov-blue">
                                <Search size={20} />
                            </button>
                        </div>

                        <Link to="/login" className="hidden md:flex items-center gap-2 bg-[#0047b1] text-white px-6 py-2.5 rounded font-semibold hover:bg-[#003d99] transition-colors text-sm">
                            Entrar <User size={16} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Breadcrumb / Nav Strip */}
            <div className="bg-gov-light py-2 border-b border-gray-200">
                <div className="gov-container flex gap-2 text-sm text-gov-blue font-medium overflow-x-auto whitespace-nowrap">
                    <Link to="/" className="hover:underline">Home</Link>
                    <span>/</span>
                    <Link to="/assuntos" className="hover:underline">Assuntos</Link>
                    <span>/</span>
                    <span className="text-gray-600">Reforma Tributária 2026</span>
                </div>
            </div>
        </header>
    );
}
