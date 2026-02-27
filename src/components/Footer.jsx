import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Instagram, Linkedin, Youtube,
    MapPin, Mail, Phone, ArrowRight,
    HeartHandshake, ExternalLink
} from 'lucide-react';
import { brand } from '../assets/images';

const footerLinks = {
    servicios: [
        { label: 'Consultoría Estratégica', to: '/servicios#consultoria' },
        { label: 'Networking & Comunidad', to: '/servicios#networking' },
        { label: 'Escuela Express', to: '/servicios#escuela-express' },
        { label: 'Ayuda Económica', to: '/servicios#ayuda-economica' },
        { label: 'Aceleradora de Impacto', to: '/servicios#aceleradora-de-impacto' },
        { label: 'Empresas Padrino', to: '/servicios#empresas-padrinos' },
    ],
    institucional: [
        { label: 'Sobre AMES', to: '/nosotros' },
        { label: 'Empresas Padrino', to: '/padrinos' },
        { label: 'Casos de Éxito', to: '/casos' },
        { label: 'Membresía', href: 'https://aceleradoraimpactobyames.tiendup.com/p/membresia-mensual-impacto-by-ames' },
    ],
};

const socials = [
    { Icon: Instagram, href: 'https://www.instagram.com/mutual.ames/', label: 'Instagram', gradient: 'from-pink-500 to-purple-600' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/mutual-ames/', label: 'LinkedIn', gradient: 'from-blue-500 to-blue-700' },
    { Icon: Youtube, href: 'https://www.youtube.com/@AceleradoraImpacto', label: 'YouTube', gradient: 'from-red-500 to-red-700' },
];

const Footer = () => {
    return (
        <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4a1060 0%, #682079 40%, #5a1870 70%, #3d0d52 100%)' }}>
            {/* ── Decoraciones de fondo ── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
                />
            </div>

            {/* ── Cuerpo principal ── */}
            <div className="relative z-10 w-full px-10 lg:px-20 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

                    {/* Columna logo + descripción + socials */}
                    <div className="lg:col-span-4">
                        <img
                            src={brand.logoUrl}
                            alt="AMES Logo"
                            className="h-16 w-auto mb-7 brightness-0 invert"
                        />
                        <p className="text-white/60 text-base leading-relaxed mb-8 max-w-xs">
                            La mutual de emprendedores de Rosario. Te acompañamos con financiamiento, red de contactos y consultoría para que tu negocio escale con impacto real.
                        </p>

                        {/* Redes sociales */}
                        <div className="flex items-center gap-3 mb-8">
                            {socials.map(({ Icon, href, label, gradient }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>

                        {/* Badge mutual */}
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2.5">
                            <HeartHandshake className="w-5 h-5 text-white/80" />
                            <span className="text-white/70 text-sm font-semibold">Mutual sin fines de lucro</span>
                        </div>
                    </div>

                    {/* Servicios */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-heading font-bold text-xl mb-7 pb-3 border-b border-white/15">
                            Servicios
                        </h3>
                        <ul className="space-y-4">
                            {footerLinks.servicios.map(({ label, to, href }) => (
                                <li key={label}>
                                    {to ? (
                                        <Link
                                            to={to}
                                            className="text-white/60 hover:text-white text-base flex items-center gap-2 group transition-colors"
                                        >
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-white/60 shrink-0" />
                                            {label}
                                        </Link>
                                    ) : (
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-white/60 hover:text-white text-base flex items-center gap-2 group transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-white/60 shrink-0" />
                                            {label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Institucional */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-heading font-bold text-xl mb-7 pb-3 border-b border-white/15">
                            Institucional
                        </h3>
                        <ul className="space-y-4">
                            {footerLinks.institucional.map(({ label, to, href }) => (
                                <li key={label}>
                                    {to ? (
                                        <Link
                                            to={to}
                                            className="text-white/60 hover:text-white text-base flex items-center gap-2 group transition-colors"
                                        >
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-white/60 shrink-0" />
                                            {label}
                                        </Link>
                                    ) : (
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-white/60 hover:text-white text-base flex items-center gap-2 group transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-white/60 shrink-0" />
                                            {label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-heading font-bold text-xl mb-7 pb-3 border-b border-white/15">
                            Contacto
                        </h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                                    <MapPin size={18} className="text-white/70" />
                                </div>
                                <span className="text-white/60 text-base leading-relaxed pt-1">
                                    Paraguay 751, Rosario,<br />Santa Fe, Argentina.
                                </span>
                            </li>
                            <li>
                                <a
                                    href="mailto:aceleradoraimpactobyames@gmail.com"
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                                        <Mail size={18} className="text-white/70" />
                                    </div>
                                    <span className="text-white/60 group-hover:text-white transition-colors text-sm break-all">
                                        aceleradoraimpactobyames@gmail.com
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/5493417483978"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 group mb-4"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                                        <Phone size={18} className="text-white/70" />
                                    </div>
                                    <div className="text-white/60 group-hover:text-white transition-colors">
                                        <p className="font-semibold text-xs text-white/40 mb-0.5">Ayuda Económica</p>
                                        <p className="text-base">+54 9 341 748-3978</p>
                                    </div>
                                </a>
                                <a
                                    href="https://wa.me/5493413702972"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                                        <Phone size={18} className="text-white/70" />
                                    </div>
                                    <div className="text-white/60 group-hover:text-white transition-colors">
                                        <p className="font-semibold text-xs text-white/40 mb-0.5">Impacto AMES</p>
                                        <p className="text-base">+54 9 341 370-2972</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ── Línea inferior ── */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} Asociación Mutual AMES. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link to="/terminos" className="text-white/40 hover:text-white/80 transition-colors text-sm font-medium">
                            Términos y Condiciones
                        </Link>
                        <Link to="/privacidad" className="text-white/40 hover:text-white/80 transition-colors text-sm font-medium">
                            Política de Privacidad
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
