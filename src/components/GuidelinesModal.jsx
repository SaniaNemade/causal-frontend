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
          <h4 style={{ marginBottom: '1rem', color: 'var(--brand-primary)' }}>Welcome to Causal Design</h4>
          <p>Here are some basic guidelines to help you navigate and use the platform effectively:</p>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><strong>Register New Patient:</strong> Use the "Register New Patient" button on the Home page to add a new patient profile and start a workflow.</li>
            <li><strong>Dataset Directory:</strong> View all datasets uploaded to the system via the "Dataset Directory" section in the dashboard.</li>
            <li><strong>Causal Assistant:</strong> Use the chat interface on the left to ask questions, explore causal graphs, and identify potential confounders.</li>
            <li><strong>Evidence (RAG):</strong> Review top scientific evidence matching your causal query in the right panel.</li>
            <li><strong>Saved Reports:</strong> Access all your previously generated analysis reports anytime from the sidebar.</li>
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
