import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Phone, Mail, Building2, TrendingUp, Users, BookOpen, HeartHandshake } from 'lucide-react';

const serviciosSeo = [
    {
        icon: <TrendingUp className="w-6 h-6" />,
        titulo: 'Consultoría Estratégica',
        texto: 'Asesoramiento profesional para empresas, emprendedores y organizaciones que buscan crecer de forma sostenible en Argentina.',
        grad: 'from-secondary to-accent',
        bg: 'bg-secondary/5',
        border: 'border-secondary/20',
        color: 'text-secondary',
    },
    {
        icon: <Building2 className="w-6 h-6" />,
        titulo: 'Ayuda Económica Mutual',
        texto: 'Soluciones de ayuda económica accesibles, claras y seguras para asociados de nuestra mutual sin burocracia bancaria.',
        grad: 'from-primary to-secondary',
        bg: 'bg-primary/5',
        border: 'border-primary/20',
        color: 'text-primary',
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        titulo: 'Aceleradora de Impacto',
        texto: 'Proyectos innovadores con mentorías, networking y herramientas concretas para escalar hacia un modelo rentable y sostenible.',
        grad: 'from-accent to-secondary',
        bg: 'bg-accent/5',
        border: 'border-accent/20',
        color: 'text-accent',
    },
    {
        icon: <BookOpen className="w-6 h-6" />,
        titulo: 'Escuela Express',
        texto: 'Formación práctica para emprendedores y profesionales que desean mejorar sus habilidades y potenciar sus negocios.',
        grad: 'from-secondary to-primary',
        bg: 'bg-secondary/5',
        border: 'border-secondary/20',
        color: 'text-secondary',
    },
    {
        icon: <HeartHandshake className="w-6 h-6" />,
        titulo: 'Empresas Padrino',
        texto: 'Conectamos empresas consolidadas con proyectos emergentes generando sinergia, RSE real y crecimiento mutuo.',
        grad: 'from-primary to-accent',
        bg: 'bg-primary/5',
        border: 'border-primary/20',
        color: 'text-primary',
    },
    {
        icon: <Users className="w-6 h-6" />,
        titulo: 'Red de Networking',
        texto: 'Acceso exclusivo a +500 emprendedores, eventos mensuales y rondas de negocios para expandir contactos y oportunidades.',
        grad: 'from-accent to-primary',
        bg: 'bg-accent/5',
        border: 'border-accent/20',
        color: 'text-accent',
    },
];

const razones = [
    'Transparencia en cada proceso',
    'Asesoramiento 100% personalizado',
    'Impacto social y empresarial real',
    'Red de networking activa +500 miembros',
    'Enfoque en crecimiento sostenible',
    'Sin burocracia bancaria ni avales imposibles',
];

// Variantes reutilizables
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeLeft = (delay = 0) => ({
    initial: { opacity: 0, x: -48 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeRight = (delay = 0) => ({
    initial: { opacity: 0, x: 48 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const SeoContent = () => {
    return (
        <section className="py-14 lg:py-24 bg-white border-y border-gray-100 overflow-hidden">
            <div className="w-full px-5 sm:px-8 lg:px-20 space-y-24">

                {/* ── Bloque 1: ¿Qué es AMES? — dos columnas ── */}
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Izquierda: Título grande */}
                    <motion.div {...fadeLeft(0)} className="w-full lg:w-5/12">
                        <motion.span
                            {...fadeUp(0.05)}
                            className="inline-block bg-secondary/10 text-secondary text-sm font-bold px-4 py-1.5 rounded-full mb-5 border border-secondary/20 tracking-wide uppercase"
                        >
                            Conocé AMES
                        </motion.span>
                        <motion.h2
                            {...fadeLeft(0.1)}
                            className="text-4xl md:text-5xl font-heading font-black text-primary leading-tight mb-6"
                        >
                            ¿Qué es{' '}
                            <span
                                style={{
                                    background: 'linear-gradient(90deg, #1A56DB 0%, #7C3AED 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                Mutual AMES?
                            </span>
                        </motion.h2>
                        {/* Línea decorativa animada */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '80px' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="h-1 rounded-full mb-6"
                            style={{ background: 'linear-gradient(90deg, #1A56DB, #7C3AED)' }}
                        />
                    </motion.div>

                    {/* Derecha: Texto */}
                    <motion.div {...fadeRight(0.15)} className="w-full lg:w-7/12 space-y-5">
                        {[
                            'Mutual AMES es una Mutual Argentina con sede en Rosario dedicada a brindar soluciones estratégicas a personas, emprendedores y empresas. Nuestro objetivo es generar impacto real a través de servicios mutuales modernos, ágiles y enfocados en el crecimiento.',
                            'Trabajamos con una visión innovadora que combina asesoramiento profesional, networking, formación y acompañamiento financiero para que cada asociado pueda alcanzar su máximo potencial.',
                        ].map((texto, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                                className="text-gray-600 text-lg leading-relaxed"
                            >
                                {texto}
                            </motion.p>
                        ))}
                    </motion.div>
                </div>

                {/* ── Bloque 2: Servicios — grid 3 columnas ── */}
                <div>
                    <div className="text-center mb-14">
                        <motion.span {...fadeUp(0)} className="inline-block bg-secondary/10 text-secondary text-sm font-bold px-4 py-1.5 rounded-full mb-4 border border-secondary/20 tracking-wide uppercase">
                            Nuestros pilares
                        </motion.span>
                        <motion.h2 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-heading font-black text-primary leading-tight">
                            Servicios de Nuestra{' '}
                            <span className="text-secondary">Mutual en Argentina</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {serviciosSeo.map((s, i) => (
                            <motion.div
                                key={s.titulo}
                                initial={{ opacity: 0, y: 48, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className={`group rounded-3xl border ${s.border} ${s.bg} p-7 cursor-default hover:shadow-xl hover:shadow-primary/8 transition-all duration-300`}
                            >
                                {/* Ícono con gradiente */}
                                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.grad} text-white flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {s.icon}
                                </div>
                                <motion.h3
                                    className={`text-xl font-heading font-bold ${s.color} mb-3`}
                                >
                                    {s.titulo}
                                </motion.h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{s.texto}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── Bloque 3: Ubicación + Contacto — horizontal ── */}
                <motion.div
                    {...fadeUp(0)}
                    className="rounded-3xl overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #1A56DB 0%, #7C3AED 100%)' }}
                >
                    <div className="flex flex-col lg:flex-row">
                        {/* Texto */}
                        <div className="flex-1 p-10 lg:p-14 text-white">
                            <motion.span {...fadeUp(0.05)} className="inline-block bg-white/15 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase border border-white/25">
                                Rosario, Santa Fe
                            </motion.span>
                            <motion.h2 {...fadeUp(0.1)} className="text-3xl md:text-4xl font-heading font-black text-white mb-4 leading-tight">
                                Mutual en Rosario,<br /> Argentina
                            </motion.h2>
                            <motion.p {...fadeUp(0.18)} className="text-white/80 text-lg leading-relaxed">
                                Mutual AMES tiene sede en Rosario, brindando servicios a nivel local y nacional. Nuestra ubicación estratégica nos permite acompañar tanto a personas como empresas en toda la región.
                            </motion.p>
                        </div>
                        {/* Datos de contacto */}
                        <div className="flex-1 bg-white/10 backdrop-blur-sm p-10 lg:p-14 flex flex-col justify-center gap-5">
                            {[
                                { icon: <MapPin className="w-5 h-5 shrink-0" />, label: 'Dirección', val: 'Paraguay 751, Rosario' },
                                { icon: <Mail className="w-5 h-5 shrink-0" />, label: 'Email', val: 'aceleradoraimpactobyames@gmail.com', href: 'mailto:aceleradoraimpactobyames@gmail.com' },
                                { icon: <Phone className="w-5 h-5 shrink-0" />, label: 'Ayuda Económica', val: '3417483978', href: 'tel:+5493417483978' },
                                { icon: <Phone className="w-5 h-5 shrink-0" />, label: 'Impacto by AMES', val: '3413702972', href: 'tel:+5493413702972' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                                    className="flex items-start gap-3 text-white"
                                >
                                    <span className="mt-0.5 text-white/70">{item.icon}</span>
                                    <div>
                                        <span className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-0.5">{item.label}</span>
                                        {item.href ? (
                                            <a href={item.href} className="text-white font-semibold hover:text-white/80 transition-colors text-sm">{item.val}</a>
                                        ) : (
                                            <span className="text-white font-semibold text-sm">{item.val}</span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ── Bloque 4: ¿Por qué elegirnos? + ¿Qué es una mutual? — dos columnas ── */}
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Por qué elegirnos */}
                    <div className="w-full lg:w-1/2">
                        <motion.span {...fadeUp(0)} className="inline-block bg-accent/10 text-accent text-sm font-bold px-4 py-1.5 rounded-full mb-5 border border-accent/20 tracking-wide uppercase">
                            Nuestros valores
                        </motion.span>
                        <motion.h2 {...fadeLeft(0.08)} className="text-4xl font-heading font-black text-primary mb-8 leading-tight">
                            ¿Por qué elegir nuestra{' '}
                            <span className="text-accent">Mutual Argentina?</span>
                        </motion.h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {razones.map((razon, i) => (
                                <motion.div
                                    key={razon}
                                    initial={{ opacity: 0, x: -32 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ x: 4, scale: 1.02 }}
                                    className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-2xl p-4 hover:border-accent/30 hover:bg-accent/5 transition-all"
                                >
                                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium text-sm leading-snug">{razon}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ¿Qué es una mutual? */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <motion.span {...fadeUp(0.05)} className="inline-block bg-primary/10 text-primary text-sm font-bold px-4 py-1.5 rounded-full mb-5 border border-primary/20 tracking-wide uppercase">
                            Marco legal
                        </motion.span>
                        <motion.h2 {...fadeRight(0.1)} className="text-4xl font-heading font-black text-primary mb-6 leading-tight">
                            ¿Qué es una Mutual{' '}
                            <span className="text-secondary">en Argentina?</span>
                        </motion.h2>
                        <motion.p {...fadeRight(0.18)} className="text-gray-600 text-lg leading-relaxed mb-6">
                            Una mutual en Argentina es una entidad sin fines de lucro que brinda servicios y beneficios a sus asociados bajo el principio de ayuda mutua. Regulada por el INAES, garantiza transparencia y seguridad jurídica en cada operación.
                        </motion.p>
                        <motion.p {...fadeRight(0.26)} className="text-gray-600 text-lg leading-relaxed">
                            Mutual AMES trabaja bajo este modelo brindando ayuda económica, asesoramiento y oportunidades de crecimiento a sus miembros, combinando el marco legal mutual con innovación y tecnología.
                        </motion.p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SeoContent;
