import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { avatars } from "../../assets/images";

// 🔧 Ajustá/ordená tus avatares acá
const members = [
    { id: 1, photo: avatars.maria, label: "María G." },
    { id: 2, photo: avatars.juan, label: "Juan P." },
    { id: 3, photo: avatars.laura, label: "Laura R." },
    { id: 4, photo: avatars.sofia, label: "Sofía A." },
    { id: 5, photo: avatars.rodrigo, label: "Rodrigo V." },
    { id: 6, photo: avatars.paula, label: "Paula E." },
    { id: 7, photo: avatars.carlos, label: "Carlos M." },
];

function polarToXY(cx: number, cy: number, radius: number, angleDeg: number) {
    const a = (angleDeg * Math.PI) / 180;
    return { x: cx + radius * Math.cos(a), y: cy + radius * Math.sin(a) };
}

interface MutualNetworkVisualProps {
    centerLabel?: string;
    centerSub?: string;
}

export default function MutualNetworkVisual({
    centerLabel = "AMES",
    centerSub = "Red mutual",
}: MutualNetworkVisualProps) {
    const prefersReduced = useReducedMotion();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

    // Canvas "virtual" del SVG
    const W = 620;
    const H = 620;
    const cx = W / 2;
    const cy = H / 2;

    // Distribución bonita (no parece “social”, parece “ecosistema”)
    const layout = useMemo(() => {
        const angles = [330, 20, 70, 125, 185, 240, 290]; // prolijo, equilibrado
        const radii = [215, 235, 225, 240, 230, 220, 245]; // variación sutil
        return members.map((m, i) => {
            const p = polarToXY(cx, cy, radii[i % radii.length], angles[i % angles.length]);
            const size = [64, 56, 60, 56, 58, 60, 52][i % 7];
            const float = [
                { y: [-6, 8, -6], d: 4.2 },
                { y: [8, -6, 8], d: 4.8 },
                { y: [-10, 6, -10], d: 3.9 },
                { y: [6, -10, 6], d: 4.6 },
                { y: [-7, 9, -7], d: 5.1 },
                { y: [10, -5, 10], d: 4.3 },
                { y: [-8, 7, -8], d: 3.7 },
            ][i % 7];

            return { ...m, ...p, size, float };
        });
    }, []);

    return (
        <div ref={ref} className="relative w-full flex items-center justify-center">
            {/* Fondo glow suave */}
            <motion.div
                aria-hidden="true"
                className="absolute -inset-10 rounded-full blur-[80px]"
                style={{
                    background:
                        "radial-gradient(circle at 50% 50%, rgba(26,86,219,0.16), transparent 60%)",
                }}
                animate={prefersReduced ? {} : { scale: [1, 1.08, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* “Card” contenedora */}
            <div className="relative w-full max-w-[500px] xl:max-w-[540px] aspect-square rounded-[28px] border border-primary/10 bg-white/60 backdrop-blur-xl shadow-[0_30px_120px_rgba(2,6,23,0.12)] overflow-hidden">
                {/* Grid puntitos muy sutil */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, rgba(26,43,124,0.9) 1px, transparent 1px)",
                        backgroundSize: "36px 36px",
                    }}
                />

                {/* SVG red (líneas) */}
                <svg
                    viewBox={`0 0 ${W} ${H}`}
                    className="absolute inset-0 w-full h-full"
                    aria-hidden="true"
                >
                    <defs>
                        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="rgba(26,86,219,0.35)" />
                            <stop offset="50%" stopColor="rgba(124,58,237,0.35)" />
                            <stop offset="100%" stopColor="rgba(26,86,219,0.25)" />
                        </linearGradient>

                        <filter id="softGlow">
                            <feGaussianBlur stdDeviation="2.6" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Anillos de confianza */}
                    <motion.circle
                        cx={cx}
                        cy={cy}
                        r="125"
                        fill="none"
                        stroke="rgba(26,86,219,0.10)"
                        strokeWidth="2"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 1.0, delay: 0.2 }}
                    />
                    <motion.circle
                        cx={cx}
                        cy={cy}
                        r="190"
                        fill="none"
                        stroke="rgba(124,58,237,0.08)"
                        strokeWidth="2"
                        strokeDasharray="6 10"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 1.0, delay: 0.35 }}
                    />

                    {/* Conexiones desde el centro hacia cada miembro */}
                    {layout.map((m, i) => {
                        const x1 = cx;
                        const y1 = cy;
                        const x2 = m.x;
                        const y2 = m.y;

                        return (
                            <g key={m.id}>
                                {/* Línea base */}
                                <motion.line
                                    x1={x1}
                                    y1={y1}
                                    x2={x2}
                                    y2={y2}
                                    stroke="url(#lineGrad)"
                                    strokeWidth="2"
                                    filter="url(#softGlow)"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={
                                        inView
                                            ? { pathLength: 1, opacity: 1 }
                                            : {}
                                    }
                                    transition={{
                                        duration: 1.0,
                                        delay: 0.25 + i * 0.06,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                />

                                {/* Pulso que viaja por la línea (pro mutual: “flujo de ayuda”) */}
                                {!prefersReduced && (
                                    <motion.circle
                                        r="4.5"
                                        fill="rgba(26,86,219,0.55)"
                                        initial={{ opacity: 0 }}
                                        animate={
                                            inView
                                                ? {
                                                    opacity: [0, 1, 0],
                                                    cx: [x1, x2],
                                                    cy: [y1, y2],
                                                }
                                                : {}
                                        }
                                        transition={{
                                            duration: 2.8,
                                            delay: 1.1 + i * 0.12,
                                            repeat: Infinity,
                                            repeatDelay: 1.2,
                                            ease: "easeInOut",
                                        }}
                                    />
                                )}

                                {/* Puntito en el extremo */}
                                <motion.circle
                                    cx={x2}
                                    cy={y2}
                                    r="5"
                                    fill="rgba(124,58,237,0.22)"
                                    initial={{ scale: 0.6, opacity: 0 }}
                                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.55 + i * 0.06 }}
                                />
                            </g>
                        );
                    })}
                </svg>

                {/* Nodo central AMES */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.86, y: 10 }}
                        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{ type: "spring", stiffness: 160, damping: 18, delay: 0.15 }}
                        className="relative rounded-full"
                    >
                        {/* Glow */}
                        <div
                            aria-hidden="true"
                            className="absolute -inset-6 rounded-full blur-2xl"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(26,86,219,0.22), rgba(124,58,237,0.12), transparent 70%)",
                            }}
                        />

                        <motion.div
                            className="relative w-[170px] h-[170px] rounded-full border border-primary/15 bg-white shadow-[0_20px_70px_rgba(26,86,219,0.12)] flex flex-col items-center justify-center"
                            animate={prefersReduced ? {} : { y: [0, -6, 0] }}
                            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="text-center">
                                <div className="font-heading font-black text-3xl tracking-tight text-primary">
                                    {centerLabel}
                                </div>
                                <div className="text-sm font-semibold text-gray-500">
                                    {centerSub}
                                </div>
                            </div>

                            {/* Anillo animado */}
                            {!prefersReduced && (
                                <motion.div
                                    aria-hidden="true"
                                    className="absolute inset-[-10px] rounded-full border-2 border-secondary/20"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                                    style={{ borderStyle: "dashed" }}
                                />
                            )}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Avatares miembros (encima del SVG) */}
                {layout.map((m, i) => (
                    <motion.div
                        key={m.id}
                        className="absolute"
                        style={{
                            left: `calc(${(m.x / W) * 100}% - ${m.size / 2}px)`,
                            top: `calc(${(m.y / H) * 100}% - ${m.size / 2}px)`,
                            width: m.size,
                            height: m.size,
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.55 + i * 0.06 }}
                    >
                        <motion.div
                            className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-lg bg-white"
                            whileHover={{ scale: 1.1, y: -4 }}
                            animate={prefersReduced ? {} : { y: m.float.y }}
                            transition={
                                prefersReduced
                                    ? {}
                                    : { duration: m.float.d, repeat: Infinity, ease: "easeInOut" }
                            }
                            title={m.label}
                        >
                            <img
                                src={m.photo}
                                alt={m.label}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />

                            {/* Ring de confianza */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-full"
                                style={{
                                    boxShadow: "inset 0 0 0 1px rgba(26,86,219,0.10)",
                                }}
                            />
                        </motion.div>
                    </motion.div>
                ))}

                {/* Label inferior sutil */}
                <div className="absolute left-6 bottom-6 right-6 flex items-center justify-between text-xs text-gray-500">
                    <span className="font-semibold">Comunidad conectada</span>
                    <span>Confianza · Apoyo · Networking</span>
                </div>
            </div>
        </div>
    );
}
