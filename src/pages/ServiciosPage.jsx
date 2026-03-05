import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Briefcase, Users, GraduationCap, Banknote, Rocket,
    HeartHandshake, CheckCircle, ArrowRight, Star,
    Clock, BadgeCheck, ChevronDown, PhoneCall
} from 'lucide-react';
import { services, community, padrinos, avatars, about } from '../assets/images';

// ── Animaciones ────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7, delay, ease: 'easeOut' },
});
const fadeLeft = (delay = 0) => ({
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7, delay, ease: 'easeOut' },
});
const fadeRight = (delay = 0) => ({
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7, delay, ease: 'easeOut' },
});

// ── Servicios completos ────────────────────────────────────────────
const servicios = [
    {
        id: 'consultoria',
        icono: <Briefcase className="w-8 h-8" />,
        titulo: 'Consultoría Estratégica',
        subtitulo: 'Diagnóstico real, plan de acción claro',
        imagen: services.consultoria,
        colorGradient: 'from-primary to-secondary',
        colorLight: 'bg-secondary/10',
        colorText: 'text-secondary',
        colorBorder: 'border-secondary/30',
        descripcion: `El departamento de Consultoría Estratégica brinda acompañamiento profesional personalizado para emprendedores y empresas que necesitan ordenar su estructura y tomar decisiones con mayor claridad. Trabajamos sobre análisis financiero, estructura de costos, planificación impositiva, redes sociales, estrategia comercial y marketing, con un enfoque práctico y orientado a resultados.

Nuestro objetivo es transformar la improvisación en planificación y convertir proyectos en estructuras sostenibles.`,
        beneficios: [
            'Diagnóstico inicial de 90 minutos con especialista',
            'Análisis de modelo de negocio (Canvas y Lean)',
            'Detección de cuellos de botella críticos',
            'Plan de acción con prioridades claras a 30/60/90 días',
            'Mentorías de seguimiento incluidas en tu membresía',
            'Acceso a biblioteca de recursos y plantillas prácticas',
        ],
        paraCuando: [
            'Estás estancado y no sabés cuál es el próximo paso',
            'Querés profesionalizar tu negocio informal',
            'Tu crecimiento se frenó y necesitás un diagnóstico externo',
            'Vas a lanzar algo nuevo y querés validarlo antes',
        ],
        proceso: [
            { paso: '01', titulo: 'Agendás tu sesión', desc: 'Completás un formulario previo con información de tu proyecto para aprovechar al máximo el tiempo.' },
            { paso: '02', titulo: 'Diagnóstico', desc: 'Reunión de 90 minutos con un especialista asignado a tu industria o etapa de negocio.' },
            { paso: '03', titulo: 'Plan de acción', desc: 'Recibís un documento con las acciones prioritarias, métricas a trabajar y próximos pasos.' },
            { paso: '04', titulo: 'Seguimiento', desc: 'Check-ins quincenales para validar el avance y ajustar el rumbo según los resultados.' },
        ],
    },
    {
        id: 'networking',
        icono: <Users className="w-8 h-8" />,
        titulo: 'Networking y Comunidad',
        subtitulo: 'No emprendas solo. La red lo es todo.',
        imagen: community.networking,
        colorGradient: 'from-accent to-blue-700',
        colorLight: 'bg-accent/10',
        colorText: 'text-accent',
        colorBorder: 'border-accent/30',
        descripcion: `El departamento de Networking está orientada a generar vínculos estratégicos entre emprendedores, profesionales y empresas. Organizamos encuentros presenciales en nuestras oficinas, promoviendo espacios de conexión donde surgen alianzas, colaboraciones y oportunidades comerciales.

Impulsamos una comunidad activa basada en el crecimiento conjunto y el intercambio de valor.`,
        beneficios: [
            'Acceso a comunidad privada de +500 emprendedores activos',
            'Rondas de negocios mensuales estructuradas (speed networking)',
            'Eventos presenciales en Rosario con speakers de alto nivel',
            'Grupos de mastermind por industria y etapa de negocio',
            'Directorio de emprendedores para buscar proveedores y socios',
            'Canales temáticos de colaboración y consultas en tiempo real',
        ],
        paraCuando: [
            'Te sentís aislado en tu emprendimiento',
            'Necesitás proveedores, clientes o socios confiables',
            'Querés aprender de quienes ya resolvieron tus mismos problemas',
            'Buscás armar alianzas estratégicas para crecer más rápido',
        ],
        proceso: [
            { paso: '01', titulo: 'Te incorporás', desc: 'Con tu membresía accedés inmediatamente a todos los canales y grupos de la comunidad.' },
            { paso: '02', titulo: 'Perfil de emprendedor', desc: 'Completás tu perfil en el directorio para que otros miembros te puedan encontrar y contactar.' },
            { paso: '03', titulo: 'Primer evento', desc: 'Te invitamos al próximo evento presencial o ronda de negocios para empezar a conectar.' },
            { paso: '04', titulo: 'Colaborás', desc: 'Empezás a generar conversaciones, compartir recursos y cerrar oportunidades con la red.' },
        ],
    },
    {
        id: 'escuela-express',
        icono: <GraduationCap className="w-8 h-8" />,
        titulo: 'Academia Express AMES',
        subtitulo: 'Formación práctica, sin vueltas, al grano',
        imagen: services.escuela,
        colorGradient: 'from-accent to-violet-900',
        colorLight: 'bg-accent/10',
        colorText: 'text-accent',
        colorBorder: 'border-accent/30',
        descripcion: `Academia Express es el departamento de formación de AMES. Está diseñado para acompañar a emprendedores desde la etapa inicial hasta la profesionalización de su negocio. Ofrece contenido práctico y enfocado en ejecución, abordando temas clave como finanzas, costos, ventas, marketing, comunicación y bases legales, de forma clara y aplicable.

Formamos para aplicar, no solo para aprender.`,
        beneficios: [
            'Programas de 4 a 8 hs, 100% aplicables e inmediatos',
            'Módulos de ventas, finanzas, marketing digital y liderazgo',
            'Formadores con experiencia real en emprendimientos',
            'Material descargable y plantillas listas para usar',
            'Certificado de participación al finalizar cada módulo',
            'Descuento exclusivo para miembros de la mutual',
        ],
        paraCuando: [
            'Querés mejorar tus ventas y no sabés cómo sistematizarlas',
            'Tus finanzas son un caos y necesitás orden urgente',
            'Querés atraer más clientes por redes sociales o digital',
            'Necesitás liderar mejor tu equipo y delegar sin perder control',
        ],
        proceso: [
            { paso: '01', titulo: 'Elegís tu módulo', desc: 'Seleccionás el programa que más necesitás en este momento de tu emprendimiento.' },
            { paso: '02', titulo: 'Te inscribís', desc: 'Con membresía activa tenés precio especial. La inscripción se hace directamente en Tiendup.' },
            { paso: '03', titulo: 'Participás intensivamente', desc: 'Sesiones presenciales o virtuales con dinámicas prácticas y ejercicios sobre tu propio negocio.' },
            { paso: '04', titulo: 'Implementás', desc: 'Salís con un plan concreto para los próximos 7 días y acceso al grupo de seguimiento.' },
        ],
    },
    {
        id: 'ayuda-economica',
        icono: <Banknote className="w-8 h-8" />,
        titulo: 'Ayuda Económica',
        subtitulo: 'Financiamiento solidario, humano y accesible',
        imagen: services.financiamiento,
        colorGradient: 'from-primary to-secondary',
        colorLight: 'bg-secondary/10',
        colorText: 'text-secondary',
        colorBorder: 'border-secondary/30',
        descripcion: `El departamento de Ayuda Económica e Inversiones está orientada a acompañar a emprendedores, trabajadores, profesionales y empresas que requieran respaldo financiero dentro de un marco institucional y responsable.

Brindamos evaluación personalizada y orientación sobre las herramientas económicas disponibles en la mutual, analizando cada situación de manera individual. El objetivo es facilitar alternativas acordes a cada perfil, promoviendo decisiones planificadas y sostenibles.

En cuanto al área de Inversiones, ofrecemos información y asesoramiento sobre las opciones disponibles dentro del ámbito mutual, priorizando la transparencia, el análisis prudente y la adecuada comprensión de cada instrumento antes de su eventual adhesión.

Nuestro enfoque se basa en la responsabilidad, la planificación y el acompañamiento profesional, buscando que cada decisión financiera esté alineada con los objetivos y posibilidades reales de cada persona o empresa.`,
        beneficios: [
            'Préstamos mutuales con tasas muy por debajo del mercado',
            'Evaluación personalizada y humana, no solo scorings crediticios',
            'Montos desde $50.000 hasta $1.500.000 (actualizados periódicamente)',
            'Plazos flexibles de 3 a 18 meses según el destino del préstamo',
            'Sin garantías hipotecarias ni avales imposibles de conseguir',
            'Acompañamiento para que el dinero se use estratégicamente',
        ],
        paraCuando: [
            'Necesitás capital de trabajo para comprar mercadería o insumos',
            'Querés adquirir equipamiento para escalar tu producción',
            'Tenés una oportunidad de negocio que no podés perder por falta de cash',
            'Necesitás cubrir un bache de liquidez sin recurrir al sistema bancario',
        ],
        proceso: [
            { paso: '01', titulo: 'Completás la solicitud', desc: 'Formulario online con información de tu proyecto, el monto y el destino del financiamiento.' },
            { paso: '02', titulo: 'Evaluación humana', desc: 'Un comité de la mutual analiza tu caso de forma personalizada en un plazo de 5 días hábiles.' },
            { paso: '03', titulo: 'Resolución', desc: 'Recibís la resolución con el monto aprobado, plazo y condiciones acordadas con equipoo AMES.' },
            { paso: '04', titulo: 'Acreditación', desc: 'El dinero se acredita en tu cuenta en 24/48 hs hábiles con toda la documentación en regla.' },
        ],
    },
    {
        id: 'aceleradora-de-impacto',
        icono: <Rocket className="w-8 h-8" />,
        titulo: 'Aceleradora de Impacto',
        subtitulo: 'Del proyecto a la empresa rentable con propósito',
        imagen: services.aceleradora,
        colorGradient: 'from-primary to-accent',
        colorLight: 'bg-primary/10',
        colorText: 'text-primary',
        colorBorder: 'border-primary/30',
        descripcion: `La Aceleradora de Impacto AMES es nuestro programa insignia. Un proceso estructurado de 4 meses diseñado para llevar proyectos con potencial desde la etapa inicial o de tracción hacia un modelo de negocio validado, escalable y con triple impacto.

No es otro curso. Es un programa intensivo con mentores dedicados, cohortes de pares, acceso prioritario a financiamiento y conexión directa con inversores y Empresas Padrino de la red.`,
        beneficios: [
            'Proceso estructurado de 4 meses con cohortes de hasta 15 proyectos',
            'Mentor dedicado con experiencia en tu industria',
            'Workshops semanales de producto, ventas, finanzas y growth',
            'Acceso prioritario a la Ayuda Económica Mutual',
            'Demo Day para presentar tu proyecto a inversores y padrinos',
            'Certificado del programa Aceleradora de Impacto AMES y sello de triple impacto',
        ],
        paraCuando: [
            'Tenés un proyecto con 6+ meses de operación y primeras ventas',
            'Querés escalar pero necesitás estructura y acompañamiento serio',
            'Buscás acceder a inversores o Empresas Padrino de la red',
            'Tu negocio tiene potencial de triple impacto y querés desarrollarlo',
        ],
        proceso: [
            { paso: '01', titulo: 'Postulás tu proyecto', desc: 'Completás el formulario de postulación con información de tu proyecto, métricas actuales y objetivos.' },
            { paso: '02', titulo: 'Evaluación y entrevista', desc: 'El comité de AMES evalúa tu postulación y te convoca a una entrevista de selección.' },
            { paso: '03', titulo: 'Onboarding de cohorte', desc: 'Ingresás a la cohorte, conocés a tus compañeros y empezás a trabajar con tu mentor asignado.' },
            { paso: '04', titulo: 'Demo Day', desc: 'Al finalizar los 4 meses, presentás tu proyecto ante un panel de inversores, empresas y medios.' },
        ],
    },
    {
        id: 'empresas-padrinos',
        icono: <HeartHandshake className="w-8 h-8" />,
        titulo: 'Empresas Padrino',
        subtitulo: 'Crecé posicionando tu marca en el ecosistema',
        imagen: padrinos.alianza,
        colorGradient: 'from-primary to-accent',
        colorLight: 'bg-accent/10',
        colorText: 'text-accent',
        colorBorder: 'border-accent/30',
        descripcion: `El programa de Empresas Padrino es la forma en que grandes y medianas empresas de Rosario y la región conectan con el ecosistema emprendedor, generan RSE real y potencian su posicionamiento de marca.

No se trata solo de poner un logo. Como Empresa Padrino, tu organización participa activamente en el crecimiento de emprendedores, accede a una red de potenciales clientes y proveedores, y construye reputación como empresa con propósito en la comunidad.`,
        beneficios: [
            'Visibilidad de marca en todos los eventos y comunicaciones de AMES',
            'Acceso a la red de +500 emprendedores como potenciales clientes/proveedores',
            'Participación en paneles y eventos como referente de tu industria',
            'Informe trimestral de impacto RSE certificado para tu empresa',
            'Categorías Platinum, Oro, Plata y Networking con beneficios diferenciados',
            'Posibilidad de detectar talentos emprendedores y proyectos para invertir',
        ],
        paraCuando: [
            'Querés hacer RSE real y medible, no solo formal',
            'Buscás visibilidad entre el segmento emprendedor de Rosario',
            'Querés conectar con proveedores y clientes innovadores de la economía real',
            'Tu empresa cree en el impacto colectivo y quiere ser parte de algo más grande',
        ],
        proceso: [
            { paso: '01', titulo: 'Elegís tu categoría', desc: 'Analizamos juntos qué categoría de patrocinio se alinea mejor con los objetivos de tu empresa.' },
            { paso: '02', titulo: 'Propuesta a medida', desc: 'Te presentamos una propuesta de valor personalizada con los beneficios específicos para tu marca.' },
            { paso: '03', titulo: 'Acuerdo de padrino', desc: 'Firmamos el convenio de colaboración y definimos juntos el calendario de participación y visibilidad.' },
            { paso: '04', titulo: 'Activación e impacto', desc: 'Tu empresa empieza a aparecer en el ecosistema y recibís reportes periódicos de impacto.' },
        ],
    },
];

// ── Componente de sección de servicio ─────────────────────────────
const ServicioSection = ({ servicio, reversed }) => {
    return (
        <section
            id={servicio.id}
            className="py-24 border-b border-gray-100 last:border-0 overflow-hidden"
        >
            <div className="w-full px-5 sm:px-8 lg:px-20">
                {/* Header */}
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 mb-20">
                    {/* Imagen */}
                    <motion.div
                        {...(reversed ? fadeRight(0) : fadeLeft(0))}
                        className={`w-full lg:w-5/12 ${reversed ? 'lg:order-2' : ''}`}
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src={servicio.imagen}
                                alt={servicio.titulo}
                                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${servicio.colorGradient} opacity-40 mix-blend-multiply`} />
                            {/* Ícono flotante */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                                className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg"
                            >
                                <div className={`${servicio.colorText}`}>{servicio.icono}</div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Texto */}
                    <motion.div
                        {...(reversed ? fadeLeft(0.1) : fadeRight(0.1))}
                        className={`w-full lg:w-7/12 ${reversed ? 'lg:order-1' : ''}`}
                    >
                        <span className={`inline-flex items-center gap-2 ${servicio.colorLight} ${servicio.colorText} text-sm font-bold px-4 py-1.5 rounded-full mb-5 border ${servicio.colorBorder}`}>
                            {servicio.icono && <span className="scale-75">{servicio.icono}</span>}
                            {servicio.subtitulo}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-6 leading-tight">
                            {servicio.titulo}
                        </h2>
                        <div className="space-y-3 text-gray-600 text-lg leading-relaxed">
                            {servicio.descripcion.split('\n\n').map((parrafo, i) => (
                                <p key={i}>{parrafo}</p>
                            ))}
                        </div>
                        <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/5493413702972?text=Hola%2C%20quiero%20info%20sobre%20el%20servicio%20de%20AMES"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`mt-8 inline-flex items-center justify-center gap-2 bg-gradient-to-r ${servicio.colorGradient} text-white px-8 py-4 rounded-full font-bold text-base shadow-xl transition-all`}
                        >
                            <PhoneCall className="w-4 h-4" />
                            Quiero saber más
                        </motion.a>
                    </motion.div>
                </div>

                {/* Beneficios + Para cuándo */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                    {/* Beneficios */}
                    <motion.div
                        {...fadeUp(0)}
                        className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-secondary/20 transition-all"
                    >
                        <h3 className="text-xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${servicio.colorGradient} text-white flex items-center justify-center`}>
                                <BadgeCheck className="w-4 h-4" />
                            </div>
                            ¿Qué incluye?
                        </h3>
                        <ul className="space-y-3">
                            {servicio.beneficios.map((b, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.4 }}
                                    className="flex items-start gap-3 text-gray-700"
                                >
                                    <CheckCircle className={`w-5 h-5 mt-0.5 shrink-0 ${servicio.colorText}`} />
                                    <span className="leading-snug">{b}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Para cuándo */}
                    <motion.div
                        {...fadeUp(0.1)}
                        className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-secondary/20 transition-all"
                    >
                        <h3 className="text-xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${servicio.colorGradient} text-white flex items-center justify-center`}>
                                <Star className="w-4 h-4" />
                            </div>
                            ¿Para quién es?
                        </h3>
                        <ul className="space-y-4">
                            {servicio.paraCuando.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.4 }}
                                    className={`flex items-start gap-3 p-3 rounded-xl ${servicio.colorLight} border ${servicio.colorBorder}`}
                                >
                                    <ArrowRight className={`w-4 h-4 mt-0.5 shrink-0 ${servicio.colorText}`} />
                                    <span className="text-gray-700 text-sm leading-snug">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Proceso paso a paso */}
                <motion.div {...fadeUp(0.15)} className={`rounded-3xl bg-gradient-to-br ${servicio.colorGradient} p-[2px] shadow-xl`}>
                    <div className="bg-white rounded-[22px] p-8 md:p-10">
                        <h3 className="text-2xl font-heading font-bold text-primary mb-8 flex items-center gap-3">
                            <Clock className={`w-6 h-6 ${servicio.colorText}`} />
                            ¿Cómo funciona el proceso?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {servicio.proceso.map((paso, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="relative group"
                                >
                                    {/* Línea conectora (excepto el último) */}
                                    {i < servicio.proceso.length - 1 && (
                                        <div className="hidden lg:block absolute top-5 left-full w-full h-px border-t-2 border-dashed border-gray-200 z-0" style={{ width: 'calc(100% - 2rem)', left: 'calc(100% - 1rem)' }} />
                                    )}
                                    <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${servicio.colorGradient} text-white flex items-center justify-center font-heading font-black text-sm mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                                        {paso.paso}
                                    </div>
                                    <h4 className="font-heading font-bold text-primary text-base mb-2">{paso.titulo}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{paso.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// ── Página principal ───────────────────────────────────────────────
const ServiciosPage = () => {
    return (
        <div className="bg-background">
            {/* ── Hero ─────────────────────────────────────────────── */}
            <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-primary">
                <div className="absolute inset-0 z-0">
                    <img
                        src={about.equipo}
                        alt="Servicios AMES"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/70 to-primary" />
                </div>
                <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] z-0" />
                <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-[80px] z-0" />

                <div className="relative z-10 text-center px-10 lg:px-24 py-36 w-full">
                    <motion.span
                        {...fadeUp(0.1)}
                        className="inline-block bg-secondary/20 border border-secondary/30 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase"
                    >
                        Nuestros Servicios
                    </motion.span>
                    <motion.h1
                        {...fadeUp(0.2)}
                        className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-[1.05]"
                    >
                        Todo lo que necesitás<br />
                        <span className="text-secondary">para que tu proyecto despegue</span>
                    </motion.h1>
                    <motion.p
                        {...fadeUp(0.35)}
                        className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10"
                    >
                        Seis pilares diseñados para acompañarte en cada etapa del camino emprendedor: desde el diagnóstico hasta la aceleración.
                    </motion.p>

                    {/* Navegación ancla a servicios */}
                    <motion.div
                        {...fadeUp(0.45)}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        {servicios.map(s => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className="text-sm font-semibold text-white/70 hover:text-white border border-white/20 hover:border-white/50 px-4 py-2 rounded-full transition-all"
                            >
                                {s.titulo}
                            </a>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40"
                >
                    <ChevronDown className="w-7 h-7" />
                </motion.div>
            </section>

            {/* ── Vista previa de los 6 servicios ──────────────────── */}
            <section className="py-20 bg-white border-b border-gray-100">
                <div className="w-full px-5 sm:px-8 lg:px-20">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {servicios.map((s, i) => (
                            <motion.a
                                key={s.id}
                                href={`#${s.id}`}
                                {...fadeUp(i * 0.06)}
                                whileHover={{ y: -6, scale: 1.03 }}
                                className={`group flex flex-col items-center text-center p-5 rounded-2xl border ${s.colorBorder} ${s.colorLight} hover:shadow-xl transition-all cursor-pointer`}
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.colorGradient} text-white flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                                    <span className="scale-75">{s.icono}</span>
                                </div>
                                <span className="text-xs font-bold text-primary leading-tight">{s.titulo}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Secciones de servicios ────────────────────────────── */}
            <div className="bg-background">
                {servicios.map((servicio, i) => (
                    <div
                        key={servicio.id}
                        className={i % 2 === 0 ? 'bg-background' : 'bg-white'}
                    >
                        <ServicioSection servicio={servicio} reversed={i % 2 !== 0} />
                    </div>
                ))}
            </div>

            {/* ── CTA Final ─────────────────────────────────────────── */}
            <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A56DB 0%, #1a3a8f 50%, #0D2054 100%)' }}>
                <div className="absolute inset-0 opacity-10">
                    <img src={community.coworking} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-[100px]" />

                <div className="relative z-10 w-full px-5 sm:px-8 lg:px-20 text-center">
                    <motion.div {...fadeUp(0)}>
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">
                            ¿Cuál servicio necesitás<br />
                            <span className="text-secondary">para tu proyecto?</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Con una membresía mensual accedés a todos los pilares de AMES. Sin permanencia, sin letra chica, con impacto real desde el primer día.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <motion.a
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://aceleradoraimpactobyames.tiendup.com/p/membresia-mensual-impacto-by-ames"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-secondary/30 hover:shadow-secondary/50 transition-all"
                            >
                                <Rocket className="w-5 h-5" />
                                Quiero ser miembro
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                href="https://wa.me/5493413702972?text=Hola%2C%20quiero%20info%20sobre%20los%20servicios%20de%20AMES"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                            >
                                <PhoneCall className="w-5 h-5" />
                                Hablar con el equipo
                            </motion.a>
                        </div>

                        <motion.div {...fadeUp(0.3)} className="mt-12 flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
                            {['Sin permanencia mínima', 'Cancelación cuando quieras', 'Soporte real desde el día 1'].map((item, i) => (
                                <span key={i} className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-accent" />
                                    {item}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServiciosPage;
