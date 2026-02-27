import Hero from '../components/home/Hero';
import Confianza from '../components/home/Confianza';
import Servicios from '../components/home/Servicios';
import ComoFunciona from '../components/home/ComoFunciona';
import Testimonios from '../components/home/Testimonios';
import PadrinosPreview from '../components/home/PadrinosPreview';
import MembresiaPreview from '../components/home/MembresiaPreview';
import FAQ from '../components/home/FAQ';

const Home = () => {
    return (
        <>
            <Hero />
            <Confianza />
            <Servicios />
            <ComoFunciona />
            <Testimonios />
            <PadrinosPreview />
            <MembresiaPreview />
            <FAQ />
        </>
    );
};

export default Home;
