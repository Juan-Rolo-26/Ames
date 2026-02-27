import { motion } from 'framer-motion';
import { community } from '../../assets/images';

const ComoFunciona = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="w-full px-10 lg:px-20 max-w-7xl mx-auto">
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
                            <img src={community.grupo} alt="Comunidad AMES" className="w-full h-[600px] object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent mix-blend-multiply"></div>

                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/20"
                            >
                                <div className="text-secondary font-heading font-black text-3xl">+500</div>
                                <div className="text-sm font-semibold text-gray-700 leading-tight">Miembros<br />Activos</div>
                            </motion.div>
                        </div>
                        {/* Decoración */}
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent/20 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -top-8 -left-8 w-48 h-48 bg-secondary/20 rounded-full blur-2xl -z-10"></div>
                    </motion.div>

                    {/* Columna Derecha: Contenido y Pasos */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-12 text-left">
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
                                className="text-lg text-gray-600 max-w-lg"
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
                                { num: 1, title: 'Te asociás', color: 'secondary', text: 'Elegís el plan de Membresía por Tiendup y te sumás a la mutual, accediendo a los primeros beneficios de red.' },
                                { num: 2, title: 'Diagnosticamos', color: 'accent', text: 'En una primera consultoría con especialistas evaluamos el estado de tu proyecto y delineamos un plan de acción.' },
                                { num: 3, title: 'Escalás', color: 'primary', text: 'Accedés a financiamiento mutuo, formás conexiones reales, te capacitás y llevás tu proyecto al siguiente nivel con éxito.' }
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
                            className="mt-12"
                        >
                            <a
                                href="https://aceleradoraimpactobyames.tiendup.com/p/membresia-mensual-impacto-by-ames"
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
