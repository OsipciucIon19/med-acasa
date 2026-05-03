import { CheckCircle2, Sparkles } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Benefit {
    title: string;
    description: string;
}

const benefits: Benefit[] = [
    {
        title: 'Fără deplasare',
        description: 'Te scutim de drumurile la spital. Venim noi cu tot ce trebuie.',
    },
    {
        title: 'Confort total',
        description: 'Patul tău, mediul tău, ritmul tău. Zero stres, zero așteptare.',
    },
    {
        title: 'Programare rapidă',
        description: 'Răspuns în minute, vizita la tine acasă în aceeași zi sau a doua.',
    },
];

function SolutionSection() {
    const { ref, isVisible } = useReveal({ threshold: 0.2 });

    return (
        <section
            ref={ref}
            className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-teal-50/40 to-white overflow-hidden"
        >
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-0"></div>

            <div className="max-w-6xl mx-auto relative">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div
                        className={`order-2 lg:order-1 ${
                            isVisible ? 'animate-slide-in-left' : 'opacity-0'
                        }`}
                    >
                        <span className="section-eyebrow mb-4">
                            <Sparkles size={12} />
                            Soluția noastră
                        </span>
                        <h2 className="section-title mt-4 mb-5">
                            Venim noi la tine{' '}
                            <span className="gradient-text">acasă</span>
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                            Toată asistența medicală de care ai nevoie ajunge direct la tine,
                            în confortul casei tale. Personal calificat, echipamente moderne,
                            timp prețios recuperat.
                        </p>

                        <div className="space-y-4">
                            {benefits.map((benefit, idx) => (
                                <div
                                    key={idx}
                                    className={`group flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-soft transition-all duration-300 ${
                                        isVisible ? 'animate-fade-up' : 'opacity-0'
                                    }`}
                                    style={{ animationDelay: `${300 + idx * 120}ms` }}
                                >
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 text-white flex items-center justify-center shadow-glow-teal group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle2 size={20} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 mb-0.5">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-snug">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        className={`order-1 lg:order-2 relative ${
                            isVisible ? 'animate-slide-in-right' : 'opacity-0'
                        }`}
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/img/solution.jpg"
                                srcSet="/img/solution-sm.jpg 640w, /img/solution.jpg 1200w"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                alt="Asistentă medicală îngrijind pacient acasă"
                                width={1200}
                                height={2111}
                                className="w-full h-72 sm:h-96 lg:h-[480px] object-cover transform hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
                        </div>

                        <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 bg-white px-5 py-4 rounded-2xl shadow-xl border border-slate-100 animate-float-soft">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white shadow-glow-teal">
                                <CheckCircle2 size={22} strokeWidth={2.5} />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                                    Status
                                </p>
                                <p className="font-bold text-slate-900">Disponibili acum</p>
                            </div>
                            <span className="absolute top-3 right-3 flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                        </div>

                        <div className="hidden sm:block absolute -top-6 -right-6 bg-white px-5 py-4 rounded-2xl shadow-xl border border-slate-100 animate-float-slow">
                            <p className="text-2xl font-extrabold gradient-text">22.800+</p>
                            <p className="text-xs text-slate-500 font-medium">pacienți îngrijiți</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SolutionSection;
