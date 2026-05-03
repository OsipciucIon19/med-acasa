import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

function NotFound() {
    return (
        <section className="relative min-h-[80vh] pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/30 to-white"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-xl mx-auto text-center relative">
                <p className="text-7xl sm:text-8xl font-extrabold gradient-text-animated mb-4 animate-fade-up">
                    404
                </p>
                <h1
                    className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 animate-fade-up"
                    style={{ animationDelay: '120ms' }}
                >
                    Pagina nu a fost găsită
                </h1>
                <p
                    className="text-base sm:text-lg text-slate-600 mb-8 animate-fade-up"
                    style={{ animationDelay: '240ms' }}
                >
                    Se pare că pagina pe care o cauți nu există sau a fost mutată. Hai să te ducem înapoi acasă.
                </p>

                <div
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-up"
                    style={{ animationDelay: '360ms' }}
                >
                    <Link
                        to="/"
                        className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-xl shadow-glow-teal hover:shadow-xl hover:-translate-y-0.5 transition-all"
                    >
                        <Home size={18} />
                        Înapoi la pagina principală
                        <ArrowRight
                            size={18}
                            className="group-hover:translate-x-0.5 transition-transform"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default NotFound;
