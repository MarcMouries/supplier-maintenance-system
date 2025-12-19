import React, { useState, useEffect, useMemo } from 'react';
import { VendorService } from './services/VendorService.js';
import VendorLookup from './components/VendorLookup.jsx';
import VendorRequestForm from './components/VendorRequestForm.jsx';
import RequestTracking from './components/RequestTracking.jsx';
import TaskDashboard from './components/TaskDashboard.jsx';
import './app.css';

export default function App() {
  const [currentView, setCurrentView] = useState('lookup');
  const [currentUser, setCurrentUser] = useState(null);
  const vendorService = useMemo(() => new VendorService(), []);

  // Handle hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'lookup';
      setCurrentView(hash);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial load
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Get current user on load
  useEffect(() => {
    vendorService.getCurrentUser().then(user => {
      if (user) setCurrentUser(user);
    });
  }, [vendorService]);

  const navigate = (view) => {
    window.location.hash = view;
  };

  const renderNavigation = () => (
    <nav className="vendor-nav">
      <div className="nav-brand">
        <h1>Supplier Maintenance</h1>
      </div>
      <div className="nav-links">
        <button 
          className={currentView === 'lookup' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => navigate('lookup')}
        >
          Vendor Lookup
        </button>
        <button 
          className={currentView === 'request' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => navigate('request')}
        >
          New Vendor Request
        </button>
        <button 
          className={currentView === 'tracking' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => navigate('tracking')}
        >
          Request Tracking
        </button>
        <button 
          className={currentView === 'tasks' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => navigate('tasks')}
        >
          My Tasks
        </button>
      </div>
    </nav>
  );

  const renderCurrentView = () => {
    switch(currentView) {
      case 'lookup':
        return <VendorLookup service={vendorService} />;
      case 'request':
        return <VendorRequestForm service={vendorService} currentUser={currentUser} />;
      case 'tracking':
        return <RequestTracking service={vendorService} currentUser={currentUser} />;
      case 'tasks':
        return <TaskDashboard service={vendorService} currentUser={currentUser} />;
      default:
        return <VendorLookup service={vendorService} />;
    }
  };

  return (
    <div className="vendor-app">
      {renderNavigation()}
      <main className="main-content">
        {renderCurrentView()}
      </main>
    </div>
  );
}