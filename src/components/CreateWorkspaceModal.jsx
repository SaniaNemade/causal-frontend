import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { X } from 'lucide-react';

const CreateWorkspaceModal = () => {
  const { isWorkspaceModalOpen, setIsWorkspaceModalOpen, setPatient } = useAppContext();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    pid: '',
    dob: ''
  });

  if (!isWorkspaceModalOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.pid && formData.dob) {
      setPatient({
        name: formData.name,
        pid: formData.pid,
        dob: formData.dob
      });
      setIsWorkspaceModalOpen(false);
      navigate('/dashboard');
    }
  };

  return (
    <div className="modal-overlay" onClick={() => setIsWorkspaceModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '400px' }}>
        <div className="modal-header">
          <h3 style={{ fontSize: '1.25rem' }}>Register New Patient</h3>
          <X size={20} className="modal-close" onClick={() => setIsWorkspaceModalOpen(false)} />
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label">Patient Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field" 
              placeholder="John Doe"
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Patient PID</label>
            <input 
              type="text" 
              name="pid"
              value={formData.pid}
              onChange={handleChange}
              className="input-field" 
              placeholder="e.g., P-123456"
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Date of Birth</label>
            <input 
              type="date" 
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="input-field" 
              required 
            />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Register Patient</button>
        </form>
      </div>
    </div>
  );
};

export default CreateWorkspaceModal;
