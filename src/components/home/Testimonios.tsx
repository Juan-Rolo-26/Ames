import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../../assets/images';

const testimoniosData = [
    {
        name: 'Carolina M.',
        empresa: 'Startup Tecnológica',
        cita: "La consultoría y red de contactos me permitieron destrabar procesos comerciales críticos. Ames entiende al emprendedor.",
        foto: testimonials.carolina,
    },
    {
        name: 'Sebastián R.',
        empresa: 'Logística Sur',
        cita: "Acceder a la ayuda económica para comprar nuevas unidades fue muy rápido y humano. Ahora el negocio escala en serio.",
        foto: testimonials.sebastian,
    },
    {
        name: 'Florencia T.',
        empresa: 'Gastronomía Local',
        cita: "Participar de la Escuela Express y del Networking nos ayudó enormemente a cambiar la mentalidad hacia un modelo rentable.",
        foto: testimonials.florencia,
    }
];

const Testimonios = () => {
    return (
        <section className="py-16 lg:py-28 bg-gray-50 border-t border-gray-100">
            <div className="w-full px-5 sm:px-8 lg:px-20">
                <div className="text-center mb-16">
                    <span className="inline-block bg-secondary/10 text-secondary text-sm font-bold px-4 py-1.5 rounded-full mb-5 border border-secondary/20 tracking-wide uppercase">
                        Casos de éxito
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-5">
                        Emprendedores <span className="text-secondary">reales.</span><br className="hidden md:block" /> Resultados <span className="text-accent">reales.</span>
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Casos de éxito de quienes apostaron por la comunidad de AMES y lograron profesionalizar y crecer su proyecto.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimoniosData.map((testimonio, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:shadow-2xl hover:shadow-secondary/10 transition-all cursor-default flex flex-col h-full relative overflow-hidden"
                        >
                            {/* Comilla decorativa */}
                            <span className="absolute top-5 right-6 text-8xl font-serif text-secondary/10 leading-none select-none">&ldquo;</span>

                            <div className="flex space-x-1 text-secondary mb-5 relative z-10">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} size={18} fill="currentColor" stroke="none" />
                                ))}
                            </div>
                            <p className="text-gray-700 text-base leading-relaxed mb-8 flex-grow relative z-10">
                                &ldquo;{testimonio.cita}&rdquo;
                            </p>
                            <div className="mt-auto pt-5 border-t border-gray-100 flex items-center gap-4">
                                <motion.img
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    src={testimonio.foto}
                                    alt={testimonio.name}
                                    className="w-14 h-14 rounded-full object-cover border-4 border-secondary/20 shadow-md shrink-0"
                                />
                                <div>
                                    <h4 className="font-bold text-primary text-base">{testimonio.name}</h4>
                                    <span className="text-sm font-semibold text-accent">{testimonio.empresa}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <motion.a
                        href={`${import.meta.env.BASE_URL}casos`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-secondary text-white font-bold text-base px-7 py-3 rounded-full shadow-lg hover:bg-primary transition-colors"
                    >
                        Ver más casos de éxito
                        <span>→</span>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Testimonios;
