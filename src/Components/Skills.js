import React from 'react'

const Skills = () => {
    return (
        <div>
            <div className="container my-5">
                <h1 className="py-2">Compétences</h1>
                <div className="d-flex justify-content-between gap-1">
                    <div className='border border-1 p-3 section_competence'>
                        <h2>Frontend</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className='border border-1 p-3 section_competence'>
                        <h2>Backend</h2>
                        <ul>
                            <li>PHP</li>
                            <li>Laravel</li>
                            <li>REST API</li>
                        </ul>

                    </div>
                    <div className='border border-1 p-3 section_competence'>
                        <h2>Git</h2>
                        <ul>
                            <li>Versionnement</li>
                            <li>Initialisation et configuration</li>
                            <li>Gestion locale</li>
                            <li>Branchement et Fusion</li>

                        </ul>
                    </div>
                    <div className='border border-1 p-3 section_competence'>
                        <h2>Outils</h2>
                        <ul>
                            <li>Visual Studio Code</li>
                            <li>Figma</li>
                            <li>Webpack</li>
                            <li>ESLint</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills