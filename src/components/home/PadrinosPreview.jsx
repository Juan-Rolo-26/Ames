import { motion } from 'framer-motion';
import { padrinos } from '../../assets/images';
import { ArrowRight, CheckCircle, Building2 } from 'lucide-react';

const beneficiosPadrino = [
    'Visibilidad de marca en todos los eventos y canales de AMES',
    'Apoyo a la economía real y emprendedores de la región',
    'Informe trimestral de impacto RSE certificado para tu empresa',
    'Acceso a red de +500 emprendedores como potenciales clientes',
    'Tranquilidad de apoyar proyectos reales y verificados',
];

const categorias = ['Platinum', 'Oro', 'Plata', 'Networking'];

const PadrinosPreview = () => {
    return (
        <section className="py-28 bg-primary text-white relative overflow-hidden">
            {/* Decorator de fondo */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 origin-top-right transform translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="w-full px-10 lg:px-20 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">

                    {/* Columna izquierda — texto viene de la izquierda */}
                    <div className="md:w-1/2">
                        {/* Badge — viene de arriba */}
                        <motion.span
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
                        >
                            <Building2 className="w-4 h-4 text-accent" />
                            Programa de Empresas Padrino
                        </motion.span>

                        {/* Título — viene de la izquierda con spring */}
                        <motion.h2
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.7, delay: 0.05, type: 'spring', stiffness: 70 }}
                            className="text-4xl md:text-5xl font-heading font-black mb-5 leading-tight"
                        >
                            Hacé crecer tu empresa{' '}
                            <motion.span
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.25 }}
                                className="text-secondary underline decoration-4 underline-offset-8"
                            >
                                apoyando a otros.
                            </motion.span>
                        </motion.h2>

                        {/* Descripción — viene de la izquierda */}
                        <motion.p
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="text-lg text-gray-300 mb-8 leading-relaxed"
                        >
                            Posicioná tu empresa impulsando a la comunidad. Alianzas estratégicas para hacer RSE real y medible desde la acción y el acompañamiento directo a los emprendedores.
                        </motion.p>

                        {/* Categorías — vienen de abajo con stagger */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-wrap gap-2 mb-7"
                        >
                            {categorias.map((cat, i) => (
                                <motion.span
                                    key={cat}
                                    initial={{ opacity: 0, scale: 0.7, y: 15 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.25 + i * 0.06, type: 'spring' }}
                                    className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80"
                                >
                                    {cat}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* Lista de beneficios — entran de izquierda uno por uno */}
                        <ul className="space-y-3 mb-10">
                            {beneficiosPadrino.map((b, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.07, type: 'spring', stiffness: 90 }}
                                    className="flex items-start gap-3 text-gray-300"
                                >
                                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                    <span className="text-sm">{b}</span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Botón CTA — viene de abajo */}
                        <motion.div
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.55, type: 'spring', stiffness: 80 }}
                        >
                            <motion.a
                                href="/padrinos"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl group"
                            >
                                Quiero ser Empresa Padrino
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Columna derecha — imagen viene de la derecha con rotate */}
                    <div className="md:w-1/2 w-full relative h-[520px]">
                        <motion.div
                            initial={{ opacity: 0, x: 80, rotate: 4, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
                        >
                            <img
                                src={padrinos.alianza}
                                alt="Alianza Estratégica"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent mix-blend-multiply" />
                        </motion.div>

                        {/* Badge flotante inferior — viene de abajo-izquierda */}
                        <motion.div
                            initial={{ opacity: 0, x: -30, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            animate={{ y: [0, -8, 0] }}
                            className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-2xl max-w-[220px]"
                        >
                            <div className="text-secondary font-bold text-base mb-1">4 categorías disponibles</div>
                            <div className="text-xs text-gray-300 leading-relaxed">Platinum · Oro · Plata · Networking</div>
                        </motion.div>

                        {/* Glow superior derecho — viene de arriba-derecha */}
                        <motion.div
                            initial={{ opacity: 0, x: 30, y: -30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.65 }}
                            className="absolute -top-8 -right-8 w-28 h-28 bg-accent/30 rounded-full blur-2xl -z-10"
                        />

                        {/* Badge superior — viene desde arriba */}
                        <motion.div
                            initial={{ opacity: 0, y: -30, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-lg border border-white/20"
                        >
                            <p className="text-primary font-black text-xl font-heading">+50</p>
                            <p className="text-gray-600 text-xs font-semibold">Empresas Padrino</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PadrinosPreview;
