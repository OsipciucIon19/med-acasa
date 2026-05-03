import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';

const TrustIndicators = lazy(() => import('../components/TrustIndicators'));
const ProblemSection = lazy(() => import('../components/ProblemSection'));
const SolutionSection = lazy(() => import('../components/SolutionSection'));
const ServicesSection = lazy(() => import('../components/ServicesSection'));
const HowItWorks = lazy(() => import('../components/HowItWorks'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const FinalCTA = lazy(() => import('../components/FinalCTA'));
const Contact = lazy(() => import('../components/Contact'));

function SectionFallback() {
    return <div className="h-32" aria-hidden />;
}

function Home() {
    return (
        <>
            <Hero />
            <Suspense fallback={<SectionFallback />}>
                <TrustIndicators />
                <ProblemSection />
                <SolutionSection />
                <ServicesSection />
                <HowItWorks />
                <WhyChooseUs />
                <Testimonials />
                <FinalCTA />
                <Contact />
            </Suspense>
        </>
    );
}

export default Home;
