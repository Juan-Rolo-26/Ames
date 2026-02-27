import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { avatars } from '../../assets/images';

// ── Configuración de avatares satélite ──────────────────────────
const satelliteAvatars = [
    { id: 1, photo: avatars.maria, name: 'María G.', angle: 320, radius: 170, size: 72 },
    { id: 2, photo: avatars.juan, name: 'Juan P.', angle: 45, radius: 180, size: 56 },
    { id: 3, photo: avatars.laura, name: 'Laura R.', angle: 100, radius: 185, size: 64 },
    { id: 4, photo: avatars.sofia, name: 'Sofía A.', angle: 155, radius: 175, size: 56 },
    { id: 5, photo: avatars.rodrigo, name: 'Rodrigo V.', angle: 210, radius: 180, size: 56 },
    { id: 6, photo: avatars.paula, name: 'Paula E.', angle: 265, radius: 172, size: 64 },
    { id: 7, photo: avatars.maria, name: 'Andrea M.', angle: 10, radius: 130, size: 48 },
];

// ── Animaciones flotado ──────────────────────────────────────────
const floatAnimations = [
    { y: [-8, 8, -8], duration: 4.2 },
    { y: [6, -10, 6], duration: 5.1 },
    { y: [-12, 5, -12], duration: 3.8 },
    { y: [10, -6, 10], duration: 4.7 },
    { y: [-5, 12, -5], duration: 5.5 },
    { y: [8, -8, 8], duration: 4.0 },
    { y: [-10, 4, -10], duration: 3.5 },
];

// ── JSON-LD datos estructurados ──────────────────────────────────
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aceleradora AMES",
    "description": "Aceleradora de emprendedores. Te ayudamos a escalar tu negocio con financiación, capacitación y red de contactos.",
    "url": "https://www.aceleradoraames.com",
    "sameAs": [
        "https://www.instagram.com/aceleradoraimpactoames",
    ]
};

const Hero = () => {
    const prefersReducedMotion = useReducedMotion();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        document.title = 'Aceleradora AMES — Impulsamos tu emprendimiento';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', 'Si te sentís solo, necesitás un equipo, financiación o capacitación, Mutual AMES te impulsa. Unite a más de 500 emprendedores en Rosario, Argentina.');
        }
    }, []);

    return (
        <>
            <section
                ref={ref}
                className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background"
                aria-label="Hero: Aceleradora AMES"
            >
                {/* ── Glows de fondo ── */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[120px]" />
                    <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                </div>

                {/* ── Watermark AMES (branding sutil) ── */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] select-none" aria-hidden="true">
                    <div className="absolute top-20 left-20 -rotate-12 text-9xl font-black text-secondary font-heading">AMES</div>
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-9xl font-black text-secondary font-heading">AMES</div>
                    <div className="absolute bottom-20 right-20 rotate-12 text-9xl font-black text-secondary font-heading">AMES</div>
                </div>

                {/* ── Contenedor principal ── */}
                <div className="relative z-10 w-full px-8 lg:px-16 xl:px-24 py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* ====== Columna izquierda: Texto ====== */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="flex-1 text-left"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight mb-6">
                            <span className="text-secondary block mb-2">Tu idea puede<br />escalar</span>
                            <span className="text-accent block">Nosotros sabemos<br />cómo hacerlo</span>
                        </h1>

                        <p className="text-gray-600 text-lg sm:text-xl font-medium leading-relaxed mb-8 max-w-xl">
                            Si te sentís solo, si necesitás un equipo, relaciones de valor, financiación, capacitación e inversión, el equipo de Mutual AMES puede ayudarte.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://wa.me/5493413702972?text=Hola,%20quiero%20conocer%20sobre%20asesoramiento%20e%20Impacto."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-secondary/50"
                                aria-label="Contactar por WhatsApp"
                            >
                                ¡Sí! Quiero que me contacten
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://aceleradoraimpactobyames.tiendup.com/p/membresia-mensual-impacto-by-ames"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-7 py-4 bg-transparent text-secondary rounded-full font-bold text-base border border-secondary hover:bg-secondary/5 transition-all focus:outline-none"
                                aria-label="Ver membresías AMES"
                            >
                                Ver Membresías
                            </motion.a>
                        </div>

                        {/* Prueba social */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex items-center gap-3"
                        >
                            <div className="flex -space-x-2">
                                {[avatars.maria, avatars.juan, avatars.laura, avatars.carlos].map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        alt="Emprendedor AMES"
                                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                        loading="lazy"
                                        style={{ zIndex: 4 - i }}
                                    />
                                ))}
                            </div>
                            <span className="text-gray-600 text-sm">
                                <span className="text-gray-900 font-bold">+500 emprendedores</span> ya forman parte
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* ====== Columna derecha: Avatares orbitales ====== */}
                    <div
                        className="flex-1 relative hidden lg:flex items-center justify-center"
                        style={{ minHeight: 600 }}
                        aria-hidden="true"
                    >
                        {/* Anillos decorativos */}
                        {[320, 240, 160].map((size, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full"
                                style={{
                                    width: size,
                                    height: size,
                                    border: `1px solid rgba(104,32,121,${0.12 - i * 0.02})`,
                                    background: i === 2
                                        ? 'radial-gradient(circle, rgba(104,32,121,0.08) 0%, transparent 70%)'
                                        : 'transparent',
                                }}
                            />
                        ))}

                        {/* Avatar central */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.9, delay: 0.3, ease: 'backOut' }}
                            className="absolute rounded-full overflow-hidden border-4 border-white z-10"
                            style={{
                                width: 160, height: 160,
                                boxShadow: '0 12px 40px rgba(104,32,121,0.35)',
                            }}
                        >
                            <img
                                src={avatars.carlos}
                                alt="Fundador de AMES"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Avatares satélite */}
                        {satelliteAvatars.map((sat, i) => {
                            const rad = (sat.angle * Math.PI) / 180;
                            const cx = Math.cos(rad) * sat.radius;
                            const cy = Math.sin(rad) * sat.radius;
                            const float = floatAnimations[i % floatAnimations.length];

                            return (
                                <motion.div
                                    key={sat.id}
                                    initial={{ opacity: 0, scale: 0.4 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: 'backOut' }}
                                    className="absolute left-1/2 top-1/2"
                                    style={{
                                        transform: `translate(calc(-50% + ${cx}px), calc(-50% + ${cy}px))`,
                                        zIndex: 5,
                                    }}
                                >
                                    <motion.div
                                        animate={!prefersReducedMotion ? { y: float.y } : {}}
                                        transition={{ duration: float.duration, repeat: Infinity, ease: 'easeInOut' }}
                                        className="relative group"
                                    >
                                        <div
                                            className="rounded-full overflow-hidden border-[3px] border-white shadow-lg cursor-default"
                                            style={{
                                                width: sat.size, height: sat.size,
                                                transition: 'transform .3s',
                                            }}
                                            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12)'; }}
                                            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                                        >
                                            <img
                                                src={sat.photo}
                                                alt={sat.name}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                        {/* Tooltip */}
                                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap pointer-events-none">
                                            {sat.name}
                                        </span>
                                    </motion.div>
                                </motion.div>
                            );
                        })}

                        {/* Badge: Emprendedores activos */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 1.3 }}
                            className="absolute bottom-8 left-0 z-20"
                        >
                            <motion.div
                                animate={!prefersReducedMotion ? { y: [-4, 4, -4] } : {}}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="bg-secondary/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-secondary/30"
                            >
                                <p className="text-white text-xs font-medium">Emprendedores activos</p>
                                <p className="text-white text-xl font-extrabold font-heading">+500</p>
                            </motion.div>
                        </motion.div>

                        {/* Badge: Proyectos impulsados */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 1.5 }}
                            className="absolute bottom-8 right-0 z-20"
                        >
                            <motion.div
                                animate={!prefersReducedMotion ? { y: [4, -6, 4] } : {}}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                className="bg-accent/80 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-accent/30"
                            >
                                <p className="text-white text-xs font-medium">Proyectos impulsados</p>
                                <p className="text-white text-xl font-extrabold font-heading">+120</p>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>

                {/* Gradiente inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent pointer-events-none z-10" />
            </section>
        </>
    );
};

export default Hero;
