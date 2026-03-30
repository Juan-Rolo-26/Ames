import { motion } from 'framer-motion';
import { Building2, Sparkles } from 'lucide-react';
import logoMagna from '../../assets/images/logomagna.jpg';

type LogoItem =
    | {
        kind: 'logo';
        id: string;
        src: string;
        name: string;
        alt: string;
    }
    | {
        kind: 'placeholder';
        id: string;
        name: string;
    };

const logoModules = import.meta.glob('../../assets/padrinos-logos/*.{png,jpg,jpeg,svg,webp,avif}', {
    eager: true,
    import: 'default',
}) as Record<string, string>;

const stripCopySuffixes = (value: string) =>
    value
        .replace(/\s*\(\d+\)(?=\s|$)/g, '')
        .replace(/\s+/g, ' ')
        .trim();

const formatLogoName = (filePath: string) => {
    const fileName = filePath.split('/').pop() ?? 'Empresa Padrino';

    return stripCopySuffixes(fileName.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' '));
};

const repeatUntilMin = <T,>(items: T[], minItems: number) => {
    if (!items.length) return [];

    const result = [...items];

    while (result.length < minItems) {
        result.push(...items);
    }

    return result.slice(0, Math.max(minItems, items.length));
};

const manualLogos: Extract<LogoItem, { kind: 'logo' }>[] = [
    {
        kind: 'logo',
        id: 'manual-magna',
        src: logoMagna,
        name: 'Magna',
        alt: 'Logo de Magna',
    },
];

const seenLogoKeys = new Set<string>(manualLogos.map((logo) => logo.name.toLowerCase()));

const realLogos: LogoItem[] = [
    ...manualLogos,
    ...Object.entries(logoModules)
        .sort(([left], [right]) => left.localeCompare(right))
        .flatMap(([filePath, src]) => {
            const name = formatLogoName(filePath);
            const dedupeKey = name.toLowerCase();

            if (seenLogoKeys.has(dedupeKey)) {
                return [];
            }

            seenLogoKeys.add(dedupeKey);

            return [{
                kind: 'logo' as const,
                id: filePath,
                src,
                name,
                alt: `Logo de ${name}`,
            }];
        }),
];

const placeholderLogos: LogoItem[] = Array.from({ length: 8 }, (_, index) => ({
    kind: 'placeholder' as const,
    id: `placeholder-${index + 1}`,
    name: `Empresa Padrino ${String(index + 1).padStart(2, '0')}`,
}));

const baseLogos = realLogos.length > 0 ? repeatUntilMin(realLogos, 8) : placeholderLogos;
const marqueeCopies = [0, 1] as const;

const PadrinosLogosCarousel = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white pb-24 pt-2 lg:pb-28 lg:pt-4"
        >
            <div className="w-full px-5 sm:px-8 lg:px-20">
                <div className="mb-8 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-secondary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                        <Sparkles className="h-3.5 w-3.5" />
                        Impulsan AMES
                    </span>
                    <h3 className="mx-auto mt-4 max-w-3xl text-2xl font-heading font-black leading-tight text-primary md:text-3xl">
                        Empresas e instituciones que impulsan, fortalecen y jerarquizan el ecosistema AMES
                    </h3>
                </div>

                <div className="relative overflow-hidden py-4">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-white via-white to-transparent sm:w-24" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-white via-white to-transparent sm:w-24" />

                    <div
                        className="padrinos-marquee-track relative flex w-max items-center"
                        style={{ ['--marquee-gap' as string]: '2rem' }}
                    >
                        {marqueeCopies.map((copyIndex) => (
                            baseLogos.map((logo) => (
                                <div
                                    key={`${logo.id}-copy-${copyIndex}`}
                                    className="group/logo flex h-[88px] w-[170px] shrink-0 items-center justify-center px-3 text-center sm:h-[104px] sm:w-[210px] lg:h-[112px] lg:w-[240px]"
                                >
                                    {logo.kind === 'logo' ? (
                                        <img
                                            src={logo.src}
                                            alt={logo.alt}
                                            title={logo.name}
                                            loading="lazy"
                                            className="max-h-full w-auto max-w-full object-contain opacity-75 grayscale transition-all duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
                                        />
                                    ) : (
                                        <Building2 className="h-8 w-8 text-primary/45 transition-colors duration-300 group-hover/logo:text-primary/70" />
                                    )}
                                </div>
                            ))
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default PadrinosLogosCarousel;
