import { motion, type Easing } from 'framer-motion';
import { Heart, Users, Zap, Target, TrendingUp, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { about, community, avatars } from '../assets/images';
import { TIENDUP_MEMBRESIA_URL } from '../utils/tiendup';

// ── Animaciones reutilizables ──────────────────────────────────────
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

// ── Datos del equipo ───────────────────────────────────────────────
const equipo = [
    { nombre: 'Carolina Gazquez', rol: 'Fundadora', foto: avatars.caro, iniciales: null, bio: 'Fundadora de Mutual AMES y profesional especializada en finanzas, costos y planificación estratégica. Impulsó la creación de la mutual con el objetivo de brindar estructura, acompañamiento y herramientas reales a emprendedores y empresas que buscan crecer con orden y respaldo institucional. Desde su rol, lidera el desarrollo financiero y estratégico del ecosistema AMES.' },
    { nombre: 'Lautaro Zulian', rol: 'Desarrollo Estratégico', foto: avatars.lauti, iniciales: null, bio: 'Responsable del área de marketing, comunicación y desarrollo estratégico en Mutual AMES. Participa en la construcción y posicionamiento del ecosistema, integrando formación, comunidad y expansión institucional. Su enfoque está orientado a fortalecer la presencia de AMES, optimizar la propuesta de valor y conectar emprendedores con herramientas concretas para su crecimiento.' },
    { nombre: 'Diego Ballerini', rol: 'Consultor Estratégico', foto: avatars.diego, iniciales: null, bio: 'Especialista en marketing digital, estrategia comercial y desarrollo de negocios. Desde su rol en Mutual AMES aporta una mirada integral orientada al crecimiento de emprendedores, profesionales y empresas, trabajando en el análisis estratégico de proyectos, posicionamiento digital y optimización de ventas online. Su enfoque combina planificación, ejecución y medición de resultados, acompañando a los asociados en la construcción de estrategias concretas que fortalezcan su presencia digital, mejoren su comunicación y generen oportunidades reales de crecimiento dentro del ecosistema de AMES.' },
    { nombre: 'Rocío Bellesi', rol: 'Consultora Estratégica', foto: avatars.rocio, iniciales: null, bio: 'Especialista en análisis financiero y planificación estratégica para emprendedores y empresas. Desde su rol en Mutual AMES acompaña a los asociados en el ordenamiento de la estructura financiera de sus negocios, trabajando sobre control de costos, rentabilidad, proyecciones y definición de indicadores clave. Su enfoque está orientado a transformar los números del negocio en información clara para la toma de decisiones, optimizando la gestión operativa y fortaleciendo la planificación para lograr resultados sostenibles dentro del ecosistema de AMES.' },
];

// ── Valores ────────────────────────────────────────────────────────
const valores = [
    { icono: <Heart className="w-7 h-7" />, titulo: 'Comunidad', desc: 'Creemos que los emprendedores que se apoyan mutuamente llegan más lejos. La red colaborativa es la base esencial del crecimiento.', color: 'from-secondary to-primary' },
    { icono: <Zap className="w-7 h-7" />, titulo: 'Impacto Real', desc: 'Medimos nuestro éxito en los resultados concretos de cada emprendedor. Nada de promesas vacías.', color: 'from-secondary to-accent' },
    { icono: <Globe className="w-7 h-7" />, titulo: 'Triple Impacto', desc: 'Economía, sociedad y medioambiente en equilibrio. Emprendemos con responsabilidad.', color: 'from-accent to-primary' },
    { icono: <Users className="w-7 h-7" />, titulo: 'Accesibilidad', desc: 'AMES elimina barreras brindando acompañamiento de calidad a todo el sector emprendedor, uniendo fuerzas con instituciones y empresas que conocen y transitaron los mismos procesos que requiere la difícil tarea de emprender.', color: 'from-primary to-secondary' },
    { icono: <Target className="w-7 h-7" />, titulo: 'Inteligencia colaborativa', desc: 'Creemos en el valor de pensar, decidir y crecer en red, combinando miradas, experiencias y capacidades dentro de la comunidad.', color: 'from-accent to-secondary' },
    { icono: <TrendingUp className="w-7 h-7" />, titulo: 'Crecimiento Continuo', desc: 'La cultura de aprendizaje y la mejora constante son el motor de nuestra comunidad.', color: 'from-primary to-accent' },
];

// ── Hitos de historia ──────────────────────────────────────────────
const hitos = [
    {
        año: '2022',
        titulo: 'Nacimiento de AMES',
        desc: 'En octubre de 2022 nace la Asociación Mutual entre Emprendedores de Santa Fe con el objetivo de crear una comunidad que acompañe el desarrollo de emprendedores y empresas emergentes, promoviendo la cooperación, el aprendizaje y el acceso a herramientas concretas para crecer. Desde su origen, AMES se planteó una misión clara: generar un espacio donde emprendedores, profesionales y empresarios puedan encontrarse, compartir experiencias y construir oportunidades de desarrollo económico y empresarial.',
        items: null,
    },
    {
        año: '2023',
        titulo: 'Primera Ronda de Proyectos',
        desc: 'AMES organiza la Primera Ronda de Proyectos, un encuentro pensado para que emprendedores puedan presentar sus iniciativas ante empresarios, potenciales inversores y miembros de la comunidad. La Ronda se convirtió rápidamente en un espacio de vinculación estratégica donde los emprendedores no solo presentan sus ideas, sino que también reciben devoluciones, generan contactos y abren oportunidades concretas de crecimiento, incluyendo acuerdos de inversión, financiamiento y nuevas relaciones con padrinos empresariales.',
        items: null,
    },
    {
        año: '2024',
        titulo: 'Segunda Ronda de Proyectos',
        desc: 'AMES realizó la Segunda Ronda de Proyectos, consolidando el evento como uno de los espacios de encuentro más importantes de la comunidad emprendedora vinculada a la mutual. Esta edición permitió ampliar la red de contactos, sumar nuevos emprendedores y fortalecer el vínculo con empresarios interesados en apoyar proyectos innovadores. Emprendedores lograron acceder a financiamiento, acuerdos de inversión y nuevas alianzas estratégicas.',
        items: null,
    },
    {
        año: '2025',
        titulo: 'Tercera Ronda de Proyectos',
        desc: 'AMES llevó adelante la Tercera Ronda de Proyectos, confirmando la evolución y madurez del ecosistema emprendedor consolidado alrededor de la mutual. Esta edición reunió a emprendedores, empresarios, profesionales y miembros de la comunidad en un espacio de intercambio donde los proyectos pudieron presentar sus propuestas, compartir su visión y generar nuevas oportunidades de crecimiento, inversión y vínculos estratégicos con padrinos empresariales.',
        items: null,
    },
    {
        año: 'Hoy',
        titulo: 'Bases sólidas para crecer',
        desc: 'Hoy AMES continúa consolidando un ecosistema integral de acompañamiento para emprendedores, profesionales y empresas que buscan crecer con estructura y respaldo institucional. Integramos consultoría estratégica, formación práctica y académica, planificación, diseño de planes de acción, networking de calidad, herramientas de ayuda económica e inversiones y programas de aceleración para proyectos con potencial de expansión.',
        items: null,
    },
];

const NosotrosPage = () => {
    return (
        <div className="bg-background">
            {/* ── Hero ─────────────────────────────────────────────────── */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary">
                {/* Imagen de fondo */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={about.equipo}
                        alt="Equipo AMES"
                        className="w-full h-full object-cover opacity-25"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary" />
                </div>

                {/* Glow decorativo */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] z-0" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] z-0" />

                <div className="relative z-10 text-center px-10 lg:px-24 py-32 w-full">
                    <motion.span
                        {...fadeUp(0.1)}
                        className="inline-block bg-secondary/20 border border-secondary/30 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase"
                    >
                        Quiénes Somos
                    </motion.span>
                    <motion.h1
                        {...fadeUp(0.25)}
                        className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-[1.05]"
                    >
                        Somos la comunidad <br />
                        que <span className="text-secondary">potencia emprendedores</span>
                    </motion.h1>
                    <motion.p
                        {...fadeUp(0.4)}
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Somos una Mutual ubicada en Rosario, Santa Fe, y construimos un ecosistema de crecimiento para emprendedores, empresas y profesionales.
                        <br /><br />
                        Impulsamos el despegue y desarrollo de nuestros asociados con consultoría estratégica, formación práctica y académica, planificación, diseño de planes de acción, networking de calidad, acceso a ayuda económica e inversiones y aceleración de proyectos.
                    </motion.p>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.div>
            </section>

            {/* ── Misión & Visión ───────────────────────────────────────── */}
            <section className="py-28 bg-white overflow-hidden">
                <div className="w-full px-5 sm:px-8 lg:px-20">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        {/* Imagen */}
                        <motion.div {...fadeLeft(0)} className="w-full lg:w-5/12 relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                                <img
                                    src={about.fundadores}
                                    alt="Fundadores AMES"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                            </div>
                            {/* Badge flotante */}
                            <motion.div
                                animate={{ y: [-6, 6, -6] }}
                                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-5 flex items-center gap-4 border border-gray-100"
                            >
                                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                                    <Heart className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-2xl font-heading font-black text-primary">+500</p>
                                    <p className="text-sm text-gray-500">Emprendedores en comunidad</p>
                                </div>
                            </motion.div>
                            <div className="absolute -top-8 -left-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
                        </motion.div>

                        {/* Texto */}
                        <div className="w-full lg:w-7/12 space-y-10">
                            <motion.div {...fadeRight(0)}>
                                <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
                                    ¿Quiénes Somos?
                                </span>
                                <h2 className="text-4xl md:text-5xl font-heading font-black text-primary leading-tight mb-6">
                                    Una mutual que construye bases sólidas <span className="text-secondary">para crecer</span>
                                </h2>
                                <div className="space-y-4">
                                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                        Mutual AMES (Asociación Mutual entre Emprendedores de Santa Fe) es una organización con sede en Rosario, Argentina. Desde 2022 desarrollamos un ecosistema integral de acompañamiento para emprendedores, profesionales y empresas que buscan crecer con estructura y respaldo institucional.
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed font-bold text-primary">
                                        En AMES no solo brindamos apoyo económico y profesional. Construimos bases sólidas para el desarrollo económico de la región.
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Integramos consultoría estratégica, formación práctica y académica, planificación, diseño de planes de acción, networking de calidad, herramientas de ayuda económica e inversiones y programas de aceleración para proyectos con potencial de expansión.
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed font-semibold italic">
                                        Nuestro propósito es que cada persona y empresa pueda avanzar con planificación, comunidad activa y herramientas concretas para fortalecer su actividad.
                                    </p>
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                {[
                                    { titulo: 'Nuestra Misión', texto: 'Impulsar el desarrollo económico de emprendedores, profesionales y empresas mediante formación, comunidad, asesoramiento estratégico y herramientas financieras responsables, en pos de promover un crecimiento sostenible y ordenado dentro de nuestra comunidad.', icono: <Target className="w-5 h-5" /> },
                                    { titulo: 'Nuestra Visión', texto: 'Consolidarnos como un ecosistema mutual de referencia en el interior del país, integrando educación, acompañamiento estratégico, ayuda económica e inversión dentro de una misma estructura institucional confiable y transparente.', icono: <TrendingUp className="w-5 h-5" /> }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        {...fadeUp(0.2 + i * 0.15)}
                                        className="bg-background rounded-2xl p-6 border border-gray-100 hover:border-secondary/30 hover:shadow-lg transition-all group"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-9 h-9 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                                                {item.icono}
                                            </div>
                                            <h3 className="font-heading font-bold text-primary text-lg">{item.titulo}</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.texto}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Historia / Línea de tiempo ────────────────────────────── */}
            <section className="py-28 bg-primary overflow-hidden relative">
                {/* Imagen de fondo difuminada */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <img src={about.rosario} alt="Rosario" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary/90 z-0" />

                <div className="relative z-10 w-full px-5 sm:px-8 lg:px-20">
                    <motion.div {...fadeUp(0)} className="text-center mb-20">
                        <span className="inline-block bg-secondary/20 border border-secondary/30 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase">
                            Nuestra Trayectoria
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4 leading-tight">
                            Una historia de <span className="text-secondary">crecimiento colectivo</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Cada año marcó un nuevo capítulo en la construcción de la comunidad más poderosa de emprendedores de la región.
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Línea central */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: 'easeOut' }}
                                className="w-full bg-gradient-to-b from-secondary via-accent to-secondary"
                            />
                        </div>

                        <div className="space-y-12 md:space-y-0">
                            {hitos.map((hito, i) => {
                                const isCurrent = hito.año === 'Hoy';
                                const renderOnRight = !isCurrent && i % 2 !== 0;

                                return (
                                    <motion.div
                                        key={i}
                                        {...(renderOnRight ? fadeRight(i * 0.15) : fadeLeft(i * 0.15))}
                                        className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${renderOnRight ? 'md:flex-row-reverse' : 'md:flex-row'} mb-16`}
                                    >
                                        {/* Contenido */}
                                        <div
                                            className={`w-full md:w-5/12 ${
                                                isCurrent
                                                    ? 'text-center md:pr-12'
                                                    : renderOnRight
                                                    ? 'text-center md:pl-12'
                                                    : 'text-center md:pr-12'
                                            }`}
                                        >
                                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-secondary/30 transition-all group">
                                                <span className="text-secondary font-heading font-black text-4xl block mb-2">{hito.año}</span>
                                                <h3 className="text-white font-heading font-bold text-xl mb-3">{hito.titulo}</h3>
                                                <p className={`text-gray-400 leading-relaxed ${isCurrent ? 'text-xs md:text-sm' : 'text-sm'}`}>{hito.desc}</p>
                                                {hito.items && (
                                                    <ul
                                                        className={`mt-4 space-y-2 ${
                                                            renderOnRight ? 'md:text-left' : 'md:text-right'
                                                        }`}
                                                    >
                                                        {hito.items.map((item, j) => (
                                                            <li
                                                                key={j}
                                                                className={`text-gray-300 leading-relaxed flex items-start gap-2 ${
                                                                    isCurrent ? 'text-xs md:text-sm' : 'text-sm'
                                                                }`}
                                                            >
                                                                <span className="text-secondary mt-1 shrink-0">▸</span>
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>

                                        {/* Punto central */}
                                        <div className="hidden md:flex w-2/12 items-center justify-center z-10">
                                            <div className="w-5 h-5 rounded-full bg-secondary border-4 border-primary shadow-lg shadow-secondary/50" />
                                        </div>

                                        {/* Espacio opuesto */}
                                        <div className="hidden md:block w-5/12" />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Valores ───────────────────────────────────────────────── */}
            <section className="py-28 bg-background overflow-hidden">
                <div className="w-full px-5 sm:px-8 lg:px-20">
                    <motion.div {...fadeUp(0)} className="text-center mb-20">
                        <span className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase">
                            Lo que nos guía
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-4 leading-tight">
                            Nuestros Pilares
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Estos principios definen cómo trabajamos, cómo nos relacionamos y cómo medimos el éxito.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {valores.map((valor, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp(i * 0.1)}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-secondary/10 transition-all cursor-default"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${valor.color} text-white flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                    {valor.icono}
                                </div>
                                <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                                    {valor.titulo}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{valor.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Equipo ────────────────────────────────────────────────── */}
            <section className="py-28 bg-white overflow-hidden">
                <div className="w-full px-5 sm:px-8 lg:px-20">
                    <motion.div {...fadeUp(0)} className="text-center mb-20">
                        <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase">
                            Las personas detrás de AMES
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-4 leading-tight">
                            Nuestro <span className="text-secondary">Equipo</span>
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Un equipo que integra estrategia, comunidad y acompañamiento real para fortalecer el ecosistema AMES.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                        {equipo.map((miembro, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp(i * 0.12)}
                                whileHover={{ y: -10 }}
                                className="group text-center cursor-default bg-white p-6 rounded-3xl border border-gray-100 shadow-sm"
                            >
                                <div className="relative mb-5 mx-auto w-fit">
                                    <div className="w-36 h-36 rounded-3xl overflow-hidden shadow-xl border-4 border-white group-hover:border-secondary/50 transition-all mx-auto">
                                        {miembro.foto ? (
                                            <img
                                                src={miembro.foto}
                                                alt={miembro.nombre}
                                                className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                                                    miembro.nombre === 'Carolina Gazquez'
                                                        ? 'object-[center_28%]'
                                                        : (miembro.nombre === 'Lautaro Zulian' || miembro.nombre === 'Diego Ballerini')
                                                            ? 'object-top'
                                                            : ''
                                                }`}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                                <span className="text-white font-heading font-black text-4xl tracking-tight">
                                                    {miembro.iniciales}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    {/* Dot indicador */}
                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-secondary rounded-full border-2 border-white shadow" />
                                </div>
                                <h3 className="font-heading font-bold text-primary text-lg mb-1 group-hover:text-secondary transition-colors">
                                    {miembro.nombre}
                                </h3>
                                <span className="text-accent text-sm font-semibold block mb-3">{miembro.rol}</span>
                                <p className="text-gray-500 text-base leading-relaxed">{miembro.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Números / Social Proof ────────────────────────────────── */}
            <section className="py-20 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <img src={community.coworking} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 w-full px-5 sm:px-8 lg:px-20">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
                        {[
                            { num: '+500', label: 'Emprendedores', sub: 'ya forman parte de la comunidad' },
                            { num: '+50', label: 'Padrinos AMES', sub: 'dentro del ecosistema' },
                            { num: '+100', label: 'Proyectos', sub: 'acelerados' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp(i * 0.1)}
                                className="text-white"
                            >
                                <p className="text-5xl md:text-6xl font-heading font-black mb-1">{stat.num}</p>
                                <p className="font-bold text-white/90 text-lg">{stat.label}</p>
                                <p className="text-white/60 text-sm">{stat.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Final ─────────────────────────────────────────────── */}
            <section className="py-28 bg-background">
                <div className="w-full px-5 sm:px-8 lg:px-20 text-center">
                    <motion.div {...fadeUp(0)}>
                        <span className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                            Sumate
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-6 leading-tight">
                            Sé parte de la comunidad que <span className="text-secondary">transforma el mundo emprendedor</span>
                        </h2>
                        <p className="text-gray-600 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                            Si creés en el poder del trabajo colaborativo y querés llevar tu proyecto al siguiente nivel, AMES tiene un lugar para vos.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                href={TIENDUP_MEMBRESIA_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-secondary/30 hover:shadow-2xl transition-all"
                            >
                                Quiero asociarme <ArrowRight className="w-5 h-5" />
                            </motion.a>
                        </div>

                        {/* Mini trust indicators */}
                        <motion.div {...fadeUp(0.3)} className="mt-12 flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
                            {['Comunidad que se potencia mutuamente', 'Acompañamiento real', 'Herramientas concretas para crecer'].map((item, i) => (
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

export default NosotrosPage;
