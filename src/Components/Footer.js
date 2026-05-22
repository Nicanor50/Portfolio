import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Mail from '@mui/icons-material/Mail';

const Footer = () => {
    return (
        <div className="footer py-1">
            <div className='container'>
                <div className='d-flex justify-content-between mt-3'>
                    <h5>2026 Portfolio Développeur web. Tous droits réservés.</h5>
                    <ul className="list-unstyled d-flex list-inline-item gap-3">
                        <li><GitHubIcon /></li>
                        <li><LinkedInIcon /></li>
                        <li><Mail /></li>
                    </ul>
                </div>

            </div>

        </div>

    )
}

export default Footer