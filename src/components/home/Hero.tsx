import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { avatars } from '../../assets/images';
import MutualNetworkVisual from './MutualNetworkVisual';

const HERO_TITLE = 'Asociación mutual entre emprendedores de Santa Fe';
const HERO_DESCRIPTION = 'Somos una Mutual ubicada en Rosario, Santa Fe. Construimos un ecosistema de crecimiento para emprendedores, empresas y profesionales. Impulsamos el despegue y desarrollo de nuestros asociados con consultoría estratégica, formación práctica y académica, planificación, diseño de planes de acción, networking de calidad, acceso a ayuda económica e inversiones y aceleración de proyectos.';
const HERO_KEYWORDS = 'Mutual Argentina, Mutual en Rosario, servicios mutuales, ayuda económica mutual, aceleradora mutual, networking empresarial Rosario, mutual para emprendedores';
const CANONICAL_URL = 'https://amesmutual.com/mutual-argentina';

const socialAvatars = [
    { id: 'maria', src: avatars.maria, alt: 'Emprendedora de AMES' },
    { id: 'juan', src: avatars.juan, alt: 'Emprendedor de AMES' },
    { id: 'laura', src: avatars.laura, alt: 'Miembro de la comunidad AMES' },
    { id: 'carlos', src: avatars.carlos, alt: 'Asociado de AMES' },
];

const desktopStats = [
    { id: 'empresas', n: '+50', l: 'Empresas Padrino', c: 'text-primary' },
    { id: 'proyectos', n: '+100', l: 'Proyectos acelerados', c: 'text-accent' },
];

const mobileStats = [
    { id: 'miembros', n: '+500', l: 'Emprendedores', c: 'text-secondary' },
    { id: 'empresas', n: '+50', l: 'Empresas Padrino', c: 'text-primary' },
    { id: 'proyectos', n: '+100', l: 'Proyectos acelerados', c: 'text-accent' },
];

const Hero = () => {
    const prefersReducedMotion = useReducedMotion();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        const setMetaByName = (name: string, content: string) => {
            let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('name', name);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        };

        const setMetaByProperty = (property: string, content: string) => {
            let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('property', property);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        };

        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', CANONICAL_URL);

        document.title = HERO_TITLE;
        setMetaByName('description', HERO_DESCRIPTION);
        setMetaByName('keywords', HERO_KEYWORDS);
        setMetaByName('robots', 'index, follow');
        setMetaByName('twitter:card', 'summary');
        setMetaByName('twitter:title', HERO_TITLE);
        setMetaByName('twitter:description', HERO_DESCRIPTION);
        setMetaByProperty('og:type', 'website');
        setMetaByProperty('og:locale', 'es_AR');
        setMetaByProperty('og:title', HERO_TITLE);
        setMetaByProperty('og:description', HERO_DESCRIPTION);
        setMetaByProperty('og:url', CANONICAL_URL);
    }, []);

    return (
        <section
            ref={ref}
            className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-white pt-[90px]"
            aria-labelledby="hero-main-title"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #5b78c8 1px, transparent 1px)', backgroundSize: '34px 34px' }}
            />
            <motion.div
                aria-hidden="true"
                className="absolute -top-20 right-0 w-[460px] h-[460px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(106, 144, 230, 0.26) 0%, rgba(106, 144, 230, 0) 72%)', filter: 'blur(50px)' }}
                animate={prefersReducedMotion ? {} : { scale: [1, 1.08, 1], y: [0, -16, 0] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                aria-hidden="true"
                className="absolute -bottom-24 left-8 w-[380px] h-[380px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(165, 186, 247, 0.28) 0%, rgba(165, 186, 247, 0) 75%)', filter: 'blur(55px)' }}
                animate={prefersReducedMotion ? {} : { scale: [1, 1.1, 1], y: [0, 14, 0] }}
                transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            />

            <div className="relative z-10 h-full w-full px-0 py-0">
                <div className="h-full w-full border-y border-[#dbe6fb] bg-[#f7f9ff]">
                    <div className="h-full w-full p-5 sm:p-7 lg:p-8 xl:p-9 flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                        <div className="w-full lg:w-[56%] flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-5">
                            <motion.div
                                initial={{ opacity: 0, y: -20, scale: 0.92 }}
                                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                transition={{ duration: 0.55, delay: 0.04, type: 'spring', stiffness: 170 }}
                                className="inline-flex items-center gap-2.5 bg-[#edf3ff] border border-[#c9d8fb] text-secondary px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase"
                            >
                                <motion.span
                                    animate={prefersReducedMotion ? {} : { scale: [1, 1.35, 1], opacity: [1, 0.55, 1] }}
                                    transition={{ repeat: Infinity, duration: 2.1 }}
                                    className="w-2.5 h-2.5 rounded-full bg-secondary"
                                />
                                Mutual Argentina · Rosario, Santa Fe
                            </motion.div>

                            <h1 id="hero-main-title" className="font-heading font-black leading-[1.02] tracking-tight text-primary text-balance">
                                <motion.span
                                    initial={{ opacity: 0, y: 46 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.72, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                                    className="block"
                                    style={{ fontSize: 'clamp(1.9rem, 4vw, 4.1rem)' }}
                                >
                                    Asociación mutual entre
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 46 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.72, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                                    className="block"
                                    style={{
                                        fontSize: 'clamp(1.9rem, 4vw, 4.1rem)',
                                        background: 'linear-gradient(90deg, #2d64df 0%, #6f3ce7 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    emprendedores de Santa Fe
                                </motion.span>
                            </h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.75, delay: 0.44 }}
                                className="text-[#5f6f88] text-[0.99rem] md:text-[1.08rem] font-medium leading-relaxed max-w-2xl"
                            >
                                Somos una Mutual ubicada en Rosario, Santa Fe. Construimos un ecosistema de crecimiento para emprendedores, empresas y profesionales. Impulsamos el despegue y desarrollo de nuestros asociados con <strong className="text-primary font-semibold">consultoría estratégica</strong>, <strong className="text-secondary font-semibold">formación práctica y académica</strong>, <strong className="text-primary font-semibold">planificación y planes de acción</strong>, networking de calidad, acceso a ayuda económica e inversiones y <strong className="text-accent font-semibold">aceleración de proyectos</strong>.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.65, delay: 0.58 }}
                                className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start"
                            >
                                <motion.a
                                    whileHover={{ scale: 1.04, y: -3, boxShadow: '0 18px 44px rgba(45,100,223,0.4)' }}
                                    whileTap={{ scale: 0.98 }}
                                    href="/servicios"
                                    className="relative inline-flex items-center justify-center gap-2 px-7 lg:px-8 py-3 lg:py-3.5 rounded-full font-bold text-base lg:text-lg text-white overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, #2d64df 0%, #7c3aed 100%)',
                                        boxShadow: '0 10px 30px rgba(45,100,223,0.3)',
                                    }}
                                    aria-label="Conocer servicios de la mutual"
                                >
                                    <motion.span
                                        className="absolute inset-0 bg-white/20"
                                        initial={{ x: '-120%', skewX: '-20deg' }}
                                        animate={prefersReducedMotion ? {} : { x: '210%' }}
                                        transition={{ repeat: Infinity, duration: 2.7, ease: 'linear', repeatDelay: 1.7 }}
                                    />
                                    Conocé nuestros servicios
                                    <motion.svg
                                        animate={prefersReducedMotion ? {} : { x: [0, 4, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </motion.svg>
                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.04, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    href="https://wa.me/5493413702972?text=Hola,%20quiero%20solicitar%20asesoramiento%20en%20Mutual%20AMES."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-7 lg:px-8 py-3 lg:py-3.5 bg-white text-primary rounded-full font-bold text-base lg:text-lg border border-[#c6d6f9] shadow-[0_10px_28px_rgba(36,81,165,0.14)] hover:border-secondary transition-all"
                                    aria-label="Solicitar asesoramiento en Mutual AMES por WhatsApp"
                                >
                                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Solicitar asesoramiento
                                </motion.a>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.65, delay: 0.72 }}
                                className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 pt-1"
                            >
                                <div className="flex -space-x-3">
                                    {socialAvatars.map((avatar, index) => (
                                        <motion.img
                                            key={avatar.id}
                                            initial={{ opacity: 0, x: -14 }}
                                            animate={inView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.4, delay: 0.78 + index * 0.08 }}
                                            whileHover={{ scale: 1.14, zIndex: 12, y: -3 }}
                                            src={avatar.src}
                                            alt={avatar.alt}
                                            className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md cursor-pointer"
                                            loading="lazy"
                                            style={{ zIndex: socialAvatars.length - index }}
                                        />
                                    ))}
                                </div>

                                <div>
                                    <span className="block text-[#142d4f] font-bold text-base leading-tight">+500 emprendedores</span>
                                    <span className="text-[#6b7d98] text-sm">ya forman parte de la comunidad</span>
                                </div>

                                <div className="hidden sm:block w-px h-10 bg-[#dbe6fb]" />

                                <div className="flex gap-4">
                                    {desktopStats.map(({ id, n, l, c }) => (
                                        <div key={id} className="text-center">
                                            <motion.span
                                                className={`block font-heading font-black text-xl ${c}`}
                                                initial={{ opacity: 0, scale: 0.7 }}
                                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                                transition={{ type: 'spring', stiffness: 200, delay: 0.84 }}
                                            >
                                                {n}
                                            </motion.span>
                                            <span className="text-xs text-[#6b7d98] font-medium">{l}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-full lg:w-[44%] xl:w-[42%]">
                            <div className="w-full scale-[0.88] xl:scale-[0.95] origin-center">
                                <MutualNetworkVisual />
                            </div>
                        </div>

                        <div className="flex lg:hidden w-full gap-3 pt-1">
                            {mobileStats.map(({ id, n, l, c }) => (
                                <div key={id} className="flex-1 rounded-2xl border border-[#d8e4fb] bg-white p-3 text-center shadow-[0_8px_22px_rgba(50,92,175,0.12)]">
                                    <span className={`block font-black text-xl ${c}`}>{n}</span>
                                    <span className="text-[11px] text-[#6b7d98] font-medium leading-tight block mt-0.5">{l}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
