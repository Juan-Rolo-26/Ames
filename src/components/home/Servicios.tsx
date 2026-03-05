import { motion } from 'framer-motion';
import { Briefcase, Users, GraduationCap, Banknote, Rocket, HeartHandshake, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, community, padrinos } from '../../assets/images';

const serviciosData = [
    {
        id: 'consultoria',
        icon: <Briefcase className="w-7 h-7" />,
        image: services.consultoria,
        colorGrad: 'from-primary to-secondary',
        colorText: 'text-secondary',
        colorBg: 'bg-secondary/10',
        colorBorder: 'border-secondary/25',
        badge: 'Mentorías incluidas',
        title: 'Consultoría Estratégica',
        alt: 'Servicios de mutual en Argentina - consultoría estratégica',
        desc: 'El departamento de Consultoría Estratégica brinda acompañamiento profesional personalizado para emprendedores y empresas que necesitan ordenar su estructura y tomar decisiones con mayor claridad. Trabajamos sobre análisis financiero, estructura de costos, planificación impositiva, redes sociales, estrategia comercial y marketing, con un enfoque práctico y orientado a resultados. Nuestro objetivo es transformar la improvisación en planificación y convertir proyectos en estructuras sostenibles.',
        puntos: [
            'Sesión de 90 minutos con un especialista',
            'Acompañamiento profesional adaptado a la etapa y necesidades de cada proyecto',
            'Planes de acción concretos y aplicables',
        ],
    },
    {
        id: 'networking',
        icon: <Users className="w-7 h-7" />,
        image: community.networking,
        colorGrad: 'from-secondary to-blue-700',
        colorText: 'text-secondary',
        colorBg: 'bg-secondary/10',
        colorBorder: 'border-secondary/25',
        badge: '+500 miembros',
        title: 'Networking y Comunidad',
        alt: 'Networking empresarial de mutual en Rosario',
        desc: 'El departamento de Networking está orientada a generar vínculos estratégicos entre emprendedores, profesionales y empresas. Organizamos encuentros presenciales en nuestras oficinas, promoviendo espacios de conexión donde surgen alianzas, colaboraciones y oportunidades comerciales. Impulsamos una comunidad activa basada en el crecimiento conjunto y el intercambio de valor.',
        puntos: [
            'Acceso a las oficinas de AMES hasta 2 veces al mes para reuniones o trabajo profesional',
            'Integración a una comunidad que prioriza acción, estructura y resultados',
            'Acceso a una red activa de emprendedores, profesionales y empresas',
        ],
    },
    {
        id: 'escuela-express',
        icon: <GraduationCap className="w-7 h-7" />,
        image: services.escuela,
        colorGrad: 'from-accent to-violet-900',
        colorText: 'text-accent',
        colorBg: 'bg-accent/10',
        colorBorder: 'border-accent/25',
        badge: 'Formación práctica',
        title: 'Academia Express AMES',
        alt: 'Formación para emprendedores en mutual argentina',
        desc: 'Academia Express es el departamento de formación de AMES. Está diseñado para acompañar a emprendedores desde la etapa inicial hasta la profesionalización de su negocio. Ofrece contenido práctico y enfocado en ejecución, abordando temas clave como finanzas, costos, ventas, marketing, comunicación y bases legales, de forma clara y aplicable. Formamos para aplicar, no solo para aprender.',
        puntos: [
            'Capacitaciones prácticas en modelo de negocio, finanzas, ventas, marketing, comunicación y bases legales',
            'Herramientas listas para implementar en tu proyecto',
            'Complemento directo a las consultorías y al ecosistema AMES',
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
        badge: 'Sin garantías imposibles',
        title: 'Ayuda Económica',
        alt: 'Ayuda económica mutual AMES',
        desc: 'El departamento de Ayuda Económica e Inversiones está orientada a acompañar a emprendedores, trabajadores, profesionales y empresas que requieran respaldo financiero dentro de un marco institucional y responsable. Brindamos evaluación personalizada y orientación sobre las herramientas económicas disponibles en la mutual. Nuestro enfoque se basa en la responsabilidad, la planificación y el acompañamiento profesional.',
        puntos: [
            'Evaluación personalizada según perfil y necesidad',
            'Opciones orientadas a capital de trabajo, inversión o crecimiento',
            'Procesos ágiles con acompañamiento durante toda la gestión',
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
        badge: 'Programa de 4 meses',
        title: 'Aceleradora de Impacto',
        alt: 'Aceleradora de proyectos en mutual argentina',
        desc: 'Nuestro programa insignia. 4 meses de acompañamiento intensivo con mentor dedicado, cohortes de hasta 15 proyectos, workshops semanales y Demo Day ante inversores. Diseñado para proyectos con tracción que quieren escalar de verdad.',
        puntos: [
            'Diagnóstico estratégico inicial para detectar puntos críticos de crecimiento',
            'Definición de modelo de negocio sólido y escalable',
            'Ordenamiento financiero y proyección de expansión',
        ],
    },
    {
        id: 'empresas-padrinos',
        icon: <HeartHandshake className="w-7 h-7" />,
        image: padrinos.alianza,
        colorGrad: 'from-primary to-accent',
        colorText: 'text-primary',
        colorBg: 'bg-primary/10',
        colorBorder: 'border-primary/25',
        badge: 'Para empresas',
        title: 'Empresas Padrino',
        alt: 'Empresas padrino en mutual de emprendedores',
        desc: 'Posicioná tu empresa siendo parte activa del ecosistema emprendedor. RSE real y medible, visibilidad de marca ante +500 emprendedores, acceso a talentos y proveedores innovadores. Categorías Platinum, Oro, Plata y Networking.',
        puntos: [
            'Presencia institucional dentro del ecosistema AMES',
            'Vinculación directa con emprendedores y proyectos en crecimiento',
            'Acceso temprano a iniciativas innovadoras antes de su expansión al mercado',
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
                        Servicios de Nuestra <span className="text-secondary">Mutual en Argentina</span>
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
