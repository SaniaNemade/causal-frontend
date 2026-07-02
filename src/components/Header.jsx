import React from 'react';
import { useAppContext } from '../context/AppContext';
import { User } from 'lucide-react';

const STEPS = [
  "Research Questions",
  "Data & Variables",
  "Causal Design",
  "Estimator & Analysis",
  "Results & Reports"
];

const Header = ({ mode = 'dashboard' }) => {
  const { clinician, patient, activeTimeline } = useAppContext();

  return (
    <div className="dashboard-header">
      <div className="header-user-info">
        {mode === 'dashboard' ? (
          <>
            <div className="patient-name">{patient?.name || "Patient Name"}</div>
            <div className="patient-details" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>ID: {patient?.pid}</div>
          </>
        ) : (
          <div className="patient-name" style={{ fontSize: '1.25rem', color: 'var(--brand-primary)' }}>Clinician Portal</div>
        )}
      </div>
      
      <div className="timeline" style={{ visibility: mode === 'home' ? 'hidden' : 'visible' }}>
        {STEPS.map((step, index) => {
          const isActive = step === activeTimeline;
          return (
            <React.Fragment key={step}>
              <div className={`timeline-step ${isActive ? 'active' : ''}`}>
                <div className="timeline-circle">{index + 1}</div>
                <span>{step}</span>
              </div>
              {index < STEPS.length - 1 && <div className="timeline-divider" />}
            </React.Fragment>
          );
        })}
      </div>
      
      <div className="header-clinician-info" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: '150px', justifyContent: 'flex-end' }}>
        <div style={{ textAlign: 'right' }}>
          <div className="clinician-name" style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>Dr. {clinician?.name || "Clinician"}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Clinician</div>
        </div>
        <div style={{ background: 'var(--bg-hover)', padding: '0.5rem', borderRadius: '50%', display: 'flex' }}>
          <User size={20} color="var(--brand-primary)" />
        </div>
      </div>
    </div>
  );
};

export default Header;
