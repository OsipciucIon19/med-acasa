import Hero from '../components/Hero';
import TrustIndicators from '../components/TrustIndicators';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import ServicesSection from '../components/ServicesSection';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import Contact from '../components/Contact';

function Home() {
    return (
        <>
            <Hero />
            <TrustIndicators />
            <ProblemSection />
            <SolutionSection />
            <ServicesSection />
            <HowItWorks />
            <WhyChooseUs />
            <Testimonials />
            <FinalCTA />
            <Contact />
        </>
    );
}

export default Home;
