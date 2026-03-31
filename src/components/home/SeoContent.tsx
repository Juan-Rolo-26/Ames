import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, TrendingUp, Users, BookOpen, HeartHandshake, ArrowRight } from 'lucide-react';

const serviciosSeo = [
    {
        id: 'escuela-express',
        icon: <BookOpen className="w-6 h-6" />,
        titulo: 'Academia Express AMES',
        texto: 'Actividades educativas y formación profesional incluidas en la membresía para aplicar herramientas concretas en el contexto real.',
        grad: 'from-secondary to-primary',
        bg: 'bg-secondary/5',
        border: 'border-secondary/20',
        color: 'text-secondary',
    },
    {
        id: 'networking',
        icon: <Users className="w-6 h-6" />,
        titulo: 'Networking y Comunidad',
        texto: 'Vinculación estratégica entre emprendedores, profesionales y empresas con encuentros, comunidad activa y oportunidades reales.',
        grad: 'from-accent to-primary',
        bg: 'bg-accent/5',
        border: 'border-accent/20',
        color: 'text-accent',
    },
    {
        id: 'consultoria',
        icon: <TrendingUp className="w-6 h-6" />,
        titulo: 'Consultoría Estratégica',
        texto: 'Consultorías grupales e individuales para ordenar el negocio, validar decisiones y crecer con más claridad.',
        grad: 'from-secondary to-accent',
        bg: 'bg-secondary/5',
        border: 'border-secondary/20',
        color: 'text-secondary',
    },
    {
        id: 'ayuda-economica',
        icon: <Building2 className="w-6 h-6" />,
        titulo: 'Ayuda Económica e Inversiones',
        texto: 'Evaluación responsable y acompañamiento real para financiamiento o inversión con beneficios exclusivos para miembros.',
        grad: 'from-primary to-secondary',
        bg: 'bg-primary/5',
        border: 'border-primary/20',
        color: 'text-primary',
    },
    {
        id: 'aceleradora-de-impacto',
        icon: <TrendingUp className="w-6 h-6" />,
        titulo: 'Aceleradora de Impacto By AMES',
        texto: 'Programa intensivo para validar, estructurar y escalar proyectos con potencial y triple impacto.',
        grad: 'from-accent to-secondary',
        bg: 'bg-accent/5',
        border: 'border-accent/20',
        color: 'text-accent',
    },
    {
        id: 'empresas-padrinos',
        icon: <HeartHandshake className="w-6 h-6" />,
        titulo: 'Instituciones y Empresas Padrinos',
        texto: 'Instituciones y empresas que buscan visibilidad, RSE real y vínculos estratégicos dentro del ecosistema emprendedor.',
        grad: 'from-primary to-accent',
        bg: 'bg-primary/5',
        border: 'border-primary/20',
        color: 'text-primary',
    },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const SeoContent = () => {
    return (
        <section className="pt-8 pb-24 lg:pt-12 lg:pb-32 bg-white border-y border-gray-100 overflow-hidden">
            <div className="w-full px-5 sm:px-8 lg:px-20">
                <div>
                    <div className="text-center mb-14">
                        <motion.span {...fadeUp(0)} className="inline-block bg-secondary/10 text-secondary text-sm font-bold px-4 py-1.5 rounded-full mb-4 border border-secondary/20 tracking-wide uppercase">
                            Nuestros pilares
                        </motion.span>
                        <motion.h2 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-heading font-black text-primary leading-tight">
                            Servicios <span className="text-secondary">Ames</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {serviciosSeo.map((servicio, index) => (
                            <motion.div
                                key={servicio.id}
                                initial={{ opacity: 0, y: 48, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.6, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group h-full"
                            >
                                <Link
                                    to={`/servicios#${servicio.id}`}
                                    aria-label={`Ir a ${servicio.titulo}`}
                                    className={`flex h-full flex-col rounded-3xl border ${servicio.border} ${servicio.bg} p-7 transition-all duration-300 hover:shadow-xl hover:shadow-primary/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-4`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${servicio.grad} text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                                            {servicio.icon}
                                        </div>
                                        <motion.div
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.8, ease: 'easeInOut' }}
                                            className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${servicio.border} bg-white/80 ${servicio.color} shadow-sm backdrop-blur-sm transition-colors duration-300 group-hover:bg-white`}
                                        >
                                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                                        </motion.div>
                                    </div>
                                    <motion.h3 className={`mb-3 mt-6 text-xl font-heading font-bold ${servicio.color}`}>
                                        {servicio.titulo}
                                    </motion.h3>
                                    <p className="text-sm leading-relaxed text-gray-600">{servicio.texto}</p>
                                    <span className={`mt-6 inline-flex items-center gap-2 text-sm font-bold ${servicio.color}`}>
                                        Ver servicio
                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeoContent;
