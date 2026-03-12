import React, { useEffect, useState } from "react";

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
    ];

    const getRouteName = () => {
        if (location.pathname.includes("/nosotros")) return "SOBRE AMES";
        if (location.pathname.includes("/padrinos")) return "PADRINOS";
        if (location.pathname.includes("/servicios")) return "SERVICIOS";
        if (location.pathname.includes("/casos")) return "CASOS";
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
                {/* ── Logo (mix-blend-mode:screen elimina el fondo blanco del PNG) ── */}
                <motion.div
                    variants={logoVariants}
                    initial="initial"
                    whileHover="hover"
                    style={{ cursor: "pointer", display: "flex", alignItems: "center", flexShrink: 0 }}
                    onClick={() => handleNavClick("/")}
                >
                    <img
                        src={brand.logoUrl}
                        alt="Asociación Mutual AMES"
                        style={{
                            height: scrolled ? "38px" : "50px",
                            width: "auto",
                            transition: "height 0.4s ease",
                            display: "block",
                            mixBlendMode: "screen",
                        }}
                    />
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

            {/* ── Responsive: hide/show elements ── */}
            <style>{`
        @media (max-width: 960px) {
          .ames-desktop-links  { display: none !important; }
          .ames-location-badge { display: none !important; }
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

                        {/* Panel lateral */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 28, stiffness: 200 }}
                            style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                width: "100%",
                                maxWidth: "580px",
                                height: "100%",
                                background: "#060c1a",
                                padding: "clamp(28px,5vw,56px) clamp(24px,6vw,72px)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                borderLeft: "1px solid rgba(26,86,219,0.25)",
                                boxShadow: "-20px 0 80px rgba(0,0,0,0.5)",
                                zIndex: 2,
                                pointerEvents: "auto",
                                overflowY: "auto",
                            }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            {/* Cerrar */}
                            <button
                                onClick={() => setMenuOpen(false)}
                                type="button"
                                aria-label="Cerrar menú"
                                style={{
                                    position: "absolute",
                                    top: "28px",
                                    right: "28px",
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
                                    zIndex: 3,
                                }}
                            >
                                <CloseIcon size={22} color="#fff" />
                            </button>

                            {/* Links */}
                            <div style={{ marginTop: "60px" }}>
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.09 + 0.2, ease: "easeOut" }}
                                    >
                                        <motion.button
                                            onClick={link.action}
                                            type="button"
                                            whileHover={{ x: 18 }}
                                            style={{
                                                background: "none",
                                                border: "none",
                                                color: location.pathname === link.path ? "#60a5fa" : "#fff",
                                                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                                                fontWeight: "700",
                                                letterSpacing: "2px",
                                                cursor: "pointer",
                                                marginBottom: "12px",
                                                textAlign: "left",
                                                display: "block",
                                                width: "100%",
                                                transition: "color 0.25s",
                                            }}
                                            onHoverStart={(e) => { (e.currentTarget as HTMLElement).style.color = "#7C3AED"; }}
                                            onHoverEnd={(e) => {
                                                (e.currentTarget as HTMLElement).style.color =
                                                    location.pathname === link.path ? "#60a5fa" : "#fff";
                                            }}
                                        >
                                            {link.name}
                                        </motion.button>
                                    </motion.div>
                                ))}

                                {/* CTA mobile */}
                                <motion.a
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: navLinks.length * 0.09 + 0.25 }}
                                    href="https://aceleradoraimpactobyames.tiendup.com/p/membresia-mensual-impacto-by-ames"
                                    target="_blank" rel="noreferrer"
                                    onClick={() => setMenuOpen(false)}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        marginTop: "28px",
                                        background: "linear-gradient(135deg, #1A56DB, #7C3AED)",
                                        color: "#fff",
                                        fontWeight: "700",
                                        fontSize: "1rem",
                                        letterSpacing: "0.05em",
                                        padding: "14px 32px",
                                        borderRadius: "99px",
                                        textDecoration: "none",
                                        boxShadow: "0 8px 28px rgba(26,86,219,0.45)",
                                    }}
                                >
                                    Sumarme ahora
                                    <ArrowRightIcon size={18} color="#fff" />
                                </motion.a>
                            </div>

                            {/* Footer del panel */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                            >
                                {/* Redes */}
                                <div style={{
                                    display: "flex",
                                    gap: "14px",
                                    marginBottom: "32px",
                                    borderTop: "1px solid rgba(255,255,255,0.08)",
                                    paddingTop: "32px",
                                }}>
                                    {[
                                        { Icon: InstagramIcon, href: "https://www.instagram.com/mutual.ames/", color: "#E4405F" },
                                        { Icon: LinkedinIcon, href: "https://www.linkedin.com/company/mutual-ames/", color: "#0077B5" },
                                        { Icon: YoutubeIcon, href: "https://www.youtube.com/@AceleradoraImpacto", color: "#FF0000" },
                                    ].map(({ Icon, href, color }, i) => (
                                        <motion.a
                                            key={i}
                                            href={href}
                                            target="_blank" rel="noreferrer"
                                            whileHover={{ y: -5 }}
                                            style={{
                                                width: "48px",
                                                height: "48px",
                                                borderRadius: "50%",
                                                background: "rgba(255,255,255,0.05)",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "background 0.3s",
                                                cursor: "pointer",
                                            }}
                                            onHoverStart={(e) => { (e.currentTarget as HTMLElement).style.background = color + "33"; }}
                                            onHoverEnd={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
                                        >
                                            <Icon size={20} color="#fff" />
                                        </motion.a>
                                    ))}
                                </div>

                                {/* Contacto */}
                                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", marginBottom: "8px" }}>
                                    Rosario, Santa Fe — Argentina
                                </p>
                                <motion.a
                                    href="https://wa.me/5493413702972"
                                    whileHover={{ x: 6 }}
                                    target="_blank" rel="noreferrer"
                                    style={{
                                        color: "#60a5fa",
                                        textDecoration: "none",
                                        fontSize: "1.05rem",
                                        fontWeight: "600",
                                        display: "inline-block",
                                    }}
                                >
                                    +54 9 341 370-2972
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
