import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            requestAnimationFrame(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
            return;
        }
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }, [pathname, hash]);

    return null;
}

export default ScrollToTop;
