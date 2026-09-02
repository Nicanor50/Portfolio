import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

/**
 * AnimatedBackground — la "touche" visuelle du site.
 * Un seul endroit concentre le mouvement/l'audace (cf. principe de
 * restraint) : 3 halos dégradés qui dérivent lentement en arrière-plan,
 * une grille en fondu, et un halo discret qui suit le curseur.
 * Tout le reste du site reste calme au-dessus, en glassmorphism.
 *
 * Se place une seule fois, tout en haut de <App />, en position fixed.
 */
const AnimatedBackground = () => {
    const glowRef = useRef(null);

    useEffect(() => {
        let raf = null;
        const handleMove = (e) => {
            if (raf) return;
            raf = requestAnimationFrame(() => {
                if (glowRef.current) {
                    const x = (e.clientX / window.innerWidth) * 100;
                    const y = (e.clientY / window.innerHeight) * 100;
                    glowRef.current.style.setProperty('--mx', `${x}%`);
                    glowRef.current.style.setProperty('--my', `${y}%`);
                }
                raf = null;
            });
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    return (
        <Box
            aria-hidden="true"
            sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                overflow: 'hidden',
                background: '#08080f',
                pointerEvents: 'none',
            }}
        >
            {/* Grille en fondu, ancre le fond dans un univers "dev" */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                        'linear-gradient(rgba(148,148,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(148,148,255,0.055) 1px, transparent 1px)',
                    backgroundSize: '46px 46px',
                    maskImage: 'radial-gradient(ellipse 75% 55% at 50% 0%, black 20%, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 75% 55% at 50% 0%, black 20%, transparent 75%)',
                }}
            />

            {/* Halos aurora — dérive lente, jamais synchronisée */}
            <Box className="aurora aurora-1" />
            <Box className="aurora aurora-2" />
            <Box className="aurora aurora-3" />

            {/* Halo qui suit le curseur, très discret */}
            <Box
                ref={glowRef}
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(560px circle at var(--mx, 50%) var(--my, 20%), rgba(99,102,241,0.09), transparent 45%)',
                }}
            />

            {/* Vignette pour concentrer le regard vers le centre */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse 100% 60% at 50% 0%, transparent 40%, #08080f 100%)',
                }}
            />

            <style>{`
                @keyframes aurora-float-1 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(70px, -50px) scale(1.15); }
                }
                @keyframes aurora-float-2 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-60px, 60px) scale(1.1); }
                }
                @keyframes aurora-float-3 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(50px, 70px) scale(0.92); }
                }
                .aurora {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(100px);
                    will-change: transform;
                }
                .aurora-1 {
                    width: 460px; height: 460px;
                    top: -12%; left: 2%;
                    background: #6366f1;
                    opacity: 0.32;
                    animation: aurora-float-1 20s ease-in-out infinite;
                }
                .aurora-2 {
                    width: 400px; height: 400px;
                    top: 22%; right: -4%;
                    background: #22d3ee;
                    opacity: 0.24;
                    animation: aurora-float-2 24s ease-in-out infinite;
                }
                .aurora-3 {
                    width: 380px; height: 380px;
                    bottom: -14%; left: 32%;
                    background: #a855f7;
                    opacity: 0.22;
                    animation: aurora-float-3 27s ease-in-out infinite;
                }
                @media (prefers-reduced-motion: reduce) {
                    .aurora { animation: none !important; }
                }
            `}</style>
        </Box>
    );
};

export default AnimatedBackground;
