import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Si hay un hash en la URL (ej. #consultoria), intentar hacer scroll hacia él
        if (hash) {
            // Necesitamos un pequeño timeout porque a veces el elemento no se ha renderizado
            // completamente si es un cambio de página
            const timeoutId = setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 150);

            return () => clearTimeout(timeoutId);
        }
        // Si no hay hash, scrollear al inicio de la página
        else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [pathname, hash]);

    return null;
}
