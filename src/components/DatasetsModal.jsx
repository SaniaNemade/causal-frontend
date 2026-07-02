import React from 'react';
import { useAppContext } from '../context/AppContext';
import { X, FileText } from 'lucide-react';

const DatasetsModal = () => {
  const { isDatasetsModalOpen, setIsDatasetsModalOpen, datasets } = useAppContext();

  if (!isDatasetsModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => setIsDatasetsModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '650px' }}>
        <div className="modal-header">
          <h3 style={{ fontSize: '1.25rem' }}>Dataset Directory</h3>
          <X size={20} className="modal-close" onClick={() => setIsDatasetsModalOpen(false)} />
        </div>
        
        <div>
          <table className="data-table" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date Uploaded</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              {datasets.map(dataset => (
                <tr key={dataset.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand-primary)' }}>
                      <FileText size={14} /> {dataset.name}
                    </div>
                  </td>
                  <td>{dataset.date}</td>
                  <td>{dataset.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
          <button className="btn-primary" onClick={() => setIsDatasetsModalOpen(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default DatasetsModal;
