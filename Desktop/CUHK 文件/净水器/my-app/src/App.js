import React, { useState } from 'react';
import HomePage from './HomePage';
import WaterQualityMonitoring from './WaterQualityMonitoring';
import FilterLifeTracking from './FilterLifeTracking';
import MaintenanceScheduling from './MaintenanceScheduling';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'waterQuality':
        return <WaterQualityMonitoring />;
      case 'home':
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div>
      {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
      {currentPage === 'waterQuality' && <WaterQualityMonitoring onNavigate={setCurrentPage} />}
      {currentPage === 'filterLife' && <FilterLifeTracking onNavigate={setCurrentPage} />}
      {currentPage === 'maintenance' && <MaintenanceScheduling onNavigate={setCurrentPage} />}
    </div>
  );
}

export default App;
