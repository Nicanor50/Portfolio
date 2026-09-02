import React, { useState } from 'react'
import './Styles/Fichier.css'

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: intégrer un service d'envoi (EmailJS, Formspree, etc.)
        console.log(form)
    }

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="contact-inner">

                    <div className="contact-info">
                        <div>
                            <p className="contact-eyebrow">Travaillons ensemble</p>
                            <h2 className="contact-heading">Entrons en contact</h2>
                        </div>
                        <p className="contact-sub">
                            Vous avez un projet en tête, une opportunité à discuter ou simplement
                            envie d'échanger ? N'hésitez pas à me contacter, je réponds
                            généralement sous 24h.
                        </p>
                        <div className="contact-channels">
                            <a href="mailto:akpovobarachie@email.com" className="contact-channel">
                                <span className="channel-icon">✉</span>
                                votre@email.com
                            </a>
                            <a href="https://www.linkedin.com/in/nicanor-akpovo-36a86229a/" className="contact-channel" target="_blank" rel="noreferrer">
                                <span className="channel-icon">in</span>
                                linkedin.com/in/votre-profil
                            </a>
                            <a href="https://github.com/votre-profil" className="contact-channel" target="_blank" rel="noreferrer">
                                <span className="channel-icon">gh</span>
                                github.com/votre-profil
                            </a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-field">
                                <label className="form-label" htmlFor="name">Nom</label>
                                <input id="name" name="name" type="text" className="form-input"
                                    placeholder="Jean Dupont" value={form.name} onChange={handleChange} />
                            </div>
                            <div className="form-field">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input id="email" name="email" type="email" className="form-input"
                                    placeholder="jean@email.com" value={form.email} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-field">
                            <label className="form-label" htmlFor="subject">Sujet</label>
                            <input id="subject" name="subject" type="text" className="form-input"
                                placeholder="Proposition de projet, collaboration…"
                                value={form.subject} onChange={handleChange} />
                        </div>
                        <div className="form-field">
                            <label className="form-label" htmlFor="message">Message</label>
                            <textarea id="message" name="message" className="form-input"
                                placeholder="Décrivez votre projet ou votre demande…"
                                value={form.message} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn-submit">
                            Envoyer le message
                        </button>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Contact