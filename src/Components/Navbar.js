import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Box, Toolbar, Button, IconButton, Typography, Drawer, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import { gradients } from './theme';

const navLinks = [
    { label: 'Projets', id: 'projects' },
    { label: 'Compétences', id: 'skills' },
    { label: 'À propos', id: 'about' },
    { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeId, setActiveId] = useState('projects');
    const logoClicks = useRef({ count: 0, timer: null });

    // Fond de la navbar au scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Scrollspy : détecte quelle section est visible pour surligner le bon lien
    useEffect(() => {
        const sections = navLinks
            .map(({ id }) => document.getElementById(id))
            .filter(Boolean);
        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const handleNavClick = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    // 5 clics rapides sur le logo → ouvre la console cachée
    const handleLogoClick = () => {
        const ref = logoClicks.current;
        ref.count += 1;
        clearTimeout(ref.timer);
        ref.timer = setTimeout(() => { ref.count = 0; }, 1500);
        if (ref.count >= 5) {
            ref.count = 0;
            window.dispatchEvent(new Event('toggle-dev-console'));
        }
    };

    const linkStyle = (id) => ({
        color: activeId === id ? '#e8e8f4' : 'rgba(232,232,244,0.6)',
        fontWeight: 500,
        fontSize: '0.875rem',
        borderRadius: '10px',
        position: 'relative',
        '&:hover': { color: '#22d3ee', background: 'rgba(34,211,238,0.08)' },
        '&::after': activeId === id ? {
            content: '""',
            position: 'absolute',
            bottom: 2,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 16,
            height: 2,
            borderRadius: 2,
            background: gradients.primary,
        } : {},
    });

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    background: scrolled ? 'rgba(8,8,15,0.92)' : 'rgba(8,8,15,0.7)',
                    backdropFilter: 'blur(14px)',
                    borderBottom: '1px solid rgba(148,148,255,0.1)',
                    boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.35)' : 'none',
                    transition: 'background 0.3s ease, box-shadow 0.3s ease',
                }}
            >
                <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
                    <Typography
                        onClick={handleLogoClick}
                        sx={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontWeight: 600,
                            cursor: 'pointer',
                            userSelect: 'none',
                            background: gradients.primary,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        &lt;NicaDev /&gt;
                    </Typography>

                    <Box sx={{ flex: 1 }} />

                    <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {navLinks.map(({ label, id }) => (
                            <Button key={id} onClick={() => handleNavClick(id)} sx={linkStyle(id)}>
                                {label}
                            </Button>
                        ))}
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center" sx={{ ml: 2 }}>
                        <IconButton
                            component="a" href="https://github.com/Nicanor50" target="_blank" rel="noreferrer"
                            size="small" sx={{ display: { xs: 'none', md: 'inline-flex' }, color: 'rgba(232,232,244,0.6)' }}
                        >
                            <GitHubIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            component="a" href="https://linkedin.com/in/nicanor-akpovo-36a86229a/" target="_blank" rel="noreferrer"
                            size="small" sx={{ display: { xs: 'none', md: 'inline-flex' }, color: 'rgba(232,232,244,0.6)' }}
                        >
                            <LinkedInIcon fontSize="small" />
                        </IconButton>
                        <Button
                            onClick={() => handleNavClick('contact')}
                            variant="contained"
                            sx={{
                                display: { xs: 'none', md: 'inline-flex' },
                                background: gradients.primary,
                                color: '#08080f',
                                fontWeight: 600,
                                '&:hover': { filter: 'brightness(1.1)' },
                            }}
                        >
                            Me contacter
                        </Button>
                        <IconButton
                            onClick={() => setMenuOpen(true)}
                            sx={{ display: { xs: 'inline-flex', md: 'none' }, color: 'rgba(232,232,244,0.8)' }}
                            aria-label="Ouvrir le menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="right"
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
                PaperProps={{ sx: { background: '#100f1c', width: 260, p: 3 } }}
            >
                <Stack spacing={1} sx={{ mt: 4 }}>
                    {navLinks.map(({ label, id }) => (
                        <Button
                            key={id}
                            onClick={() => handleNavClick(id)}
                            sx={{ justifyContent: 'flex-start', ...linkStyle(id) }}
                        >
                            {label}
                        </Button>
                    ))}
                    <Button
                        onClick={() => handleNavClick('contact')}
                        variant="contained"
                        sx={{ mt: 2, background: gradients.primary, color: '#08080f', fontWeight: 600 }}
                    >
                        Me contacter
                    </Button>
                </Stack>
            </Drawer>

            {/* Spacer pour compenser la navbar fixe */}
            <Box sx={{ height: 64 }} />
        </>
    );
};

export default Navbar;
