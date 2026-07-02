import React from 'react';
import { useAppContext } from '../context/AppContext';
import { X } from 'lucide-react';

const GuidelinesModal = () => {
  const { isGuidelinesModalOpen, setIsGuidelinesModalOpen } = useAppContext();

  if (!isGuidelinesModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => setIsGuidelinesModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <div className="modal-header">
          <h3 style={{ fontSize: '1.25rem' }}>Basic Guidelines</h3>
          <X size={20} className="modal-close" onClick={() => setIsGuidelinesModalOpen(false)} />
        </div>
        
        <div style={{ marginTop: '1rem', lineHeight: '1.6' }}>
          <h4 style={{ marginBottom: '1rem', color: 'var(--brand-primary)' }}>Causal Design — Clinician User Flow</h4>
          <p>Here are the detailed steps to navigate and use the platform effectively:</p>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><strong>STEP 1: Register</strong><br/>From the Home Dashboard, register a new patient by entering their name, PID, and DOB.</li>
            <li><strong>STEP 2: Select</strong><br/>Navigate to the Patient Directory, select a patient, and proceed to their Dashboard.</li>
            <li><strong>STEP 3: Analyze</strong><br/>Ask questions or upload datasets (CSV/Excel) and images. A Causal DAG will be generated (which you can adjust). The RAG Evidence panel will display related papers alongside.</li>
            <li><strong>STEP 4: Review</strong><br/>Uploaded files are securely stored per patient in the Dataset Directory. Review data details below the DAG in the Insights tab.</li>
            <li><strong>STEP 5: Document</strong><br/>Write clinical notes, save them as reports, and download them as PDFs via the Saved Reports section.</li>
          </ul>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
          <button className="btn-primary" onClick={() => setIsGuidelinesModalOpen(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default GuidelinesModal;
