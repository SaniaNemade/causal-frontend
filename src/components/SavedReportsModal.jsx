import React from 'react';
import { useAppContext } from '../context/AppContext';
import { X, FileText, Download } from 'lucide-react';

const mockReports = [
  { id: 1, name: 'Causal_Analysis_Report_v1.pdf', date: '2026-05-10', type: 'PDF' },
  { id: 2, name: 'Stress_and_Sleep_Findings.pdf', date: '2026-06-01', type: 'PDF' },
  { id: 3, name: 'Preliminary_Results.pdf', date: '2026-06-15', type: 'PDF' }
];

const SavedReportsModal = () => {
  const { isReportsModalOpen, setIsReportsModalOpen } = useAppContext();

  if (!isReportsModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => setIsReportsModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '700px' }}>
        <div className="modal-header">
          <h3 style={{ fontSize: '1.25rem' }}>Saved Reports</h3>
          <X size={20} className="modal-close" onClick={() => setIsReportsModalOpen(false)} />
        </div>
        
        <div>
          <table className="data-table" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Report Name</th>
                <th>Date Generated</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mockReports.map(report => (
                <tr key={report.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand-primary)' }}>
                      <FileText size={14} /> {report.name}
                    </div>
                  </td>
                  <td>{report.date}</td>
                  <td>{report.type}</td>
                  <td>
                    <button className="btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Download size={12} /> Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SavedReportsModal;
