import React, { useState, useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Styles/Fichier.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('Projets');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Projets', 'Compétences', 'À propos', 'Contact'];

    return (
        <div>
            <nav
                style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0,
                    zIndex: 1000,
                    background: scrolled
                        ? 'rgba(10, 10, 15, 0.97)'
                        : 'rgba(10, 10, 15, 0.85)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderBottom: '1px solid rgba(99, 206, 255, 0.12)',
                    transition: 'background 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none',
                    fontFamily: "'DM Sans', sans-serif",
                }}
            >
                {/* Desktop Bar */}
                <div
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 2rem',
                        height: '64px',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {/* Logo */}
                    <div style={{ fontFamily: "'Fira Code', monospace", fontSize: '1.1rem', fontWeight: 600, color: '#63ceff', cursor: 'pointer' }}>
                        <span style={{ color: 'rgba(242, 242, 255, 0.35)' }}>&lt;</span>
                        NicaDev
                        <span style={{ color: 'rgba(224,224,255,0.35)' }}> /&gt;</span>
                    </div>

                    {/* Desktop Links */}
                    <ul
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.25rem',
                            listStyle: 'none', margin: 0, padding: 0,
                        }}
                        className="d-none d-md-flex"
                    >
                        {navLinks.map((link) => (
                            <li key={link}>
                                <button
                                    onClick={() => setActiveLink(link)}
                                    style={{
                                        background: 'none', border: 'none', cursor: 'pointer',
                                        padding: '0.4rem 0.9rem',
                                        fontSize: '0.875rem', fontWeight: 400,
                                        color: activeLink === link ? '#e0e0ff' : 'rgba(246, 246, 255, 0.55)',
                                        borderRadius: '6px',
                                        position: 'relative',
                                        transition: 'color 0.2s ease, background 0.2s ease',
                                    }}
                                    onMouseEnter={e => { if (activeLink !== link) { e.target.style.color = '#63ceff'; e.target.style.background = 'rgba(99,206,255,0.08)'; } }}
                                    onMouseLeave={e => { if (activeLink !== link) { e.target.style.color = 'rgba(224,224,255,0.55)'; e.target.style.background = 'none'; } }}
                                >
                                    {link}
                                    {activeLink === link && (
                                        <span style={{
                                            position: 'absolute', bottom: '0px', left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '20px', height: '2px',
                                            background: '#63ceff', borderRadius: '2px',
                                            display: 'block',
                                        }} />
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Right Section */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        {/* Social Icons */}
                        <div className="d-none d-md-flex" style={{ gap: '0.5rem', display: 'flex' }}>
                            <a

                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                style={iconStyle}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,206,255,0.6)'; e.currentTarget.style.color = '#63ceff'; e.currentTarget.style.background = 'rgba(99,206,255,0.08)'; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(99,206,255,0.2)'; e.currentTarget.style.color = 'rgba(224,224,255,0.5)'; e.currentTarget.style.background = 'transparent'; }}
                            >
                                <GitHubIcon sx={{ fontSize: 18 }} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                style={iconStyle}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,206,255,0.6)'; e.currentTarget.style.color = '#63ceff'; e.currentTarget.style.background = 'rgba(99,206,255,0.08)'; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(99,206,255,0.2)'; e.currentTarget.style.color = 'rgba(224,224,255,0.5)'; e.currentTarget.style.background = 'transparent'; }}
                            >
                                <LinkedInIcon sx={{ fontSize: 18 }} />
                            </a>
                        </div>

                        {/* CTA Button */}
                        <button
                            className="d-none d-md-flex"
                            style={ctaStyle}
                            onMouseEnter={e => { e.target.style.background = '#a0daff'; e.target.style.transform = 'translateY(-1px)'; }}
                            onMouseLeave={e => { e.target.style.background = '#63ceff'; e.target.style.transform = 'none'; }}
                        >
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0a0a0f', display: 'inline-block', marginRight: 6, animation: 'blink 2s infinite' }} />
                            Me contacter
                        </button>

                        {/* Hamburger (mobile) */}
                        <button
                            className="d-md-none"
                            onClick={() => setMenuOpen(!menuOpen)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(224,224,255,0.7)', padding: '4px', display: 'flex' }}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div >

                {/* Mobile Menu */}
                {
                    menuOpen && (
                        <div
                            className="d-md-none"
                            style={{
                                background: 'rgba(10,10,15,0.98)',
                                borderTop: '1px solid rgba(99,206,255,0.1)',
                                padding: '0.75rem 1.25rem 1.25rem',
                            }}
                        >
                            <p style={{ fontSize: 11, color: 'rgba(224,224,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0.5rem 0 0.25rem 0.75rem' }}>Navigation</p>
                            {navLinks.map((link) => (
                                <button
                                    key={link}
                                    onClick={() => { setActiveLink(link); setMenuOpen(false); }}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                        width: '100%', border: 'none', cursor: 'pointer',
                                        padding: '0.65rem 0.75rem',
                                        color: activeLink === link ? '#63ceff' : 'rgba(224,224,255,0.65)',
                                        fontSize: '0.9rem',
                                        borderRadius: '8px',
                                        background: activeLink === link ? 'rgba(99,206,255,0.08)' : 'transparent',
                                        transition: 'all 0.15s ease',
                                        textAlign: 'left',
                                    }}
                                >
                                    {link}
                                    <span style={{ fontSize: 12, opacity: 0.4 }}>›</span>
                                </button>
                            ))}

                            <hr style={{ border: 'none', borderTop: '1px solid rgba(99,206,255,0.1)', margin: '0.75rem 0' }} />

                            <div style={{ display: 'flex', gap: '0.5rem', padding: '0 0.75rem' }}>
                                <a href="https://github.com" target="_blank" rel="noreferrer" style={iconStyle}>
                                    <GitHubIcon sx={{ fontSize: 18 }} />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={iconStyle}>
                                    <LinkedInIcon sx={{ fontSize: 18 }} />
                                </a>
                                <button style={{ ...ctaStyle, marginLeft: 'auto' }}>
                                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0a0a0f', display: 'inline-block', marginRight: 6 }} />
                                    Me contacter
                                </button>
                            </div>
                        </div>
                    )
                }
            </nav >

            {/* Spacer pour éviter que le contenu se cache sous la navbar fixe */}
            < div style={{ height: '64px' }} >

                < style > {`
                    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@600&family=DM+Sans:wght@300;400;500&display=swap');
                    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
                `}</style >
            </div>
        </div >
    );
};

const iconStyle = {
    width: 34, height: 34,
    borderRadius: 8,
    border: '1px solid rgba(99,206,255,0.2)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'rgba(224,224,255,0.5)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    background: 'transparent',
};

const ctaStyle = {
    padding: '0.45rem 1.1rem',
    background: '#63ceff',
    color: '#0a0a0f',
    fontSize: '0.875rem', fontWeight: 500,
    borderRadius: 8, cursor: 'pointer',
    transition: 'all 0.2s ease',
    border: 'none',
    display: 'flex', alignItems: 'center',
    whiteSpace: 'nowrap',
};

export default Navbar;