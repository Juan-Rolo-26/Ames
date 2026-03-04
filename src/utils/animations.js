// ── Variantes de Animación AMES ──────────────────────────────────────────────

/** Aparece desde abajo */
export const fadeUp = (delay = 0, duration = 0.7) => ({
    initial: { opacity: 0, y: 48 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
});

/** Aparece desde la izquierda */
export const fadeLeft = (delay = 0) => ({
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

/** Aparece desde la derecha */
export const fadeRight = (delay = 0) => ({
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

/** Escala desde 0 con rebote */
export const popIn = (delay = 0) => ({
    initial: { opacity: 0, scale: 0.7 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.55, delay, type: 'spring', stiffness: 160, damping: 14 },
});

/** Stagger container para animar hijos en cascada */
export const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true },
};

/** Hijo de stagger — sube */
export const staggerChild = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

/** Para botones — escala al hover con sombra */
export const btnHover = {
    whileHover: { scale: 1.055, y: -3 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 22 },
};

/** Pulso suave infinito */
export const pulseSlow = {
    animate: { scale: [1, 1.04, 1] },
    transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
};

/** Float vertical infinito */
export const floatY = {
    animate: { y: [0, -12, 0] },
    transition: { repeat: Infinity, duration: 4.5, ease: 'easeInOut' },
};

/** Rotate 360 infinito */
export const spinSlow = {
    animate: { rotate: 360 },
    transition: { repeat: Infinity, duration: 18, ease: 'linear' },
};
