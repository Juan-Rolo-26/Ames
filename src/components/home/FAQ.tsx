import { AnimatePresence, motion } from 'framer-motion';
import { useState, type ReactNode } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

type FAQItem = {
    q: string;
    a: ReactNode;
};

const faqs: FAQItem[] = [
    {
        q: '¿Qué incluye mi membresía?',
        a: (
            <div className="space-y-4">
                <p>
                    Tu membresía en AMES te da acceso a herramientas concretas para formarte, ordenar tu negocio y crecer
                    con acompañamiento real dentro de la comunidad.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                    <li>Acceso a la Academia de capacitación Express.</li>
                    <li>Uso del espacio físico de AMES hasta 2 veces por mes.</li>
                    <li>Consultorías grupales mensuales sin cargo.</li>
                    <li>Descuentos importantes en consultorías individuales.</li>
                    <li>Beneficios exclusivos en herramientas de inversión y financiamiento.</li>
                    <li>Descuentos importantes y facilidad de financiamiento en el plan de Aceleración de Proyectos Impacto By AMES.</li>
                </ul>
            </div>
        ),
    },
    {
        q: '¿Qué significa ser parte de una mutual?',
        a: 'Ser parte de una mutual significa integrarse a una comunidad donde los asociados acceden a servicios y beneficios pensados para el desarrollo colectivo. Los aportes de los miembros permiten ofrecer herramientas, actividades y oportunidades en condiciones más accesibles, promoviendo un sistema basado en la colaboración y el apoyo mutuo.',
    },
    {
        q: '¿Quiénes se pueden sumar?',
        a: 'Pueden sumarse emprendedores, profesionales y empresas que busquen desarrollar sus proyectos dentro de un ecosistema de crecimiento. No importa si estás en etapa de idea, con un emprendimiento en marcha o gestionando una empresa, lo importante es tener compromiso con el desarrollo, la mejora continua y el trabajo dentro de una comunidad que impulsa oportunidades, formación y herramientas para crecer.',
    },
    {
        q: '¿Tienen sede física?',
        a: 'Sí. Nuestra sede está ubicada en Paraguay 751, en el centro de Rosario. Allí se realizan encuentros y espacios de vinculación entre miembros de la comunidad. Además, los asociados pueden utilizar las oficinas hasta 2 veces al mes para reuniones o trabajo profesional. Para quienes están en otras ciudades, también contamos con modalidades y actividades que pueden realizarse de forma remota.',
    },
    {
        q: '¿Cómo funciona la Ayuda Económica?',
        a: 'El proceso comienza con una consulta inicial, donde se analiza el perfil del solicitante y el destino del financiamiento. Luego se realiza una evaluación crediticia y se reúne la documentación necesaria para presentar la carpeta al departamento de admisión. Si la solicitud es aprobada, se coordinan las condiciones finales y se formaliza el otorgamiento de la ayuda económica.',
    },
    {
        q: '¿Cómo me sumo como Padrino?',
        a: 'Las empresas e instituciones pueden integrarse a AMES a través del Programa Padrinos, una iniciativa que les permite vincularse con emprendedores, profesionales y proyectos en desarrollo dentro del ecosistema. Ser Padrino brinda presencia institucional, acceso a la red de miembros y la posibilidad de detectar proyectos con potencial para acompañar o generar alianzas. Para conocer las modalidades disponibles y evaluar la participación, es necesario contactar al equipo de AMES.',
    },
    {
        q: '¿Puedo unirme si no soy de Rosario?',
        a: 'Claro. Toda la metodología de consultoría y formación de Academia Express AMES funciona en formato remoto sin problema. El networking principal hoy es presencial en Rosario, pero AMES se sigue expandiendo a otras ciudades. La comunidad digital es accesible desde cualquier punto del país.',
    },
    {
        q: '¿Puedo cancelar mi membresía cuando quiera?',
        a: 'Sí, podés cancelar en cualquier momento desde la plataforma Tiendup sin penalidades. La cancelación es efectiva al final del período mensual en curso. El objetivo es que te quedes por el valor real del ecosistema, no por trabas ni letra chica.',
    },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="preguntas-frecuentes" className="bg-[#f4f7ff] py-20 lg:py-28">
            <div className="w-full px-5 sm:px-8 lg:px-20">
                <div className="mx-auto max-w-5xl">
                    <motion.div {...fadeUp(0)} className="mb-12 text-center lg:mb-14">
                        <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-white px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-secondary shadow-sm">
                            <HelpCircle className="h-4 w-4" />
                            Preguntas Frecuentes
                        </span>
                        <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-heading font-black leading-tight text-primary md:text-5xl">
                            Respuestas claras para entender
                            <span className="block text-secondary">cómo funciona AMES</span>
                        </h1>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <motion.div
                                    key={faq.q}
                                    {...fadeUp(index * 0.05)}
                                    className={`overflow-hidden rounded-[26px] border transition-all duration-300 ${
                                        isOpen
                                            ? 'border-secondary/25 bg-gradient-to-br from-white to-secondary/5 shadow-[0_16px_42px_rgba(45,100,223,0.10)]'
                                            : 'border-[#e2e9fa] bg-white hover:border-secondary/20'
                                    }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        aria-expanded={isOpen}
                                        className="flex w-full items-start gap-4 px-5 py-5 text-left sm:px-6"
                                    >
                                        <div
                                            className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-black ${
                                                isOpen ? 'bg-secondary text-white' : 'bg-primary/5 text-primary'
                                            }`}
                                        >
                                            {String(index + 1).padStart(2, '0')}
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <span className={`block text-lg font-heading font-bold leading-snug transition-colors ${isOpen ? 'text-secondary' : 'text-primary'}`}>
                                                {faq.q}
                                            </span>
                                        </div>

                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.26 }}
                                            className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                                                isOpen ? 'bg-secondary text-white' : 'bg-[#eef3ff] text-[#6c7ea0]'
                                            }`}
                                        >
                                            <ChevronDown className="h-5 w-5" />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            >
                                                <div className="px-5 pb-6 sm:px-6">
                                                    <div className="ml-14 rounded-2xl border border-secondary/10 bg-white px-4 py-4 text-[15px] leading-relaxed text-[#53627c] shadow-sm sm:px-5">
                                                        {faq.a}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
