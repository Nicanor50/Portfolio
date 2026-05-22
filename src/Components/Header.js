import React from 'react'
import './Styles/Fichier.css';
import Button from '@mui/material/Button';
import img from "./Images/img.jpg";

const Header = () => {
    return (
        <div className="header ">
            <div className="container">
                <div className="row py-4">
                    <div className='col-8 me-1 d-flex flex-column justify-content-center'>
                        <h2>DEVELOPPEUR WEB</h2>
                        <p>Créateur d'expériences numériques modernes performantes. Spécialisé en React, Laravel et architecture cloud</p>
                        <div className="row">
                            <Button className='col-3 m-3 rounded-2 text-white' style={{ backgroundColor: "#3b82f6" }}>Voir mes projets</Button>
                            <Button className='col-3 m-3 rounded-2 text-white' style={{ backgroundColor: "#F58D0F" }}>Me contacter</Button>
                        </div>
                    </div>

                    <div className="col-3">
                        <img src={img} alt="" className="w-100 h-auto object-cover shadow-xl"
                            style={{
                                borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%",
                                border: "#fa71fe 8px solid"
                            }}
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header