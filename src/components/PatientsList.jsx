import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { ArrowRight } from 'lucide-react';

const mockPatients = [
  { id: 'P-1001', name: 'John Doe', age: 65, dob: '1961-04-12', substance: 'Alcohol', enrolled: 2, lastVisit: '2026-05-10' },
  { id: 'P-1002', name: 'Jane Smith', age: 72, dob: '1954-08-23', substance: 'None', enrolled: 1, lastVisit: '2026-06-01' },
  { id: 'P-1003', name: 'Robert Johnson', age: 68, dob: '1958-11-05', substance: 'Nicotine', enrolled: 3, lastVisit: '2026-06-15' },
];

const PatientsList = () => {
  const { setPatient } = useAppContext();
  const navigate = useNavigate();
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  const handlePatientSelect = (id) => {
    setSelectedPatientId(id);
  };

  const goToDashboard = () => {
    const patientData = mockPatients.find(p => p.id === selectedPatientId);
    if (patientData) {
      setPatient({
        name: patientData.name,
        pid: patientData.id,
        dob: patientData.dob
      });
      navigate('/dashboard');
    }
  };

  return (
    <div className="main-area" style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Patient Directory</h2>
        <button 
          className="btn-primary" 
          onClick={goToDashboard}
          disabled={!selectedPatientId}
          style={{ opacity: selectedPatientId ? 1 : 0.5, transition: 'opacity 0.3s' }}
        >
          Go to Dashboard <ArrowRight size={16} />
        </button>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Substance</th>
            <th>Times Enrolled</th>
            <th>Last Visit Date</th>
          </tr>
        </thead>
        <tbody>
          {mockPatients.map(p => (
            <tr 
              key={p.id} 
              onClick={() => handlePatientSelect(p.id)}
              style={{ 
                cursor: 'pointer', 
                backgroundColor: selectedPatientId === p.id ? 'var(--bg-hover)' : 'transparent',
                borderLeft: selectedPatientId === p.id ? '3px solid var(--brand-primary)' : '3px solid transparent'
              }}
            >
              <td style={{ fontWeight: 500, color: 'var(--brand-primary)' }}>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.dob}</td>
              <td>{p.substance}</td>
              <td>{p.enrolled}</td>
              <td>{p.lastVisit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsList;
