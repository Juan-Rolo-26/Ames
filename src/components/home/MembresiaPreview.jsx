import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, Shield, Zap } from 'lucide-react';

const beneficios = [
    { icon: <CheckCircle className="w-5 h-5 shrink-0" />, text: 'Acceso a red y comunidad de +500 emprendedores' },
    { icon: <CheckCircle className="w-5 h-5 shrink-0" />, text: 'Descuentos exclusivos en Escuela Express' },
    { icon: <CheckCircle className="w-5 h-5 shrink-0" />, text: 'Asesoramiento contable y legal inicial' },
    { icon: <CheckCircle className="w-5 h-5 shrink-0" />, text: 'Derecho de solicitud de Ayuda Económica Mutual' },
    { icon: <CheckCircle className="w-5 h-5 shrink-0" />, text: 'Rondas de negocios exclusivas mensuales' },
    { icon: <CheckCircle className="w-5 h-5 shrink-0" />, text: 'Postulación a la Aceleradora de Impacto' },
];

const highlights = [
    { icon: <Star className="w-5 h-5" />, label: 'Elegida por +500 emprendedores' },
    { icon: <Shield className="w-5 h-5" />, label: 'Sin permanencia mínima' },
    { icon: <Zap className="w-5 h-5" />, label: 'Activación inmediata' },
];

const MembresiaPreview = () => {
    return (
        <section className="py-28 bg-white border-b border-gray-100 relative overflow-hidden">
            {/* Glow de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="w-full px-10 lg:px-20 relative z-10">
                {/* Header — viene de arriba */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block bg-secondary/10 text-secondary text-sm font-bold px-4 py-1.5 rounded-full mb-5 border border-secondary/20 tracking-wide uppercase"
                    >
                        Membresía Mensual
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-heading font-black text-primary mb-5 leading-tight"
                    >
                        Sumate a la comunidad{' '}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.35, type: 'spring', stiffness: 120 }}
                            className="text-secondary"
                        >
                            AMES
                        </motion.span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 leading-relaxed"
                    >
                        Tu membresía mensual te da acceso a red, mentorías, formación, beneficios económicos y generás impacto directo en la región desde el día uno.
                    </motion.p>
                </div>

                {/* Highlights — vienen de los costados */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {highlights.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i === 0 ? -60 : i === 2 ? 60 : 0, y: i === 1 ? -30 : 0 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.12, type: 'spring', stiffness: 80 }}
                            className="inline-flex items-center gap-2 bg-primary/5 border border-primary/15 text-primary px-5 py-2.5 rounded-full font-semibold text-sm"
                        >
                            <span className="text-secondary">{h.icon}</span>
                            {h.label}
                        </motion.div>
                    ))}
                </div>

                {/* Card de membresía — viene de abajo con scale */}
                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.93 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="bg-white border-2 border-primary rounded-3xl p-8 md:p-12 shadow-2xl relative max-w-4xl mx-auto"
                >
                    {/* Badge superior */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="absolute top-0 right-0 py-2.5 px-7 bg-secondary text-white font-bold font-heading rounded-bl-xl rounded-tr-2xl text-sm shadow-lg"
                    >
                        ⭐ Elegido por emprendedores
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        {/* Lista de beneficios — vienen de la izquierda */}
                        <div className="w-full lg:w-1/2">
                            <motion.h3
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.25 }}
                                className="text-2xl font-heading font-black text-primary mb-2"
                            >
                                Membresía Mensual Impacto
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.32 }}
                                className="text-gray-500 mb-8 border-b border-gray-100 pb-6 text-sm"
                            >
                                Cancelación en cualquier momento sin penalidades
                            </motion.p>
                            <ul className="space-y-4">
                                {beneficios.map((b, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.35 + i * 0.08, type: 'spring', stiffness: 90 }}
                                        className="flex items-center gap-3 text-gray-700 font-medium"
                                    >
                                        <span className="text-accent">{b.icon}</span>
                                        <span>{b.text}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA right col — viene de la derecha */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.35 }}
                            className="w-full lg:w-1/2 flex flex-col justify-center"
                        >
                            <div className="bg-background rounded-2xl p-8 border border-gray-100">
                                <motion.p
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.45 }}
                                    className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2"
                                >
                                    Inversión mensual
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5, type: 'spring', stiffness: 100 }}
                                    className="text-5xl font-heading font-black text-primary mb-1"
                                >
                                    Accesible
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.55 }}
                                    className="text-gray-500 text-sm mb-8"
                                >
                                    El costo se actualiza periódicamente. Ingresá a Tiendup para ver el precio actual y suscribirte.
                                </motion.p>
                                <motion.a
                                    href="https://aceleradoraimpactobyames.tiendup.com/p/membresia-mensual-impacto-by-ames"
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.04, y: -3 }}
                                    whileTap={{ scale: 0.96 }}
                                    className="flex items-center justify-center gap-2 w-full bg-secondary text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors shadow-xl shadow-orange-500/25 group"
                                >
                                    Ver planes y suscribirme
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.a>
                                <p className="text-xs text-gray-400 mt-4 text-center flex items-center justify-center gap-1">
                                    <Shield className="w-3 h-3" />
                                    Transacción segura procesada por Tiendup
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MembresiaPreview;
