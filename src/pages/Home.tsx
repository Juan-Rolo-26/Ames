import Hero from '../components/home/Hero';
import SeoContent from '../components/home/SeoContent';
import Confianza from '../components/home/Confianza';
import PadrinosLogosCarousel from '../components/home/PadrinosLogosCarousel';
import Testimonios from '../components/home/Testimonios';
import AsociarseSection from '../components/home/AsociarseSection';

const homeSections = [
    { id: 'confianza', Component: Confianza },
    { id: 'seo-top', Component: SeoContent },
    { id: 'padrinos-logos', Component: PadrinosLogosCarousel },
    { id: 'asociate', Component: AsociarseSection },
    { id: 'testimonios', Component: Testimonios },
];

const Home = () => {
    return (
        <>
            <Hero />
            {homeSections.map(({ id, Component }) => (
                <Component key={id} />
            ))}
        </>
    );
};

export default Home;
