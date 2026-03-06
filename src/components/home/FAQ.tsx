import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const faqs = [
    {
        q: "¿Qué significa ser parte de una mutual?",
        a: "Ser parte de una mutual significa integrarse a una comunidad donde los asociados acceden a servicios y beneficios pensados para el desarrollo colectivo. Los aportes de los miembros permiten ofrecer herramientas, actividades y oportunidades en condiciones más accesibles, promoviendo un sistema basado en la colaboración y el apoyo mutuo."
    },
    {
        q: "¿Quiénes se pueden sumar?",
        a: "Pueden sumarse emprendedores, profesionales y empresas que busquen desarrollar sus proyectos dentro de un ecosistema de crecimiento. No importa si estás en etapa de idea, con un emprendimiento en marcha o gestionando una empresa, lo importante es tener compromiso con el desarrollo, la mejora continua y el trabajo dentro de una comunidad que impulsa oportunidades, formación y herramientas para crecer."
    },
    {
        q: "¿Tienen sede física?",
        a: "Sí. Nuestra sede está ubicada en Paraguay 751, en el centro de Rosario. Allí se realizan encuentros y espacios de vinculación entre miembros de la comunidad. Además, los asociados pueden utilizar las oficinas hasta 2 veces al mes para reuniones o trabajo profesional. Para quienes están en otras ciudades, también contamos con modalidades y actividades que pueden realizarse de forma remota."
    },
    {
        q: "¿Cómo funciona la Ayuda Económica?",
        a: "El proceso comienza con una consulta inicial, donde se analiza el perfil del solicitante y el destino del financiamiento. Luego se realiza una evaluación crediticia y se reúne la documentación necesaria para presentar la carpeta al departamento de admisión. Si la solicitud es aprobada, se coordinan las condiciones y se realiza el otorgamiento de la ayuda económica."
    },
    {
        q: "¿Soy empresa, cómo me sumo como padrino?",
        a: "Las empresas pueden integrarse a AMES a través del Programa Empresas Padrino, una iniciativa que permite vincularse con emprendedores, profesionales y proyectos en desarrollo dentro del ecosistema. Ser Empresa Padrino brinda presencia institucional, acceso a la red de miembros y la posibilidad de detectar proyectos con potencial para acompañar o generar alianzas. Para conocer las modalidades disponibles y evaluar la participación, es necesario contactar al equipo de AMES."
    },
    {
        q: "¿Puedo unirme si no soy de Rosario?",
        a: "¡Claro! Toda la metodología de consultoría y formación de la Escuela Express funciona en formato remoto sin problema. El networking principal hoy es presencial en Rosario, pero estamos expansionando a otras ciudades. La comunidad digital es 100% accesible desde cualquier punto del país."
    },
    {
        q: "¿Puedo cancelar mi membresía cuando quiera?",
        a: "Sí, podés cancelar en cualquier momento desde la plataforma Tiendup sin penalidades. La cancelación es efectiva al final del período mensual en curso. Creemos que el valor que ofrecemos habla por sí solo — no necesitamos retener a nadie con letra chica."
    }
];

// Variantes de animación para usar en el header de la sección
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-16 lg:py-28 bg-background overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 lg:px-10">

                {/* Header animado desde arriba */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-sm font-bold px-4 py-1.5 rounded-full mb-6 border border-secondary/20"
                    >
                        <HelpCircle className="w-4 h-4" />
                        Preguntas Frecuentes
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="text-4xl md:text-5xl font-heading font-black text-primary mb-5 leading-tight"
                    >
                        Todo lo que necesitás saber<br />
                        <motion.span
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="text-secondary"
                        >
                            antes de dar el próximo paso
                        </motion.span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="text-lg text-gray-600"
                    >
                        Resolvemos las dudas más comunes. Si tu pregunta no está acá, escribinos.
                    </motion.p>
                </motion.div>

                {/* FAQs animados alternando izquierda/derecha */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: index * 0.07 }}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-secondary/30 hover:shadow-lg transition-all"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-7 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors group"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-heading font-bold text-lg text-primary group-hover:text-secondary transition-colors pr-4">
                                    {faq.q}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-secondary text-white' : 'bg-gray-100 text-gray-400'}`}
                                >
                                    <ChevronDown className="w-4 h-4" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                                    >
                                        <div className="px-7 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 text-base">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA debajo del FAQ */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-14 text-center"
                >
                    <p className="text-gray-500 mb-4 text-base">¿Tenés otra pregunta?</p>
                    <a
                        href="https://wa.me/5493413702972?text=Hola%2C%20tengo%20una%20consulta%20sobre%20AMES"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-bold hover:bg-secondary transition-colors shadow-lg hover:-translate-y-1 transition-all"
                    >
                        Escribinos por WhatsApp
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
