import { motion } from 'framer-motion';
import { ExternalLink, PlayCircle, HeartHandshake } from 'lucide-react';
import ComoFunciona from '../components/home/ComoFunciona';

interface CasoVideo {
    id: string;
    title: string;
    desc: string;
}

const casosVideos: CasoVideo[] = [
    {
        id: 'fh5PVBzc718',
        title: 'AMES en palabras de sus asociados',
        desc: 'Testimonio en formato short sobre la experiencia de emprender con AMES.',
    },
    {
        id: '_XXlsOJUs8g',
        title: 'Testimonio de Ismael - GLASSE ECODISENO',
        desc: 'Caso de emprendedor que comparte resultados y crecimiento dentro de la comunidad.',
    },
    {
        id: 'OLuQ5w6lhlg',
        title: 'Testimonio de Walter - KAMARAN',
        desc: 'Experiencia real sobre acompanamiento, red y oportunidades generadas por AMES.',
    },
    {
        id: 'DkZ4ErUD8jQ',
        title: 'Testimonio de RENTIFY',
        desc: 'Short con resultados y valor percibido por empresas que trabajan con AMES.',
    },
    {
        id: 'Mgba22fay5Y',
        title: 'Caso de exito AMES',
        desc: 'Video con recorrido de crecimiento y aprendizaje dentro del ecosistema.',
    },
    {
        id: 'VlLRyQNmVJw',
        title: 'Caso de exito AMES',
        desc: 'Historia real con foco en acompanamiento, comunidad y resultados.',
    },
    {
        id: '8fGK50hS8YA',
        title: 'Caso de exito AMES',
        desc: 'Experiencia de proyecto en desarrollo con impacto en su etapa de crecimiento.',
    },
    {
        id: 'ThUtFptknEk',
        title: 'Caso de exito AMES',
        desc: 'Testimonio en video sobre vinculacion, herramientas y oportunidades de la mutual.',
    },
];

const padrinosVideos: CasoVideo[] = [
    {
        id: '2YbpUbu1AT8',
        title: 'Empresas Padrino | Testimonio 1',
        desc: 'Video de la sección Empresas Padrino con foco en alianzas, acompañamiento e impacto dentro del ecosistema AMES.',
    },
    {
        id: '4ZV8hkBWM0E',
        title: 'Empresas Padrino | Testimonio 2',
        desc: 'Experiencia compartida por una Empresa Padrino vinculada a la comunidad y a los proyectos de AMES.',
    },
    {
        id: 'Lu-2b1xi1Lw',
        title: 'Empresas Padrino | Testimonio 3',
        desc: 'Caso en video sobre el valor de participar como Empresa Padrino dentro del ecosistema emprendedor de AMES.',
    },
];

const VideoCard = ({ video, index }: { video: CasoVideo; index: number }) => (
    <motion.article
        key={video.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: index * 0.08 }}
        className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all"
    >
        <div className="relative aspect-[9/16] bg-black">
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
            />
        </div>
        <div className="p-6">
            <h2 className="text-xl font-heading font-bold text-primary leading-snug mb-2">
                {video.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">{video.desc}</p>
            <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-primary transition-colors"
            >
                Ver en YouTube
                <ExternalLink className="w-4 h-4" />
            </a>
        </div>
    </motion.article>
);

const CasosPage = () => {
    return (
        <div className="bg-background pt-28">
            <ComoFunciona />

            <section className="pb-12 pt-4 lg:pb-20 lg:pt-8">
                <div className="w-full px-5 sm:px-8 lg:px-20">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                        className="text-center max-w-4xl mx-auto mb-14"
                    >
                        <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary border border-secondary/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-5">
                            <PlayCircle className="w-4 h-4" />
                            Casos en video
                        </span>
                        <h1 className="text-4xl md:text-5xl font-heading font-black text-primary mb-5 leading-tight">
                            Casos de <span className="text-secondary">Exito Reales</span>
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Mira testimonios y experiencias de emprendedores que participaron en programas, rondas de negocios y actividades de la comunidad AMES.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                        {casosVideos.map((video, index) => (
                            <VideoCard key={video.id} video={video} index={index} />
                        ))}
                    </div>

                    <section className="mt-20 lg:mt-24">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55 }}
                            className="text-center max-w-4xl mx-auto mb-14"
                        >
                            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-5">
                                <HeartHandshake className="w-4 h-4" />
                                Empresas Padrino
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-black text-primary mb-5 leading-tight">
                                Casos de <span className="text-accent">Padrinos</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Una sección dedicada a los videos de Empresas Padrino que forman parte del ecosistema y acompañan el crecimiento de la comunidad AMES.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {padrinosVideos.map((video, index) => (
                                <VideoCard key={video.id} video={video} index={index} />
                            ))}
                        </div>
                    </section>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.15 }}
                        className="text-center mt-14"
                    >
                        <a
                            href="https://www.youtube.com/@AceleradoraImpacto"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary transition-colors shadow-lg"
                        >
                            Ver mas casos en YouTube
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CasosPage;
