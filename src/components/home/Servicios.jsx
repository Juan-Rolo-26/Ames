import { motion } from 'framer-motion';
import { Briefcase, Users, GraduationCap, Banknote, Rocket, HeartHandshake, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, community, padrinos } from '../../assets/images';

const serviciosData = [
    {
        id: 'consultoria',
        icon: <Briefcase className="w-7 h-7" />,
        image: services.consultoria,
        colorGrad: 'from-secondary to-violet-800',
        colorText: 'text-secondary',
        colorBg: 'bg-secondary/10',
        colorBorder: 'border-secondary/20',
        badge: 'Mentorías incluidas',
        title: 'Consultoría Estratégica',
        desc: 'Diagnóstico personalizado de tu negocio con especialistas que ya recorrieron el camino. Identificamos cuellos de botella y diseñamos un plan de acción concreto para que puedas implementar desde el primer día.',
        puntos: [
            'Sesión de diagnóstico de 90 min con especialista',
            'Plan de acción a 30/60/90 días',
            'Seguimiento quincenal de avances',
        ],
    },
    {
        id: 'networking',
        icon: <Users className="w-7 h-7" />,
        image: community.networking,
        colorGrad: 'from-accent to-blue-700',
        colorText: 'text-accent',
        colorBg: 'bg-accent/10',
        colorBorder: 'border-accent/20',
        badge: '+500 miembros',
        title: 'Networking & Comunidad',
        desc: 'El 80% de las oportunidades llegan a través de tu red. Accedé a un ecosistema real de emprendedores, proveedores y referentes que se juntan para hacer negocios con propósito y generar colaboraciones concretas.',
        puntos: [
            'Rondas de negocios mensuales estructuradas',
            'Directorio de emprendedores y proveedores',
            'Grupos de mastermind por industria',
        ],
    },
    {
        id: 'escuela-express',
        icon: <GraduationCap className="w-7 h-7" />,
        image: services.escuela,
        colorGrad: 'from-pink-600 to-secondary',
        colorText: 'text-pink-600',
        colorBg: 'bg-pink-600/10',
        colorBorder: 'border-pink-600/20',
        badge: 'Formación práctica',
        title: 'Escuela Express AMES',
        desc: 'Capacitación intensiva y 100% orientada a la acción. Módulos de 4 a 8 horas sobre ventas, finanzas, marketing y liderazgo. Sin vueltas, sin teoría aburrida. Lo que aprendés hoy lo aplicás mañana en tu negocio.',
        puntos: [
            'Ventas, finanzas, marketing y liderazgo',
            'Módulos cortos con casos reales',
            'Descuento exclusivo para miembros AMES',
        ],
    },
    {
        id: 'ayuda-economica',
        icon: <Banknote className="w-7 h-7" />,
        image: services.financiamiento,
        colorGrad: 'from-green-600 to-teal-700',
        colorText: 'text-green-700',
        colorBg: 'bg-green-600/10',
        colorBorder: 'border-green-600/20',
        badge: 'Sin garantías imposibles',
        title: 'Ayuda Económica Mutual',
        desc: 'Financiamiento solidario con tasas muy por debajo del mercado y evaluación humana (sin el papeleo imposible de los bancos). Desde $50.000 hasta $1.500.000 con plazos flexibles de 3 a 18 meses para capital de trabajo o inversión.',
        puntos: [
            'Tasas muy por debajo del mercado',
            'Evaluación personalizada en 5 días',
            'Acreditación en 24/48 hs hábiles',
        ],
    },
    {
        id: 'aceleradora-de-impacto',
        icon: <Rocket className="w-7 h-7" />,
        image: services.aceleradora,
        colorGrad: 'from-primary to-accent',
        colorText: 'text-primary',
        colorBg: 'bg-primary/10',
        colorBorder: 'border-primary/20',
        badge: 'Programa de 4 meses',
        title: 'Aceleradora de Impacto',
        desc: 'Nuestro programa insignia. 4 meses de acompañamiento intensivo con mentor dedicado, cohortes de hasta 15 proyectos, workshops semanales y Demo Day ante inversores. Diseñado para proyectos con tracción que quieren escalar de verdad.',
        puntos: [
            'Mentor dedicado en tu industria',
            'Demo Day ante inversores y padrinos',
            'Acceso prioritario a financiamiento',
        ],
    },
    {
        id: 'empresas-padrinos',
        icon: <HeartHandshake className="w-7 h-7" />,
        image: padrinos.alianza,
        colorGrad: 'from-violet-700 to-secondary',
        colorText: 'text-violet-700',
        colorBg: 'bg-violet-700/10',
        colorBorder: 'border-violet-700/20',
        badge: 'Para empresas',
        title: 'Empresas Padrino',
        desc: 'Posicioná tu empresa siendo parte activa del ecosistema emprendedor. RSE real y medible, visibilidad de marca ante +500 emprendedores, acceso a talentos y proveedores innovadores. Categorías Platinum, Oro, Plata y Networking.',
        puntos: [
            'Visibilidad en todos los eventos AMES',
            'Informe de impacto RSE certificado',
            'Acceso a red de emprendedores activos',
        ],
    },
];

const Servicios = () => {
    return (
        <section className="py-28 bg-background">
            <div className="w-full px-10 lg:px-20">

                {/* Encabezado */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block bg-secondary/10 text-secondary text-sm font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase border border-secondary/20"
                    >
                        Nuestros Servicios
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-heading font-black text-primary mb-6 leading-tight"
                    >
                        Todo lo que necesitás para que tu proyecto <span className="text-secondary">despegue de verdad</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 leading-relaxed"
                    >
                        Seis pilares diseñados para acompañarte en cada etapa del camino emprendedor. Desde el diagnóstico hasta la aceleración, AMES tiene lo que necesitás.
                    </motion.p>
                </div>

                {/* Grid de servicios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviciosData.map((servicio, index) => (
                        <motion.div
                            key={servicio.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6, delay: index * 0.09, type: 'spring', stiffness: 90 }}
                            whileHover={{ y: -12 }}
                            className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-secondary/15 border border-gray-100 transition-all flex flex-col overflow-hidden"
                        >
                            {/* Imagen grande */}
                            <div className="relative h-72 w-full overflow-hidden">
                                <img
                                    src={servicio.image}
                                    alt={servicio.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay degradado */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />

                                {/* Badge en esquina superior derecha */}
                                <span className={`absolute top-4 right-4 z-20 text-xs font-bold px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow ${servicio.colorText}`}>
                                    {servicio.badge}
                                </span>

                                {/* Ícono del servicio en esquina inferior izquierda */}
                                <div className={`absolute bottom-4 left-4 z-20 w-12 h-12 rounded-2xl bg-gradient-to-br ${servicio.colorGrad} text-white flex items-center justify-center shadow-xl`}>
                                    {servicio.icon}
                                </div>

                                {/* Título sobre la imagen */}
                                <h3 className="absolute bottom-4 left-20 right-4 z-20 text-white font-heading font-black text-xl leading-tight drop-shadow-lg">
                                    {servicio.title}
                                </h3>
                            </div>

                            {/* Contenido de texto */}
                            <div className="p-7 flex flex-col flex-grow">
                                <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                                    {servicio.desc}
                                </p>

                                {/* Puntos clave */}
                                <ul className="space-y-2 mb-7">
                                    {servicio.puntos.map((punto, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                            <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${servicio.colorText}`} />
                                            <span>{punto}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link
                                    to={`/servicios#${servicio.id}`}
                                    className={`mt-auto inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-2xl text-sm font-bold border-2 ${servicio.colorBorder} ${servicio.colorBg} ${servicio.colorText} hover:shadow-lg transition-all group/btn`}
                                >
                                    Ver todos los detalles
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA inferior */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-500 mb-5 text-base">¿Querés acceder a todos los servicios en un solo plan?</p>
                    <Link
                        to="/servicios"
                        className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-base hover:bg-secondary transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                    >
                        Ver todos los servicios completos
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Servicios;
