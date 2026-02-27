import { motion } from 'framer-motion';
import { Scale, FileText, AlertCircle, CheckCircle, XCircle, RefreshCw } from 'lucide-react';

const seccion = (titulo, icono, contenido) => ({ titulo, icono, contenido });

const secciones = [
    seccion('Aceptación de los Términos', <Scale className="w-6 h-6" />, [
        'Al acceder y utilizar los servicios de la Asociación Mutual AMES (en adelante, "AMES" o "la Mutual"), el usuario acepta de forma expresa e irrevocable los presentes Términos y Condiciones de Uso.',
        'Si no está de acuerdo con alguna de las condiciones aquí establecidas, le solicitamos que se abstenga de utilizar nuestros servicios.',
        'AMES se reserva el derecho de modificar estos términos en cualquier momento. Los cambios serán publicados en este sitio web y entrarán en vigor desde su publicación. Es responsabilidad del usuario revisar periódicamente estos términos.',
    ]),
    seccion('Descripción de los Servicios', <FileText className="w-6 h-6" />, [
        'AMES es una asociación mutual sin fines de lucro que ofrece a sus miembros: consultoría estratégica, networking y comunidad, formación a través de la Escuela Express, ayuda económica mutual, programa Aceleradora de Impacto y gestión de Empresas Padrino.',
        'El acceso a los distintos servicios está condicionado a la vigencia de la membresía mensual contratada a través de la plataforma Tiendup. Algunos servicios específicos (como la Aceleradora de Impacto) pueden requerir un proceso adicional de postulación y selección.',
        'AMES no garantiza resultados específicos de ningún tipo. Los resultados dependen del esfuerzo, dedicación y contexto particular de cada emprendedor.',
    ]),
    seccion('Membresía y Condiciones de Uso', <CheckCircle className="w-6 h-6" />, [
        'La membresía mensual es personal e intransferible. Cada miembro deberá registrarse con sus datos reales y mantenerlos actualizados.',
        'Queda expresamente prohibido el uso de la membresía de forma fraudulenta, compartir credenciales de acceso, o utilizar los servicios de AMES en beneficio de terceros no registrados.',
        'AMES puede suspender o cancelar la membresía de cualquier miembro que incumpla los presentes términos, actúe de mala fe dentro de la comunidad, o realice acciones que perjudiquen a otros miembros o a la institución.',
        'La membresía puede cancelarse en cualquier momento a través de la plataforma Tiendup, sin penalidades. La cancelación tiene efecto al final del período mensual en curso.',
    ]),
    seccion('Ayuda Económica Mutual', <AlertCircle className="w-6 h-6" />, [
        'El acceso al sistema de Ayuda Económica Mutual está sujeto a la vigencia de la membresía y al cumplimiento de los requisitos establecidos por el comité evaluador.',
        'La evaluación de solicitudes es discrecional y personalizada. La aprobación no está garantizada por el solo hecho de ser miembro activo de AMES.',
        'El incumplimiento de las obligaciones de pago en el programa de Ayuda Económica puede resultar en la suspensión de la membresía y en acciones legales de recupero según la legislación vigente.',
        'Las condiciones de los préstamos mutuales (tasas, montos, plazos) son fijadas por AMES y comunicadas oportunamente. Los montos mencionados en el sitio web son de referencia y pueden actualizarse sin previo aviso.',
    ]),
    seccion('Propiedad Intelectual', <FileText className="w-6 h-6" />, [
        'Todo el contenido publicado en el sitio web de AMES (textos, imágenes, logos, materiales de formación, metodologías) es propiedad exclusiva de AMES o está bajo licencia de uso. Está prohibida su reproducción total o parcial sin autorización expresa y por escrito.',
        'Los materiales entregados en el marco de la Escuela Express y otros programas de formación son de uso personal del miembro y no pueden ser redistribuidos, vendidos o publicados sin consentimiento previo.',
    ]),
    seccion('Limitación de Responsabilidad', <XCircle className="w-6 h-6" />, [
        'AMES actúa como intermediario y facilitador entre emprendedores. No se responsabiliza por los acuerdos, contratos o transacciones que los miembros realicen entre sí o con terceros a través de la red de la mutual.',
        'AMES no garantiza la disponibilidad continua del sitio web ni de los servicios digitales, y no se responsabiliza por pérdidas o perjuicios derivados de interrupciones técnicas.',
        'Las opiniones y recomendaciones de los consultores y mentores de AMES son de carácter orientativo. AMES no se responsabiliza por decisiones de negocio tomadas en base a dichos consejos.',
    ]),
    seccion('Modificaciones y Vigencia', <RefreshCw className="w-6 h-6" />, [
        'Estos Términos y Condiciones entran en vigor desde la fecha de primera publicación y se aplican a todos los miembros actuales y futuros de la Asociación Mutual AMES.',
        'Cualquier modificación sustancial será comunicada a los miembros activos por correo electrónico con un mínimo de 15 días de anticipación a su entrada en vigor.',
        'Para consultas sobre estos términos, podés contactarnos en: aceleradoraimpactobyames@gmail.com',
    ]),
];

const TerminosPage = () => {
    return (
        <div className="bg-background">
            {/* Hero */}
            <section className="relative bg-primary py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="w-16 h-16 rounded-2xl bg-secondary/20 border border-secondary/30 flex items-center justify-center mx-auto mb-6">
                            <Scale className="w-8 h-8 text-secondary" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-heading font-black text-white mb-4 leading-tight">
                            Términos y Condiciones
                        </h1>
                        <p className="text-white/60 text-lg max-w-xl mx-auto">
                            Asociación Mutual AMES — Vigentes desde el 1° de enero de 2024
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
                        className="bg-secondary/5 border border-secondary/20 rounded-3xl p-8 mb-12"
                    >
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Los presentes Términos y Condiciones regulan el acceso y uso de los servicios prestados por la <strong>Asociación Mutual AMES</strong>, con domicilio en Paraguay 751, Rosario, Santa Fe, Argentina. Le recomendamos leer este documento completo antes de utilizar nuestros servicios.
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
                                transition={{ duration: 0.6, delay: 0.05 * i }}
                                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
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
                        <h3 className="text-2xl font-heading font-bold mb-3">¿Tenés alguna pregunta?</h3>
                        <p className="text-white/60 mb-6 text-base">Podés contactarnos ante cualquier consulta sobre estos términos.</p>
                        <a
                            href="mailto:aceleradoraimpactobyames@gmail.com"
                            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3.5 rounded-full font-bold hover:bg-secondary/80 transition-colors shadow-lg"
                        >
                            aceleradoraimpactobyames@gmail.com
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TerminosPage;
