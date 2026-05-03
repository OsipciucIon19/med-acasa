import { Award, Zap, Shield, Smile, Users, Heart } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Reason {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const reasons: Reason[] = [
    {
        icon: <Award className="w-6 h-6" strokeWidth={2} />,
        title: 'Personal calificat',
        description: 'Medici și asistente certificați, cu experiență dovedită în îngrijire la domiciliu.',
    },
    {
        icon: <Zap className="w-6 h-6" strokeWidth={2} />,
        title: 'Rapiditate',
        description: 'Programări flexibile, vizite la tine acasă în aceeași zi sau a doua.',
    },
    {
        icon: <Shield className="w-6 h-6" strokeWidth={2} />,
        title: 'Siguranță',
        description: 'Protocol strict de igienă și respectarea tuturor normelor medicale.',
    },
    {
        icon: <Smile className="w-6 h-6" strokeWidth={2} />,
        title: 'Confort',
        description: 'Rămâi în confortul casei tale: fără stres, fără aglomerație, fără așteptare.',
    },
    {
        icon: <Users className="w-6 h-6" strokeWidth={2} />,
        title: 'Focus pe pacient',
        description: 'Atenție personalizată și suport complet de la echipa noastră.',
    },
    {
        icon: <Heart className="w-6 h-6" strokeWidth={2} />,
        title: 'Îngrijire cu dragoste',
        description: 'Tratament uman și empatic pentru fiecare pacient, ca pentru propria familie.',
    },
];

function WhyChooseUs() {
    const { ref, isVisible } = useReveal({ threshold: 0.1 });

    return (
        <section
            ref={ref}
            id="why-us"
            className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-slate-50/60"></div>

            <div className="max-w-6xl mx-auto">
                <div
                    className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 ${
                        isVisible ? 'animate-fade-up' : 'opacity-0'
                    }`}
                >
                    <span className="section-eyebrow mb-4">Beneficii</span>
                    <h2 className="section-title mt-4 mb-4">
                        De ce să alegi <span className="gradient-text">MedAcasă</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        Combinăm expertiza medicală cu empatie reală, pentru îngrijire de care ai nevoie.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {reasons.map((reason, idx) => (
                        <div
                            key={idx}
                            className={`group relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-100 shadow-soft hover:border-teal-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 cursor-default overflow-hidden ${
                                isVisible ? 'animate-fade-up' : 'opacity-0'
                            }`}
                            style={{ animationDelay: `${idx * 80}ms` }}
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>

                            <div className="flex gap-4 items-start">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 text-teal-600 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 border border-teal-100">
                                    {reason.icon}
                                </div>
                                <div>
                                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                                        {reason.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
