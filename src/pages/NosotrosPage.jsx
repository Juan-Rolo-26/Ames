import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, Zap, Target, TrendingUp, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { about, community, avatars, testimonials } from '../assets/images';
import { Link } from 'react-router-dom';

// ── Animaciones reutilizables ──────────────────────────────────────
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

// ── Datos del equipo ───────────────────────────────────────────────
const equipo = [
    { nombre: 'Carlos Rivera', rol: 'Fundador & Director', foto: avatars.carlos, bio: 'Emprendedor serial con +15 años de experiencia. Creó AMES para construir la red de soporte que él mismo necesitó y no tuvo en sus comienzos.' },
    { nombre: 'María González', rol: 'Directora de Comunidad', foto: avatars.maria, bio: 'Especialista en desarrollo organizacional. Lidera las rondas de networking y los programas de mentoría con foco en resultados reales.' },
    { nombre: 'Laura Ríos', rol: 'Coordinadora de Escuela', foto: avatars.laura, bio: 'Docente y consultora de negocios. Diseña los programas de capacitación Express para emprendedores en etapas iniciales y de crecimiento.' },
    { nombre: 'Juan Pérez', rol: 'Jefe de Finanzas', foto: avatars.juan, bio: 'Contador público y experto en finanzas para pymes. Gestiona los programas de ayuda económica y conecta proyectos con fuentes de financiamiento.' },
];

// ── Valores ────────────────────────────────────────────────────────
const valores = [
    { icono: <Heart className="w-7 h-7" />, titulo: 'Comunidad', desc: 'Creemos que los emprendedores que se apoyan mutuamente llegan más lejos. La red lo es todo.', color: 'from-pink-500 to-secondary' },
    { icono: <Zap className="w-7 h-7" />, titulo: 'Impacto Real', desc: 'Medimos nuestro éxito en los resultados concretos de cada emprendedor. Nada de promesas vacías.', color: 'from-secondary to-accent' },
    { icono: <Globe className="w-7 h-7" />, titulo: 'Triple Impacto', desc: 'Economía, sociedad y medioambiente en equilibrio. Emprendemos con responsabilidad.', color: 'from-accent to-primary' },
    { icono: <Users className="w-7 h-7" />, titulo: 'Accesibilidad', desc: 'La mutual elimina barreras. El acompañamiento de calidad no debe ser un privilegio de pocos.', color: 'from-primary to-secondary' },
    { icono: <Target className="w-7 h-7" />, titulo: 'Foco en Resultados', desc: 'Cada acción dentro de AMES está orientada a generar un avance concreto en tu proyecto.', color: 'from-secondary to-pink-500' },
    { icono: <TrendingUp className="w-7 h-7" />, titulo: 'Crecimiento Continuo', desc: 'La cultura de aprendizaje y la mejora constante son el motor de nuestra comunidad.', color: 'from-accent to-secondary' },
];

// ── Hitos de historia ──────────────────────────────────────────────
const hitos = [
    { año: '2018', titulo: 'El Primer Paso', desc: 'Carlos Rivera funda AMES en Rosario como una pequeña red de emprendedores que se reúnen para compartir desafíos y soluciones.' },
    { año: '2020', titulo: 'La Mutual Nace', desc: 'AMES se formaliza como mutual, permitiendo acceder a herramientas de financiamiento colectivo y beneficios formales para sus miembros.' },
    { año: '2022', titulo: 'Escuela Express', desc: 'Se lanza el programa de capacitación propio, con más de 200 emprendedores formados en el primer año en gestión, ventas y finanzas.' },
    { año: '2024', titulo: '+500 Miembros', desc: 'La comunidad supera los 500 emprendedores activos, consolida el programa de Empresas Padrino y expande su alcance a toda la región.' },
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

                <div className="relative z-10 text-center px-6 py-32 max-w-4xl mx-auto">
                    <motion.span
                        {...fadeUp(0.1)}
                        className="inline-block bg-secondary/20 border border-secondary/30 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase"
                    >
                        Nuestra Historia
                    </motion.span>
                    <motion.h1
                        {...fadeUp(0.25)}
                        className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-[1.05]"
                    >
                        Somos la comunidad que<br />
                        <span className="text-secondary">potencia emprendedores</span>
                    </motion.h1>
                    <motion.p
                        {...fadeUp(0.4)}
                        className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        AMES nació del convencimiento de que un emprendedor acompañado vale más que diez solos.
                        Construimos comunidad, brindamos herramientas y generamos impacto real en Rosario y la región.
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
                <div className="w-full max-w-7xl mx-auto px-10 lg:px-20">
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
                                    <p className="text-sm text-gray-500">Vidas impactadas</p>
                                </div>
                            </motion.div>
                            <div className="absolute -top-8 -left-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
                        </motion.div>

                        {/* Texto */}
                        <div className="w-full lg:w-7/12 space-y-10">
                            <motion.div {...fadeRight(0)}>
                                <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
                                    Quiénes Somos
                                </span>
                                <h2 className="text-4xl md:text-5xl font-heading font-black text-primary leading-tight mb-6">
                                    La mutual que <span className="text-secondary">te acompaña</span> en todo el camino
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                                    Mutual AMES (Aceleradora Mutual de Emprendedores Sustentables) es una organización sin fines de lucro radicada en Rosario, Argentina. Desde 2018 trabajamos para que ningún emprendedor tenga que enfrentar solo los desafíos del camino.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Combinamos financiamiento solidario, formación práctica, red de contactos y acompañamiento personalizado para que las ideas se transformen en proyectos rentables con impacto positivo.
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { titulo: 'Nuestra Misión', texto: 'Acompañar a emprendedores de la economía real con herramientas, comunidad y financiamiento solidario, generando un impacto positivo triple en la sociedad, el ambiente y la economía.', icono: <Target className="w-5 h-5" /> },
                                    { titulo: 'Nuestra Visión', texto: 'Ser la red mutual de emprendedores más importante del interior del país, referencia de que se puede emprender con propósito, impacto y resultados concretos.', icono: <TrendingUp className="w-5 h-5" /> }
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

                <div className="relative z-10 w-full max-w-5xl mx-auto px-10 lg:px-20">
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
                            {hitos.map((hito, i) => (
                                <motion.div
                                    key={i}
                                    {...(i % 2 === 0 ? fadeLeft(i * 0.15) : fadeRight(i * 0.15))}
                                    className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-16`}
                                >
                                    {/* Contenido */}
                                    <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                                        <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-secondary/30 transition-all group`}>
                                            <span className="text-secondary font-heading font-black text-4xl block mb-2">{hito.año}</span>
                                            <h3 className="text-white font-heading font-bold text-xl mb-3">{hito.titulo}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">{hito.desc}</p>
                                        </div>
                                    </div>

                                    {/* Punto central */}
                                    <div className="hidden md:flex w-2/12 items-center justify-center z-10">
                                        <div className="w-5 h-5 rounded-full bg-secondary border-4 border-primary shadow-lg shadow-secondary/50" />
                                    </div>

                                    {/* Espacio opuesto */}
                                    <div className="hidden md:block w-5/12" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Valores ───────────────────────────────────────────────── */}
            <section className="py-28 bg-background overflow-hidden">
                <div className="w-full max-w-7xl mx-auto px-10 lg:px-20">
                    <motion.div {...fadeUp(0)} className="text-center mb-20">
                        <span className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase">
                            Lo que nos guía
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-4 leading-tight">
                            Nuestros Valores
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
                <div className="w-full max-w-7xl mx-auto px-10 lg:px-20">
                    <motion.div {...fadeUp(0)} className="text-center mb-20">
                        <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase">
                            Las personas detrás de AMES
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-4 leading-tight">
                            Nuestro <span className="text-secondary">Equipo</span>
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Un grupo de profesionales apasionados con experiencia real en el mundo emprendedor.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {equipo.map((miembro, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp(i * 0.12)}
                                whileHover={{ y: -10 }}
                                className="group text-center cursor-default"
                            >
                                <div className="relative mb-5 mx-auto w-fit">
                                    <div className="w-36 h-36 rounded-3xl overflow-hidden shadow-xl border-4 border-white group-hover:border-secondary/50 transition-all mx-auto">
                                        <img
                                            src={miembro.foto}
                                            alt={miembro.nombre}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    {/* Dot indicador */}
                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-secondary rounded-full border-2 border-white shadow" />
                                </div>
                                <h3 className="font-heading font-bold text-primary text-lg mb-1 group-hover:text-secondary transition-colors">
                                    {miembro.nombre}
                                </h3>
                                <span className="text-accent text-sm font-semibold block mb-3">{miembro.rol}</span>
                                <p className="text-gray-500 text-sm leading-relaxed">{miembro.bio}</p>
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
                <div className="relative z-10 w-full max-w-5xl mx-auto px-10 lg:px-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { num: '+500', label: 'Emprendedores', sub: 'en la comunidad' },
                            { num: '+50', label: 'Empresas', sub: 'Padrino aliadas' },
                            { num: '+120', label: 'Proyectos', sub: 'impulsados' },
                            { num: '6', label: 'Años', sub: 'construyendo juntos' },
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
                <div className="w-full max-w-4xl mx-auto px-10 lg:px-20 text-center">
                    <motion.div {...fadeUp(0)}>
                        <span className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                            Sumate
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-6 leading-tight">
                            Sé parte de la comunidad que <span className="text-secondary">transforma</span> Rosario
                        </h2>
                        <p className="text-gray-600 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                            Si creés en el poder del trabajo colectivo y querés llevar tu proyecto al siguiente nivel, AMES tiene un lugar para vos.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://aceleradoraimpactobyames.tiendup.com/p/membresia-mensual-impacto-by-ames"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-secondary/30 hover:shadow-2xl transition-all"
                            >
                                Quiero ser parte <ArrowRight className="w-5 h-5" />
                            </motion.a>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Link
                                    to="/servicios"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-primary px-10 py-4 rounded-full font-bold text-lg border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all"
                                >
                                    Ver nuestros servicios
                                </Link>
                            </motion.div>
                        </div>

                        {/* Mini trust indicators */}
                        <motion.div {...fadeUp(0.3)} className="mt-12 flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
                            {['Sin permanencia mínima', 'Cancelación en cualquier momento', 'Comunidad real, resultados concretos'].map((item, i) => (
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
