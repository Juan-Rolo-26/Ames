import Hero from '../components/home/Hero';
import SeoContent, { SeoContentBottom } from '../components/home/SeoContent';
import Confianza from '../components/home/Confianza';
import Servicios from '../components/home/Servicios';
import ComoFunciona from '../components/home/ComoFunciona';
import Testimonios from '../components/home/Testimonios';
import AsociarseSection from '../components/home/AsociarseSection';
import FAQ from '../components/home/FAQ';

const Home = () => {
    return (
        <>
            <Hero />
            <Confianza />
            <SeoContent />
            <AsociarseSection />
            <SeoContentBottom />
            <Servicios />
            <ComoFunciona />
            <Testimonios />
            <FAQ />
        </>
    );
};

export default Home;
