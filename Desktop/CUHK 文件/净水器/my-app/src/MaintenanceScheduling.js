// MaintenanceScheduling.js

import React from 'react';
import './MaintenanceScheduling.css'; // Create a corresponding CSS file for this component

const MaintenanceScheduling = ({ onNavigate }) => {
    return (
        <div className="maintenance-scheduling-container">
            <h1>Maintenance Scheduling</h1>
            <p>Automated scheduling of maintenance or replacement services based on predictive analytics.</p>
            <div className="maintenance-details">
                {/* Mock Details */}
                <div className="maintenance-info">
                    <h2>Next Scheduled Maintenance</h2>
                    <p><strong>Date:</strong> December 10, 2023</p>
                    <p><strong>Service:</strong> Filter Replacement</p>
                    <p><strong>Status:</strong> Scheduled</p>
                </div>
                <button className="back-button" onClick={() => onNavigate('home')}>
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default MaintenanceScheduling;
