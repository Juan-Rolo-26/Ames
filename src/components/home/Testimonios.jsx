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
        <section className="py-24 bg-background border-t border-gray-100">
            <div className="w-full px-10 lg:px-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary mb-6">
                        Emprendedores <span className="text-secondary">reales.</span><br className="hidden md:block" /> Resultados <span className="text-accent">reales.</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Casos de éxito de quienes apostaron por la comunidad de AMES y lograron profesionalizar y crecer su proyecto.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimoniosData.map((testimonio, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-secondary/10 transition-all cursor-default flex flex-col h-full"
                        >
                            <div className="flex space-x-1 text-secondary mb-6">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} size={20} fill="currentColor" stroke="none" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic text-lg leading-relaxed mb-8">
                                "{testimonio.cita}"
                            </p>
                            <div className="mt-auto pt-6 flex items-center space-x-4">
                                <motion.img
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    src={testimonio.foto}
                                    alt={testimonio.name}
                                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                                />
                                <div>
                                    <h4 className="font-bold text-primary text-lg">{testimonio.name}</h4>
                                    <span className="text-sm font-medium text-accent">{testimonio.empresa}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <motion.a
                        href={`${import.meta.env.BASE_URL}casos`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center text-accent font-semibold text-lg hover:text-teal-700 transition-colors"
                    >
                        Ver más casos de éxito →
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Testimonios;
