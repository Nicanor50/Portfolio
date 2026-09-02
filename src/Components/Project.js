import React from 'react';
import { Box, Typography, Chip, IconButton } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion } from 'framer-motion';
import ScrollReveal from './Shared/ScrollReveal';
import { gradients } from './theme';

// Remplace ces dégradés par de vraies captures d'écran de tes projets
// dès que possible : <img src={project1} ... /> une fois les fichiers
// importés depuis ./Images/1.png, 2.png, 3.png (actuellement absents).
const thumbGradients = [
    'linear-gradient(135deg,#6366f1,#22d3ee)',
    'linear-gradient(135deg,#f97316,#ec4899)',
    'linear-gradient(135deg,#22c55e,#22d3ee)',
];

const projectsData = [
    {
        id: 1,
        title: "Site de location d'objets",
        description:
            "Application web mettant en relation des propriétaires d'objets avec des personnes souhaitant les louer temporairement.",
        stack: ['Laravel', 'CSS', 'Bootstrap'],
        badge: 'Web app',
        link: '#',
        span: 2, // occupe 2 colonnes sur la grille bento
    },
    {
        id: 2,
        title: 'Site de vente — Supermarché',
        description:
            'Plateforme e-commerce avec profils admin et utilisateur, gestion des produits, panier et paiement à la livraison.',
        stack: ['Laravel', 'Bootstrap', 'React', 'CSS', 'Material UI'],
        badge: 'E-commerce',
        link: 'nolmarket.com',
        span: 1,
    },
    {
        id: 3,
        title: 'Site de e-learning',
        description:
            "Plateforme d'apprentissage en ligne permettant aux utilisateurs d'accéder à des cours et ressources pédagogiques.",
        stack: ['React', 'CSS', 'Laravel'],
        badge: 'EdTech',
        link: '#',
        span: 1,
    },
];

const ProjectCard = ({ project, index }) => (
    <Box
        component={motion.div}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        sx={{
            gridColumn: { md: `span ${project.span}` },
            borderRadius: '20px',
            border: '1px solid rgba(148,148,255,0.1)',
            background: '#100f1c',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <Box
            sx={{
                aspectRatio: project.span === 2 ? '21/9' : '16/10',
                background: thumbGradients[index % thumbGradients.length],
                display: 'flex',
                alignItems: 'flex-end',
                p: 2.5,
            }}
        >
            <Chip
                label={project.badge}
                size="small"
                sx={{ background: 'rgba(8,8,15,0.55)', color: '#fff', backdropFilter: 'blur(6px)' }}
            />
        </Box>

        <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 1.5, flex: 1 }}>
            <Typography sx={{ fontSize: 17, fontWeight: 600, color: '#e8e8f4' }}>
                {project.title}
            </Typography>
            <Typography sx={{ fontSize: 13.5, color: '#8b8b9e', lineHeight: 1.7 }}>
                {project.description}
            </Typography>

            <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mt: 0.5 }}>
                {project.stack.map((tech) => (
                    <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: 'rgba(148,148,255,0.2)', color: '#8b8b9e', fontSize: 11 }}
                    />
                ))}
            </Box>

            <Box
                sx={{
                    mt: 'auto',
                    pt: 2,
                    borderTop: '1px solid rgba(148,148,255,0.08)',
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
                <IconButton
                    component="a"
                    href={project.link}
                    aria-label={`Voir le projet ${project.title}`}
                    size="small"
                    sx={{
                        color: '#e8e8f4',
                        border: '1px solid rgba(148,148,255,0.15)',
                        '&:hover': { background: gradients.primary, color: '#08080f' },
                    }}
                >
                    <ArrowOutwardIcon fontSize="small" />
                </IconButton>
            </Box>
        </Box>
    </Box>
);

const Project = () => {
    return (
        <Box component="section" id="projects" sx={{ py: { xs: 8, md: 12 } }}>
            <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 4 } }}>
                <ScrollReveal>
                    <Typography sx={{ fontSize: 13, color: '#22d3ee', fontWeight: 600, mb: 1 }}>
                        Ce que j'ai réalisé
                    </Typography>
                    <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 36 }, color: '#e8e8f4', mb: 5 }}>
                        Projets récents
                    </Typography>
                </ScrollReveal>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: 2.5,
                    }}
                >
                    {projectsData.map((project, i) => (
                        <ScrollReveal key={project.id} delay={i * 0.08}>
                            <ProjectCard project={project} index={i} />
                        </ScrollReveal>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Project;
