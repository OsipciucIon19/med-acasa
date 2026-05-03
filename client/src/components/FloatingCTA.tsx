import { useState, useEffect } from 'react';
import { Phone, MessageCircle, X, Plus } from 'lucide-react';

function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > 500);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
            }`}
        >
            <a
                href="https://wa.me/37378392285"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 pl-4 pr-5 py-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-500 ${
                    isExpanded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
                }`}
                style={{ transitionDelay: isExpanded ? '60ms' : '0ms' }}
            >
                <div className="relative">
                    <span className="absolute inset-0 rounded-full bg-white/40 animate-pulse-ring"></span>
                    <MessageCircle size={20} className="relative" />
                </div>
                <span className="text-sm font-semibold whitespace-nowrap">WhatsApp</span>
            </a>

            <a
                href="tel:+37378392285"
                className={`group flex items-center gap-3 pl-4 pr-5 py-3 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-500 ${
                    isExpanded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
                }`}
                style={{ transitionDelay: isExpanded ? '0ms' : '0ms' }}
            >
                <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                <span className="text-sm font-semibold whitespace-nowrap">078 392 285</span>
            </a>

            <button
                onClick={() => setIsExpanded((v) => !v)}
                aria-label={isExpanded ? 'Închide acțiuni rapide' : 'Acțiuni rapide'}
                className="relative w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 text-white shadow-2xl hover:shadow-glow-teal hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
            >
                <span className="absolute inset-0 rounded-full bg-teal-400/40 animate-pulse-ring"></span>
                <span
                    className={`absolute transition-all duration-300 ${
                        isExpanded ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                    }`}
                >
                    <X size={22} strokeWidth={2.4} />
                </span>
                <span
                    className={`absolute transition-all duration-300 ${
                        isExpanded ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                    }`}
                >
                    <Plus size={22} strokeWidth={2.4} />
                </span>
            </button>
        </div>
    );
}

export default FloatingCTA;
