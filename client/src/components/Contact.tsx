import { useState } from 'react';
import { Phone, Mail, MessageSquare, Send, CheckCircle2, AlertCircle, MapPin, Clock } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { createAppointment } from '../api/appointments';
import type { AppointmentRequest } from '../../../shared/appointments.js';

interface Channel {
    icon: React.ReactNode;
    label: string;
    value: string;
    note: string;
    href: string;
    accent: string;
}

const channels: Channel[] = [
    {
        icon: <Phone size={22} strokeWidth={2.2} />,
        label: 'Apelează-ne',
        value: '078 392 285',
        note: 'Luni-Sâmbătă, 8:00-20:00',
        href: 'tel:+37378392285',
        accent: 'from-teal-500 to-emerald-500',
    },
    {
        icon: <MessageSquare size={22} strokeWidth={2.2} />,
        label: 'WhatsApp',
        value: 'Mesaj rapid',
        note: 'Răspuns în câteva minute',
        href: 'https://wa.me/37378392285',
        accent: 'from-green-500 to-emerald-500',
    },
    {
        icon: <Mail size={22} strokeWidth={2.2} />,
        label: 'Email',
        value: 'contact@medacasa.md',
        note: 'Răspundem în 24h',
        href: 'mailto:contact@medacasa.md',
        accent: 'from-blue-500 to-indigo-500',
    },
];

function Contact() {
    const [formData, setFormData] = useState<AppointmentRequest>({
        fullName: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
        source: 'website-contact-form',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [submitMessage, setSubmitMessage] = useState('');
    const { ref, isVisible } = useReveal({ threshold: 0.15 });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setSubmitMessage('');

        try {
            await createAppointment({
                ...formData,
                preferredTime: formData.preferredTime || null,
                message: formData.message || null,
                source: formData.source || 'website-contact-form',
            });
            setSubmitStatus('success');
            setSubmitMessage('Programarea a fost trimisă. Te contactăm în cel mai scurt timp.');
            setFormData({
                fullName: '',
                phone: '',
                preferredDate: '',
                preferredTime: '',
                message: '',
                source: 'website-contact-form',
            });
            setTimeout(() => setSubmitStatus('idle'), 3000);
        } catch (error) {
            setSubmitStatus('error');
            setSubmitMessage(error instanceof Error ? error.message : 'Programarea nu a putut fi trimisă.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            ref={ref}
            id="contact"
            className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -z-0"></div>

            <div className="max-w-6xl mx-auto relative">
                <div
                    className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 ${
                        isVisible ? 'animate-fade-up' : 'opacity-0'
                    }`}
                >
                    <span className="section-eyebrow mb-4">Contact</span>
                    <h2 className="section-title mt-4 mb-4">
                        Hai să <span className="gradient-text">vorbim</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        Alege canalul preferat sau lasă-ne un mesaj și te contactăm noi.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
                    <div className={`lg:col-span-2 space-y-4 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                        {channels.map((channel, idx) => (
                            <a
                                key={idx}
                                href={channel.href}
                                target={channel.href.startsWith('http') ? '_blank' : undefined}
                                rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-soft hover:border-teal-200 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <div
                                    className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${channel.accent} text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                                >
                                    {channel.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                                        {channel.label}
                                    </p>
                                    <p className="font-bold text-slate-900 truncate group-hover:text-teal-700 transition-colors">
                                        {channel.value}
                                    </p>
                                    <p className="text-xs text-slate-500">{channel.note}</p>
                                </div>
                            </a>
                        ))}

                        <div className="p-5 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-100">
                            <div className="flex items-start gap-3">
                                <div className="shrink-0 w-9 h-9 rounded-lg bg-white text-teal-600 flex items-center justify-center shadow-sm">
                                    <MapPin size={18} strokeWidth={2.2} />
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900 mb-0.5">Acoperire</p>
                                    <p className="text-sm text-slate-600">
                                        Chișinău și suburbii. Venim oriunde, oricând.
                                    </p>
                                    <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-teal-700">
                                        <Clock size={12} />
                                        <span>Disponibili 24h / 7 zile</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className={`lg:col-span-3 p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-soft space-y-5 ${
                            isVisible ? 'animate-slide-in-right' : 'opacity-0'
                        }`}
                    >
                        <div className="space-y-1.5">
                            <label htmlFor="fullName" className="block text-sm font-semibold text-slate-900">
                                Numele complet
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 focus:bg-white hover:border-slate-300 transition-all placeholder:text-slate-400"
                                placeholder="Ex: Ion Popescu"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="phone" className="block text-sm font-semibold text-slate-900">
                                Numărul de telefon
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 focus:bg-white hover:border-slate-300 transition-all placeholder:text-slate-400"
                                placeholder="+373 XXX XX XXX"
                            />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label htmlFor="preferredDate" className="block text-sm font-semibold text-slate-900">
                                    Data preferată
                                </label>
                                <input
                                    type="date"
                                    id="preferredDate"
                                    name="preferredDate"
                                    value={formData.preferredDate}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 focus:bg-white hover:border-slate-300 transition-all placeholder:text-slate-400"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="preferredTime" className="block text-sm font-semibold text-slate-900">
                                    Ora preferată
                                </label>
                                <input
                                    type="time"
                                    id="preferredTime"
                                    name="preferredTime"
                                    value={formData.preferredTime || ''}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 focus:bg-white hover:border-slate-300 transition-all placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
                                Mesajul tău
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message || ''}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 focus:bg-white hover:border-slate-300 transition-all resize-none placeholder:text-slate-400"
                                placeholder="Descrie pe scurt nevoile tale..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || submitStatus !== 'idle'}
                            className={`relative w-full py-3.5 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 overflow-hidden ${
                                submitStatus === 'success'
                                    ? 'bg-emerald-500 text-white'
                                    : submitStatus === 'error'
                                        ? 'bg-rose-500 text-white'
                                        : isSubmitting
                                            ? 'bg-slate-300 text-slate-600 cursor-wait'
                                            : 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-glow-teal hover:shadow-xl hover:-translate-y-0.5'
                            }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                                    Se trimite...
                                </>
                            ) : submitStatus === 'success' ? (
                                <>
                                    <CheckCircle2 size={18} />
                                    Mesaj trimis cu succes!
                                </>
                            ) : submitStatus === 'error' ? (
                                <>
                                    <AlertCircle size={18} />
                                    Eroare — încearcă din nou
                                </>
                            ) : (
                                <>
                                    <Send size={18} className="group-hover:translate-x-0.5 transition-transform" />
                                    Trimite mesajul
                                </>
                            )}
                        </button>

                        {submitMessage ? (
                            <p
                                className={`text-xs text-center ${
                                    submitStatus === 'error' ? 'text-rose-600' : 'text-emerald-700'
                                }`}
                            >
                                {submitMessage}
                            </p>
                        ) : (
                            <p className="text-xs text-slate-500 text-center">
                                Te contactăm în maxim 30 de minute în timpul programului.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
