import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * DevConsole — easter egg "terminal" du portfolio.
 *
 * Ouverture :
 *  - touche "`" (backtick) n'importe où sur la page
 *  - événement custom window.dispatchEvent(new Event('toggle-dev-console'))
 *    (déclenché par 5 clics sur le logo dans Navbar.js)
 *
 * Personnalise le contenu via les props `skills`, `projects`, `profile`
 * pour rester synchronisé avec le reste du site plutôt que de dupliquer
 * la donnée en dur.
 */

const DEFAULT_PROFILE = {
    name: 'Nicanor',
    role: 'Développeur Web Full-Stack',
    location: 'Cotonou, Bénin',
    stack: ['React', 'Laravel', 'PHP', 'JavaScript', 'MUI', 'Bootstrap'],
    email: 'akpovobarachie@email.com',
    github: 'https://github.com/votre-profil',
    linkedin: 'https://www.linkedin.com/in/nicanor-akpovo-36a86229a/',
};

const DEFAULT_PROJECTS = [
    { id: 1, title: "Site de location d'objets", stack: ['Laravel', 'CSS'] },
    { id: 2, title: 'Site de vente — Supermarché', stack: ['Laravel', 'Bootstrap'] },
    { id: 3, title: 'Site de e-learning', stack: ['React', 'CSS'] },
];

const PROMPT = 'nica@portfolio';

const buildHelp = () => [
    'Commandes disponibles :',
    '  whoami            — à propos de moi',
    '  skills            — stack technique',
    '  projects          — liste des projets',
    '  projects --open N — ouvre le projet N',
    '  contact           — mes coordonnées',
    '  clear             — vide le terminal',
    '  exit              — ferme la console',
];

const DevConsole = ({ profile = DEFAULT_PROFILE, projects = DEFAULT_PROJECTS }) => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', text: `Bienvenue. Tape "help" pour la liste des commandes.` },
    ]);
    const [cmdHistory, setCmdHistory] = useState([]);
    const [cmdIndex, setCmdIndex] = useState(-1);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    const close = useCallback(() => setOpen(false), []);

    useEffect(() => {
        const onKeyDown = (e) => {
            const tag = document.activeElement?.tagName;
            const typing = tag === 'INPUT' || tag === 'TEXTAREA';
            if (e.key === '`' && !typing) {
                e.preventDefault();
                setOpen((o) => !o);
            } else if (e.key === 'Escape' && open) {
                close();
            }
        };
        const onToggleEvent = () => setOpen((o) => !o);

        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('toggle-dev-console', onToggleEvent);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('toggle-dev-console', onToggleEvent);
        };
    }, [open, close]);

    useEffect(() => {
        if (open) setTimeout(() => inputRef.current?.focus(), 150);
    }, [open]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ block: 'end' });
    }, [history]);

    const print = (lines, type = 'output') => {
        const arr = Array.isArray(lines) ? lines : [lines];
        setHistory((h) => [...h, ...arr.map((text) => ({ type, text }))]);
    };

    const runCommand = (raw) => {
        const trimmed = raw.trim();
        setHistory((h) => [...h, { type: 'command', text: trimmed }]);
        if (!trimmed) return;

        const [cmd, ...args] = trimmed.split(/\s+/);

        switch (cmd.toLowerCase()) {
            case 'help':
                print(buildHelp());
                break;

            case 'whoami':
                print([
                    `${profile.name} — ${profile.role}`,
                    `📍 ${profile.location}`,
                    `Passionné par le développement web et les interfaces soignées.`,
                ]);
                break;

            case 'skills':
                print(`Stack : ${profile.stack.join(' · ')}`);
                break;

            case 'projects':
                if (args[0] === '--open' && args[1]) {
                    const p = projects.find((pr) => String(pr.id) === args[1]);
                    if (p) {
                        print([`→ ${p.title}`, `  Stack : ${p.stack.join(', ')}`]);
                    } else {
                        print(`Aucun projet avec l'id ${args[1]}.`, 'error');
                    }
                } else {
                    print([
                        'Projets :',
                        ...projects.map((p) => `  [${p.id}] ${p.title}`),
                        '',
                        'Astuce : "projects --open 2" pour le détail.',
                    ]);
                }
                break;

            case 'contact':
                print([
                    `Email     : ${profile.email}`,
                    `GitHub    : ${profile.github}`,
                    `LinkedIn  : ${profile.linkedin}`,
                ]);
                break;

            case 'clear':
                setHistory([]);
                break;

            case 'exit':
                print('À bientôt 👋');
                setTimeout(close, 400);
                break;

            default:
                print(`Commande inconnue : "${cmd}". Tape "help".`, 'error');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        runCommand(input);
        setCmdHistory((h) => [...h, input].filter(Boolean));
        setCmdIndex(-1);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (!cmdHistory.length) return;
            const nextIndex = cmdIndex < 0 ? cmdHistory.length - 1 : Math.max(0, cmdIndex - 1);
            setCmdIndex(nextIndex);
            setInput(cmdHistory[nextIndex]);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (cmdIndex < 0) return;
            const nextIndex = cmdIndex + 1;
            if (nextIndex >= cmdHistory.length) {
                setCmdIndex(-1);
                setInput('');
            } else {
                setCmdIndex(nextIndex);
                setInput(cmdHistory[nextIndex]);
            }
        }
    };

    return (
        <AnimatePresence>
            {open && (
                <Box
                    onClick={close}
                    sx={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 2000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 2,
                        background: 'rgba(4,4,10,0.55)',
                        backdropFilter: 'blur(6px)',
                    }}
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.94, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 8 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        style={{ width: '100%', maxWidth: 640 }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                borderRadius: '16px',
                                border: '1px solid rgba(148,148,255,0.14)',
                                background: 'rgba(16,15,28,0.92)',
                                boxShadow: '0 24px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(99,102,241,0.08)',
                                overflow: 'hidden',
                                fontFamily: "'JetBrains Mono', monospace",
                            }}
                        >
                            {/* Barre de titre */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    px: 2,
                                    py: 1,
                                    borderBottom: '1px solid rgba(148,148,255,0.1)',
                                }}
                            >
                                <Box sx={{ display: 'flex', gap: '6px' }}>
                                    {['#ff5f56', '#ffbd2e', '#27c93f'].map((c) => (
                                        <Box key={c} sx={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
                                    ))}
                                </Box>
                                <Typography sx={{ fontSize: 12, color: '#8b8b9e', fontFamily: 'inherit' }}>
                                    {PROMPT} — zsh
                                </Typography>
                                <IconButton size="small" onClick={close} sx={{ color: '#8b8b9e' }}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </Box>

                            {/* Historique */}
                            <Box
                                sx={{
                                    height: 340,
                                    overflowY: 'auto',
                                    px: 2,
                                    py: 1.5,
                                    fontSize: 13,
                                    lineHeight: 1.9,
                                }}
                            >
                                {history.map((line, i) => (
                                    <Box
                                        key={i}
                                        component="div"
                                        sx={{
                                            whiteSpace: 'pre-wrap',
                                            color:
                                                line.type === 'command' ? '#e8e8f4'
                                                    : line.type === 'error' ? '#ff6b6b'
                                                        : line.type === 'system' ? '#22d3ee'
                                                            : '#8b8b9e',
                                        }}
                                    >
                                        {line.type === 'command' ? `${PROMPT} $ ${line.text}` : line.text}
                                    </Box>
                                ))}
                                <div ref={bottomRef} />
                            </Box>

                            {/* Input */}
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    px: 2,
                                    py: 1.25,
                                    borderTop: '1px solid rgba(148,148,255,0.1)',
                                }}
                            >
                                <Typography sx={{ fontSize: 13, color: '#3fb950', fontFamily: 'inherit' }}>
                                    {PROMPT} $
                                </Typography>
                                <Box
                                    component="input"
                                    ref={inputRef}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    autoComplete="off"
                                    spellCheck={false}
                                    aria-label="Console de commandes"
                                    sx={{
                                        flex: 1,
                                        background: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        color: '#e8e8f4',
                                        fontSize: 13,
                                        fontFamily: 'inherit',
                                    }}
                                />
                            </Box>
                        </Box>
                    </motion.div>
                </Box>
            )}
        </AnimatePresence>
    );
};

export default DevConsole;
