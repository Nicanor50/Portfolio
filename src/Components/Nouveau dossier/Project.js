import React from 'react'
// import project1 from './Images/1.png'
// import project2 from './Images/2.png'
// import project3 from './Images/3.png'

const projectsData = [
    {
        image: 1,
        title: 'Site de location d\'objets',
        description:
            'Application web mettant en relation des propriétaires d\'objets avec des personnes souhaitant les louer temporairement.',
        stack: ['Laravel', 'CSS'],
        badge: 'Web app',
        link: '#',
    },
    {
        image: 2,
        title: 'Site de vente — Supermarché',
        description:
            'Plateforme e-commerce avec profils admin et utilisateur, gestion des produits, panier et paiement à la livraison.',
        stack: ['Laravel', 'Bootstrap'],
        badge: 'E-commerce',
        link: '#',
    },
    {
        image: 3,
        title: 'Site de e-learning',
        description:
            'Plateforme d\'apprentissage en ligne permettant aux utilisateurs d\'accéder à des cours et ressources pédagogiques.',
        stack: ['React', 'CSS'],
        badge: 'EdTech',
        link: '#',
    },
]

const Project = () => {
    return (
        <section className="projects-section">
            <div className="container">
                <p className="projects-eyebrow">Ce que j'ai réalisé</p>
                <h2 className="projects-heading">Projets récents</h2>
                <div className="projects-grid">
                    {projectsData.map(({ image, title, description, stack, badge, link }) => (
                        <div key={title} className="project-card">
                            <img src={image} alt={title} className="project-img" />
                            <div className="project-body">
                                <p className="project-title">{title}</p>
                                <p className="project-desc">{description}</p>
                                <div>
                                    <p className="tech-label">Stack</p>
                                    <div className="tech-tags">
                                        {stack.map((tech) => (
                                            <span key={tech} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="project-footer">
                                    <a href={link} className="project-link">
                                        Voir le projet <span aria-hidden="true">→</span>
                                    </a>
                                    <span className="project-badge">{badge}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project