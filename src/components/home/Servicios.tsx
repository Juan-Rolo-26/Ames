import { motion } from 'framer-motion';
import { Briefcase, Users, GraduationCap, Banknote, Rocket, HeartHandshake, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, community, padrinos } from '../../assets/images';

const serviciosData = [
    {
        id: 'escuela-express',
        icon: <GraduationCap className="w-7 h-7" />,
        image: services.escuelaDetalle,
        colorGrad: 'from-accent to-violet-900',
        colorText: 'text-accent',
        colorBg: 'bg-accent/10',
        colorBorder: 'border-accent/25',
        badge: 'Incluido en tu membresía',
        title: 'Academia Express AMES',
        alt: 'Formación para emprendedores en mutual argentina',
        desc: 'Academia Express AMES te da acceso a actividades educativas, formación profesional y herramientas aplicables al contexto real para emprender, liderar equipos o crecer dentro de una empresa.',
        puntos: [
            'Actividades educativas y formación profesional incluidas',
            'Módulos aplicados en ventas, marketing, finanzas y gestión',
            'Una charla mensual con consultores para seguir sumando valor',
        ],
    },
    {
        id: 'networking',
        icon: <Users className="w-7 h-7" />,
        image: community.networkingDetalle,
        colorGrad: 'from-secondary to-blue-700',
        colorText: 'text-secondary',
        colorBg: 'bg-secondary/10',
        colorBorder: 'border-secondary/25',
        badge: 'Incluido en tu membresía',
        title: 'Networking y Comunidad',
        alt: 'Networking empresarial de mutual en Rosario',
        desc: 'Networking y Comunidad conecta emprendedores, profesionales y empresas en espacios donde surgen alianzas, contactos valiosos y oportunidades comerciales reales.',
        puntos: [
            'Comunidad activa de emprendedores, profesionales y empresas',
            'Encuentros y vínculos estratégicos con oportunidades reales',
            'Uso de oficinas hasta 2 veces al mes',
        ],
    },
    {
        id: 'consultoria',
        icon: <Briefcase className="w-7 h-7" />,
        image: services.consultoriaDetalle,
        colorGrad: 'from-primary to-secondary',
        colorText: 'text-secondary',
        colorBg: 'bg-secondary/10',
        colorBorder: 'border-secondary/25',
        badge: 'Descuentos + consultorías sin cargo',
        title: 'Consultoría Estratégica',
        alt: 'Servicios de mutual en Argentina - consultoría estratégica',
        desc: 'Consultoría Estratégica brinda acompañamiento profesional para ordenar el negocio, evaluar viabilidad y tomar decisiones con más claridad.',
        puntos: [
            'Consultoría grupal mensual de cortesía',
            'Sesiones individuales con descuento AMES',
            'Diagnóstico del negocio y próximos pasos concretos',
        ],
    },
    {
        id: 'ayuda-economica',
        icon: <Banknote className="w-7 h-7" />,
        image: services.financiamiento,
        colorGrad: 'from-primary to-secondary',
        colorText: 'text-secondary',
        colorBg: 'bg-secondary/10',
        colorBorder: 'border-secondary/25',
        badge: 'Beneficios exclusivos',
        title: 'Ayuda Económica e Inversiones',
        alt: 'Ayuda económica mutual AMES',
        desc: 'Ayuda Económica e Inversiones acompaña decisiones de financiamiento e inversión con evaluación personalizada, análisis responsable y beneficios exclusivos para miembros.',
        puntos: [
            'Evaluación personalizada según perfil, costo y rendimiento',
            'Alternativas para financiamiento o inversión con respaldo',
            'Beneficios exclusivos para miembros que cumplan requisitos',
        ],
    },
    {
        id: 'aceleradora-de-impacto',
        icon: <Rocket className="w-7 h-7" />,
        image: services.aceleradora,
        colorGrad: 'from-accent to-secondary',
        colorText: 'text-accent',
        colorBg: 'bg-accent/10',
        colorBorder: 'border-accent/25',
        badge: 'Descuentos + consultorías sin cargo',
        title: 'Aceleradora de Impacto By AMES',
        alt: 'Aceleradora de proyectos en mutual argentina',
        desc: 'La Aceleradora de Impacto By AMES es un programa intensivo para convertir proyectos con potencial en modelos de negocio validados, escalables y con triple impacto.',
        puntos: [
            'Programa intensivo y estructurado de 4 meses',
            'Mentores calificados y acceso prioritario a financiamiento',
            'Demo Day ante Padrinos AMES e inversores',
        ],
    },
    {
        id: 'empresas-padrinos',
        icon: <HeartHandshake className="w-7 h-7" />,
        image: padrinos.alianzaDetalle,
        colorGrad: 'from-primary to-accent',
        colorText: 'text-primary',
        colorBg: 'bg-primary/10',
        colorBorder: 'border-primary/25',
        badge: 'Para instituciones y empresas',
        title: 'Instituciones y Empresas Padrinos',
        alt: 'Empresas padrino en mutual de emprendedores',
        desc: 'El Programa Padrinos conecta instituciones y empresas con el ecosistema emprendedor para generar posicionamiento, vínculos de valor y desarrollo regional.',
        puntos: [
            'Visibilidad de marca y participación en eventos AMES',
            'Capacitación para colaboradores y presentación de proyectos',
            'Acompañamiento profesional para decisiones de inversión',
        ],
    },
];

const Servicios = () => {
    return (
        <section className="py-16 lg:py-28 bg-background">
            <div className="w-full px-5 sm:px-8 lg:px-20">

                {/* Encabezado */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: -16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block bg-secondary/10 text-secondary text-sm font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase border border-secondary/20"
                    >
                        Nuestros Servicios
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-heading font-black text-primary mb-6 leading-tight"
                    >
                        Servicios <span className="text-secondary">Ames</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 leading-relaxed"
                    >
                        Primero vas a ver lo que está incluido o potenciado por tu membresía; después, los programas y alianzas que amplían tu crecimiento dentro del ecosistema AMES.
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
                                    alt={servicio.alt}
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

                            {/* Contenido de texto — sin descripción larga, queda en página de detalle */}
                            <div className="p-7 flex flex-col flex-grow">
                                {/* Puntos clave */}
                                <ul className="space-y-2.5 mb-7">
                                    {servicio.puntos.map((punto, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-base text-gray-700">
                                            <CheckCircle className={`w-5 h-5 mt-0.5 shrink-0 ${servicio.colorText}`} />
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
                    <motion.p
                        initial={{ opacity: 0, y: -16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="text-gray-500 mb-5 text-base"
                    >
                        ¿Querés acceder a todos los servicios en un solo plan?
                    </motion.p>
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
