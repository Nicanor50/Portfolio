import React from 'react'
import project1 from "./Images/1.png";
import project2 from "./Images/2.png";
import project3 from "./Images/3.png";
import laravel from "./Images/laravel.png";
import react from "./Images/react.png";
import css from "./Images/css.png";
import bootstrap from "./Images/bootstrap.png";

const Project = () => {
    return (
        <div className="my-4">
            <div className="container">
                <h1 className="title">Projets Récents</h1>
                <div className="d-flex justify-content-between gap-5 mt-4">
                    <div className="card p-2" style={{ width: "auto" }}>
                        <img className="card-img-top" src={project1} alt="Card" />
                        <div className="card-body">
                            <h5 className="card-title">Site de location d'objets</h5>
                            <p className="card-text">Cette application permet de mettre en relation des
                                propriétaires d'objets à des personnes qui ont besoin de ces objets.
                                En d'autres termes, c'est une application qui permet à ses utilisateurs
                                d'avoir des informations sur des détenteurs d'objets dont ils ont besoin
                                dans l'immédiat et qu'ils n'ont pas la possibilité de s'en acquérir.
                            </p>
                            <div>
                                <h6 className="technology">Technologies utilisées :</h6>
                                <ul className="list-unstyled d-flex flex-row justifiy-content-left align-items-left ">
                                    <li><img src={laravel} alt="Laravel" className="img-skills" /></li>
                                    <li><img src={css} alt="CSS" className="img-skills" /></li>
                                </ul>
                            </div>

                            <a href=" " className="">Voir le projet</a>
                        </div>
                    </div>
                    <div className="card p-2" style={{ width: "auto" }}>
                        <img className="card-img-top " src={project2} alt="Card" />
                        <div className="card-body">
                            <h5 className="card-title text-capitalize">Site de vente de Supermaché</h5>
                            <p className="card-text">
                                Une application web pour un supermaché disposant de deux profils. Le profil admin et utilisateur. L'admin
                                est chargé de faire toute sorte d'action dans le but de la gestion des produits sur le site. L'utilisateur
                                a la capacité de mettre en place son panier avec les produits et ensuite commander en payant ou en acceptant les
                                paiements à la livraison.
                            </p>
                            <div>
                                <h6 className="technology">Technologies utilisées :</h6>
                                <ul>

                                </ul>
                            </div>

                            <a href=" " className="">Voir le projet</a>
                        </div>
                    </div>
                    <div className="card p-2" style={{ width: "auto" }}>
                        <img className="card-img-top " src={project3} alt="Card" />
                        <div className="card-body">
                            <h5 className="card-title">Site de e-learning</h5>
                            <p className="card-text">Cette application permet de mettre en relation des
                                propriétaires d'objets à des personnes qui ont besoin de ces objets.
                                En d'autres termes, c'est une application qui permet à ses utilisateurs
                                d'avoir des informations sur des détenteurs d'objets dont ils ont besoin
                                dans l'immédiat et qu'ils n'ont pas la possibilité de s'en acquérir.
                            </p>
                            <div>
                                <h6 className="technology">Technologies utilisées :</h6>
                                <ul>

                                </ul>
                            </div>

                            <a href=" " className="">Voir le projet</a>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Project