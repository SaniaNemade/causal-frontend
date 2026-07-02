import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import PatientsList from '../components/PatientsList';
import CreateWorkspaceModal from '../components/CreateWorkspaceModal';
import SavedReportsModal from '../components/SavedReportsModal';
import ClinicianOverview from '../components/ClinicianOverview';
import GuidelinesModal from '../components/GuidelinesModal';

const Home = () => {
  const [activeHomeTab, setActiveHomeTab] = useState('Home');

  return (
    <div className="dashboard-container">
      <Sidebar mode="home" setActiveHomeTab={setActiveHomeTab} />
      <div className="dashboard-main">
        {activeHomeTab !== 'Home' && <Header mode="home" />}
        <div className="dashboard-content" style={{ overflowY: 'auto', padding: activeHomeTab === 'Home' ? '0' : '1rem' }}>
          {activeHomeTab === 'Home' ? <ClinicianOverview /> : <PatientsList />}
        </div>
      </div>
      <CreateWorkspaceModal />
      <SavedReportsModal />
      <GuidelinesModal />
    </div>
  );
};

export default Home;
