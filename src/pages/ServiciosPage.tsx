import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Easing } from 'framer-motion';
import {
    Briefcase, Users, GraduationCap, Banknote, Rocket,
    HeartHandshake, CheckCircle, ArrowRight, Star,
    Clock, BadgeCheck, ChevronDown, PhoneCall
} from 'lucide-react';
import { services, community, padrinos, about, avatars } from '../assets/images';
import { TIENDUP_MEMBRESIA_URL } from '../utils/tiendup';

// ── Animaciones ────────────────────────────────────────────────────
const ease: Easing = 'easeOut';
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7, delay, ease },
});
const fadeLeft = (delay = 0) => ({
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7, delay, ease },
});
const fadeRight = (delay = 0) => ({
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7, delay, ease },
});

// ── Tipos ──────────────────────────────────────────────────────────
interface Paso { paso: string; titulo: string; desc: string; }
interface Servicio {
    id: string;
    icono: React.ReactNode;
    titulo: string;
    subtitulo: string;
    imagen: string;
    colorGradient: string;
    colorLight: string;
    colorText: string;
    colorBorder: string;
    descripcion: string;
    beneficios: string[];
    paraCuando: string[];
    proceso: Paso[];
}

const serviciosConAsociate = new Set([
    'escuela-express',
    'networking',
    'consultoria',
    'ayuda-economica',
    'aceleradora-de-impacto',
]);

const WhatsAppIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

// ── Servicios completos ────────────────────────────────────────────
const servicios: Servicio[] = [
    {
        id: 'escuela-express',
        icono: <GraduationCap className="w-8 h-8" />,
        titulo: 'Academia Express AMES',
        subtitulo: 'INCLUIDO EN TU MEMBRESÍA MENSUAL',
        imagen: services.escuelaDetalle,
        colorGradient: 'from-accent to-violet-900',
        colorLight: 'bg-accent/10',
        colorText: 'text-accent',
        colorBorder: 'border-accent/30',
        descripcion: `Academia Express es el departamento de formación de AMES. Está diseñado para acompañar a emprendedores desde la etapa inicial hasta la profesionalización de su negocio. Ofrece contenido práctico y enfocado en ejecución, abordando temas clave como finanzas, costos, ventas, marketing, comunicación y bases legales, de forma clara y aplicable.

Formamos para aplicar el conocimiento en el contexto real, fortaleciendo criterios de decisión, herramientas concretas y capacidades profesionales para emprender, liderar equipos o crecer dentro de una empresa.

Formá parte de Comunidad AMES y vas a recibir acceso a todas las actividades educativas y de formación profesional, incluyendo una charla mensual con consultores invitados para seguir sumando valor todos los meses.`,
        beneficios: [
            'Programas intensivos y actividades de formación profesional diseñados para aplicar herramientas concretas de forma inmediata en tu proyecto, tu rol o tu equipo.',
            'Módulos de formación en ventas, marketing digital, costos, finanzas para emprendedores, estrategia de negocio, gestión y marco legal.',
            'Formadores con experiencia real en emprendimientos y gestión empresarial.',
            'Espacios de intercambio y resolución de dudas durante cada actividad, con foco en la aplicación práctica a casos reales de emprendedores, profesionales y equipos de trabajo.',
            'Certificado de finalización al completar la formación.',
            'Acceso gratuito para miembros de la mutual como beneficio incluido dentro de su membresía.',
        ],
        paraCuando: [
            'Querés profesionalizarte y sumar herramientas aplicables a tu trabajo o a tu rol dentro de una empresa',
            'Querés mejorar tus ventas y no sabés cómo sistematizarlas',
            'Tus finanzas son un caos y necesitás orden urgente',
            'Querés atraer más clientes por redes sociales o digital',
            'Necesitás liderar mejor tu equipo y delegar sin perder control',
        ],
        proceso: [
            { paso: '01', titulo: 'Elegís la formación', desc: 'Seleccionás el programa de Academia Express que mejor se adapte a las necesidades actuales de tu emprendimiento.' },
            { paso: '02', titulo: 'Accedés con tu membresía', desc: 'Al abonar tu membresía en AMES obtenés acceso gratuito a las formaciones de Academia Express como uno de los beneficios incluidos.' },
            { paso: '03', titulo: 'Participás de la capacitación', desc: 'Asistís a actividades educativas y formaciones profesionales con contenidos prácticos enfocados en ventas, marketing, finanzas, gestión y desarrollo aplicado.' },
            { paso: '04', titulo: 'Seguís formándote', desc: 'Aplicás lo aprendido en tu contexto real y continuás sumando herramientas con nuevas actividades y una charla mensual junto a consultores invitados.' },
        ],
    },
    {
        id: 'networking',
        icono: <Users className="w-8 h-8" />,
        titulo: 'Networking y Comunidad',
        subtitulo: 'INCLUIDO EN TU MEMBRESÍA MENSUAL',
        imagen: community.networkingDetalle,
        colorGradient: 'from-accent to-blue-700',
        colorLight: 'bg-accent/10',
        colorText: 'text-accent',
        colorBorder: 'border-accent/30',
        descripcion: `El departamento de Networking está orientado a generar vínculos estratégicos entre emprendedores, profesionales y empresas. Organizamos encuentros presenciales en nuestras oficinas, promoviendo espacios de conexión donde surgen alianzas, colaboraciones y oportunidades comerciales.

Impulsamos una comunidad activa basada en el crecimiento conjunto y el intercambio de valor.`,
        beneficios: [
            'Acceso a comunidad privada de +500 emprendedores activos',
            'Acceso a una red de contactos calificados que facilita conexiones estratégicas para el desarrollo y crecimiento de tu proyecto.',
            'Encuentros mensuales de networking y vinculación para generar relaciones profesionales y oportunidades de negocio.',
            'Espacios para compartir experiencias y aprendizajes entre emprendedores en distintas etapas.',
            'Oportunidades de generar alianzas, clientes o proveedores dentro de la comunidad.',
            'Interacción directa con otros miembros para intercambiar ideas, resolver dudas y colaborar.',
        ],
        paraCuando: [
            '¿Te sentís solo en tu camino emprendedor o profesional?',
            'Necesitás proveedores, clientes o socios confiables',
            'Querés aprender de quienes ya resolvieron tus mismos problemas',
            'Buscás armar alianzas estratégicas para crecer más rápido',
        ],
        proceso: [
            { paso: '01', titulo: 'Te incorporás', desc: 'Con tu membresía accedés inmediatamente a la comunidad AMES y a los espacios de vinculación dentro del ecosistema.' },
            { paso: '02', titulo: 'Agendás tu participación', desc: 'Ingresás a las actividades de networking, encuentros y espacios de intercambio que se activan desde la comunidad.' },
            { paso: '03', titulo: 'Utilizás las oficinas', desc: 'Como miembro podés usar las oficinas de AMES hasta 2 veces por mes para reuniones, trabajo profesional o encuentros con otros miembros.' },
            { paso: '04', titulo: 'Colaborás', desc: 'Empezás a generar conversaciones, compartir recursos y crear oportunidades junto a la red de emprendedores, profesionales y empresas del ecosistema.' },
        ],
    },
    {
        id: 'consultoria',
        icono: <Briefcase className="w-8 h-8" />,
        titulo: 'Consultoría Estratégica',
        subtitulo: 'Tu membresía incluye grandes descuentos y consultorías sin cargo',
        imagen: services.consultoriaDetalle,
        colorGradient: 'from-primary to-secondary',
        colorLight: 'bg-secondary/10',
        colorText: 'text-secondary',
        colorBorder: 'border-secondary/30',
        descripcion: `El departamento de Consultoría Estratégica brinda acompañamiento profesional personalizado para emprendedores y empresas que necesitan ordenar su estructura y tomar decisiones con mayor claridad. Trabajamos sobre análisis financiero, estructura de costos, planificación impositiva, redes sociales, estrategia comercial y marketing, con un enfoque práctico y orientado a resultados.

Nuestro objetivo es transformar la improvisación en planificación y convertir proyectos en estructuras sostenibles.`,
        beneficios: [
            'Consultoría grupal mensual de cortesía, con profesionales altamente calificados.',
            'Sesión individual de consultoría con descuento AMES, a cargo de especialistas de gran trayectoria profesional, amplia experiencia en su campo y una red de contactos calificados.',
            'Análisis del modelo de negocio y estructura del plan de negocios para detectar viabilidad comercial y financiera.',
            'Identificación de problemas clave y áreas de mejora que estén frenando el crecimiento.',
            'Definición de próximos pasos y recomendaciones estratégicas adaptadas a la etapa del negocio.',
            'Introducción al ecosistema AMES, con herramientas calificadas y aporte de valor profesional y personal.',
        ],
        paraCuando: [
            'Estás estancado y no sabés cuál es el próximo paso',
            'Querés profesionalizar tu negocio o tu estructura comercial',
            'Tu crecimiento se frenó y necesitás un diagnóstico externo',
            'Vas a lanzar algo nuevo y querés validarlo antes',
        ],
        proceso: [
            { paso: '01', titulo: 'Participás de la consultoría grupal', desc: 'Cada mes accedés sin cargo a un espacio grupal con profesionales de AMES para ordenar dudas, destrabar decisiones y detectar oportunidades de mejora.' },
            { paso: '02', titulo: 'Elegís el acompañamiento individual', desc: 'Si necesitás profundizar, podés reservar una sesión individual con descuento AMES junto al especialista más alineado a tu necesidad.' },
            { paso: '03', titulo: 'Trabajás sobre tu caso', desc: 'Analizamos tu modelo de negocio, la viabilidad comercial y financiera, detectamos puntos críticos y definimos próximos pasos concretos.' },
            { paso: '04', titulo: 'Seguimiento profesional', desc: 'Luego de la sesión se realiza un seguimiento profesional para acompañar la implementación de las recomendaciones y resolver dudas que puedan surgir.' },
        ],
    },
    {
        id: 'ayuda-economica',
        icono: <Banknote className="w-8 h-8" />,
        titulo: 'Ayuda Económica e Inversiones',
        subtitulo: 'Accedé a beneficios exclusivos con tu membresía',
        imagen: services.financiamiento,
        colorGradient: 'from-primary to-secondary',
        colorLight: 'bg-secondary/10',
        colorText: 'text-secondary',
        colorBorder: 'border-secondary/30',
        descripcion: `El departamento de Ayuda Económica e Inversiones está orientado a acompañar a emprendedores, trabajadores, profesionales y empresas que requieran respaldo financiero dentro de un marco institucional y responsable.

Brindamos evaluación personalizada y orientación sobre las herramientas económicas disponibles, analizando cada situación de manera individual. El objetivo es facilitar alternativas acordes a cada perfil, promoviendo decisiones planificadas y sostenibles.

En el área de Inversiones, ofrecemos información y asesoramiento sobre las opciones disponibles, priorizando la transparencia, el análisis prudente y la adecuada comprensión de cada instrumento.

Nuestro enfoque se basa en la responsabilidad, la planificación y el acompañamiento profesional, buscando que cada decisión financiera esté alineada con los objetivos y posibilidades reales de cada persona o empresa.`,
        beneficios: [
            'Acceso a herramientas de ayuda económica e inversiones dentro del ecosistema mutual.',
            'Evaluación del perfil y del destino del financiamiento para analizar la viabilidad de la solicitud.',
            'Montos de financiamiento sujetos a evaluación según el proyecto, actividad y capacidad de pago.',
            'Condiciones y plazos definidos según el tipo de ayuda económica solicitada.',
            'Proceso de análisis y acompañamiento para orientar el uso del capital dentro del proyecto.',
            'Beneficios exclusivos para miembros de la mutual que cumplan con los requisitos de evaluación.',
        ],
        paraCuando: [
            'Necesitás capital de trabajo para comprar mercadería o insumos',
            'Querés adquirir equipamiento para escalar tu producción',
            'Tenés una oportunidad de negocio que no podés perder por falta de cash',
            'Necesitás cubrir un bache de liquidez',
            'Tenés disponibilidades ociosas y querés convertirlas en inversión para generar rentabilidad',
        ],
        proceso: [
            { paso: '01', titulo: 'Realizás la consulta', desc: 'Te contactás con AMES y brindás la información inicial sobre tus expectativas futuras de inversión o financiamiento. Te ayudamos estratégicamente a encontrar la mejor combinación entre costo financiero y rendimiento, para generar valor en tus decisiones financieras.' },
            { paso: '02', titulo: 'Evaluación personalizada', desc: 'Analizamos tu perfil, tus objetivos y el destino proyectado del capital para identificar la alternativa más conveniente según tu situación.' },
            { paso: '03', titulo: 'Propuesta y documentación', desc: 'Te presentamos la alternativa sugerida, revisamos condiciones, requisitos y documentación necesaria para avanzar con claridad y respaldo.' },
            { paso: '04', titulo: 'Aprobación y acceso', desc: 'Si la solicitud es aprobada, se coordinan las condiciones finales y se facilita el acceso de financiamiento y/o inversión.' },
        ],
    },
    {
        id: 'aceleradora-de-impacto',
        icono: <Rocket className="w-8 h-8" />,
        titulo: 'Aceleradora de Impacto By AMES',
        subtitulo: 'Tu membresía incluye grandes descuentos y consultorías sin cargo',
        imagen: services.aceleradora,
        colorGradient: 'from-primary to-accent',
        colorLight: 'bg-primary/10',
        colorText: 'text-primary',
        colorBorder: 'border-primary/30',
        descripcion: `La Aceleradora de Impacto by AMES es nuestro programa insignia. Un proceso estructurado y diseñado para llevar proyectos con potencial desde la etapa inicial o de tracción hacia un modelo de negocios validado, escalable y con triple impacto.

No es otro curso. Es un programa intensivo con mentores calificados, acceso prioritario a financiamiento y conexión directa con inversores y Empresas Padrinos de la red AMES.`,
        beneficios: [
            'Programa intensivo y estructurado de 4 meses.',
            'Mentor dedicado con experiencia en su expertise profesional.',
            'Acceso prioritario a herramientas de financiamiento.',
            'Demo Day para presentar tu proyecto a inversores y Padrinos AMES.',
            'Certificado del programa Aceleradora de Impacto AMES.',
        ],
        paraCuando: [
            'Tenés una idea y no sabés si es viable en el plano comercial, económico o financiero',
            'Tenés un proyecto y querés escalarlo',
            'Querés crecer pero necesitás estructura y acompañamiento serio',
            'Buscás acceder a inversores o Empresas Padrinos de la red AMES',
            'Tu negocio tiene potencial de triple impacto y querés desarrollarlo',
        ],
        proceso: [
            { paso: '01', titulo: 'Postulás tu proyecto', desc: 'Escribinos en “Quiero saber más” y te enviamos un formulario de postulación para completar con información de tu proyecto, equipo, métricas actuales y objetivos.' },
            { paso: '02', titulo: 'Evaluación y entrevista', desc: 'El comité de AMES evalúa tu postulación y te convoca a una entrevista de selección.' },
            { paso: '03', titulo: 'Onboarding de inducción', desc: 'Ingresás al programa de aceleración, conocés a tus mentores y empezás a trabajar en el desarrollo de tu plan de negocios.' },
            { paso: '04', titulo: 'Demo Day', desc: 'Al finalizar los 4 meses, presentás tu proyecto ante un panel de Empresas Padrinos AMES, quienes podrán realizar inversiones, acompañamientos y contactos de valor.' },
        ],
    },
    {
        id: 'empresas-padrinos',
        icono: <HeartHandshake className="w-8 h-8" />,
        titulo: 'Instituciones y Empresas Padrinos',
        subtitulo: 'Sé parte del crecimiento económico de la región',
        imagen: padrinos.alianzaDetalle,
        colorGradient: 'from-primary to-accent',
        colorLight: 'bg-accent/10',
        colorText: 'text-accent',
        colorBorder: 'border-accent/30',
        descripcion: `El programa Padrinos es la forma en que Instituciones y Empresas de Santa Fe y la región conectan con el ecosistema emprendedor, generan RSE real y potencian su posicionamiento de marca.

Como Padrino, tu organización participa activamente en el crecimiento de emprendedores, accede a una red de potenciales partners, clientes y proveedores, y construye reputación colaborativa con propósito en el desarrollo de la comunidad AMES.`,
        beneficios: [
            'Visibilidad de marca en todos los eventos y comunicaciones de AMES.',
            'Acceso a la red de +500 emprendedores como potenciales partners, clientes y proveedores.',
            'Participación en paneles y eventos como referente de tu giro de negocios.',
            'Capacitación y herramientas de formación para colaboradores.',
            'Presentación de proyectos de inversión.',
            'Acompañamiento profesional interdisciplinario para el proceso decisorio de inversión en proyectos de interés.',
        ],
        paraCuando: [
            'Querés hacer RSE real y medible, no solo formal',
            'Buscás visibilidad entre el segmento emprendedor y empresarial de la región',
            'Querés conectar con partners, proveedores y clientes innovadores de la economía real',
            'Tu empresa cree en el impacto colaborativo y quiere ser parte de algo más grande',
        ],
        proceso: [
            { paso: '01', titulo: 'Elegís tu categoría', desc: 'Te contactás con el equipo AMES cliqueando “Quiero saber más”. Analizamos juntos qué categoría de patrocinio se alinea mejor con los objetivos de tu empresa.' },
            { paso: '02', titulo: 'Propuesta a medida', desc: 'Te presentamos una propuesta de valor personalizada con los beneficios específicos para tu marca.' },
            { paso: '03', titulo: 'Acuerdo de padrino', desc: 'Firmamos el convenio de colaboración y definimos juntos el calendario de participación y visibilidad.' },
            { paso: '04', titulo: 'Activación e impacto', desc: 'Tu empresa genera visibilidad en el ecosistema AMES y recibís reportes periódicos de impacto sobre el desarrollo de proyectos y actividades a realizar.' },
        ],
    },
];

// ── Componente de sección de servicio ─────────────────────────────
// ── Carrusel de consultores ────────────────────────────────────────
const consultores = [
    { nombre: 'Carolina Gazquez', rol: 'Fundadora', foto: avatars.caro, pos: 'object-[center_5%]' },
    { nombre: 'Lautaro Zulian', rol: 'Desarrollo Estratégico', foto: avatars.lauti, pos: 'object-[center_8%]' },
    { nombre: 'Diego Ballerini', rol: 'Consultor Estratégico', foto: avatars.diego, pos: 'object-[center_0%]' },
    { nombre: 'Rocío Bellesi', rol: 'Consultora Estratégica', foto: avatars.rocio, pos: 'object-[center_5%]' },
    { nombre: 'Gerónimo', rol: 'Consultor Estratégico', foto: avatars.geronimo, pos: 'object-[center_8%]' },
    { nombre: 'Maximiliano R. Colella', rol: 'Consultor Estratégico', foto: avatars.maximiliano, pos: 'object-[center_5%]' },
    { nombre: 'Macarena Rosquini', rol: 'Consultora Estratégica', foto: avatars.macarena, pos: 'object-[center_5%]' },
];

const TeamCarousel = ({ colorGradient }: { colorGradient: string }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % consultores.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const member = consultores[current];

    return (
        <div className="relative w-full h-[560px] rounded-3xl overflow-hidden shadow-2xl group">
            <AnimatePresence mode="wait">
                <motion.img
                    key={current}
                    src={member.foto}
                    alt={member.nombre}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 w-full h-full object-cover ${member.pos}`}
                />
            </AnimatePresence>
            <div className={`absolute inset-0 bg-gradient-to-t ${colorGradient} opacity-40 mix-blend-multiply`} />
            {/* Nombre y rol */}
            <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-black/70 to-transparent">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35 }}
                    >
                        <p className="text-white font-heading font-bold text-xl leading-tight">{member.nombre}</p>
                        <p className="text-white/75 text-sm mt-0.5">{member.rol}</p>
                    </motion.div>
                </AnimatePresence>
            </div>
            {/* Dots */}
            <div className="absolute bottom-5 right-5 flex gap-1.5 items-center">
                {consultores.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-white w-5' : 'bg-white/50 w-2'}`}
                    />
                ))}
            </div>
        </div>
    );
};

const ServicioSection = ({ servicio, reversed }: { servicio: Servicio; reversed: boolean }) => {
    const whatsappNumber = servicio.id === 'ayuda-economica' ? '5493417483978' : '5493413702972';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, quiero saber más sobre ${servicio.titulo} de AMES.`)}`;
    const mostrarBotonAsociate = serviciosConAsociate.has(servicio.id);

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
                        <div className="relative">
                            {servicio.id === 'consultoria' ? (
                                <TeamCarousel colorGradient={servicio.colorGradient} />
                            ) : (
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                    <img
                                        src={servicio.imagen}
                                        alt={servicio.titulo}
                                        className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${servicio.colorGradient} opacity-40 mix-blend-multiply`} />
                                </div>
                            )}
                            {/* Ícono flotante */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                                className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg z-10"
                            >
                                <div className={`${servicio.colorText}`}>{servicio.icono}</div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Texto */}
                    <motion.div
                        {...(reversed ? fadeLeft(0.1) : fadeRight(0.1))}
                        className={`w-full lg:w-7/12 ${reversed ? 'lg:order-1' : ''} flex flex-col items-center lg:items-start text-center lg:text-left`}
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
                        <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start w-full">
                            <motion.a
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${servicio.colorGradient} text-white px-8 py-4 rounded-full font-bold text-base shadow-xl transition-all w-full sm:w-auto`}
                            >
                                <WhatsAppIcon className="w-4 h-4" />
                                Quiero saber más
                            </motion.a>
                            {mostrarBotonAsociate && (
                                <motion.a
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={TIENDUP_MEMBRESIA_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center justify-center gap-2 bg-white px-8 py-4 rounded-full font-bold text-base border-2 ${servicio.colorBorder} ${servicio.colorText} shadow-md hover:shadow-lg transition-all w-full sm:w-auto`}
                                >
                                    Asociate
                                    <ArrowRight className="w-4 h-4" />
                                </motion.a>
                            )}
                        </div>
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
                                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                        <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${servicio.colorGradient} text-white flex items-center justify-center font-heading font-black text-sm mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                                            {paso.paso}
                                        </div>
                                        <h4 className="font-heading font-bold text-primary text-base mb-2">{paso.titulo}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">{paso.desc}</p>
                                    </div>
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

                <div className="relative z-10 text-center px-6 lg:px-24 py-32 w-full">
                    <motion.span
                        {...fadeUp(0.1)}
                        className="inline-block bg-secondary/20 border border-secondary/30 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase"
                    >
                        Nuestros Servicios
                    </motion.span>
                    <motion.h1
                        {...fadeUp(0.2)}
                        className="text-4xl md:text-7xl font-heading font-black text-white mb-6 leading-[1.05]"
                    >
                        Todo lo que necesitás<br />
                        <span className="text-secondary">para que tu proyecto despegue</span>
                    </motion.h1>
                    <motion.p
                        {...fadeUp(0.35)}
                        className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10"
                    >
                        Servicios ordenados para mostrar primero lo que está incluido o potenciado por tu membresía, y después los programas y oportunidades para escalar con más respaldo.
                    </motion.p>
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
                            Con tu membresía mensual accedés primero a formación, comunidad, consultoría y beneficios estratégicos; después podés ampliar tu camino con financiamiento, aceleración y conexiones de alto valor.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <motion.a
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                href={TIENDUP_MEMBRESIA_URL}
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
                            {['Comunidad que se potencia mutuamente', 'Herramientas diseñadas a medida', 'Acompañamiento real desde el día 1'].map((item, i) => (
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
