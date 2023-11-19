import React from 'react';
import './WaterQualityMonitoring.css'; // Importing the CSS file for styling

const WaterQualityMonitoring = ({onNavigate}) => {
    return (
        <div className="water-quality-container">
            <button className="back-button" onClick={() => onNavigate('home')}>Back to Home</button>
            <h1>Water Quality Monitoring</h1>
            <p>Sensors detect contaminants, pH levels, turbidity, and other water quality indicators. Data is sent to a cloud server for analysis.</p>
            <div className="sensor-data-container">
                {/* Mock Data Display */}
                <div className="sensor-data">
                    <h2>Contaminants</h2>
                    <p><strong>Level:</strong> Low</p>
                </div>
                <div className="sensor-data">
                    <h2>pH Level</h2>
                    <p><strong>Value:</strong> 7.4</p>
                </div>
                <div className="sensor-data">
                    <h2>Turbidity</h2>
                    <p><strong>Reading:</strong> 0.5 NTU</p>
                </div>
                {/* Add more sensor data as needed */}
            </div>
        </div>
    );
};

export default WaterQualityMonitoring;
