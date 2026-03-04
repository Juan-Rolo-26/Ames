import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { avatars } from '../../assets/images';
import MutualNetworkVisual from './MutualNetworkVisual';

const Hero = () => {
    const prefersReducedMotion = useReducedMotion();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        const title = 'Mutual Argentina | Mutual AMES Rosario';
        const description = 'Mutual Argentina en Rosario. Consultoría, ayuda económica y aceleradora de impacto. Impulsamos personas y empresas con respaldo real.';
        const keywords = 'Mutual Argentina, Mutual en Rosario, servicios mutuales, ayuda económica mutual, aceleradora mutual, networking empresarial Rosario, mutual para emprendedores';
        const canonicalUrl = 'https://amesmutual.com/mutual-argentina';

        const setMetaByName = (name, content) => {
            let tag = document.querySelector(`meta[name="${name}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('name', name);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        };

        const setMetaByProperty = (property, content) => {
            let tag = document.querySelector(`meta[property="${property}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('property', property);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        };

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', canonicalUrl);

        document.title = title;
        setMetaByName('description', description);
        setMetaByName('keywords', keywords);
        setMetaByProperty('og:title', title);
        setMetaByProperty('og:description', description);
        setMetaByProperty('og:url', canonicalUrl);
        setMetaByName('twitter:title', title);
        setMetaByName('twitter:description', description);
    }, []);

    return (
        <>
            <section
                ref={ref}
                className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background"
                aria-label="Hero: Asociación Mutual AMES"
            >
                {/* Glows animados */}
                <motion.div
                    animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/8 rounded-full blur-[140px] pointer-events-none"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut', delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-[140px] pointer-events-none"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut', delay: 2 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/4 rounded-full blur-[120px] pointer-events-none"
                />

                {/* Grid de puntos decorativos */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle, #1A2B7C 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                {/* ── Contenedor principal: dos columnas en desktop ── */}
                <div className="relative z-10 w-full px-5 sm:px-8 lg:px-16 xl:px-24 pt-28 pb-16 lg:py-0 lg:min-h-screen flex flex-col lg:flex-row items-center gap-10 lg:gap-0">

                    {/* ══ COLUMNA IZQUIERDA: Texto ══ */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:pr-10">

                        {/* Badge superior animado */}
                        <motion.div
                            initial={{ opacity: 0, y: -30, scale: 0.85 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.7, delay: 0.05, type: 'spring', stiffness: 160 }}
                            className="inline-flex items-center gap-2.5 bg-secondary/10 border border-secondary/25 text-secondary px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase backdrop-blur-sm"
                        >
                            <motion.span
                                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="w-2.5 h-2.5 rounded-full bg-secondary"
                            />
                            Mutual Argentina · Rosario, Santa Fe
                        </motion.div>

                        {/* Título — cada palabra sube individualmente */}
                        <div>
                            <h1 className="font-heading font-black leading-[1.0] tracking-tight">
                                {/* Línea 1 */}
                                <span className="block overflow-hidden">
                                    {['Mutual', 'Argentina'].map((word, i) => (
                                        <motion.span
                                            key={word}
                                            initial={{ opacity: 0, y: 80 }}
                                            animate={inView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ duration: 0.75, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                                            className="inline-block text-primary mr-4"
                                            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)' }}
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </span>
                                {/* Línea 2 — con gradiente animado */}
                                <span className="block overflow-hidden">
                                    {['con', 'Impacto', 'Real'].map((word, i) => (
                                        <motion.span
                                            key={word}
                                            initial={{ opacity: 0, y: 80 }}
                                            animate={inView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ duration: 0.75, delay: 0.35 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                            className="inline-block mr-4"
                                            style={{
                                                fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)',
                                                background: 'linear-gradient(90deg, #1A56DB 0%, #7C3AED 60%, #1A56DB 100%)',
                                                backgroundSize: '200% auto',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                                animation: 'shimmer 4s linear infinite',
                                            }}
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </span>
                            </h1>
                        </div>

                        {/* Subtítulo con fade suave */}
                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="text-gray-500 text-base md:text-xl font-medium leading-relaxed max-w-xl"
                        >
                            Somos una mutual en Rosario que impulsa personas, emprendedores y empresas
                            a través de{' '}
                            <motion.strong className="text-primary font-semibold" whileHover={{ scale: 1.02 }}>consultoría</motion.strong>,{' '}
                            <motion.strong className="text-secondary font-semibold" whileHover={{ scale: 1.02 }}>ayuda económica</motion.strong> y{' '}
                            <motion.strong className="text-accent font-semibold" whileHover={{ scale: 1.02 }}>aceleración de proyectos</motion.strong>.
                        </motion.p>

                        {/* CTAs con efecto magnético y glow */}
                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.85 }}
                            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
                        >
                            {/* Botón primario con glow pulsante */}
                            <motion.a
                                whileHover={{ scale: 1.06, y: -4, boxShadow: '0 20px 60px rgba(26,86,219,0.55)' }}
                                whileTap={{ scale: 0.97 }}
                                href="/servicios"
                                className="relative inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-lg text-white overflow-hidden"
                                style={{
                                    background: 'linear-gradient(135deg, #1A56DB 0%, #7C3AED 100%)',
                                    boxShadow: '0 8px 32px rgba(26,86,219,0.4)',
                                }}
                                aria-label="Conocer servicios de la mutual"
                            >
                                {/* Shimmer sobre botón */}
                                <motion.span
                                    className="absolute inset-0 bg-white/20"
                                    initial={{ x: '-100%', skewX: '-20deg' }}
                                    animate={{ x: '200%' }}
                                    transition={{ repeat: Infinity, duration: 2.5, ease: 'linear', repeatDelay: 1.5 }}
                                />
                                Conócé nuestros servicios
                                <motion.svg
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                    className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </motion.svg>
                            </motion.a>

                            {/* Botón secundario con borde animado */}
                            <motion.a
                                whileHover={{ scale: 1.06, y: -4 }}
                                whileTap={{ scale: 0.97 }}
                                href="https://wa.me/5493413702972?text=Hola,%20quiero%20solicitar%20asesoramiento%20en%20Mutual%20AMES."
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-white text-primary rounded-full font-bold text-lg border-2 border-primary/20 hover:border-primary transition-all shadow-md hover:shadow-xl"
                                aria-label="Solicitar asesoramiento en Mutual AMES"
                            >
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Solicitar asesoramiento
                            </motion.a>
                        </motion.div>

                        {/* Prueba social animada */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 1.0 }}
                            className="flex flex-col sm:flex-row items-center gap-6 pt-2"
                        >
                            <div className="flex -space-x-3">
                                {[avatars.maria, avatars.juan, avatars.laura, avatars.carlos].map((src, i) => (
                                    <motion.img
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 1.05 + i * 0.08 }}
                                        whileHover={{ scale: 1.2, zIndex: 10, y: -4 }}
                                        src={src}
                                        alt="Emprendedor AMES"
                                        className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-md cursor-pointer"
                                        loading="lazy"
                                        style={{ zIndex: 4 - i }}
                                    />
                                ))}
                            </div>
                            <div>
                                <span className="block text-gray-900 font-bold text-base leading-tight">+500 emprendedores</span>
                                <span className="text-gray-500 text-sm">ya forman parte de la comunidad</span>
                            </div>
                            <div className="hidden sm:block w-px h-10 bg-gray-200" />
                            <div className="flex gap-5">
                                {[{ n: '+50', l: 'Empresas Padrino', c: 'text-primary' }, { n: '+120', l: 'Proyectos acelerados', c: 'text-accent' }].map(({ n, l, c }) => (
                                    <div key={l} className="text-center">
                                        <motion.span
                                            className={`block font-heading font-black text-xl ${c}`}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ type: 'spring', stiffness: 200, delay: 1.2 }}
                                        >{n}</motion.span>
                                        <span className="text-xs text-gray-500 font-medium">{l}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>{/* fin columna izquierda */}

                    {/* ── COLUMNA DERECHA: Visualización de red (solo desktop) ── */}
                    <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-full lg:w-1/2">
                        <MutualNetworkVisual />
                    </div>

                    {/* ── MÓVIL: mini stats cards debajo del texto ── */}
                    <div className="flex lg:hidden w-full gap-3 pt-2">
                        {[
                            { n: '+500', l: 'Miembros activos', c: 'text-secondary' },
                            { n: '+50', l: 'Empresas Padrino', c: 'text-primary' },
                            { n: '+120', l: 'Proyectos acelerados', c: 'text-accent' },
                        ].map(({ n, l, c }) => (
                            <div key={l} className="flex-1 bg-white rounded-2xl border border-gray-100 p-3 text-center shadow-sm">
                                <span className={`block font-black text-xl ${c}`}>{n}</span>
                                <span className="text-[11px] text-gray-500 font-medium leading-tight block mt-0.5">{l}</span>
                            </div>
                        ))}
                    </div>

                </div>{/* fin columna derecha + contenedor principal */}

                {/* Gradiente inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/80 to-transparent pointer-events-none z-10" />
            </section>
        </>
    );
};

export default Hero;
