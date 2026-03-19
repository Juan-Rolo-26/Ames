import { motion } from 'framer-motion';
import { CheckCircle2, Users, Handshake, ArrowRight, BadgeCheck } from 'lucide-react';
import { community } from '../../assets/images';

const beneficios = [
    {
        icon: <Users className="w-5 h-5" />,
        titulo: 'Comunidad que se potencia',
        desc: 'No sos un cliente: formás parte de una red colaborativa donde cada socio aporta y recibe valor real.',
    },
    {
        icon: <BadgeCheck className="w-5 h-5" />,
        titulo: 'Consultoría y planificación',
        desc: 'Accedés a consultoría estratégica, planificación y diseño de planes de acción según tu etapa y objetivos.',
    },
    {
        icon: <Handshake className="w-5 h-5" />,
        titulo: 'Networking, ayuda e inversiones',
        desc: 'Conectás con networking de calidad y accedés a herramientas de ayuda económica e inversiones dentro del marco mutual.',
    },
    {
        icon: <CheckCircle2 className="w-5 h-5" />,
        titulo: 'Formación y aceleración',
        desc: 'Sumás formación práctica y académica, más programas de aceleración para proyectos con potencial de expansión.',
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
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
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
                            className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl"
                        >
                            AMES es una mutual interdisciplinaria. Cuando te asociás, no sos un cliente: sos parte de una comunidad que se potencia mutuamente, con fuertes lazos colaborativos. Cada socio aporta y recibe formación, red, financiamiento y acompañamiento real, generando sinergia y valor agregado para el ecosistema emprendedor argentino.
                        </motion.p>

                        {/* Beneficios */}
                        <div className="space-y-5 mb-10 w-full">
                            {beneficios.map((b, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeUp(0.25 + i * 0.1)}
                                    className="flex gap-4 items-start group"
                                >
                                    <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                        {b.icon}
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-primary text-base mb-0.5">{b.titulo}</p>
                                        <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <motion.div {...fadeUp(0.7)} className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center lg:justify-start w-full">
                            <a
                                href="https://aceleradoraimpactobyames.tiendup.com/p/membresia-mensual-impacto-by-ames"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-secondary/30 hover:shadow-secondary/50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
                            >
                                Quiero asociarme
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href="https://wa.me/5493413702972?text=Hola%2C%20quiero%20saber%20c%C3%B3mo%20asociarme%20a%20AMES"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 border-2 border-primary/20 text-primary px-8 py-4 rounded-full font-bold text-base hover:border-primary hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
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
                        {/* Imagen principal */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={community.networking}
                                alt="Socios de la Mutual AMES Rosario"
                                className="w-full h-72 sm:h-[420px] lg:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/10 to-transparent" />
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
                                <p className="text-gray-500 text-xs">emprendedores en comunidad</p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AsociarseSection;
