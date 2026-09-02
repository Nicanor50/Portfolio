import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert, Stack } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollReveal from './Shared/ScrollReveal';
import { gradients } from './theme';

// Adresse de ton API Laravel. Définis REACT_APP_API_URL dans un .env
// (ex: REACT_APP_API_URL=https://api.tondomaine.com) pour éviter de
// coder l'URL en dur.
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/contact';

const initialForm = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
    };

    const validate = () => {
        const next = {};
        if (!form.name.trim()) next.name = 'Le nom est requis.';
        if (!form.email.trim()) next.email = "L'email est requis.";
        else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Email invalide.';
        if (!form.message.trim()) next.message = 'Le message est requis.';
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('loading');
        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error('Request failed');
            setStatus('success');
            setForm(initialForm);
        } catch (err) {
            setStatus('error');
        }
    };

    const inputSx = {
        '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.03)',
            color: '#e8e8f4',
            '& fieldset': { borderColor: 'rgba(148,148,255,0.15)' },
            '&:hover fieldset': { borderColor: 'rgba(148,148,255,0.3)' },
            '&.Mui-focused fieldset': { borderColor: '#22d3ee' },
        },
        '& .MuiInputLabel-root': { color: '#8b8b9e' },
    };

    return (
        <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 } }}>
            <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 4 } }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>

                    <ScrollReveal className="contact-info" style={{ flex: 1 }}>
                        <Box sx={{ flex: 1 }}>
                            <Typography sx={{ fontSize: 13, color: '#22d3ee', fontWeight: 600, mb: 1 }}>
                                Travaillons ensemble
                            </Typography>
                            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 36 }, color: '#e8e8f4', mb: 2 }}>
                                Entrons en contact
                            </Typography>
                            <Typography sx={{ color: '#8b8b9e', lineHeight: 1.8, mb: 3 }}>
                                Vous avez un projet en tête, une opportunité à discuter ou simplement
                                envie d'échanger ? N'hésitez pas à me contacter, je réponds
                                généralement sous 24h.
                            </Typography>

                            <Stack spacing={1.25}>
                                {[
                                    { label: 'akpovobarachie@email.com', href: 'mailto:akpovobarachie@email.com' },
                                    { label: 'linkedin.com/in/nicadev', href: 'https://www.linkedin.com/in/nicanor-akpovo-36a86229a/' },
                                    { label: 'github.com/nicaakpovo', href: 'https://github.com/Nicanor50' },
                                ].map(({ label, href }) => (
                                    <Box
                                        key={label}
                                        component="a"
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        sx={{
                                            fontSize: 13.5, color: '#c9d1d9', textDecoration: 'none',
                                            px: 2, py: 1.25, borderRadius: '10px',
                                            border: '1px solid rgba(148,148,255,0.1)',
                                            '&:hover': { borderColor: 'rgba(34,211,238,0.4)', color: '#22d3ee' },
                                        }}
                                    >
                                        {label}
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1} className="contact-form-wrap" style={{ flex: 1.2 }}>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                        >
                            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                                <TextField
                                    label="Nom" name="name" value={form.name} onChange={handleChange}
                                    error={!!errors.name} helperText={errors.name}
                                    sx={inputSx} InputLabelProps={{ sx: { color: '#8b8b9e' } }}
                                />
                                <TextField
                                    label="Email" name="email" type="email" value={form.email} onChange={handleChange}
                                    error={!!errors.email} helperText={errors.email}
                                    sx={inputSx}
                                />
                            </Box>
                            <TextField
                                label="Sujet" name="subject" value={form.subject} onChange={handleChange}
                                sx={inputSx}
                            />
                            <TextField
                                label="Message" name="message" value={form.message} onChange={handleChange}
                                error={!!errors.message} helperText={errors.message}
                                multiline minRows={4} sx={inputSx}
                            />

                            <Button
                                type="submit"
                                disabled={status === 'loading'}
                                sx={{
                                    alignSelf: 'flex-start',
                                    background: gradients.primary,
                                    color: '#08080f',
                                    fontWeight: 600,
                                    px: 3,
                                    '&:hover': { filter: 'brightness(1.1)' },
                                    '&.Mui-disabled': { opacity: 0.6, color: '#08080f' },
                                }}
                            >
                                {status === 'loading' ? 'Envoi…' : 'Envoyer le message'}
                            </Button>

                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                                        <Alert severity="success" sx={{ borderRadius: '12px' }}>
                                            Message envoyé ! Je reviens vers vous sous 24h.
                                        </Alert>
                                    </motion.div>
                                )}
                                {status === 'error' && (
                                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                                        <Alert severity="error" sx={{ borderRadius: '12px' }}>
                                            Une erreur est survenue. Réessayez ou écrivez-moi directement par email.
                                        </Alert>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Box>
                    </ScrollReveal>

                </Box>
            </Box>
        </Box>
    );
};

export default Contact;
