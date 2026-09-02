import React from 'react';
import { Box, Typography } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BuildIcon from '@mui/icons-material/Build';
import { motion } from 'framer-motion';
import ScrollReveal from './Shared/ScrollReveal';

// Icônes MUI (au lieu de Tabler) pour rester cohérent avec le reste du site
const skillsData = [
    { icon: WebIcon, title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'] },
    { icon: StorageIcon, title: 'Backend', items: ['PHP', 'Laravel', 'REST API'] },
    { icon: AccountTreeIcon, title: 'Git', items: ['Versionnement', 'Init & configuration', 'Gestion locale', 'Branches & fusion'] },
    { icon: BuildIcon, title: 'Outils', items: ['VS Code', 'Figma', 'Webpack', 'ESLint'] },
];

const Skills = () => {
    return (
        <Box component="section" id="skills" sx={{ py: { xs: 8, md: 12 } }}>
            <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 4 } }}>
                <ScrollReveal>
                    <Typography sx={{ fontSize: 13, color: '#22d3ee', fontWeight: 600, mb: 1 }}>
                        Ce que je maîtrise
                    </Typography>
                    <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 36 }, color: '#e8e8f4', mb: 5 }}>
                        Compétences
                    </Typography>
                </ScrollReveal>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                        gap: 2,
                    }}
                >
                    {skillsData.map(({ icon: Icon, title, items }, i) => (
                        <ScrollReveal key={title} delay={i * 0.06}>
                            <Box
                                component={motion.div}
                                whileHover={{ y: -4 }}
                                sx={{
                                    borderRadius: '16px',
                                    border: '1px solid rgba(148,148,255,0.1)',
                                    background: '#100f1c',
                                    p: 3,
                                    height: '100%',
                                }}
                            >
                                <Icon sx={{ fontSize: 26, color: '#22d3ee', mb: 1.5 }} />
                                <Typography sx={{ fontSize: 14.5, fontWeight: 600, color: '#e8e8f4', mb: 1.5 }}>
                                    {title}
                                </Typography>
                                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                                    {items.map((item) => (
                                        <Box
                                            key={item}
                                            component="li"
                                            sx={{ fontSize: 13, color: '#8b8b9e', display: 'flex', alignItems: 'center', gap: 1 }}
                                        >
                                            <Box sx={{ width: 4, height: 4, borderRadius: '50%', background: '#6366f1', flexShrink: 0 }} />
                                            {item}
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </ScrollReveal>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Skills;
