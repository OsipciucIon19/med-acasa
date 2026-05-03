import {Calendar, Clock, Heart, Phone} from 'lucide-react';
import {useEffect, useState} from 'react';

function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const t = window.setTimeout(() => setIsVisible(true), 60);
        return () => window.clearTimeout(t);
    }, []);

    return (
        <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/30 to-white"></div>
                <div className="absolute inset-0 bg-grid opacity-30"></div>
                <div className="absolute top-10 right-0 w-[28rem] h-[28rem] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl -mr-32 animate-float-slow"></div>
                <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-teal-200/40 rounded-full mix-blend-multiply filter blur-3xl -ml-32 animate-float-soft"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-teal-100 shadow-sm mb-5 sm:mb-7 ${
                                isVisible ? 'animate-fade-up' : 'opacity-0'
                            }`}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                            </span>
                            <span className="text-[11px] sm:text-xs font-bold tracking-wider text-teal-700 uppercase">
                                Îngrijire Medicală la Domiciliu
                            </span>
                        </div>

                        <h1
                            className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-5 sm:mb-7 ${
                                isVisible ? 'animate-fade-up' : 'opacity-0'
                            }`}
                            style={{animationDelay: '120ms'}}
                        >
                            Tratamentul prescris de medicul tău îl poți face{' '}
                            <span className="relative inline-block">
                                <span className="gradient-text-animated">direct acasă.</span>
                                <svg
                                    aria-hidden
                                    viewBox="0 0 220 12"
                                    className="absolute -bottom-1 left-0 w-full h-2 sm:h-3 text-teal-400/80"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M2,9 Q60,2 110,6 T218,4"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        fill="none"
                                    />
                                </svg>
                            </span>
                        </h1>

                        <div
                            className={`flex items-center gap-3 mb-7 sm:mb-9 ${
                                isVisible ? 'animate-fade-up' : 'opacity-0'
                            }`}
                            style={{animationDelay: '240ms'}}
                        >
                            <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center mt-0.5 shadow-sm">
                                <Heart size={18} className="text-teal-600" fill="currentColor"/>
                            </div>
                            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-snug max-w-md">
                                Venim noi la tine și îl administrăm în siguranță.
                            </p>
                        </div>

                        <div
                            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 ${
                                isVisible ? 'animate-fade-up' : 'opacity-0'
                            }`}
                            style={{animationDelay: '360ms'}}
                        >
                            <a
                                href="tel:+37378392285"
                                className="group relative flex items-center justify-center sm:justify-start gap-3 px-6 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-xl shadow-glow-teal hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                            >
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000"></span>
                                <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white/15">
                                    <Phone size={18} strokeWidth={2.4} className="group-hover:rotate-12 transition-transform duration-300"/>
                                </span>
                                <span className="relative text-base sm:text-lg">Sună acum: 078 392 285</span>
                            </a>

                            <a
                                href="#contact"
                                className="group flex items-center justify-center sm:justify-start gap-3 px-6 py-4 bg-white border-2 border-teal-200 hover:border-teal-400 hover:bg-teal-50 text-teal-700 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <Calendar
                                    size={20}
                                    strokeWidth={2.2}
                                    className="group-hover:scale-110 transition-transform duration-300"
                                />
                                <span className="text-base sm:text-lg">Programează o vizită</span>
                            </a>
                        </div>
                    </div>

                    <div
                        className={`order-1 lg:order-2 ${
                            isVisible ? 'animate-scale-in' : 'opacity-0'
                        }`}
                        style={{animationDelay: '200ms'}}
                    >
                        <div className="relative mx-auto max-w-lg lg:max-w-none">
                            <div className="absolute -top-8 -right-8 w-40 h-40 bg-teal-300/30 rounded-full blur-3xl -z-10 animate-float-soft"></div>
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-300/30 rounded-full blur-3xl -z-10 animate-float-slow"></div>

                            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-teal-100 to-blue-100">
                                <img
                                    src="/img/hero.jpg"
                                    srcSet="/img/hero-sm.jpg 640w, /img/hero.jpg 1200w"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    alt="Asistentă medicală îngrijind o pacientă acasă"
                                    width={1200}
                                    height={1803}
                                    className="w-full h-72 sm:h-96 lg:h-[540px] object-cover hover:scale-[1.03] transition-transform duration-700"
                                    loading="eager"
                                    decoding="async"
                                    fetchPriority="high"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none"></div>
                            </div>

                            <div
                                className={`absolute -bottom-5 left-3 sm:-left-6 flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 animate-float-soft ${
                                    isVisible ? 'animate-fade-up' : 'opacity-0'
                                }`}
                                style={{animationDelay: '700ms'}}
                            >
                                <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-glow-teal">
                                    <Clock size={20} strokeWidth={2.4}/>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                                        Disponibili acum
                                    </p>
                                    <p className="text-sm font-bold text-slate-900">
                                        Vizită în 30 min
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
