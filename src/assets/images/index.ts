/**
 * AMES — Módulo de Imágenes
 * 
 * Importá las imágenes que necesites con:
 *   import { community, hero } from '@/assets/images';
 * 
 * O bien usando la ruta relativa:
 *   import { community } from '../../assets/images';
 */

import logoLocal from './logo-ames.png';
import caroImg from './caro imagen.jpeg';
import lautiImg from './lauti imagen.jpeg';
import consultoriaHomeImg from './consultoria estrategica.jpeg';
import consultoriaDetalleImg from './consultoria estrategica2.jpeg';
import academiaHomeImg from './academia express.jpeg';
import academiaDetalleImg from './academia express2.jpeg';
import networkingHomeImg from './networking y comunidad.jpeg';
import networkingDetalleImg from './networking y comunidad (2).jpeg';
import padrinoHomeImg from './empresas padrino.jpeg';
import padrinoDetalleImg from './empresas padrino 2.jpeg';

// ── Hero ──────────────────────────────────────────────────────────────────────
export const hero = {
    /** Fondo principal del hero con emprendedores */
    background: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
    /** Emprendedor trabajando en laptop */
    emprendedor: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
};

// ── Comunidad ─────────────────────────────────────────────────────────────────
export const community = {
    /** Grupo de emprendedores en reunión */
    grupo: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80',
    /** Networking y colaboración (Home) */
    networkingHome: networkingHomeImg,
    /** Networking y colaboración (Detalle) */
    networkingDetalle: networkingDetalleImg,
    /** Networking y colaboración (compatibilidad) */
    networking: networkingHomeImg,
    /** Evento comunitario */
    evento: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
    /** Coworking moderno */
    coworking: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
};

// ── Servicios ─────────────────────────────────────────────────────────────────
export const services = {
    /** Consultoría / mentoría (Home) */
    consultoriaHome: consultoriaHomeImg,
    /** Consultoría / mentoría (Detalle) */
    consultoriaDetalle: consultoriaDetalleImg,
    /** Consultoría / mentoría (compatibilidad) */
    consultoria: consultoriaHomeImg,
    /** Escuela / capacitación (Home) */
    escuelaHome: academiaHomeImg,
    /** Escuela / capacitación (Detalle) */
    escuelaDetalle: academiaDetalleImg,
    /** Escuela / capacitación (compatibilidad) */
    escuela: academiaHomeImg,
    /** Financiamiento / ayuda económica */
    financiamiento: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    /** Aceleradora */
    aceleradora: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
};

// ── Nosotros / About ──────────────────────────────────────────────────────────
export const about = {
    /** Equipo AMES */
    equipo: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80',
    /** Rosario ciudad */
    rosario: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    /** Fundadores charlando */
    fundadores: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80',
};

// ── Testimonios ───────────────────────────────────────────────────────────────
export const testimonials = {
    /** Emprendedora mujer */
    carolina: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    /** Emprendedor hombre */
    sebastian: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    /** Emprendedora gastronomía */
    florencia: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80',
};

// ── Padrinos / Empresas ───────────────────────────────────────────────────────
export const padrinos = {
    /** Oficina corporativa */
    oficina: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1000&q=80',
    /** Handshake / alianza (Home) */
    alianzaHome: padrinoHomeImg,
    /** Handshake / alianza (Detalle) */
    alianzaDetalle: padrinoDetalleImg,
    /** Handshake / alianza (compatibilidad) */
    alianza: padrinoHomeImg,
};

// ── Avatares (Hero) ──────────────────────────────────────────────────────────
export const avatars = {
    caro: caroImg,
    lauti: lautiImg,
    maria: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
    juan: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
    laura: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    carlos: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80',
    sofia: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80',
    rodrigo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    paula: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
};

// ── Logos / Marca ─────────────────────────────────────────────────────────────
export const brand = {
    /** Logo AMES oficial */
    logoUrl: logoLocal,
};

// ── Default export: todos agrupados ──────────────────────────────────────────
const images = { hero, community, services, about, testimonials, padrinos, avatars, brand };
export default images;
