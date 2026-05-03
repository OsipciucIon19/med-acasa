import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ShieldCheck, Clock, ChevronRight, MessageCircle } from 'lucide-react';
import logoMark from '../assets/logo-mark.png';

interface HeaderProps {
    scrollY: number;
}

const navLinks = [
    { label: 'Servicii', to: '/#services' },
    { label: 'Cum funcționează', to: '/#how-it-works' },
    { label: 'De ce noi', to: '/#why-us' },
    { label: 'Contact', to: '/#contact' },
];

function Header({ scrollY }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const isScrolled = scrollY > 20;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-xl shadow-soft border-b border-slate-100'
                        : 'bg-white/70 backdrop-blur-md'
                }`}
            >
                <div
                    className={`hidden md:block overflow-hidden transition-all duration-500 ${
                        isScrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-9 text-xs text-slate-600">
                            <div className="flex items-center gap-5">
                                <span className="flex items-center gap-1.5">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                    </span>
                                    <span className="font-medium">Disponibili 24h / 7 zile</span>
                                </span>
                                <span className="hidden lg:flex items-center gap-1.5">
                                    <ShieldCheck size={13} className="text-teal-600" />
                                    <span>Personal certificat</span>
                                </span>
                                <span className="hidden lg:flex items-center gap-1.5">
                                    <Clock size={13} className="text-teal-600" />
                                    <span>Răspuns în &lt; 30 min</span>
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://wa.me/37378392285"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors"
                                >
                                    <MessageCircle size={13} />
                                    <span>WhatsApp</span>
                                </a>
                                <a
                                    href="mailto:contact@medacasa.md"
                                    className="hover:text-teal-600 transition-colors"
                                >
                                    contact@medacasa.md
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className={`flex justify-between items-center gap-3 sm:gap-5 transition-all duration-500 ${
                            isScrolled ? 'h-16' : 'h-16 sm:h-20'
                        }`}
                    >
                        <Link to="/" className="group flex items-center gap-2.5 sm:gap-3 shrink-0">
                            <img
                                src={logoMark}
                                alt=""
                                aria-hidden="true"
                                className="w-11 h-11 sm:w-12 sm:h-12 object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="leading-tight">
                                <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight">
                                    <span className="text-slate-900">Med</span>
                                    <span className="gradient-text">Acasă</span>
                                </h1>
                                <p className="hidden sm:block text-[10px] lg:text-[11px] text-slate-500 font-medium tracking-wide">
                                    Servicii Medicale la Domiciliu
                                </p>
                            </div>
                        </Link>

                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="group relative px-4 py-2 text-sm font-semibold text-slate-700 hover:text-teal-700 transition-colors"
                                >
                                    <span className="relative z-10">{link.label}</span>
                                    <span className="absolute inset-x-3 bottom-1 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full"></span>
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                            <button
                                type="button"
                                aria-label="Locație: Chișinău"
                                className="group flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-teal-50 to-blue-50 hover:from-teal-100 hover:to-blue-100 text-teal-700 font-semibold pl-2.5 pr-3 sm:pl-3.5 sm:pr-4 py-2 sm:py-2.5 rounded-full border border-teal-200/70 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <span className="relative flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white">
                                    <MapPin size={13} className="text-teal-600" strokeWidth={2.4} />
                                </span>
                                <span className="text-sm sm:text-base font-bold">Chișinău</span>
                            </button>

                            <a
                                href="tel:+37378392285"
                                className="hidden md:inline-flex group items-center gap-2.5 pl-2 pr-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-glow-teal hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden relative"
                            >
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-1000"></span>
                                <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                                    <Phone size={14} strokeWidth={2.6} className="group-hover:rotate-12 transition-transform duration-300" />
                                </span>
                                <span className="relative text-sm font-bold tracking-tight whitespace-nowrap">
                                    078 392 285
                                </span>
                            </a>

                            <a
                                href="tel:+37378392285"
                                aria-label="Sună acum"
                                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-glow-teal hover:scale-105 active:scale-95 transition-all"
                            >
                                <Phone size={17} strokeWidth={2.6} />
                            </a>

                            <button
                                onClick={() => setIsOpen(true)}
                                aria-label="Deschide meniul"
                                aria-expanded={isOpen}
                                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-teal-300 hover:text-teal-700 active:scale-95 transition-all"
                            >
                                <Menu size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div
                className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
                    isOpen ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
                aria-hidden={!isOpen}
            >
                <div
                    onClick={() => setIsOpen(false)}
                    className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${
                        isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                ></div>

                <aside
                    className={`absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex items-center justify-between p-5 border-b border-slate-100">
                        <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
                            <img
                                src={logoMark}
                                alt=""
                                aria-hidden="true"
                                className="w-11 h-11 object-contain drop-shadow-sm"
                            />
                            <h2 className="font-extrabold text-lg leading-tight">
                                <span className="text-slate-900">Med</span>
                                <span className="gradient-text">Acasă</span>
                            </h2>
                        </Link>
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Închide meniul"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="px-5 py-4 border-b border-slate-100 bg-gradient-to-br from-teal-50/60 to-blue-50/60">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                                <MapPin size={18} className="text-teal-600" strokeWidth={2.4} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-wider text-teal-700">
                                    Locație
                                </p>
                                <p className="text-sm font-bold text-slate-900">Chișinău, Moldova</p>
                            </div>
                        </div>
                    </div>

                    <nav className="flex-1 overflow-y-auto px-3 py-4">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsOpen(false)}
                                className={`group flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-teal-700 transition-all ${
                                    isOpen ? 'animate-fade-up' : 'opacity-0'
                                }`}
                                style={{ animationDelay: `${150 + idx * 70}ms` }}
                            >
                                <span>{link.label}</span>
                                <ChevronRight
                                    size={18}
                                    className="text-slate-400 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all"
                                />
                            </Link>
                        ))}
                    </nav>

                    <div className="p-5 space-y-3 border-t border-slate-100">
                        <a
                            href="tel:+37378392285"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold shadow-glow-teal hover:shadow-xl active:scale-[0.98] transition-all"
                        >
                            <Phone size={18} strokeWidth={2.4} />
                            <span>Sună acum: 078 392 285</span>
                        </a>
                        <a
                            href="https://wa.me/37378392285"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 hover:bg-emerald-100 active:scale-[0.98] transition-all"
                        >
                            <MessageCircle size={18} strokeWidth={2.2} />
                            <span>Scrie pe WhatsApp</span>
                        </a>
                        <p className="text-center text-xs text-slate-500 pt-1">
                            Disponibili 24h / 7 zile din 7
                        </p>
                    </div>
                </aside>
            </div>
        </>
    );
}

export default Header;
