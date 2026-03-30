import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://amesmutual.com';
const DEFAULT_KEYWORDS = 'Mutual Argentina, Mutual en Rosario, servicios mutuales, ayuda económica mutual, aceleradora mutual, networking empresarial Rosario, mutual para emprendedores';

type RouteMeta = {
    title: string;
    description: string;
    canonicalPath: string;
    keywords?: string;
};

const routeMeta: Record<string, RouteMeta> = {
    '/': {
        title: 'Asociación mutual entre emprendedores de Santa Fe',
        description: 'Dejá de emprender solo. Sumate a una comunidad de Santa Fe que te conecta con oportunidades, financiamiento y crecimiento real.',
        canonicalPath: '/',
        keywords: DEFAULT_KEYWORDS,
    },
    '/servicios': {
        title: 'Servicios para Emprendedores y Empresas | Mutual AMES',
        description: 'Conocé los servicios de Mutual AMES: Academia Express AMES, networking y comunidad, consultoría estratégica, ayuda económica e inversiones, Aceleradora de Impacto By AMES e Instituciones y Empresas Padrinos.',
        canonicalPath: '/servicios',
    },
    '/nosotros': {
        title: 'Quiénes Somos | Mutual AMES Rosario',
        description: 'Conocé la historia, la visión y el equipo de Asociación Mutual AMES, una comunidad de emprendedores, profesionales y empresas con base en Rosario.',
        canonicalPath: '/nosotros',
    },
    '/padrinos': {
        title: 'Instituciones y Empresas Padrinos | Mutual AMES',
        description: 'Sumá tu institución o empresa al Programa Padrinos y conectate con el ecosistema emprendedor de AMES con impacto real, visibilidad y oportunidades.',
        canonicalPath: '/padrinos',
    },
    '/casos': {
        title: 'Casos de Exito en Video | Mutual AMES Rosario',
        description: 'Conocé casos de exito reales de emprendedores y empresas que crecieron con Mutual AMES a traves de networking, formacion, consultoria y acompanamiento.',
        canonicalPath: '/casos',
    },
    '/preguntas-frecuentes': {
        title: 'Preguntas Frecuentes | Mutual AMES',
        description: 'Respondemos las dudas más comunes sobre Mutual AMES, membresía, comunidad, sede, ayuda económica y Programa Padrinos.',
        canonicalPath: '/preguntas-frecuentes',
    },
    '/terminos': {
        title: 'Términos y Condiciones | Mutual AMES',
        description: 'Leé los términos y condiciones de Asociación Mutual AMES para el uso del sitio y los servicios ofrecidos a sus asociados.',
        canonicalPath: '/terminos',
    },
    '/privacidad': {
        title: 'Política de Privacidad | Mutual AMES',
        description: 'Consultá la política de privacidad de Asociación Mutual AMES sobre el tratamiento de datos personales y el uso del sitio web.',
        canonicalPath: '/privacidad',
    },
};

declare global {
    interface Window {
        fbq?: (...args: unknown[]) => void;
    }
}

const setMetaByName = (name: string, content: string) => {
    let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
};

const setMetaByProperty = (property: string, content: string) => {
    let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
};

const setCanonical = (href: string) => {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', href);
};

export default function RouteEffects() {
    const { pathname, search } = useLocation();
    const normalizedPath = pathname === '/mutual-argentina' ? '/' : pathname;
    const meta = routeMeta[normalizedPath] ?? routeMeta['/'];

    useEffect(() => {
        const canonicalUrl = `${SITE_URL}${meta.canonicalPath}`;

        document.title = meta.title;
        setCanonical(canonicalUrl);
        setMetaByName('description', meta.description);
        setMetaByName('keywords', meta.keywords ?? DEFAULT_KEYWORDS);
        setMetaByName('robots', 'index, follow');
        setMetaByName('twitter:card', 'summary');
        setMetaByName('twitter:title', meta.title);
        setMetaByName('twitter:description', meta.description);
        setMetaByProperty('og:type', 'website');
        setMetaByProperty('og:locale', 'es_AR');
        setMetaByProperty('og:title', meta.title);
        setMetaByProperty('og:description', meta.description);
        setMetaByProperty('og:url', canonicalUrl);
    }, [meta]);

    useEffect(() => {
        if (typeof window.fbq === 'function') {
            window.fbq('track', 'PageView');
        }
    }, [pathname, search]);

    return null;
}
