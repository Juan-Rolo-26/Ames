import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { community } from '../../assets/images';
import { Users, TrendingUp, Award, Zap, MapPin, Star } from 'lucide-react';

// ── Animación de número contador ────────────────────────────────
function Counter({ to, suffix = '', duration = 2 }) {
    const ref = useRef(null);
    const motionVal = useMotionValue(0);
    const rounded = useTransform(motionVal, (v) => Math.round(v));
    const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

    useEffect(() => {
        if (!inView) return;
        const controls = animate(motionVal, to, { duration, ease: 'easeOut' });
        return controls.stop;
    }, [inView, to, duration, motionVal]);

    return (
        <span ref={(node) => { ref.current = node; inViewRef(node); }}>
            <motion.span>{rounded}</motion.span>{suffix}
        </span>
    );
}

// ── Bandas de texto marquee (empresas/valores) ───────────────────
const marqueeItems = [
    'Rosario', 'Emprendedores', 'Mutual', 'Impacto Real',
    'Networking', 'Aceleradora', 'Comunidad', 'Empresas Padrino',
];

function Marquee({ reverse = false }) {
    const items = [...marqueeItems, ...marqueeItems];
    return (
        <div className="overflow-hidden whitespace-nowrap py-3">
            <motion.div
                className="inline-flex gap-10 will-change-transform"
                animate={{ x: reverse ? ['0%', '100%'] : ['0%', '-100%'] }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
            >
                {items.map((item, i) => (
                    <span key={i} className="inline-flex items-center gap-3 text-white/25 text-sm font-bold tracking-widest uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary/60 inline-block flex-shrink-0" />
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

// ── Stats ────────────────────────────────────────────────────────
const stats = [
    {
        num: 500, suffix: '+', label: 'Emprendedores',
        sub: 'en la comunidad activa',
        icon: <Users className="w-5 h-5" />,
        grad: 'from-[#1A56DB] to-[#7C3AED]',
        glow: 'rgba(26,86,219,0.35)',
    },
    {
        num: 50, suffix: '+', label: 'Empresas Padrino',
        sub: 'aliadas estratégicas',
        icon: <Award className="w-5 h-5" />,
        grad: 'from-[#7C3AED] to-[#1A56DB]',
        glow: 'rgba(124,58,237,0.35)',
    },
    {
        num: 120, suffix: '+', label: 'Proyectos Acelerados',
        sub: 'con impacto real medible',
        icon: <Zap className="w-5 h-5" />,
        grad: 'from-[#1A56DB] to-[#7C3AED]',
        glow: 'rgba(26,86,219,0.3)',
    },
    {
        num: 3, suffix: ' años', label: 'De Trayectoria',
        sub: 'creciendo en Argentina',
        icon: <TrendingUp className="w-5 h-5" />,
        grad: 'from-[#7C3AED] to-[#1A56DB]',
        glow: 'rgba(124,58,237,0.3)',
    },
];

const Confianza = () => {
    return (
        <section className="relative bg-[#040919] overflow-hidden border-b border-white/10">

            {/* ── Fondo: fotografía con overlay fuerte ── */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.18 }}
                    transition={{ duration: 2.5, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    src={community.evento}
                    alt="Comunidad AMES Rosario"
                    className="w-full h-full object-cover object-top"
                />
                {/* Gradientes de profundidad */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#040919] via-transparent to-[#040919]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#040919] via-transparent to-[#040919]" />
            </div>

            {/* ── Glows ambientales ── */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
                style={{ background: 'radial-gradient(circle, rgba(26,86,219,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)', filter: 'blur(60px)' }} />

            {/* ── Marquee top ── */}
            <div className="relative z-10 border-b border-white/6">
                <Marquee />
            </div>

            {/* ── Contenido principal ── */}
            <div className="relative z-10 w-full px-5 sm:px-8 lg:px-20 py-10 lg:py-12">

                {/* Grid de métricas */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40, scale: 0.92 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.6, delay: i * 0.1, type: 'spring', stiffness: 90 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="relative rounded-2xl overflow-hidden cursor-default group"
                            style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                backdropFilter: 'blur(20px)',
                            }}
                        >
                            {/* Glow interno al hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `radial-gradient(circle at 50% 0%, ${stat.glow} 0%, transparent 70%)` }} />

                            {/* Línea superior con gradiente AMES */}
                            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${stat.grad}`} />

                            <div className="relative z-10 p-4 lg:p-6 flex flex-col">
                                {/* Ícono pequeño */}
                                <div className={`w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br ${stat.grad} text-white flex items-center justify-center mb-3 shadow-md`}>
                                    {stat.icon}
                                </div>

                                {/* Número contador */}
                                <p className="font-heading font-black text-white leading-none mb-1"
                                    style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
                                    <Counter to={stat.num} suffix={stat.suffix} duration={2} />
                                </p>

                                <p className="text-white font-semibold text-sm mb-0.5">{stat.label}</p>
                                <p className="text-white/40 text-xs">{stat.sub}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── Marquee bottom ── */}
            <div className="relative z-10 border-t border-white/6">
                <Marquee reverse />
            </div>
        </section>
    );
};

export default Confianza;
