import React, { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Révèle son contenu une seule fois quand il entre dans le viewport.
 * Un seul pattern (fade + léger rise) réutilisé partout plutôt que
 * des animations différentes par section : cohérence > effet gadget.
 * Respecte prefers-reduced-motion.
 */
const ScrollReveal = ({ children, delay = 0, y = 24, once = true, className = '' }) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once) observer.disconnect();
                } else if (!once) {
                    setInView(false);
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [once]);

    if (prefersReducedMotion) {
        return <div ref={ref} className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
