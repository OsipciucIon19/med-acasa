import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Testimonial {
    name: string;
    quote: string;
    rating: number;
    relation: string;
    initials: string;
    color: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'Maria Popescu',
        relation: 'Fiică',
        initials: 'MP',
        color: 'from-rose-400 to-pink-500',
        quote: 'Am fost atât de stresată cu grija pentru mama, dar de când am găsit MedAcasă totul e mult mai ușor. Personal calificat, rapid și atent. Îi recomand cu toată inima!',
        rating: 5,
    },
    {
        name: 'Ioan Mihai',
        relation: 'Pacient',
        initials: 'IM',
        color: 'from-blue-400 to-indigo-500',
        quote: 'Am evitat spitalul datorită acestui serviciu minunat. Asistentele sunt profesioniste și primesc îngrijire cu demnitate, direct acasă. Nu mai am cum să mă întorc la altele.',
        rating: 5,
    },
    {
        name: 'Elena Radu',
        relation: 'Fiică',
        initials: 'ER',
        color: 'from-teal-400 to-emerald-500',
        quote: 'După operație am avut nevoie de pansamente regulate. MedAcasă a venit la noi de fiecare dată, punctual și cu tot ce era nevoie. Recuperarea tatei a fost mult mai rapidă!',
        rating: 5,
    },
    {
        name: 'Victor Gheorghe',
        relation: 'Fiu',
        initials: 'VG',
        color: 'from-amber-400 to-orange-500',
        quote: 'Tatăl meu are nevoie de perfuzii regulate. Programul MedAcasă este flexibil și persoana care vine este foarte profesionistă. Mulțumesc pentru dedicare!',
        rating: 5,
    },
];

function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const { ref, isVisible } = useReveal({ threshold: 0.2 });

    const nextSlide = useCallback(
        () => setCurrentSlide((prev) => (prev + 1) % testimonials.length),
        []
    );
    const prevSlide = useCallback(
        () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length),
        []
    );

    useEffect(() => {
        if (isPaused || !isVisible) return;
        const id = setInterval(nextSlide, 6000);
        return () => clearInterval(id);
    }, [isPaused, isVisible, nextSlide]);

    const current = testimonials[currentSlide];

    return (
        <section
            ref={ref}
            className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-teal-50/50 to-white"></div>
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-teal-200/40 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-4xl mx-auto">
                <div
                    className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 ${
                        isVisible ? 'animate-fade-up' : 'opacity-0'
                    }`}
                >
                    <span className="section-eyebrow mb-4">Mărturii</span>
                    <h2 className="section-title mt-4 mb-4">
                        Ce spun <span className="gradient-text">pacienții noștri</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        Peste 22.800 de povești frumoase. Iată câteva dintre ele.
                    </p>
                </div>

                <div
                    className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="relative bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                        <Quote
                            className="absolute -top-2 -right-2 text-teal-100"
                            size={140}
                            strokeWidth={1}
                        />

                        <div key={currentSlide} className="relative animate-fade-up">
                            <div className="flex gap-1 mb-5">
                                {[...Array(current.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={20}
                                        className="fill-amber-400 text-amber-400"
                                        style={{ animationDelay: `${i * 60}ms` }}
                                    />
                                ))}
                            </div>

                            <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 mb-8 leading-relaxed font-medium">
                                „{current.quote}"
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                <div
                                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${current.color} text-white flex items-center justify-center font-bold text-lg shadow-lg shrink-0`}
                                >
                                    {current.initials}
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">{current.name}</p>
                                    <p className="text-sm text-slate-500">{current.relation}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-8">
                        <button
                            onClick={prevSlide}
                            className="group p-3 rounded-full bg-white border border-slate-200 hover:border-teal-300 hover:bg-teal-50 hover:-translate-x-0.5 transition-all duration-300 shadow-sm"
                            aria-label="Mărturia anterioară"
                        >
                            <ChevronLeft
                                size={20}
                                className="text-slate-600 group-hover:text-teal-600 transition-colors"
                            />
                        </button>

                        <div className="flex gap-2">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`h-2 rounded-full transition-all duration-500 ${
                                        idx === currentSlide
                                            ? 'w-10 bg-gradient-to-r from-teal-500 to-blue-500'
                                            : 'w-2 bg-slate-300 hover:bg-slate-400'
                                    }`}
                                    aria-label={`Mărturia ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="group p-3 rounded-full bg-white border border-slate-200 hover:border-teal-300 hover:bg-teal-50 hover:translate-x-0.5 transition-all duration-300 shadow-sm"
                            aria-label="Mărturia următoare"
                        >
                            <ChevronRight
                                size={20}
                                className="text-slate-600 group-hover:text-teal-600 transition-colors"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
