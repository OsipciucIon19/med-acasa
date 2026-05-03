import { Phone, Calendar, Sparkles } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

function FinalCTA() {
    const { ref, isVisible } = useReveal({ threshold: 0.3 });

    return (
        <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div
                    className={`relative overflow-hidden rounded-3xl p-8 sm:p-14 text-white animate-gradient ${
                        isVisible ? 'animate-scale-in' : 'opacity-0'
                    }`}
                    style={{
                        backgroundImage:
                            'linear-gradient(120deg, #0e7490 0%, #0d9488 35%, #2563eb 100%)',
                    }}
                >
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float-soft"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl animate-float-slow"></div>
                    </div>

                    <div className="absolute inset-0 opacity-10 bg-grid"></div>

                    <div className="relative text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-6">
                            <Sparkles size={14} className="text-amber-300" />
                            <span className="text-xs font-bold tracking-wider uppercase">
                                Disponibili 24h / 7 zile
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 sm:mb-6 leading-tight tracking-tight">
                            Ai nevoie de îngrijire medicală{' '}
                            <span className="block sm:inline bg-gradient-to-r from-amber-200 to-cyan-200 bg-clip-text text-transparent">
                                fără stres?
                            </span>
                        </h2>

                        <p className="text-base sm:text-lg mb-8 sm:mb-10 text-white/90 max-w-xl mx-auto leading-relaxed">
                            Contactează-ne acum și descoperă cum te putem ajuta. Suntem gata să venim la tine!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <a
                                href="tel:+37378392285"
                                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white text-teal-700 font-semibold rounded-xl shadow-2xl hover:shadow-white/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                            >
                                <Phone size={20} strokeWidth={2.4} className="group-hover:rotate-12 transition-transform" />
                                <span>Sună acum: 078 392 285</span>
                            </a>

                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/20 hover:border-white/70 hover:-translate-y-1 transition-all duration-300"
                            >
                                <Calendar size={20} strokeWidth={2.2} />
                                <span>Programează o vizită</span>
                            </a>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-white/85">
                            <span className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                                Răspuns în timp real
                            </span>
                            <span className="hidden sm:inline text-white/40">•</span>
                            <span>Personal calificat</span>
                            <span className="hidden sm:inline text-white/40">•</span>
                            <span>Fără așteptare</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FinalCTA;
