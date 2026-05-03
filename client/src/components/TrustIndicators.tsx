import { useState, useEffect, useRef } from 'react';
import { Users, Briefcase, Shield, Clock } from 'lucide-react';

interface Indicator {
    icon: React.ReactNode;
    label: React.ReactNode;
}

const indicators: Indicator[] = [
    {
        icon: <Shield className="w-7 h-7" strokeWidth={2} />,
        label: (
            <>
                Personal calificat
                <br />
                și cu experiență
            </>
        ),
    },
    {
        icon: <Briefcase className="w-7 h-7" strokeWidth={2} />,
        label: (
            <>
                Trusă antișoc și
                <br />
                echipamente
                <br />
                moderne
            </>
        ),
    },
    {
        icon: <Clock className="w-7 h-7" strokeWidth={2} />,
        label: (
            <>
                Disponibili
                <br />
                24h /
                <br />
                7 zile din 7
            </>
        ),
    },
    {
        icon: <Users className="w-7 h-7" strokeWidth={2} />,
        label: (
            <>
                Peste
                <br />
                22.800+
                <br />
                pacienți îngrijiți
            </>
        ),
    },
];

function TrustIndicators() {
    const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisibleItems(indicators.map(() => true));
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="px-4 sm:px-6 lg:px-8 -mt-2 sm:mt-0 pb-12 sm:pb-20" ref={ref}>
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-x divide-gray-100 lg:divide-y-0">
                        {indicators.map((indicator, idx) => (
                            <div
                                key={idx}
                                className={`flex flex-col items-center text-center p-5 sm:p-7 transition-all duration-500 ${
                                    visibleItems[idx]
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-6'
                                } ${idx % 2 === 0 ? 'border-l-0' : ''} ${
                                    idx < 2 ? 'lg:border-t-0' : ''
                                }`}
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-teal-50 flex items-center justify-center mb-3 sm:mb-4 text-teal-600">
                                    {indicator.icon}
                                </div>
                                <p className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                                    {indicator.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrustIndicators;