import { Droplet, Syringe, Cross, Heart, Pill, Activity, ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
    tag?: string;
}

const services: Service[] = [
    {
        icon: <Droplet className="w-6 h-6" strokeWidth={2} />,
        title: 'Perfuzie la domiciliu',
        description: 'Administrare sigură de fluide și medicamente intravenos, conform prescripției.',
        tag: 'Cel mai cerut',
    },
    {
        icon: <Syringe className="w-6 h-6" strokeWidth={2} />,
        title: 'Injecții',
        description: 'Injecții musculare, subcutanate sau intravenoase: rapid, fără durere.',
    },
    {
        icon: <Cross className="w-6 h-6" strokeWidth={2} />,
        title: 'Pansamente',
        description: 'Schimbare pansamente și îngrijirea rănilor cu igienă completă.',
    },
    {
        icon: <Heart className="w-6 h-6" strokeWidth={2} />,
        title: 'Îngrijire post-operatorie',
        description: 'Monitorizare și asistență în recuperarea după intervenții chirurgicale.',
    },
    {
        icon: <Pill className="w-6 h-6" strokeWidth={2} />,
        title: 'Administrare tratament',
        description: 'Supervizare și administrare a tratamentelor conform prescripției medicale.',
    },
    {
        icon: <Activity className="w-6 h-6" strokeWidth={2} />,
        title: 'Monitorizare',
        description: 'Urmărire regulată a semnelor vitale și a progresului pacientului.',
    },
];

function ServicesSection() {
    const { ref, isVisible } = useReveal({ threshold: 0.1 });

    return (
        <section
            ref={ref}
            id="services"
            className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br from-blue-100/40 via-teal-100/40 to-transparent rounded-full blur-3xl -z-10"></div>

            <div className="max-w-6xl mx-auto">
                <div
                    className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 ${
                        isVisible ? 'animate-fade-up' : 'opacity-0'
                    }`}
                >
                    <span className="section-eyebrow mb-4">Servicii medicale</span>
                    <h2 className="section-title mt-4 mb-4">
                        Tot ce ai nevoie, <span className="gradient-text">la tine acasă</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        Personal calificat, echipamente moderne, intervenții realizate exact ca la spital.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className={`group relative card-soft p-6 sm:p-7 hover:-translate-y-2 hover:shadow-glow-teal hover:border-teal-200 transition-all duration-500 cursor-default overflow-hidden ${
                                isVisible ? 'animate-fade-up' : 'opacity-0'
                            }`}
                            style={{ animationDelay: `${idx * 90}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-blue-500/0 group-hover:from-teal-500/5 group-hover:to-blue-500/5 transition-colors duration-500"></div>
                            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-teal-200/0 to-blue-200/0 group-hover:from-teal-200/30 group-hover:to-blue-200/30 rounded-full blur-2xl transition-colors duration-700"></div>

                            <div className="relative">
                                {service.tag && (
                                    <span className="absolute -top-1 right-0 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-wide border border-amber-200">
                                        {service.tag}
                                    </span>
                                )}

                                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 text-teal-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-teal-100">
                                    {service.icon}
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                                    {service.description}
                                </p>

                                <div className="flex items-center gap-1 text-sm font-semibold text-teal-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                    Află mai mult
                                    <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
