import React, { useState, useRef, useEffect } from 'react'
import image from "./Images/image.png";
// import { AnimatedCounter } from "react-animated-counter";


const About = () => {

    const [counts, setCounts] = useState({
        projects: 0,
        clients: 0,
        experience: 0
    });

    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !started.current) {
                    started.current = true;

                    animateValue("projects", 10, 1000);
                    animateValue("clients", 3, 1000);
                    animateValue("experience", 1, 1000);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    const animateValue = (key, end, duration) => {
        let start = 0;
        const incrementTime = duration / end;

        const counter = setInterval(() => {
            start += 1;

            setCounts(prev => ({
                ...prev,
                [key]: start
            }));

            if (start === end) clearInterval(counter);
        }, incrementTime);
    };




    return (
        <div className='about'>
            <div className="container my-5">
                <div className='row'>
                    <div className='col-6 me-2'>
                        <h1>A propos</h1>
                        <p> Passionné par la technologie notamment le développement web, j’aime transformer
                            des idées en
                            solutions numériques innovantes et performantes. J’explore constamment de nouvelles technologies et
                            je construis des projets variés allant des applications web complexes aux plateformes
                            e-commerce qui me permettent d’apprendre, d’expérimenter et de
                            repousser mes limites.

                            Curieux et orienté solution, je cherche toujours à
                            améliorer mes compétences et à créer des expériences numériques utiles,
                            performantes et bien conçues.
                        </p>
                        <div className='d-flex justify-content-between'>

                            <div ref={ref}>
                                <h1>{counts.projects}+</h1>
                                <p>Projets réalisés</p>
                            </div>

                            <div ref={ref}>
                                <h1>{counts.clients}+</h1>
                                <p>Clients satisfaits</p>
                            </div>
                            <div ref={ref}>
                                <h1>{counts.experience}+</h1>
                                <p>Années d'expérience</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <img src={image} alt="outils" className='img-fluid' />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default About