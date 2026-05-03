import { Clock, AlertCircle, Heart, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Problem {
    icon: React.ReactNode;
    title: string;
    description: string;
    accent: string;
}

const problems: Problem[] = [
    {
        icon: <Clock className="w-7 h-7" strokeWidth={2} />,
        title: 'Drumuri la spital',
        description: 'Timp pierdut, transport dificil, mai ales pentru persoanele cu mobilitate redusă.',
        accent: 'from-rose-100 to-rose-50',
    },
    {
        icon: <AlertCircle className="w-7 h-7" strokeWidth={2} />,
        title: 'Așteptare și stres',
        description: 'Cozi lungi, aglomerație și anxietate într-un mediu nefamiliar.',
        accent: 'from-amber-100 to-amber-50',
    },
    {
        icon: <Heart className="w-7 h-7" strokeWidth={2} />,
        title: 'Disconfort pentru pacient',
        description: 'Epuizare fizică, expunere la alte boli, pierdere de demnitate.',
        accent: 'from-pink-100 to-pink-50',
    },
];

function ProblemSection() {
    const { ref, isVisible } = useReveal({ threshold: 0.2 });

    return (
        <section
            ref={ref}
            className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            <div className="absolute inset-0 -z-10 bg-grid opacity-40"></div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-slate-50"></div>

            <div className="max-w-6xl mx-auto">
                <div
                    className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 ${
                        isVisible ? 'animate-fade-up' : 'opacity-0'
                    }`}
                >
                    <span className="section-eyebrow mb-4">De ce ai nevoie de noi</span>
                    <h2 className="section-title mt-4 mb-4">
                        Problemele cu care te <span className="gradient-text">confrunți</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        Tratamentele necesare nu ar trebui să adauge stres. Iată ce vrei să eviți.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-5 sm:gap-7">
                    {problems.map((problem, idx) => (
                        <div
                            key={idx}
                            className={`group relative card-soft p-6 sm:p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 cursor-default overflow-hidden ${
                                isVisible ? 'animate-fade-up' : 'opacity-0'
                            }`}
                            style={{ animationDelay: `${idx * 120}ms` }}
                        >
                            <div
                                className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${problem.accent} opacity-60 blur-2xl group-hover:scale-125 group-hover:opacity-90 transition-all duration-700`}
                            ></div>

                            <div className="relative">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 text-white flex items-center justify-center mb-5 shadow-lg shadow-rose-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    {problem.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5">
                                    {problem.title}
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                                    {problem.description}
                                </p>
                                <div className="flex items-center gap-1.5 text-sm font-semibold text-rose-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                                    <span>Avem soluția</span>
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProblemSection;
