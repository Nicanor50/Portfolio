import React from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Mail from '@mui/icons-material/Mail';
import './Styles/Fichier.css'

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                background: '#0d1117',
                borderTop: '1px solid rgba(148,148,255,0.08)',
                color: '#8b949e',
                py: 5,
                px: 2,
            }}
        >
            <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    alignItems={{ xs: 'flex-start', sm: 'center' }}
                    justifyContent="space-between"
                    spacing={2}
                >
                    {/* Statut — un vrai petit indicateur, plus de texte imbriqué dedans */}
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Box
                            sx={{
                                width: 8, height: 8, borderRadius: '50%',
                                background: '#3fb950',
                                boxShadow: '0 0 0 0 rgba(63,185,80,0.6)',
                                animation: 'footer-pulse 2s infinite',
                                '@keyframes footer-pulse': {
                                    '0%': { boxShadow: '0 0 0 0 rgba(63,185,80,0.55)' },
                                    '70%': { boxShadow: '0 0 0 7px rgba(63,185,80,0)' },
                                    '100%': { boxShadow: '0 0 0 0 rgba(63,185,80,0)' },
                                },
                            }}
                        />
                        <Typography sx={{ fontSize: 13.5 }}>
                            Disponible pour de nouvelles opportunités
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={1}>
                        {[
                            { icon: GitHubIcon, href: 'https://github.com/Nicanor50', label: 'GitHub' },
                            { icon: LinkedInIcon, href: 'https://linkedin.com/in/nicanor-akpovo-36a86229a/ss', label: 'LinkedIn' },
                            { icon: Mail, href: 'mailto:akpovobarachie@gmail.com', label: 'Email' },
                        ].map(({ icon: Icon, href, label }) => (
                            <IconButton
                                key={label}
                                component="a"
                                href={href}
                                target={href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noopener noreferrer"
                                aria-label={label}
                                size="small"
                                sx={{
                                    width: 36, height: 36, borderRadius: '10px',
                                    border: '1px solid #21262d',
                                    color: '#c9d1d9',
                                    '&:hover': { color: '#58a6ff', borderColor: '#58a6ff' },
                                }}
                            >
                                <Icon fontSize="small" />
                            </IconButton>
                        ))}
                    </Stack>
                </Stack>

                <Box sx={{ height: '1px', background: '#21262d', my: 3 }} />

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={1}
                >
                    <Typography sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13.5, color: '#c9d1d9' }}>
                        <Box component="span" sx={{ color: '#3fb950', mr: 1 }}></Box>
                        © {year} — Développeur Web Full-Stack"
                    </Typography>
                    <Typography sx={{ fontSize: 12.5, color: '#8b949e' }}>
                        Conçu &amp; codé · Cotonou, Bénin
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
};

export default Footer;
