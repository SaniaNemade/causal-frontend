import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Edit2, Download, Save, Maximize2, Search, ZoomIn, CheckCircle } from 'lucide-react';
import './Components.css';

const MainArea = () => {
  const { clinician, patient, setActiveTimeline } = useAppContext();
  const [activeTab, setActiveTab] = useState('Causal Graph');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'Estimator') {
      setActiveTimeline('Estimator & Analysis');
    }
  };

  const downloadPDF = () => {
    // Mocking PDF download as per plan.
    const text = `
    Clinician: ${clinician?.name}
    Patient Name: ${patient?.name}
    ID: ${patient?.pid}
    Notes: (Mock Notes)
    Recommendations: (Mock Recommendations)
    `;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${patient?.name}_Report.txt`;
    a.click();
  };

  return (
    <div className="main-area">
      <div className="main-header">
        <div className="main-title-row">
          <div style={{ flex: 1 }}>
            {/* The question has been removed as per instructions */}
          </div>
        </div>
      </div>
      
      <div className="tabs">
        {['Causal Graph', 'Insights', 'Estimator', 'Notes'].map(tab => (
          <div 
            key={tab} 
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      
      <div className="tab-content">
        {activeTab === 'Causal Graph' && (
          <div onMouseEnter={() => setActiveTimeline('Causal Design')}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.5rem', gap: '0.5rem' }}>
               <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', alignSelf: 'center', marginRight: 'auto' }}>Auto Layout </span>
               <button className="btn-secondary" style={{ padding: '0.4rem', background: 'white' }}><Maximize2 size={14}/></button>
               <button className="btn-secondary" style={{ padding: '0.4rem', background: 'white' }}><Search size={14}/></button>
               <button className="btn-secondary" style={{ padding: '0.4rem', background: 'white' }}>100%</button>
               <button className="btn-secondary" style={{ padding: '0.4rem', background: 'white' }}><ZoomIn size={14}/></button>
               <button className="btn-primary" style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }}><Edit2 size={14}/> Edit Graph</button>
            </div>
            
            <div className="graph-container">
              {/* Mock static graph */}
              <div className="graph-nodes">
                <div className="node exposure" style={{ top: '60%', left: '30%' }}>Irregular Sleep Timing (t-1)</div>
                <div className="node outcome" style={{ top: '60%', right: '20%' }}>Perceived Stress (PSS) (t)</div>
                <div className="node confounder" style={{ top: '40%', left: '10%' }}>Age</div>
                <div className="node confounder" style={{ top: '20%', left: '40%' }}>Baseline Stress (t-2 - t-1)</div>
                <div className="node mediator" style={{ top: '50%', left: '60%' }}>Sleep Quality / Duration (t-1)</div>
                <div className="node missing" style={{ top: '30%', right: '15%' }}>Missing Wearable Data (t-1)</div>
              </div>
            </div>
            
            <div className="legend">
              <div className="legend-item"><div className="legend-color" style={{background: '#fef3c7'}}></div> Exposure</div>
              <div className="legend-item"><div className="legend-color" style={{background: '#fee2e2'}}></div> Outcome</div>
              <div className="legend-item"><div className="legend-color" style={{background: '#dcfce7'}}></div> Confounder</div>
              <div className="legend-item"><div className="legend-color" style={{background: '#e0e7ff'}}></div> Mediator</div>
              <div className="legend-item"><div className="legend-color" style={{background: 'white', border: '1px solid #ccc'}}></div> Collider</div>
              <div className="legend-item"><div className="legend-color" style={{background: '#f3f4f6', border: '1px dashed #ccc'}}></div> Missingness</div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem' }}>Variable Role Table</h3>
                <button className="btn-secondary" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>Export Table</button>
              </div>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Variable</th>
                    <th>Description</th>
                    <th>Suggested Role</th>
                    <th>Timing</th>
                    <th>Confidence</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Irregular Sleep Timing (t-1)</td>
                    <td>Bedtime deviation</td>
                    <td><span className="role-badge" style={{background: '#fef3c7', color: '#92400e'}}>Exposure</span></td>
                    <td>Pre-treatment</td>
                    <td className="confidence-high">High</td>
                    <td><Edit2 size={14} color="var(--text-secondary)" cursor="pointer"/></td>
                  </tr>
                  <tr>
                    <td>PSS Next-day (t)</td>
                    <td>Perceived Stress Scale</td>
                    <td><span className="role-badge" style={{background: '#fee2e2', color: '#991b1b'}}>Outcome</span></td>
                    <td>Outcome</td>
                    <td className="confidence-high">High</td>
                    <td><Edit2 size={14} color="var(--text-secondary)" cursor="pointer"/></td>
                  </tr>
                  <tr>
                    <td>Baseline Stress</td>
                    <td>Average PSS before exposure</td>
                    <td><span className="role-badge" style={{background: '#dcfce7', color: '#166534'}}>Confounder</span></td>
                    <td>Pre-treatment</td>
                    <td className="confidence-high">High</td>
                    <td><Edit2 size={14} color="var(--text-secondary)" cursor="pointer"/></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'Notes' && (
          <div className="notes-form" onFocusCapture={() => setActiveTimeline('Results & Reports')}>
            <div className="notes-header">
              <h3>Clinical Notes Template</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Clinician</span>
                  <span className="info-value">Dr. {clinician?.name}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Patient Name</span>
                  <span className="info-value">{patient?.name}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Patient ID</span>
                  <span className="info-value">{patient?.pid}</span>
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Notes</label>
              <textarea 
                className="input-field" 
                rows="5" 
                placeholder="Enter clinical notes here..."
              ></textarea>
            </div>
            
            <div className="form-group">
              <label className="form-label">Recommendations</label>
              <textarea 
                className="input-field" 
                rows="4" 
                placeholder="Enter recommendations..."
              ></textarea>
            </div>
            
            <div className="form-actions">
              <button className="btn-secondary" onClick={() => alert('Design saved to Saved Reports!')}>
                <Save size={16} /> Save Design
              </button>
              <button className="btn-primary" onClick={downloadPDF}>
                <Download size={16} /> Download Report (PDF)
              </button>
            </div>
          </div>
        )}
        
        {['Insights', 'Estimator'].includes(activeTab) && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)' }}>
            <p>Select another tab to view content. (Mock functionality for {activeTab})</p>
          </div>
        )}
      </div>
      
      <div className="footer-bar">
         <span style={{ fontSize: '0.8rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
           <CheckCircle size={14} /> Ready for Estimator
         </span>
         <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Last saved: 2 min ago</span>
         
         <div style={{ display: 'flex', gap: '1rem' }}>
           <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Save Design</button>
           <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Proceed to Estimator &rarr;</button>
         </div>
      </div>
    </div>
  );
};

export default MainArea;
