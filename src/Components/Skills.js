import React from 'react'
import './Styles/Fichier.css'
import { IconLayout2, IconServer, IconGitBranch, IconTools } from "@tabler/icons-react";


const skillsData = [
    {
        icon: IconLayout2,
        title: 'Frontend',
        items: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
    },
    {
        icon: IconServer,
        title: 'Backend',
        items: ['PHP', 'Laravel', 'REST API'],
    },
    {
        icon: IconGitBranch,
        title: 'Git',
        items: ['Versionnement', 'Init & configuration', 'Gestion locale', 'Branches & fusion'],
    },
    {
        icon: IconTools,
        title: 'Outils',
        items: ['VS Code', 'Figma', 'Webpack', 'ESLint'],
    },
]

const Skills = () => {
    return (
        <section className="skills-section py-20 px-4 max-w-5xl mx-auto">
            <div className="container">
                <p className="skills-eyebrow">Ce que je maîtrise</p>
                <h2 className="skills-heading">Compétences</h2>
                <div className="skills-grid">
                    {skillsData.map(({ icon: Icon, title, items }) => (
                        <div key={title} className="skill-card">
                            <Icon size={32} className="card-icon" aria-hidden="true" />
                            <p className="card-title">{title}</p>
                            <ul className="skill-list">
                                {items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills