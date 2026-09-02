import React, { useState, useRef, useEffect } from 'react'
import image from './Images/image.png'
import './Styles/Fichier.css'

const stats = [
    { key: 'projects', end: 10, label: 'Projets réalisés' },
    { key: 'clients', end: 3, label: 'Clients satisfaits' },
    { key: 'exp', end: 1, label: "Années d'expérience" },
]

const traits = [
    'Résolution de problèmes',
    'Design soucieux des détails',
    'Apprentissage continu',
    'Orienté utilisateur',
]

const About = () => {
    const [counts, setCounts] = useState({ projects: 0, clients: 0, exp: 0 })
    const sectionRef = useRef(null)
    const started = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true
                    stats.forEach(({ key, end }) => animateValue(key, end, 1000))
                }
            },
            { threshold: 0.4 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const animateValue = (key, end, duration) => {
        let current = 0
        const interval = setInterval(() => {
            current++
            setCounts((prev) => ({ ...prev, [key]: current }))
            if (current >= end) clearInterval(interval)
        }, duration / end)
    }

    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-inner">

                    <div className="about-content">
                        <div>
                            <p className="about-eyebrow">Qui suis-je ?</p>
                            <h2 className="about-heading">À propos de moi</h2>
                        </div>

                        <p className="about-text">
                            Passionné par le développement web, j'aime transformer des idées en{' '}
                            <strong>solutions numériques performantes</strong>. J'explore constamment
                            de nouvelles technologies et construis des projets variés — des applications
                            web complexes aux plateformes e-commerce — pour apprendre, expérimenter
                            et repousser mes limites.
                        </p>

                        <p className="about-text">
                            Curieux et orienté solution, je cherche toujours à améliorer mes compétences
                            et à créer des expériences numériques{' '}
                            <strong>utiles, performantes et bien conçues</strong>.
                        </p>

                        <div className="about-tags">
                            {traits.map((t) => (
                                <span key={t} className="about-tag">{t}</span>
                            ))}
                        </div>

                        <div className="about-stats" ref={sectionRef}>
                            {stats.map(({ key, label }) => (
                                <div key={key} className="stat-card">
                                    <div className="stat-num">{counts[key]}+</div>
                                    <div className="stat-label">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-img-wrap">
                        <img src={image} alt="Outils et technologies" className="about-img" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About