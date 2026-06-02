import React from 'react'
import img from './Images/img.jpg'
import './Styles/Fichier.css'

const Header = () => {
    return (
        <header className="hero-section">
            <div className="container">
                <div className="hero-inner">

                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="hero-badge-dot" />
                            Disponible pour de nouvelles opportunités
                        </div>

                        <h1 className="hero-title">
                            Développeur Web <br />
                            <span className="hero-title-muted">Full Stack</span>
                        </h1>

                        <p className="hero-sub">
                            Je conçois et développe des applications web modernes et performantes,
                            du design à la mise en production. Spécialisé en{' '}
                            <strong>React</strong> et <strong>Laravel</strong>, j'aime transformer
                            des idées en interfaces soignées.
                        </p>

                        <div className="hero-stats">
                            <div className="hero-stat">
                                <span className="hero-stat-num">3+</span>
                                <span className="hero-stat-label">Projets réalisés</span>
                            </div>
                            <div className="hero-stat">
                                <span className="hero-stat-num">2+</span>
                                <span className="hero-stat-label">Années d'expérience</span>
                            </div>
                            <div className="hero-stat">
                                <span className="hero-stat-num">5+</span>
                                <span className="hero-stat-label">Technologies maîtrisées</span>
                            </div>
                        </div>

                        <div className="hero-actions">
                            <a href="#projects" className="btn-primary">Voir mes projets</a>
                            <a href="#contact" className="btn-secondary">Me contacter</a>
                        </div>
                    </div>

                    <div className="hero-img-wrap">
                        <img src={img} alt="Photo de profil" className="hero-img" />
                        <div className="hero-stack">
                            {['React', 'Laravel', 'PHP', 'JavaScript', 'Figma'].map((tech) => (
                                <span key={tech} className="stack-tag">{tech}</span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header