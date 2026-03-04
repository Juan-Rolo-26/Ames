import Hero from '../components/home/Hero';
import SeoContent from '../components/home/SeoContent';
import Confianza from '../components/home/Confianza';
import Servicios from '../components/home/Servicios';
import ComoFunciona from '../components/home/ComoFunciona';
import Testimonios from '../components/home/Testimonios';
import FAQ from '../components/home/FAQ';

const Home = () => {
    return (
        <>
            <Hero />
            <SeoContent />
            <Confianza />
            <Servicios />
            <ComoFunciona />
            <Testimonios />
            <FAQ />
        </>
    );
};

export default Home;
