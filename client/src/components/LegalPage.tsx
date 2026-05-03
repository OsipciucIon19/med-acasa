import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, FileText } from 'lucide-react';

interface LegalPageProps {
    eyebrow: string;
    title: string;
    updatedAt: string;
    intro: string;
    children: ReactNode;
}

function LegalPage({ eyebrow, title, updatedAt, intro, children }: LegalPageProps) {
    return (
        <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/30 to-white"></div>
                <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-teal-200/30 rounded-full blur-3xl -mr-32 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-blue-200/30 rounded-full blur-3xl -ml-32 -mb-20"></div>
            </div>

            <div className="max-w-3xl mx-auto relative">
                <Link
                    to="/"
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-teal-700 mb-8 transition-colors"
                >
                    <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                    Înapoi la pagina principală
                </Link>

                <div className="animate-fade-up">
                    <span className="section-eyebrow mb-4">
                        <FileText size={12} />
                        {eyebrow}
                    </span>
                    <h1 className="section-title mt-4 mb-4">{title}</h1>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-2">
                        {intro}
                    </p>
                    <p className="text-xs text-slate-500 mb-10">
                        Ultima actualizare: <span className="font-semibold">{updatedAt}</span>
                    </p>
                </div>

                <article
                    className="prose-legal animate-fade-up bg-white border border-slate-100 shadow-soft rounded-2xl p-6 sm:p-10"
                    style={{ animationDelay: '120ms' }}
                >
                    {children}
                </article>

                <div
                    className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-100 animate-fade-up"
                    style={{ animationDelay: '200ms' }}
                >
                    <p className="text-sm text-slate-700">
                        <span className="font-semibold text-slate-900">Întrebări?</span>{' '}
                        Ne poți scrie la{' '}
                        <a
                            href="mailto:contact@medacasa.md"
                            className="text-teal-700 font-semibold hover:underline"
                        >
                            contact@medacasa.md
                        </a>{' '}
                        sau ne poți suna la{' '}
                        <a
                            href="tel:+37378392285"
                            className="text-teal-700 font-semibold hover:underline whitespace-nowrap"
                        >
                            078 392 285
                        </a>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
}

export default LegalPage;
