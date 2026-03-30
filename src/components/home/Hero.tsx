import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { avatars } from '../../assets/images';
import { TIENDUP_MEMBRESIA_URL } from '../../utils/tiendup';
import MutualNetworkVisual from './MutualNetworkVisual';

const socialAvatars = [
    { id: 'maria', src: avatars.maria, alt: 'Emprendedora de AMES' },
    { id: 'juan', src: avatars.juan, alt: 'Emprendedor de AMES' },
    { id: 'laura', src: avatars.laura, alt: 'Miembro de la comunidad AMES' },
    { id: 'carlos', src: avatars.carlos, alt: 'Asociado de AMES' },
];

const desktopStats = [
    { id: 'empresas', n: '+50', l: 'Padrinos AMES', c: 'text-primary' },
    { id: 'proyectos', n: '+100', l: 'Proyectos acelerados', c: 'text-accent' },
];

const mobileStats = [
    { id: 'miembros', n: '+500', l: 'Emprendedores', c: 'text-secondary' },
    { id: 'empresas', n: '+50', l: 'Padrinos AMES', c: 'text-primary' },
    { id: 'proyectos', n: '+100', l: 'Proyectos acelerados', c: 'text-accent' },
];

const Hero = () => {
    const prefersReducedMotion = useReducedMotion();
    const navigate = useNavigate();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.75, delay: 0.38 }}
                                className="relative w-full max-w-2xl overflow-hidden rounded-[30px] border border-[#c7d8fb] bg-white px-5 py-5 shadow-[0_18px_48px_rgba(45,100,223,0.12)] md:px-7 md:py-6"
                            >
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-primary via-secondary to-accent"
                                />
                                <div
                                    aria-hidden="true"
                                    className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-secondary/10 blur-2xl"
                                />
                                <div className="relative pl-3 md:pl-4">
                                    <p className="text-primary text-[1.28rem] md:text-[1.9rem] font-heading font-black leading-tight">
                                        Dejá de emprender solo.
                                    </p>
                                    <p className="mt-3 text-secondary text-[1rem] md:text-[1.2rem] font-bold leading-relaxed">
                                        Sumate a una comunidad que te conecta con oportunidades, financiamiento y crecimiento real.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.75, delay: 0.58 }}
                                className="text-[#5f6f88] text-[0.99rem] md:text-[1.08rem] font-medium leading-relaxed max-w-2xl"
                            >
                                Somos una Mutual ubicada en Rosario, Santa Fe. Construimos un ecosistema de crecimiento para emprendedores, empresas y profesionales. Impulsamos el despegue y desarrollo de nuestros asociados con <strong className="text-primary font-semibold">consultoría estratégica</strong>, <strong className="text-secondary font-semibold">formación práctica y académica</strong>, <strong className="text-primary font-semibold">planificación y planes de acción</strong>, networking de calidad, acceso a ayuda económica e inversiones y <strong className="text-accent font-semibold">aceleración de proyectos</strong>.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.65, delay: 0.72 }}
                                className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start"
                            >
                                <motion.a
                                    whileHover={{ scale: 1.04, y: -3, boxShadow: '0 18px 44px rgba(37,211,102,0.28)' }}
                                    whileTap={{ scale: 0.98 }}
                                    href={TIENDUP_MEMBRESIA_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="relative inline-flex items-center justify-center gap-2 px-7 lg:px-8 py-3 lg:py-3.5 rounded-full font-bold text-base lg:text-lg text-white overflow-hidden cursor-pointer"
                                    style={{
                                        background: 'linear-gradient(135deg, #25D366 0%, #1fb955 100%)',
                                        boxShadow: '0 10px 30px rgba(37,211,102,0.22)',
                                    }}
                                    aria-label="Empezá hoy y asociate a AMES"
                                >
                                    <motion.span
                                        className="absolute inset-0 bg-white/20"
                                        initial={{ x: '-120%', skewX: '-20deg' }}
                                        animate={prefersReducedMotion ? {} : { x: '210%' }}
                                        transition={{ repeat: Infinity, duration: 2.7, ease: 'linear', repeatDelay: 1.7 }}
                                    />
                                    Empezá hoy
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

                                <motion.div
                                    whileHover={{ scale: 1.04, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center justify-center gap-2 px-7 lg:px-8 py-3 lg:py-3.5 bg-white text-primary rounded-full font-bold text-base lg:text-lg border border-[#c6d6f9] shadow-[0_10px_28px_rgba(36,81,165,0.14)] hover:border-secondary transition-all"
                                    onClick={() => navigate('/servicios')}
                                    role="button"
                                    aria-label="Conocé nuestros servicios"
                                >
                                    Conocé nuestros servicios
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.65, delay: 0.84 }}
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


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
