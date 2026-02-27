import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Share2, Cookie, RefreshCw, UserCheck } from 'lucide-react';

const seccion = (titulo, icono, contenido) => ({ titulo, icono, contenido });

const secciones = [
    seccion('Responsable del Tratamiento de Datos', <UserCheck className="w-6 h-6" />, [
        'El responsable del tratamiento de tus datos personales es la Asociación Mutual AMES, con domicilio en Paraguay 751, Rosario, Santa Fe, Argentina.',
        'Podés contactarnos por consultas relacionadas con tu privacidad en: aceleradoraimpactobyames@gmail.com o al +54 9 341 370-2972.',
        'Esta Política de Privacidad cumple con los lineamientos de la Ley Nacional 25.326 de Protección de Datos Personales de Argentina y sus disposiciones reglamentarias.',
    ]),
    seccion('¿Qué datos recopilamos?', <Eye className="w-6 h-6" />, [
        'Datos de identificación: nombre completo, DNI/CUIT, fecha de nacimiento, domicilio, teléfono y correo electrónico.',
        'Datos de negocio: nombre del emprendimiento, industria, etapa del negocio, facturación aproximada e información relevante del proyecto.',
        'Datos financieros: en caso de solicitar Ayuda Económica Mutual, recopilamos información bancaria, constancias de ingresos y documentación respaldatoria.',
        'Datos de uso del sitio web: dirección IP, tipo de navegador, páginas visitadas, tiempo de sesión y datos de cookies de navegación.',
        'Datos de comunicación: registro de consultas, correos y mensajes intercambiados con el equipo de AMES.',
    ]),
    seccion('¿Para qué usamos tus datos?', <Shield className="w-6 h-6" />, [
        'Gestión de la membresía: alta, administración, facturación y comunicación sobre tu plan de socio.',
        'Prestación de servicios: consultoría, formación, networking, Ayuda Económica y Aceleradora de Impacto.',
        'Comunicaciones institucionales: novedades de AMES, invitaciones a eventos, actualizaciones de beneficios.',
        'Marketing y difusión: con tu consentimiento explícito, podemos utilizar testimonios, casos de éxito o imágenes en eventos para comunicaciones públicas de AMES.',
        'Mejora de servicios: análisis interno de uso de la plataforma y satisfacción de miembros para mejorar continuamente la propuesta de valor.',
        'Cumplimiento legal: conservación de datos conforme a obligaciones contables, impositivas o legales vigentes.',
    ]),
    seccion('Base Legal para el Tratamiento', <Lock className="w-6 h-6" />, [
        'Ejecución de contrato: el tratamiento de tus datos es necesario para gestionar tu membresía y prestarte los servicios contratados.',
        'Consentimiento: cuando correspondiera (ej: uso de imágenes, envío de newsletters opcionales), solicitaremos tu consentimiento explícito.',
        'Obligación legal: algunos datos deben conservarse por mandato legal (ej: documentos contables e impositivos).',
        'Interés legítimo: AMES puede tratar datos en base a interés legítimo cuando no prevalezcan tus derechos fundamentales (ej: detección de fraude, seguridad de la comunidad).',
    ]),
    seccion('Compartición de Datos con Terceros', <Share2 className="w-6 h-6" />, [
        'AMES no vende, alquila ni cede tus datos personales a terceros con fines comerciales propios de esos terceros.',
        'Podemos compartir datos con proveedores tecnológicos que nos prestan servicios (plataforma Tiendup, servicios de email marketing, herramientas de análisis) bajo estrictos acuerdos de confidencialidad y exclusivamente para los fines para los que fueron recopilados.',
        'En el marco de la comunidad de networking, solo compartiremos la información de tu perfil de emprendedor que vos hayas decidido hacer visible en el directorio.',
        'En caso de obligación legal (orden judicial, requerimiento gubernamental), AMES puede estar obligado a revelar ciertos datos a las autoridades competentes.',
    ]),
    seccion('Cookies y Tecnologías de Seguimiento', <Cookie className="w-6 h-6" />, [
        'El sitio web de AMES utiliza cookies propias y de terceros (como Google Analytics) para analizar el tráfico, mejorar la experiencia de usuario y medir la efectividad de nuestras comunicaciones.',
        'Al ingresar al sitio, podés configurar tus preferencias de cookies. Podés deshabilitar las cookies no esenciales en cualquier momento desde la configuración de tu navegador.',
        'No utilizamos cookies con fines de publicidad personalizada de terceros ni compartimos datos de navegación con redes publicitarias externas.',
    ]),
    seccion('Tus Derechos como Titular de Datos', <UserCheck className="w-6 h-6" />, [
        'Acceso: podés solicitar en cualquier momento información sobre los datos personales que tenemos sobre vos.',
        'Rectificación: si tus datos son incorrectos o están desactualizados, podés solicitar su corrección.',
        'Supresión: podés solicitar la eliminación de tus datos cuando ya no sean necesarios para los fines para los que fueron recopilados, salvo que exista obligación legal de conservarlos.',
        'Oposición: podés oponerte al tratamiento de tus datos para fines de marketing en cualquier momento.',
        'Portabilidad: podés solicitar una copia de tus datos en formato estructurado y de uso común.',
        'Para ejercer cualquiera de estos derechos, contactanos en aceleradoraimpactobyames@gmail.com con asunto "Ejercicio de Derechos - [tu nombre]".',
    ]),
    seccion('Conservación de Datos', <Lock className="w-6 h-6" />, [
        'Tus datos personales serán conservados mientras tu membresía esté activa. Tras la cancelación, conservaremos los datos mínimos necesarios para cumplir obligaciones legales (mínimo 5 años según normativa contable argentina) y luego procederemos a su eliminación segura.',
        'Los datos utilizados para la Ayuda Económica Mutual pueden conservarse por el plazo de prescripción legal correspondiente.',
    ]),
    seccion('Seguridad de los Datos', <Shield className="w-6 h-6" />, [
        'AMES implementa medidas técnicas y organizativas razonables para proteger tus datos personales contra acceso no autorizado, pérdida, destrucción o alteración.',
        'El acceso a los datos está restringido al personal estrictamente necesario y bajo acuerdo de confidencialidad.',
        'En caso de una brecha de seguridad que pudiera afectar tus derechos, te notificaremos en el menor plazo posible conforme a lo requerido por la normativa aplicable.',
    ]),
    seccion('Modificaciones a esta Política', <RefreshCw className="w-6 h-6" />, [
        'AMES puede actualizar esta Política de Privacidad cuando sea necesario para reflejar cambios en nuestras prácticas, servicios o normativa aplicable.',
        'Te notificaremos cualquier cambio importante por correo electrónico con anticipación razonable.',
        'La fecha de última actualización siempre estará indicada en la parte superior de este documento.',
    ]),
];

const PrivacidadPage = () => {
    return (
        <div className="bg-background">
            {/* Hero */}
            <section className="relative bg-primary py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
                <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="w-16 h-16 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-6">
                            <Shield className="w-8 h-8 text-accent" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-heading font-black text-white mb-4 leading-tight">
                            Política de Privacidad
                        </h1>
                        <p className="text-white/60 text-lg max-w-xl mx-auto">
                            Asociación Mutual AMES — Tu privacidad es nuestra prioridad
                        </p>
                        <p className="text-white/40 text-sm mt-3">Última actualización: Febrero 2025</p>
                    </motion.div>
                </div>
            </section>

            {/* Contenido */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 lg:px-10">

                    {/* Intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-accent/5 border border-accent/20 rounded-3xl p-8 mb-12"
                    >
                        <p className="text-gray-700 text-lg leading-relaxed">
                            En <strong>Asociación Mutual AMES</strong> nos comprometemos a proteger y respetar tu privacidad. Esta Política describe cómo recopilamos, usamos, almacenamos y protegemos tus datos personales cuando utilizás nuestros servicios o navegás por nuestro sitio web.
                        </p>
                    </motion.div>

                    {/* Secciones */}
                    <div className="space-y-10">
                        {secciones.map((sec, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.6, delay: 0.04 * i }}
                                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                                        {sec.icono}
                                    </div>
                                    <h2 className="text-xl font-heading font-bold text-primary">
                                        {i + 1}. {sec.titulo}
                                    </h2>
                                </div>
                                <div className="space-y-4">
                                    {sec.contenido.map((parrafo, j) => (
                                        <p key={j} className="text-gray-600 leading-relaxed text-base">
                                            {parrafo}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contacto */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-14 text-center bg-primary rounded-3xl p-10 text-white"
                    >
                        <h3 className="text-2xl font-heading font-bold mb-3">¿Tenés consultas sobre tu privacidad?</h3>
                        <p className="text-white/60 mb-6 text-base">
                            Ejercé tus derechos o resolvé cualquier duda escribiéndonos directamente.
                        </p>
                        <a
                            href="mailto:aceleradoraimpactobyames@gmail.com"
                            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-full font-bold hover:bg-accent/80 transition-colors shadow-lg"
                        >
                            aceleradoraimpactobyames@gmail.com
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PrivacidadPage;
