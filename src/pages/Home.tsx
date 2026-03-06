import { Fragment } from 'react';
import { motion } from 'framer-motion';
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

const SectionDivider = ({ flip = false }: { flip?: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="relative h-12 md:h-16 overflow-hidden bg-background"
        >
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-secondary/30" />

            <motion.div
                animate={{
                    left: flip ? ['88%', '12%', '88%'] : ['12%', '88%', '12%'],
                }}
                transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
                className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary shadow-[0_0_0_6px_rgba(26,86,219,0.14)]"
            />

            <motion.div
                animate={{
                    left: flip ? ['18%', '82%', '18%'] : ['82%', '18%', '82%'],
                }}
                transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity, delay: 0.45 }}
                className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_5px_rgba(124,58,237,0.15)]"
            />
        </motion.div>
    );
};

const Home = () => {
    return (
        <>
            <Hero />
            {homeSections.map(({ id, Component }, index) => (
                <Fragment key={id}>
                    <SectionDivider flip={index % 2 !== 0} />
                    <Component />
                </Fragment>
            ))}
        </>
    );
};

export default Home;
