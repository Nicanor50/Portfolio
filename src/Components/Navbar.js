import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from './Images/logo.avif';


const Navbar = () => {
    return (
        <div className='shadow-md ' style={{ borderBottom: "gray 1px solid" }}>
            <div className="container">
                <div className="d-flex justify-content-between py-3" >
                    <div>
                        <img alt="<Dev />" src=" " className="img-fluid" />
                    </div>
                    <ul className="list-unstyled d-flex list-inline-item gap-4">
                        <li>Projets</li>
                        <li>Compétences</li>
                        <li>A propos</li>
                        <li>Contact</li>
                    </ul>
                    <ul className="list-unstyled d-flex list-inline-item gap-3">
                        <li><GitHubIcon /></li>
                        <li><LinkedInIcon /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar