import Hero from '../components/home/Hero';
import SeoContent, { SeoContentBottom } from '../components/home/SeoContent';
import Confianza from '../components/home/Confianza';
import Servicios from '../components/home/Servicios';
import ComoFunciona from '../components/home/ComoFunciona';
import Testimonios from '../components/home/Testimonios';
import AsociarseSection from '../components/home/AsociarseSection';
import FAQ from '../components/home/FAQ';

const homeSections = [
    { id: 'confianza', Component: Confianza },
    { id: 'seo-top', Component: SeoContent },
    { id: 'asociate', Component: AsociarseSection },
    { id: 'seo-bottom', Component: SeoContentBottom },
    { id: 'servicios', Component: Servicios },
    { id: 'como-funciona', Component: ComoFunciona },
    { id: 'testimonios', Component: Testimonios },
    { id: 'faq', Component: FAQ },
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
