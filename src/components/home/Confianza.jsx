import { motion } from 'framer-motion';
import { community } from '../../assets/images';
import { TrendingUp, Users, Clock } from 'lucide-react';

const stats = [
    { num: '+500', label: 'Emprendedores', sub: 'en la comunidad', icon: <Users className="w-5 h-5" /> },
    { num: '+50', label: 'Empresas Padrino', sub: 'aliadas estratégicas', icon: <TrendingUp className="w-5 h-5" /> },
    { num: '24/7', label: 'Soporte', sub: 'comunidad activa', icon: <Clock className="w-5 h-5" /> },
];

const logos = [
    { name: "EXPANSIÓN", delay: 0 },
    { name: "IMPACTO", delay: 0.12 },
    { name: "ROSARIO", delay: 0.24 },
    { name: "COMUNIDAD", delay: 0.36 },
    { name: "MUTUAL", delay: 0.48 },
];

const Confianza = () => {
    return (
        <section className="py-28 relative bg-primary overflow-hidden border-b border-white/10">
            {/* Background Image — zoom-in desde grande */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.15, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.2 }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    src={community.evento}
                    alt="Evento AMES"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/40" />
            </div>

            {/* Glows decorativos */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl z-0 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent/15 rounded-full blur-3xl z-0 pointer-events-none" />

            <div className="w-full px-10 lg:px-20 relative z-10">

                {/* Subtítulo — viene de arriba */}
                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center text-sm font-bold text-accent tracking-widest uppercase mb-5"
                >
                    Acompañados por la comunidad emprendedora de Rosario y la región
                </motion.p>

                {/* Título — viene de abajo con stagger */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-4xl md:text-5xl font-heading font-black text-white text-center mb-14 leading-tight"
                >
                    Ya <span className="text-secondary">confían</span> en AMES
                </motion.h2>

                {/* Logos/nombres — vienen de abajo con stagger alternando eje */}
                <div className="flex flex-wrap justify-center gap-6 mb-20">
                    {logos.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: i % 2 === 0 ? 40 : -40, scale: 0.85 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: item.delay, type: 'spring', stiffness: 80 }}
                            whileHover={{ scale: 1.08, y: -4 }}
                            className="flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 cursor-default hover:bg-white/10 hover:border-white/25 transition-all"
                        >
                            <h4 className="text-lg font-black font-heading text-white/70 hover:text-white transition-colors tracking-widest">
                                {item.name}
                            </h4>
                        </motion.div>
                    ))}
                </div>

                {/* Stats — box glass — vienen de la izquierda, centro y derecha */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                opacity: 0,
                                x: i === 0 ? -70 : i === 2 ? 70 : 0,
                                y: i === 1 ? 50 : 0,
                                scale: 0.88,
                            }}
                            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.75, delay: i * 0.15, type: 'spring', stiffness: 70 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="text-center bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all shadow-xl cursor-default"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.12, type: 'spring' }}
                                className="w-12 h-12 rounded-2xl bg-secondary/20 text-secondary flex items-center justify-center mx-auto mb-4"
                            >
                                {stat.icon}
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                                className="text-5xl font-black text-white font-heading mb-1"
                            >
                                {stat.num}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                                className="text-white font-bold text-lg"
                            >
                                {stat.label}
                            </motion.p>
                            <p className="text-gray-400 text-sm mt-1">{stat.sub}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Confianza;
