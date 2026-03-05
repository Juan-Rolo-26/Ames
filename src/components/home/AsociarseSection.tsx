import { motion } from 'framer-motion';
import { CheckCircle2, Users, Handshake, ArrowRight, BadgeCheck } from 'lucide-react';
import { community } from '../../assets/images';

const beneficios = [
    {
        icon: <Users className="w-5 h-5" />,
        titulo: 'Red de emprendedores activos',
        desc: 'Conectás con más de 500 socios que comparten desafíos, contactos y oportunidades reales.',
    },
    {
        icon: <BadgeCheck className="w-5 h-5" />,
        titulo: 'Consultoría y acompañamiento',
        desc: 'Accedés a sesiones con especialistas que diagnostican tu proyecto y te guían en cada etapa.',
    },
    {
        icon: <Handshake className="w-5 h-5" />,
        titulo: 'Ayuda económica mutua',
        desc: 'Como mutual, podés acceder a financiamiento solidario para invertir y hacer crecer tu negocio.',
    },
    {
        icon: <CheckCircle2 className="w-5 h-5" />,
        titulo: 'Sin permanencia mínima',
        desc: 'Tu membresía es mensual. Sin contratos, sin letra chica. Cancelás cuando quieras.',
    },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
});

const AsociarseSection = () => {
    return (
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

            <div className="relative z-10 w-full px-5 sm:px-8 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-center">

                    {/* ── Columna izquierda: texto + beneficios ── */}
                    <div className="w-full lg:w-1/2">
                        <motion.span
                            {...fadeUp(0)}
                            className="inline-flex items-center gap-2 bg-secondary/10 text-secondary font-bold text-sm px-4 py-2 rounded-full mb-6"
                        >
                            <Users className="w-4 h-4" />
                            Asociate a la Mutual
                        </motion.span>

                        <motion.h2
                            {...fadeUp(0.1)}
                            className="text-4xl md:text-5xl font-heading font-black text-primary leading-tight mb-5"
                        >
                            Ser socio de AMES es{' '}
                            <span className="text-secondary">más que una membresía</span>
                        </motion.h2>

                        <motion.p
                            {...fadeUp(0.2)}
                            className="text-lg text-gray-600 leading-relaxed mb-10 max-w-lg"
                        >
                            AMES es una mutual sin fines de lucro. Cuando te asociás, no sos un cliente: sos
                            parte de una comunidad que se potencia mutuamente. Cada socio aporta y recibe
                            en igual medida — formación, red, financiamiento y acompañamiento real.
                        </motion.p>

                        {/* Beneficios */}
                        <div className="space-y-5 mb-10">
                            {beneficios.map((b, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeUp(0.25 + i * 0.1)}
                                    className="flex gap-4 items-start group"
                                >
                                    <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                        {b.icon}
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary text-base mb-0.5">{b.titulo}</p>
                                        <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <motion.div {...fadeUp(0.7)} className="flex flex-wrap gap-4">
                            <a
                                href="https://aceleradoraimpactobyames.tiendup.com/p/membresia-mensual-impacto-by-ames"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-secondary/30 hover:shadow-secondary/50 hover:-translate-y-1 transition-all duration-300"
                            >
                                Quiero asociarme
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href="https://wa.me/5493413702972?text=Hola%2C%20quiero%20saber%20c%C3%B3mo%20asociarme%20a%20AMES"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 border-2 border-primary/20 text-primary px-8 py-4 rounded-full font-bold text-base hover:border-primary hover:-translate-y-1 transition-all duration-300"
                            >
                                Tengo una consulta
                            </a>
                        </motion.div>
                    </div>

                    {/* ── Columna derecha: tarjeta visual ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="w-full lg:w-1/2 relative"
                    >
                        {/* Imagen con overlay */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={community.networking}
                                alt="Socios de la Mutual AMES Rosario"
                                className="w-full h-72 sm:h-[420px] lg:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />

                            {/* Overlay card abajo */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
                                    <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">
                                        Membresía mensual
                                    </p>
                                    <p className="text-white font-heading font-black text-2xl mb-3">
                                        Acceso completo a AMES
                                    </p>
                                    <ul className="space-y-1.5">
                                        {['Consultoría estratégica', 'Networking y comunidad', 'Escuela Express', 'Ayuda económica mutua'].map((item) => (
                                            <li key={item} className="flex items-center gap-2 text-white/80 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Badge flotante */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                            className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-3 flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                                <Users className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-black text-primary font-heading text-xl leading-none">+500</p>
                                <p className="text-gray-500 text-xs">socios activos</p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AsociarseSection;
