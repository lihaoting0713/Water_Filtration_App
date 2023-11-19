import React from 'react';
import './HomePage.css'; // Importing the CSS file for styling
import backgroundImage from './Background image.jpeg'; // Update with the correct path


const HomePage = ({ onNavigate }) => {
    return (
        <div>
            <nav className="navbar">
                {/* Navigation Links */}
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className="hero-section">
                {/* Hero Image/Video and Text */}
                <div className="hero-text">
                    <h1>Welcome to PureLoop</h1>
                    <p>Discover the future of water purification.</p>
                    {/* Buttons */}
                    <div className="hero-buttons">
                    <button onClick={() => onNavigate('waterQuality')}>Water Quality Monitoring</button>
                    <button onClick={() => onNavigate('filterLife')}>Filter Life Tracking</button>
                    <button onClick={() => onNavigate('maintenance')}>Maintenance Scheduling</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
