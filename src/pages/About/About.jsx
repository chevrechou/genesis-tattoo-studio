import React from 'react';
import './About.css';
import { FaPlus, FaChevronDown } from 'react-icons/fa';

export default function About() {

    const scrollToArtists = () => {
        const aboutSection = document.getElementById('artists');
        if (aboutSection) {
            const yOffset = -80; // adjust to match navbar height
            const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="about-page" id="about">
                <div className="about-card">
                    <h1 className="about-logo">About Genesis Tattoo Studio</h1>

                    <section className="about-section">
                        <h3>Our Philosophy</h3>
                        <p>
                            At Genesis Tattoo Studio, every piece of ink is a personal story. We believe tattoos
                            are more than just art — they are a declaration of identity, culture, rebellion,
                            and resilience. Our artists specialize in bringing deep meaning and unique creativity to each session.
                        </p>
                    </section>

                    <section className="about-section">
                        <h3>What We Offer</h3>
                        <ul className="about-points">
                            <li>Now taking <strong>walk-ins</strong> daily</li>
                            <li>Appointments available by contacting your artist directly</li>
                            <li>We tag every artist on our posts so you know who to book</li>
                        </ul>


                    </section>

                    <section className="about-section">
                        <h3>Visit Us</h3>
                        <p className="about-address">
                            14823 Inwood Rd<br />
                            Addison, Texas 75001<br />
                            📞 Phone: <a href="tel:+12144770321">(214) 477-0321</a>
                        </p>
                    </section>

                    <section className="about-section">
                        <div className="style-highlight">
                            <h3>Specializing In:</h3>
                            <div className="style-tags">
                                <span>Blackwork</span>
                                <span>Fine Line</span>
                                <span>Realism</span>
                                <span>Traditional</span>
                                <span>Custom Designs</span>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="map-card">
                    <iframe
                        title="Genesis Tattoo Studio Map"
                        className="map-frame"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.9945393059486!2d-96.83048652450236!3d32.94905887129586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x372e0df995c495b7!2sGenesis%20Tattoo%20Studio!5e0!3m2!1sen!2sus!4v1717440634512!5m2!1sen!2sus"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <div className="chevron-center-wrapper" onClick={scrollToArtists}>
                <button className="chevron-button">

                    <FaChevronDown className="chevron-icon" />
                </button>
            </div>
            <div className='delimiter'></div>

        </>
    );
}
