import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowLeft, CheckCircle, AlertCircle, Lock, CreditCard } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { validateCheckoutForm, formatCPF, type CheckoutFormData } from '../lib/validation';
import { sanitizeInput } from '../lib/sanitize';
import { generatePixQRCode, type PixResponse } from '../lib/payment';
import { PixPayment } from '../components/PixPayment';

export function CheckoutPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<CheckoutFormData>({
        nome: '',
        email: '',
        cpf: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const [pixData, setPixData] = useState<PixResponse | null>(null);

    const handleInputChange = (field: keyof CheckoutFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = sanitizeInput(e.target.value);
        if (field === 'cpf') value = formatCPF(value);
        else if (field === 'email') value = value.toLowerCase();
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors(prev => {
            const n = { ...prev };
            delete n[field];
            return n;
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const v = validateCheckoutForm(formData);
        if (!v.valid) { setErrors(v.errors); return; }

        setLoading(true);
        setErrors({});

        try {
            console.log('Iniciando geração de PIX para:', formData.nome);
            const res = await generatePixQRCode({
                name: formData.nome,
                email: formData.email,
                cpf: formData.cpf, // Enviando CPF também
                total: 179.00
            });

            if (res.transaction_id && res.qrcode) {
                setPixData(res);
            } else {
                console.error('Resposta inválida do n8n:', res);
                setErrors({ submit: 'Erro ao gerar PIX. O servidor n8n não retornou os dados necessários.' });
            }
        } catch (error) {
            console.error('Erro no checkout logic:', error);
            setErrors({ submit: 'Erro na conexão com n8n. Verifique se o webhook está ativo no n8n e se o CORS está configurado.' });
        } finally {
            setLoading(false);
        }
    };

    if (pixData) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <Header />
                <main className="flex-1 py-12">
                    <PixPayment
                        transaction_id={pixData.transaction_id}
                        email={formData.email}
                        qrcode={pixData.qrcode}
                        onSuccess={() => navigate('/sucesso')}
                        onExpired={() => setPixData(null)}
                    />
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gov-text flex flex-col">
            <Header />
            <main className="flex-1 py-12">
                <div className="gov-container max-w-4xl">
                    <Link to="/" className="flex items-center gap-2 text-gov-blue font-bold mb-8 hover:underline">
                        <ArrowLeft size={20} /> Voltar
                    </Link>

                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                        <h1 className="text-3xl font-black text-gov-blue mb-6">Finalize Sua Inscrição</h1>
                        {errors.submit && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                                <AlertCircle className="text-red-600 mt-1" size={20} />
                                <p className="text-sm text-red-800">{errors.submit}</p>
                            </div>
                        )}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gov-light p-6 rounded-lg">
                                <h3 className="font-bold text-lg mb-2">Reforma Tributária 2026</h3>
                                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-gov-green" /> Acesso Vitalício</li>
                                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-gov-green" /> Certificado 40h</li>
                                </ul>
                                <div className="border-t pt-4 flex justify-between items-center text-2xl font-black">
                                    <span>Total:</span>
                                    <span className="text-gov-blue">R$ 179,00</span>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div><label className="block text-sm font-semibold mb-1">Nome Completo</label>
                                    <input type="text" value={formData.nome} onChange={handleInputChange('nome')} className="w-full border rounded-lg p-3" /></div>
                                <div><label className="block text-sm font-semibold mb-1">E-mail</label>
                                    <input type="email" value={formData.email} onChange={handleInputChange('email')} className="w-full border rounded-lg p-3" /></div>
                                <div><label className="block text-sm font-semibold mb-1">CPF</label>
                                    <input type="text" value={formData.cpf} onChange={handleInputChange('cpf')} className="w-full border rounded-lg p-3" /></div>
                                <button type="submit" disabled={loading} className="w-full bg-gov-green hover:bg-green-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2">
                                    <Lock size={20} /> {loading ? 'GERANDO...' : 'PAGAR COM PIX'}
                                </button>
                                <div className="text-center text-xs text-gray-500 mt-2 flex items-center justify-center gap-1"><CreditCard size={14} /> Pagamento 100% seguro</div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
