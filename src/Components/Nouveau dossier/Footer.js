import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Mail from '@mui/icons-material/Mail';
// import './footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="site-footer__glow" aria-hidden="true" >
                <div className="container">
                    <div className="site-footer__top">
                        <div className="site-footer__status">
                            <div className="site-footer__dot" aria-hidden="true" >
                                2026 Portfolio Développeur web. Tous droits réservés
                            </div>

                        </div>

                        <ul className="site-footer__socials list-unstyled">
                            <li>
                                <a
                                    href="https://github.com/TON-PSEUDO"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="site-footer__icon"
                                >
                                    <GitHubIcon fontSize="small" />
                                </a>
                            </li>
                            <li><a

                                href="https://linkedin.com/in/TON-PROFIL"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="site-footer__icon"
                            >
                                <LinkedInIcon fontSize="small" />
                            </a>
                            </li>
                            <li><a

                                href="mailto:ton-email@exemple.com"
                                aria-label="Email"
                                className="site-footer__icon"
                            >
                                <Mail fontSize="small" />
                            </a>
                            </li>
                        </ul>
                    </div >

                    <div className="site-footer__divider" />

                    <div className="site-footer__bottom">
                        <p className="site-footer__prompt">
                            <span className="site-footer__prompt-symbol">$</span>
                            echo "© {year} — Développeur Web Full-Stack"
                        </p>
                        <p className="site-footer__stack">
                            Conçu &amp; codé avec React <span aria-hidden="true">·</span> Laravel{" "}
                            <span aria-hidden="true">·</span> Cotonou, Bénin
                        </p>
                    </div>
                </div >
            </div>
        </footer >
    );
};

export default Footer;