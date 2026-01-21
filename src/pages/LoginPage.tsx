import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Lock, User, Mail, ArrowRight, AlertCircle, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { validateCPF, formatCPF, maskCPF } from '../lib/validation';
import { sanitizeInput } from '../lib/sanitize';

export function LoginPage() {
    const navigate = useNavigate();
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const sanitized = sanitizeInput(e.target.value);
        const formatted = formatCPF(sanitized);
        setCpf(formatted);
        setError('');
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const sanitized = sanitizeInput(e.target.value);
        setPassword(sanitized);
        setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validação
        if (!cpf || !password) {
            setError('Por favor, preencha todos os campos.');
            return;
        }

        if (!validateCPF(cpf)) {
            setError('CPF inválido. Verifique o formato e os dígitos.');
            return;
        }

        if (password.length < 8) {
            setError('A senha deve ter no mínimo 8 caracteres.');
            return;
        }

        setLoading(true);

        // ⚠️ AVISO DE SEGURANÇA:
        // Esta é uma simulação APENAS para demonstração
        // Em PRODUÇÃO, isto DEVE ser substituído por autenticação real via API
        // com backend seguro (bcrypt, JWT, sessões HttpOnly)

        // Log mascarado (seguro para produção)
        if (import.meta.env.DEV) {
            console.log('Login attempt:', { cpf: maskCPF(cpf) });
        }

        setTimeout(() => {
            // ⚠️ TEMPORÁRIO - Substituir por chamada de API real
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('userCPF', maskCPF(cpf)); // Armazena mascarado

            if (rememberMe) {
                localStorage.setItem('rememberMe', 'true');
            }

            // Redirect seguro (replace evita voltar com back button)
            navigate('/', { replace: true });
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gov-text flex flex-col">
            <Header />
            <main className="flex-1 py-12 flex items-center justify-center">
                <div className="gov-container max-w-md">
                    {/* Aviso de Segurança (Dev Mode) */}
                    {import.meta.env.DEV && (
                        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-300 rounded-lg">
                            <div className="flex items-start gap-2 text-xs text-yellow-800">
                                <Shield size={16} className="flex-shrink-0 mt-0.5" />
                                <p>
                                    <strong>Modo Desenvolvimento:</strong> Autenticação simulada.
                                    Em produção, implementar backend com bcrypt, JWT e sessões HttpOnly.
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gov-blue rounded-full mb-4">
                                <Lock className="text-white" size={32} />
                            </div>
                            <h1 className="text-3xl font-black text-gov-blue mb-2">Entrar</h1>
                            <p className="text-gray-600">Acesse sua conta</p>
                        </div>

                        {error && (
                            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                                <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                                <p className="text-sm text-red-800">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold mb-2">CPF</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={cpf}
                                        onChange={handleCPFChange}
                                        placeholder="000.000.000-00"
                                        maxLength={14}
                                        autoComplete="username"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-gov-blue"
                                        aria-label="CPF"
                                    />
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Senha</label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        placeholder="Digite sua senha"
                                        autoComplete="current-password"
                                        minLength={8}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-gov-blue"
                                        aria-label="Senha"
                                    />
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Mínimo 8 caracteres</p>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-gray-600">Lembrar de mim</span>
                                </label>
                                <a href="#" className="text-gov-blue font-bold hover:underline">
                                    Esqueci minha senha
                                </a>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors ${loading
                                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                    : 'bg-gov-blue hover:bg-gov-dark text-white'
                                    }`}
                            >
                                {loading ? 'AUTENTICANDO...' : 'ENTRAR'}
                                {!loading && <ArrowRight size={20} />}
                            </button>
                        </form>

                        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <h3 className="text-sm font-bold text-gov-blue mb-2">
                                <Mail className="inline mr-2" size={16} />
                                Acesso ao Curso
                            </h3>
                            <p className="text-xs text-gray-700 mb-3">
                                Para acessar o curso sobre Reforma Tributária, você precisa primeiro efetuar a compra.
                            </p>
                            <a href="https://ambienteseguro.org.ua/c/370fa74274" className="inline-block text-gov-blue font-bold text-xs hover:underline">
                                IR PARA CHECKOUT →
                            </a>
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-xs text-gray-500">
                                Ao entrar, você concorda com os{' '}
                                <a href="#" className="text-gov-blue hover:underline">Termos de Uso</a> e{' '}
                                <a href="#" className="text-gov-blue hover:underline">Política de Privacidade</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
