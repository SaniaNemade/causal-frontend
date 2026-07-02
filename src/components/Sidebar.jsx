import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Activity, Home as HomeIcon, Upload, Database, FileText, Library, FileCheck, Settings, Users, Plus, Calendar, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ mode = 'dashboard', setActiveHomeTab }) => {
  const { setActiveTimeline, setIsDatasetsModalOpen, setIsWorkspaceModalOpen, setIsReportsModalOpen, setIsGuidelinesModalOpen } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-logo">
        <Activity size={24} color="var(--brand-primary)" />
        <span>Causal Design</span>
        <span className="beta-tag">BETA</span>
      </div>



      <div className="sidebar-section">
        <div className="sidebar-section-title">WORKSPACE</div>
        <ul className="sidebar-nav">
          <li className="sidebar-item" onClick={() => {
            navigate('/home');
            if (mode === 'home') setActiveHomeTab('Home');
          }}>
            <HomeIcon size={18} /> Home
          </li>
          {mode === 'home' && (
            <>
              <li className="sidebar-item" onClick={() => setActiveHomeTab('Patients')}>
                <Users size={18} /> Patients
              </li>
              <li className="sidebar-item">
                <Calendar size={18} /> Schedule
              </li>
              <li className="sidebar-item">
                <Clock size={18} /> Appointments
              </li>
            </>
          )}
          {mode === 'dashboard' && (
            <>
              <li className="sidebar-item" onClick={() => setIsDatasetsModalOpen(true)}>
                <Database size={18} /> Dataset Directory
              </li>
            </>
          )}
          <li className="sidebar-item" onClick={() => setIsReportsModalOpen(true)}>
            <FileText size={18} /> Saved reports
          </li>
        </ul>
      </div>

      {mode === 'home' && (
        <div className="sidebar-section">
          <div className="sidebar-item" style={{ border: '1px dashed rgba(255,255,255,0.3)', justifyContent: 'center' }} onClick={() => setIsWorkspaceModalOpen(true)}>
             <Plus size={16} /> Register New Patient
          </div>
        </div>
      )}

      <div className="sidebar-section">
        <div className="sidebar-section-title">RESOURCES</div>
        <ul className="sidebar-nav">
          <li className="sidebar-item" onClick={() => setIsGuidelinesModalOpen(true)}>
            <FileCheck size={18} /> Guidelines
          </li>
        </ul>
      </div>
      
      <div style={{ flex: 1 }}></div>
      <div className="sidebar-section">
        <div className="sidebar-item">
          <Settings size={18} /> Settings
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
