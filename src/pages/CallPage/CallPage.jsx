import React from 'react';
import './CallPage.css';
import { FaInstagram, FaPhoneAlt, FaUserFriends } from 'react-icons/fa';

export default function CallPage() {
    const scrollToArtists = () => {
        const artistsSection = document.getElementById('artists');
        if (artistsSection) {
            const yOffset = -80;
            const y = artistsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className="final-call-container" id="call">
            <div className="final-call-content">
                <h1 className="final-call-heading">Ready to Get Inked?</h1>

                <p className="final-call-subtext">
                    Our artists are here to bring your vision to life. Whether it's your first tattoo
                    or you're adding to a growing collection, we’re excited to work with you.
                </p>

                <div className="final-call-grid">
                    <div className="final-call-card" onClick={scrollToArtists}>
                        <FaUserFriends className="card-icon" />
                        <h2>Browse Artists</h2>
                        <p>Explore artist portfolios to find your perfect match.</p>
                        <p className="secondary">DM the artist directly for scheduling and quotes.</p>
                    </div>

                    <a href="tel:+12144770321" className="final-call-card">
                        <FaPhoneAlt className="card-icon" />
                        <h2>Call the Shop</h2>
                        <p>Have questions? Speak with our team right away.</p>
                    </a>

                    <a
                        href="https://www.instagram.com/genesis.tattoo.studio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="final-call-card"
                    >
                        <FaInstagram className="card-icon" />
                        <h2>Follow us on Instagram</h2>
                        <p>Message us to share your idea and book your session.</p>
                    </a>
                </div>
            </div>
        </section>
    );
}
