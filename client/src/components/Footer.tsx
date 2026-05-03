import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.png';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>
            <div className="absolute -top-40 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
                    <div className="lg:col-span-4">
                        <Link to="/" className="inline-flex items-center gap-3 mb-5">
                            <img
                                src={logo}
                                alt="MedAcasă - Servicii Medicale la Domiciliu"
                                className="h-28 w-auto max-w-[220px] object-contain"
                            />
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
                            Asistență medicală profesională la domiciliu. Confort, siguranță și
                            îngrijire de calitate, direct la tine acasă.
                        </p>

                        <div className="flex gap-3">
                            {[
                                { icon: <Facebook size={18} />, href: 'https://facebook.com/profile.php?id=100066548597485', label: 'Facebook' },
                                { icon: <Instagram size={18} />, href: 'https://www.instagram.com/med.acasa/', label: 'Instagram' },
                                { icon: <MessageCircle size={18} />, href: 'https://wa.me/37378392285', label: 'WhatsApp' },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-teal-500 hover:border-teal-500 hover:-translate-y-0.5 hover:shadow-glow-teal flex items-center justify-center transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
                            Servicii
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            {['Perfuzii', 'Injecții', 'Pansamente', 'Îngrijire post-op', 'Monitorizare'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to="/#services"
                                        className="group inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                                    >
                                        {item}
                                        <ArrowUpRight
                                            size={12}
                                            className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
                            Companie
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            {[
                                { label: 'Cum funcționează', to: '/#how-it-works' },
                                { label: 'Contact', to: '/#contact' },
                                { label: 'Confidențialitate', to: '/confidentialitate' },
                                { label: 'Termeni', to: '/termeni' },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="group inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                        <ArrowUpRight
                                            size={12}
                                            className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
                            Contact
                        </h4>
                        <ul className="space-y-3.5 text-sm">
                            <li>
                                <a
                                    href="tel:+37378392285"
                                    className="group flex items-start gap-3 text-slate-400 hover:text-white transition-colors"
                                >
                                    <span className="shrink-0 w-8 h-8 rounded-lg bg-white/5 group-hover:bg-teal-500 group-hover:text-white flex items-center justify-center transition-all">
                                        <Phone size={14} />
                                    </span>
                                    <span>
                                        <span className="block font-semibold text-white">078 392 285</span>
                                        <span className="text-xs text-slate-500">Luni-Sâmbătă, 8:00-20:00</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:contact@medacasa.md"
                                    className="group flex items-start gap-3 text-slate-400 hover:text-white transition-colors"
                                >
                                    <span className="shrink-0 w-8 h-8 rounded-lg bg-white/5 group-hover:bg-blue-500 group-hover:text-white flex items-center justify-center transition-all">
                                        <Mail size={14} />
                                    </span>
                                    <span className="break-all">contact@medacasa.md</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                    <MapPin size={14} />
                                </span>
                                <span>Chișinău, Republica Moldova</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                        <p>
                            © {currentYear} MedAcasă. Toate drepturile rezervate.
                        </p>
                        <p className="flex items-center gap-1.5">
                            Realizat cu grijă pentru sănătatea ta
                        </p>
                        <p className="text-center md:text-right">
                            Servicii oferite pe bază de prescripție medicală.
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
