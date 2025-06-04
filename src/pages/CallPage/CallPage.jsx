import React from 'react';
import './CallPage.css';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaArrowRight, FaChevronDown } from 'react-icons/fa';

export default function CallPage() {

    return (
        <div className="final-call-container" id='call'>
            <div className="final-call-content">
                <h1>Ready to Get Inked?</h1>
                <p>
                    Our artists are here to bring your vision to life. Whether it's your first tattoo
                    or you're adding to a growing collection, we’re excited to work with you.
                </p>
                <Link to="/booking" className="final-call-button">
                    <FaCalendarAlt className="icon" /> Book a Consultation <FaArrowRight className="icon-arrow" />
                </Link>

                <div className="final-call-secondary">
                    <p>Still unsure? Check our FAQ or browse our artist portfolios again to get inspired.</p>
                    <div className="final-call-links">
                        <Link to="/faq">Visit FAQ</Link>
                        <Link to="/artists">View Artists</Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 
