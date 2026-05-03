import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));
const FloatingCTA = lazy(() => import('./components/FloatingCTA'));

function App() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                setScrollY(window.scrollY);
                ticking = false;
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white overflow-hidden flex flex-col">
            <ScrollToTop />
            <Header scrollY={scrollY} />
            <main className="flex-1">
                <Suspense fallback={null}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/confidentialitate" element={<Privacy />} />
                        <Route path="/termeni" element={<Terms />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
            <Suspense fallback={null}>
                <FloatingCTA />
            </Suspense>
        </div>
    );
}

export default App;
