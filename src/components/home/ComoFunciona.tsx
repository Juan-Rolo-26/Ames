import { motion } from 'framer-motion';
import { community } from '../../assets/images';
import { TIENDUP_MEMBRESIA_URL } from '../../utils/tiendup';

const ComoFunciona = () => {
    return (
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
            <div className="w-full px-5 sm:px-8 lg:px-20">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Columna Izquierda: Imagen */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img src={community.grupo} alt="Servicios de mutual en Argentina" className="w-full h-64 sm:h-96 lg:h-[680px] object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent mix-blend-multiply"></div>

                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/20"
                            >
                                <div className="text-secondary font-heading font-black text-3xl">+500</div>
                                <div className="text-sm font-semibold text-gray-700 leading-tight">Emprendedores<br />en comunidad</div>
                            </motion.div>
                        </div>
                        {/* Decoración */}
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary/20 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -top-8 -left-8 w-48 h-48 bg-accent/20 rounded-full blur-2xl -z-10"></div>
                    </motion.div>

                    {/* Columna Derecha: Contenido y Pasos */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                        <div className="mb-12 text-center lg:text-left">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6 leading-tight"
                            >
                                El camino del emprendedor con impacto.
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0"
                            >
                                Seguí estos 3 simples pasos para formar parte de la comunidad AMES y acelerar el crecimiento de tu empresa.
                            </motion.p>
                        </div>

                        <div className="space-y-8 relative">
                            {/* Línea vertical de conexión */}
                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-0.5 bg-gray-100 z-0">
                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="w-full bg-gradient-to-b from-secondary to-accent"
                                ></motion.div>
                            </div>

                            {/* Pasos */}
                            {[
                                { num: 1, title: 'Te asociás', color: 'secondary', text: 'Obtenés acceso a capacitaciones de nuestra Academia Express, ayuda económica e inversiones, uso de oficinas hasta 2 veces al mes para reuniones o trabajo profesional, grandes descuentos en consultorías individualizadas, programa de aceleración de proyectos y consultorías mensuales sin cargo.' },
                                { num: 2, title: 'Diagnosticamos', color: 'accent', text: 'Accedés a la comunidad de emprendedores, profesionales y empresas, generando networking estratégico y oportunidades dentro del ecosistema.' },
                                { num: 3, title: 'Escalás', color: 'primary', text: 'Formás parte de un entorno que impulsa el crecimiento, donde podés intercambiar experiencias, generar alianzas y potenciar tu proyecto dentro de una comunidad activa.' }
                            ].map((paso, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    className="relative z-10 flex gap-6 group"
                                >
                                    <div className={`w-16 h-16 shrink-0 rounded-2xl bg-${paso.color} text-white flex items-center justify-center text-2xl font-bold font-heading shadow-lg shadow-${paso.color}/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                        {paso.num}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold font-heading text-primary mb-2 mt-1">{paso.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-base max-w-md">
                                            {paso.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="mt-12 flex justify-center lg:justify-start"
                        >
                            <a
                                href={TIENDUP_MEMBRESIA_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary hover:-translate-y-1 transition-all shadow-xl shadow-primary/30"
                            >
                                Comenzar mi camino hoy
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComoFunciona;
