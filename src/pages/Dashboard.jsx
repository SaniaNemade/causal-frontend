import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ChatAssistant from '../components/ChatAssistant';
import MainArea from '../components/MainArea';
import RightPanel from '../components/RightPanel';

import DatasetsModal from '../components/DatasetsModal';
import SavedReportsModal from '../components/SavedReportsModal';
import GuidelinesModal from '../components/GuidelinesModal';
import './Dashboard.css';

const Dashboard = () => {
  const { clinician } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!clinician) {
      navigate('/login');
    }
  }, [clinician, navigate]);

  if (!clinician) return null;

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          <ChatAssistant />
          <MainArea />
          <RightPanel />
        </div>
      </div>
      <DatasetsModal />
      <SavedReportsModal />
      <GuidelinesModal />
    </div>
  );
};

export default Dashboard;
