// FilterLifeTracking.js

import React from 'react';
import './FilterLifeTracking.css'; // Make sure to create a corresponding CSS file

const FilterLifeTracking = ({ onNavigate }) => {
    return (
        <div className="filter-life-container">
            <h1>Filter Life Tracking</h1>
            <p>Sensors monitor filter usage and predict the lifespan based on water quality and volume filtered.</p>
            <div className="filter-life-details">
                {/* Mock Data Display */}
                <div className="filter-status">
                    <h2>Current Filter Status</h2>
                    <p><strong>Lifespan Prediction:</strong> 6 months</p>
                    <p><strong>Water Quality:</strong> Good</p>
                    <p><strong>Volume Filtered:</strong> 1500 liters</p>
                </div>
                <button className="back-button" onClick={() => onNavigate('home')}>
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default FilterLifeTracking;
