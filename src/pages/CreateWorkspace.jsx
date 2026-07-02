import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { UserPlus } from 'lucide-react';
import './Auth.css';

const CreateWorkspace = () => {
  const navigate = useNavigate();
  const { clinician, setPatient } = useAppContext();
  
  const [formData, setFormData] = useState({
    name: '',
    pid: '',
    dob: ''
  });

  // Redirect to login if clinician is not logged in
  useEffect(() => {
    if (!clinician) {
      navigate('/login');
    }
  }, [clinician, navigate]);

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
      navigate('/dashboard');
    }
  };

  if (!clinician) return null;

  return (
    <div className="auth-container">
      <div className="auth-card glass-panel">
        <div className="auth-header">
          <div className="icon-wrapper">
            <UserPlus size={32} color="var(--brand-primary)" />
          </div>
          <h1>Create Workspace</h1>
          <p>Welcome, {clinician.name}. Please enter patient details.</p>
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
          <button type="submit" className="btn-primary auth-submit">Create Workspace</button>
        </form>
      </div>
    </div>
  );
};

export default CreateWorkspace;
