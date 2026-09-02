import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const PROMPT = 'nica@portfolio';

const PROJECTS = [
  { id: 1, title: "Site de location d'objets", stack: ['Laravel', 'CSS'] },
  { id: 2, title: 'Site de vente — Supermarché', stack: ['Laravel', 'Bootstrap'] },
  { id: 3, title: 'Site de e-learning', stack: ['React', 'CSS'] },
];

const PROFILE = {
  name: 'Nicanor',
  role: 'Développeur Web Full-Stack',
  location: 'Cotonou, Bénin',
  stack: ['React', 'Laravel', 'PHP', 'JavaScript', 'MUI', 'Bootstrap'],
  email: 'akpovobarachie@email.com',
  github: 'https://github.com/votre-profil',
  linkedin: 'https://www.linkedin.com/in/nicanor-akpovo-36a86229a/',
};

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

function DevConsole({ open, setOpen }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Bienvenue. Tape "help" pour la liste des commandes.' },
  ]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  const close = useCallback(() => setOpen(false), [setOpen]);

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
          `${PROFILE.name} — ${PROFILE.role}`,
          `📍 ${PROFILE.location}`,
          `Passionné par le développement web et les interfaces soignées.`,
        ]);
        break;
      case 'skills':
        print(`Stack : ${PROFILE.stack.join(' · ')}`);
        break;
      case 'projects':
        if (args[0] === '--open' && args[1]) {
          const p = PROJECTS.find((pr) => String(pr.id) === args[1]);
          if (p) print([`→ ${p.title}`, `  Stack : ${p.stack.join(', ')}`]);
          else print(`Aucun projet avec l'id ${args[1]}.`, 'error');
        } else {
          print([
            'Projets :',
            ...PROJECTS.map((p) => `  [${p.id}] ${p.title}`),
            '',
            'Astuce : "projects --open 2" pour le détail.',
          ]);
        }
        break;
      case 'contact':
        print([
          `Email     : ${PROFILE.email}`,
          `GitHub    : ${PROFILE.github}`,
          `LinkedIn  : ${PROFILE.linkedin}`,
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
      const next = cmdIndex < 0 ? cmdHistory.length - 1 : Math.max(0, cmdIndex - 1);
      setCmdIndex(next);
      setInput(cmdHistory[next]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdIndex < 0) return;
      const next = cmdIndex + 1;
      if (next >= cmdHistory.length) { setCmdIndex(-1); setInput(''); }
      else { setCmdIndex(next); setInput(cmdHistory[next]); }
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(4,4,10,0.55)', backdropFilter: 'blur(6px)' }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-xl"
          >
            <div
              className="w-full rounded-2xl overflow-hidden font-mono"
              style={{
                border: '1px solid rgba(148,148,255,0.14)',
                background: 'rgba(16,15,28,0.95)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(99,102,241,0.08)',
              }}
            >
              <div className="flex items-center justify-between px-4 py-2" style={{ borderBottom: '1px solid rgba(148,148,255,0.1)' }}>
                <div className="flex gap-1.5">
                  {['#ff5f56', '#ffbd2e', '#27c93f'].map((c) => (
                    <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                  ))}
                </div>
                <span className="text-xs" style={{ color: '#8b8b9e' }}>{PROMPT} — zsh</span>
                <button onClick={close} aria-label="Fermer" style={{ color: '#8b8b9e' }}>
                  <X size={16} />
                </button>
              </div>

              <div className="px-4 py-3 overflow-y-auto text-sm leading-relaxed" style={{ height: 300 }}>
                {history.map((line, i) => (
                  <div
                    key={i}
                    className="whitespace-pre-wrap"
                    style={{
                      color:
                        line.type === 'command' ? '#e8e8f4'
                        : line.type === 'error' ? '#ff6b6b'
                        : line.type === 'system' ? '#22d3ee'
                        : '#8b8b9e',
                    }}
                  >
                    {line.type === 'command' ? `${PROMPT} $ ${line.text}` : line.text}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3" style={{ borderTop: '1px solid rgba(148,148,255,0.1)' }}>
                <span className="text-sm" style={{ color: '#3fb950' }}>{PROMPT} $</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="Console de commandes"
                  className="flex-1 bg-transparent outline-none text-sm"
                  style={{ color: '#e8e8f4' }}
                />
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default function DevConsoleDemo() {
  const [open, setOpen] = useState(false);
  const clicks = useRef({ count: 0, timer: null });

  useEffect(() => {
    const onKeyDown = (e) => {
      const tag = document.activeElement?.tagName;
      if (e.key === '`' && tag !== 'INPUT' && tag !== 'TEXTAREA') {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleLogoClick = () => {
    const ref = clicks.current;
    ref.count += 1;
    clearTimeout(ref.timer);
    ref.timer = setTimeout(() => { ref.count = 0; }, 1500);
    if (ref.count >= 5) { ref.count = 0; setOpen(true); }
  };

  return (
    <div
      className="min-h-[420px] w-full flex flex-col items-center justify-center gap-6 p-8 rounded-2xl"
      style={{ background: 'linear-gradient(160deg, #08080f 0%, #100f1c 100%)' }}
    >
      <button
        onClick={handleLogoClick}
        className="font-mono text-lg font-semibold px-4 py-2 rounded-lg select-none"
        style={{
          background: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          border: '1px solid rgba(148,148,255,0.15)',
        }}
      >
        &lt;NicaDev /&gt;
      </button>
      <p className="text-sm text-center" style={{ color: '#8b8b9e', maxWidth: 340 }}>
        Clique 5 fois rapidement sur le logo, ou appuie sur la touche <kbd style={{ color: '#e8e8f4', background: 'rgba(148,148,255,0.1)', padding: '2px 6px', borderRadius: 4 }}>`</kbd> pour ouvrir la console cachée.
      </p>
      <DevConsole open={open} setOpen={setOpen} />
    </div>
  );
}
