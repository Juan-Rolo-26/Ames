import { useEffect, useState } from "react";

interface NavLink {
    name: string;
    path: string;
    action: () => void;
    hasSubmenu?: boolean;
    submenu?: { name: string; path: string }[];
}
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { brand } from "../assets/images";
import { TIENDUP_MEMBRESIA_URL } from "../utils/tiendup";
import {
    CloseIcon,
    InstagramIcon,
    LinkedinIcon,
    YoutubeIcon,
    MenuIcon,
    ArrowRightIcon,
} from "./SiteIcons";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "unset";
        return () => { document.body.style.overflow = "unset"; };
    }, [menuOpen]);

    useEffect(() => {
        if (!menuOpen) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [menuOpen]);

    const handleNavClick = (path: string) => {
        setMenuOpen(false);
        setActiveSubmenu(null);
        navigate(path);
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 80);
    };

    const navLinks: NavLink[] = [
        {
            name: "INICIO",
            path: "/",
            action: () => handleNavClick("/"),
        },
        {
            name: "SERVICIOS",
            path: "/servicios",
            action: () => handleNavClick("/servicios"),
        },
        {
            name: "SOBRE AMES",
            path: "/nosotros",
            action: () => handleNavClick("/nosotros"),
        },
        {
            name: "CASOS",
            path: "/casos",
            action: () => handleNavClick("/casos"),
        },
        {
            name: "PREGUNTAS FRECUENTES",
            path: "/preguntas-frecuentes",
            action: () => handleNavClick("/preguntas-frecuentes"),
        },
    ];

    const getRouteName = () => {
        if (location.pathname.includes("/nosotros")) return "SOBRE AMES";
        if (location.pathname.includes("/padrinos")) return "PADRINOS";
        if (location.pathname.includes("/servicios")) return "SERVICIOS";
        if (location.pathname.includes("/casos")) return "CASOS";
        if (location.pathname.includes("/preguntas-frecuentes")) return "FAQ";
        return "MUTUAL AMES";
    };

    /* Siempre oscuro: el Hero de AMES tiene fondo claro */
    const navBackground = "rgba(8, 14, 30, 0.97)";
    const navHeight = scrolled ? "70px" : "90px";

    const logoVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.06, transition: { duration: 0.3 } },
    };

    const menuButtonVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.08 },
        tap: { scale: 0.95 },
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    width: "100%",
                    height: navHeight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 4%",
                    zIndex: 1000,
                    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                    background: navBackground,
                    backdropFilter: "blur(20px) saturate(1.6)",
                    WebkitBackdropFilter: "blur(20px) saturate(1.6)",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    boxShadow: scrolled
                        ? "0 8px 40px rgba(0,0,0,0.45)"
                        : "0 4px 24px rgba(0,0,0,0.28)",
                }}
            >
                {/* ── Logo principal ── */}
                <motion.div
                    variants={logoVariants}
                    initial="initial"
                    whileHover="hover"
                    style={{ cursor: "pointer", display: "flex", alignItems: "center", flexShrink: 0 }}
                    onClick={() => handleNavClick("/")}
                >
                    <div
                        className="ames-logo-container"
                        style={{
                            height: scrolled ? "56px" : "72px",
                            width: scrolled ? "170px" : "220px",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            transition: "all 0.4s ease",
                        }}
                    >
                        <img
                            className="ames-logo-img"
                            src={brand.logoTransparentUrl}
                            alt="Asociación Mutual AMES"
                            style={{
                                height: scrolled ? "180px" : "230px",
                                width: "auto",
                                transition: "height 0.4s ease",
                                display: "block",
                                filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.18))",
                            }}
                        />
                    </div>
                </motion.div>

                {/* ── Desktop Nav Links (centrado absoluto sobre el nav) ── */}
                <div
                    className="ames-desktop-links"
                    style={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: "36px",
                        alignItems: "center",
                        height: "100%",
                    }}
                >
                    {navLinks.map((link) => {
                        const isActive =
                            location.pathname === link.path ||
                            (link.hasSubmenu && location.pathname.startsWith("/servicios"));

                        return (
                            <div
                                key={link.name}
                                style={{ position: "relative", height: "100%" }}
                                onMouseEnter={() => link.hasSubmenu && setActiveSubmenu(link.name)}
                                onMouseLeave={() => setActiveSubmenu(null)}
                            >
                                <motion.button
                                    onClick={link.action}
                                    onHoverStart={() => setHoveredLink(link.name)}
                                    onHoverEnd={() => setHoveredLink(null)}
                                    style={{
                                        background: "none",
                                        border: "none",
                                        color: isActive ? "#60a5fa" : "rgba(255,255,255,0.72)",
                                        fontSize: "0.88rem",
                                        fontWeight: "600",
                                        letterSpacing: "2px",
                                        cursor: "pointer",
                                        padding: "0 6px",
                                        height: "100%",
                                        position: "relative",
                                        transition: "color 0.25s",
                                    }}
                                >
                                    {link.name}

                                    {/* Active underline */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            style={{
                                                position: "absolute",
                                                bottom: "22px",
                                                left: 0,
                                                right: 0,
                                                height: "2px",
                                                background: "linear-gradient(90deg, #1A56DB, #7C3AED)",
                                                borderRadius: "99px",
                                            }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}

                                    {/* Hover underline */}
                                    {hoveredLink === link.name && !isActive && (
                                        <motion.div
                                            layoutId="hoverIndicator"
                                            style={{
                                                position: "absolute",
                                                bottom: "22px",
                                                left: 0,
                                                right: 0,
                                                height: "2px",
                                                background: "rgba(124,58,237,0.50)",
                                                borderRadius: "99px",
                                            }}
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    )}
                                </motion.button>

                                {/* Submenu */}
                                <AnimatePresence>
                                    {link.hasSubmenu && activeSubmenu === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            style={{
                                                position: "absolute",
                                                top: "100%",
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                background: "rgba(16,10,32,0.98)",
                                                backdropFilter: "blur(20px)",
                                                border: "1px solid rgba(255,255,255,0.10)",
                                                borderRadius: "14px",
                                                padding: "12px",
                                                minWidth: "220px",
                                                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                                            }}
                                        >
                                            {link.submenu.map((item, index) => (
                                                <motion.button
                                                    key={item.name}
                                                    onClick={() => handleNavClick(item.path)}
                                                    initial={{ x: -10, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    style={{
                                                        background: "none",
                                                        border: "none",
                                                        color: "rgba(255,255,255,0.82)",
                                                        padding: "11px 18px",
                                                        width: "100%",
                                                        textAlign: "left",
                                                        fontSize: "0.88rem",
                                                        fontWeight: "500",
                                                        letterSpacing: "0.04em",
                                                        cursor: "pointer",
                                                        borderRadius: "8px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between",
                                                        transition: "all 0.22s",
                                                    }}
                                                    whileHover={{
                                                        background: "rgba(168,85,247,0.12)",
                                                        x: 5,
                                                        color: "#fff",
                                                    }}
                                                >
                                                    {item.name}
                                                    <ArrowRightIcon size={16} color="#a855f7" />
                                                </motion.button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {/* ── Right section ────────────────────────────── */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", justifySelf: "end" }}>

                    {/* Location badge (solo desktop grande) */}
                    <div
                        className="ames-location-badge"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "7px 15px",
                            border: "1px solid rgba(255,255,255,0.10)",
                            borderRadius: "40px",
                            background: "rgba(255,255,255,0.04)",
                        }}
                    >
                        <span style={{ fontSize: "0.72rem", color: "#60a5fa", fontWeight: "700", letterSpacing: "0.08em" }}>
                            {getRouteName()}
                        </span>
                        <div style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.18)" }} />
                        <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em" }}>
                            Rosario, AR
                        </span>
                    </div>

                    {/* ── Botón hamburguesa (visible en móvil) ── */}
                    <motion.button
                        className="ames-hamburger"
                        variants={menuButtonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Abrir menú"
                        type="button"
                        style={{
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: "10px",
                            color: "#fff",
                            cursor: "pointer",
                            width: "44px",
                            height: "44px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <MenuIcon size={22} color="#fff" />
                    </motion.button>
                </div>
            </motion.nav>

            <style>{`
        @media (max-width: 960px) {
          .ames-desktop-links  { display: none !important; }
          .ames-location-badge { display: none !important; }
          
          .ames-logo-container {
             width: 140px !important;
             height: 50px !important;
             margin-left: -5px !important; 
          }
          .ames-logo-img {
             height: 150px !important;
          }
        }
        @media (min-width: 961px) {
          .ames-hamburger { display: none !important; }
        }
      `}</style>

            {/* ── Fullscreen Menu ───────────────────────────── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="ames-fullmenu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100vh",
                            zIndex: 2000,
                            pointerEvents: "auto",
                        }}
                        onClick={() => setMenuOpen(false)}
                    >
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "rgba(0,0,0,0.85)",
                                backdropFilter: "blur(16px)",
                                zIndex: 1,
                            }}
                        />

                        {/* Panel fullscreen */}
                        <motion.div
                            initial={{ opacity: 0, y: 32 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 32, stiffness: 220 }}
                            style={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 2,
                                pointerEvents: "auto",
                                overflow: "hidden",
                            }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            {/* Orbes decorativos de fondo */}
                            <div style={{
                                position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)",
                                width: "340px", height: "340px", borderRadius: "50%",
                                background: "radial-gradient(circle, rgba(26,86,219,0.28) 0%, transparent 70%)",
                                filter: "blur(40px)", pointerEvents: "none",
                            }} />
                            <div style={{
                                position: "absolute", bottom: "-60px", right: "-40px",
                                width: "280px", height: "280px", borderRadius: "50%",
                                background: "radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)",
                                filter: "blur(40px)", pointerEvents: "none",
                            }} />

                            {/* Botón cerrar */}
                            <motion.button
                                onClick={() => setMenuOpen(false)}
                                type="button"
                                aria-label="Cerrar menú"
                                initial={{ opacity: 0, scale: 0.7 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.15 }}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                style={{
                                    position: "absolute",
                                    top: "22px",
                                    right: "22px",
                                    background: "rgba(255,255,255,0.08)",
                                    border: "1px solid rgba(255,255,255,0.16)",
                                    borderRadius: "50%",
                                    color: "#fff",
                                    cursor: "pointer",
                                    width: "48px",
                                    height: "48px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    zIndex: 3,
                                    backdropFilter: "blur(8px)",
                                    transition: "background 0.2s",
                                }}
                            >
                                <CloseIcon size={20} color="#fff" />
                            </motion.button>

                            {/* Logo arriba */}
                            <motion.div
                                initial={{ opacity: 0, y: -16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                style={{
                                    position: "absolute",
                                    top: "18px",
                                    left: "20px",
                                    overflow: "hidden",
                                    width: "120px",
                                    height: "44px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <img
                                    src={brand.logoTransparentUrl}
                                    alt="AMES"
                                    style={{ height: "130px", width: "auto", filter: "brightness(0) invert(1) drop-shadow(0 2px 8px rgba(0,0,0,0.3))" }}
                                />
                            </motion.div>

                            {/* Links principales */}
                            <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", width: "100%", padding: "0 24px" }}>
                                {navLinks.map((link, i) => {
                                    const isActive = location.pathname === link.path;
                                    return (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, y: 24 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.07 + 0.18, ease: [0.22, 1, 0.36, 1] }}
                                            style={{ width: "100%", display: "flex", justifyContent: "center" }}
                                        >
                                            <motion.button
                                                onClick={link.action}
                                                type="button"
                                                whileTap={{ scale: 0.96 }}
                                                style={{
                                                    background: isActive
                                                        ? "linear-gradient(135deg, rgba(26,86,219,0.18), rgba(124,58,237,0.18))"
                                                        : "transparent",
                                                    border: isActive ? "1px solid rgba(96,165,250,0.25)" : "1px solid transparent",
                                                    borderRadius: "16px",
                                                    color: isActive ? "#60a5fa" : "rgba(255,255,255,0.88)",
                                                    fontSize: "clamp(1.1rem, 5vw, 1.5rem)",
                                                    fontWeight: "700",
                                                    letterSpacing: "3px",
                                                    cursor: "pointer",
                                                    padding: "14px 32px",
                                                    textAlign: "center",
                                                    width: "100%",
                                                    maxWidth: "340px",
                                                    transition: "all 0.2s",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    gap: "10px",
                                                }}
                                            >
                                                {isActive && (
                                                    <span style={{
                                                        width: "6px", height: "6px", borderRadius: "50%",
                                                        background: "linear-gradient(135deg, #60a5fa, #7C3AED)",
                                                        display: "inline-block", flexShrink: 0,
                                                    }} />
                                                )}
                                                {link.name}
                                            </motion.button>
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            {/* CTA principal */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.07 + 0.28 }}
                                style={{ marginTop: "28px", width: "100%", padding: "0 24px", maxWidth: "388px" }}
                            >
                                <motion.a
                                    href={TIENDUP_MEMBRESIA_URL}
                                    target="_blank" rel="noreferrer"
                                    onClick={() => setMenuOpen(false)}
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "10px",
                                        background: "linear-gradient(135deg, #1A56DB, #7C3AED)",
                                        color: "#fff",
                                        fontWeight: "800",
                                        fontSize: "1rem",
                                        letterSpacing: "0.06em",
                                        padding: "16px 32px",
                                        borderRadius: "16px",
                                        textDecoration: "none",
                                        boxShadow: "0 8px 32px rgba(26,86,219,0.50), 0 2px 8px rgba(0,0,0,0.3)",
                                        width: "100%",
                                    }}
                                >
                                    Sumarme ahora
                                    <ArrowRightIcon size={18} color="#fff" />
                                </motion.a>
                            </motion.div>

                            {/* Footer — redes + contacto */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.65 }}
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: "20px 24px",
                                    borderTop: "1px solid rgba(255,255,255,0.07)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "14px",
                                    background: "rgba(0,0,0,0.15)",
                                    backdropFilter: "blur(8px)",
                                }}
                            >
                                <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                                    {[
                                        { Icon: InstagramIcon, href: "https://www.instagram.com/mutual.ames/", color: "#E4405F" },
                                        { Icon: LinkedinIcon, href: "https://www.linkedin.com/company/mutual-ames/", color: "#0077B5" },
                                        { Icon: YoutubeIcon, href: "https://www.youtube.com/@AceleradoraImpacto", color: "#FF0000" },
                                    ].map(({ Icon, href, color }, i) => (
                                        <motion.a
                                            key={i}
                                            href={href}
                                            target="_blank" rel="noreferrer"
                                            whileHover={{ y: -4, scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            style={{
                                                width: "42px",
                                                height: "42px",
                                                borderRadius: "12px",
                                                background: "rgba(255,255,255,0.06)",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer",
                                            }}
                                            onHoverStart={(e) => { (e.currentTarget as HTMLElement).style.background = color + "30"; }}
                                            onHoverEnd={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; }}
                                        >
                                            <Icon size={18} color="#fff" />
                                        </motion.a>
                                    ))}
                                </div>
                                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem", letterSpacing: "0.06em", margin: 0, textAlign: "center" }}>
                                    Rosario, Santa Fe — Argentina
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
