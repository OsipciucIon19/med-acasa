import { Phone, MapPin, Stethoscope, CheckCircle2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Step {
    icon: React.ReactNode;
    number: string;
    title: string;
    description: string;
}

const steps: Step[] = [
    {
        icon: <Phone className="w-5 h-5" strokeWidth={2.2} />,
        number: '01',
        title: 'Ne contactezi',
        description: 'Apel sau mesaj WhatsApp cu detaliile tale și prescripția medicală.',
    },
    {
        icon: <Stethoscope className="w-5 h-5" strokeWidth={2.2} />,
        number: '02',
        title: 'Stabilim tratamentul',
        description: 'Consultanții confirmă procedura și programează vizita la momentul potrivit.',
    },
    {
        icon: <MapPin className="w-5 h-5" strokeWidth={2.2} />,
        number: '03',
        title: 'Venim la tine',
        description: 'Personalul medical ajunge la domiciliu, la ora convenită, cu echipamentele necesare.',
    },
    {
        icon: <CheckCircle2 className="w-5 h-5" strokeWidth={2.2} />,
        number: '04',
        title: 'Aplicăm procedura',
        description: 'Executăm intervenția cu profesionalism, conform prescripției medicale.',
    },
];

function HowItWorks() {
    const { ref, isVisible } = useReveal({ threshold: 0.15 });

    return (
        <section
            ref={ref}
            id="how-it-works"
            className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-teal-50/30 to-white overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl -z-0"></div>

            <div className="max-w-6xl mx-auto relative">
                <div
                    className={`text-center max-w-2xl mx-auto mb-12 sm:mb-20 ${
                        isVisible ? 'animate-fade-up' : 'opacity-0'
                    }`}
                >
                    <span className="section-eyebrow mb-4">Proces simplu</span>
                    <h2 className="section-title mt-4 mb-4">
                        Cum <span className="gradient-text">funcționează</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        Patru pași și ai tratamentul acasă. Fără hârtii, fără cozi.
                    </p>
                </div>

                <div className="relative">
                    <div
                        className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200 -z-0"
                        aria-hidden
                    ></div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
                        {steps.map((step, idx) => (
                            <div
                                key={idx}
                                className={`relative group ${
                                    isVisible ? 'animate-fade-up' : 'opacity-0'
                                }`}
                                style={{ animationDelay: `${idx * 150}ms` }}
                            >
                                <div className="flex justify-center mb-5">
                                    <div className="relative">
                                        <span className="absolute inset-0 rounded-full bg-teal-400/30 animate-pulse-ring"></span>
                                        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 text-white flex items-center justify-center shadow-glow-teal group-hover:scale-110 transition-transform duration-500">
                                            {step.icon}
                                        </div>
                                    </div>
                                </div>

                                <div className="card-soft p-5 sm:p-6 text-center hover:-translate-y-1 hover:shadow-lg hover:border-teal-200 transition-all duration-500">
                                    <span className="inline-block text-xs font-bold text-teal-600 tracking-widest mb-2">
                                        PAS {step.number}
                                    </span>
                                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
