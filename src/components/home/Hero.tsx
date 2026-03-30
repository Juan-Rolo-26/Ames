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
            className="relative w-full min-h-screen overflow-hidden bg-white pt-[90px]"
            aria-labelledby="hero-main-title"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #5b78c8 1px, transparent 1px)', backgroundSize: '34px 34px' }}
            />
            <motion.div
                aria-hidden="true"
                className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(106, 144, 230, 0.22) 0%, rgba(106, 144, 230, 0) 72%)', filter: 'blur(60px)' }}
                animate={prefersReducedMotion ? {} : { scale: [1, 1.08, 1], y: [0, -16, 0] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-[480px] h-[480px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(165, 186, 247, 0.24) 0%, rgba(165, 186, 247, 0) 75%)', filter: 'blur(60px)' }}
                animate={prefersReducedMotion ? {} : { scale: [1, 1.1, 1], y: [0, 14, 0] }}
                transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            />

            <div className="relative z-10 min-h-[calc(100vh-90px)] w-full">
                <div className="min-h-[calc(100vh-90px)] w-full border-y border-[#dbe6fb] bg-[#f7f9ff]">
                    <div className="min-h-[calc(100vh-90px)] w-full px-6 sm:px-10 lg:px-14 xl:px-20 py-10 lg:py-0 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                        {/* ── Columna izquierda ── */}
                        <div className="w-full lg:w-[55%] xl:w-[54%] flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-7">

                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.05 }}
                            >
                                <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/90 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-primary shadow-sm">
                                    <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                    Mutual · Rosario, Santa Fe
                                </span>
                            </motion.div>

                            {/* Título */}
                            <h1 id="hero-main-title" className="w-full font-heading font-black leading-[1.0] tracking-tight text-primary text-balance">
                                <motion.span
                                    initial={{ opacity: 0, y: 46 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.72, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                                    className="block"
                                    style={{ fontSize: 'clamp(2.2rem, 4.2vw, 4.6rem)' }}
                                >
                                    Asociación mutual entre
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 46 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.72, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                                    className="block"
                                    style={{
                                        fontSize: 'clamp(2.2rem, 4.2vw, 4.6rem)',
                                        background: 'linear-gradient(90deg, #2d64df 0%, #6f3ce7 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    emprendedores de Santa Fe
                                </motion.span>
                            </h1>

                            {/* Tagline card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.75, delay: 0.36 }}
                                className="w-full"
                            >
                                <div className="rounded-[28px] bg-[linear-gradient(135deg,rgba(45,100,223,0.36)_0%,rgba(56,189,248,0.16)_48%,rgba(123,97,255,0.16)_100%)] p-[1.5px] shadow-[0_18px_50px_rgba(45,100,223,0.10)]">
                                    <div className="relative overflow-hidden rounded-[27px] bg-[linear-gradient(145deg,#ffffff_0%,#f7faff_52%,#eef4ff_100%)] px-6 py-5 md:px-8 md:py-6">
                                        <div aria-hidden="true" className="absolute -left-12 bottom-0 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />
                                        <div aria-hidden="true" className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-secondary/12 blur-2xl" />
                                        <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
                                            <div className="flex-1">
                                                <p className="text-primary text-[1.4rem] md:text-[1.75rem] font-heading font-black leading-[1.1]">
                                                    Dejá de emprender solo.
                                                </p>
                                                <p className="mt-2 text-secondary text-[1rem] md:text-[1.12rem] font-semibold leading-relaxed">
                                                    Sumate a una comunidad que te conecta con oportunidades, financiamiento y crecimiento real.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Descripción */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.75, delay: 0.52 }}
                                className="w-full text-[#5f6f88] text-[1rem] md:text-[1.08rem] font-medium leading-relaxed"
                            >
                                Somos una Mutual ubicada en Rosario, Santa Fe. Construimos un ecosistema de crecimiento para emprendedores, empresas y profesionales. Impulsamos el despegue y desarrollo de nuestros asociados con <strong className="text-primary font-semibold">consultoría estratégica</strong>, <strong className="text-secondary font-semibold">formación práctica y académica</strong>, <strong className="text-primary font-semibold">planificación y planes de acción</strong>, networking de calidad, acceso a ayuda económica e inversiones y <strong className="text-accent font-semibold">aceleración de proyectos</strong>.
                            </motion.p>

                            {/* Botones */}
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.65, delay: 0.66 }}
                                className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start"
                            >
                                <motion.a
                                    whileHover={{ scale: 1.04, y: -3, boxShadow: '0 18px 44px rgba(37,211,102,0.28)' }}
                                    whileTap={{ scale: 0.98 }}
                                    href={TIENDUP_MEMBRESIA_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-base lg:text-lg text-white overflow-hidden cursor-pointer"
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
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-primary rounded-full font-bold text-base lg:text-lg border border-[#c6d6f9] shadow-[0_10px_28px_rgba(36,81,165,0.12)] hover:border-secondary transition-all cursor-pointer"
                                    onClick={() => navigate('/servicios')}
                                    role="button"
                                    aria-label="Conocé nuestros servicios"
                                >
                                    Conocé nuestros servicios
                                </motion.div>
                            </motion.div>

                            {/* Stats + avatares */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.65, delay: 0.80 }}
                                className="flex w-full flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-4 pt-1"
                            >
                                {/* Avatares + miembros */}
                                <div className="flex items-center gap-3">
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
                                </div>

                                <div className="hidden sm:block w-px h-10 bg-[#dbe6fb]" />

                                {/* Stats */}
                                <div className="flex gap-6">
                                    {desktopStats.map(({ id, n, l, c }) => (
                                        <div key={id} className="text-center">
                                            <motion.span
                                                className={`block font-heading font-black text-2xl ${c}`}
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

                        {/* ── Columna derecha: visual ── */}
                        <div className="hidden lg:flex items-center justify-center flex-1 min-w-0">
                            <div className="w-full max-w-[580px] xl:max-w-[640px]">
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
