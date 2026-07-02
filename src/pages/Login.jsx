import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const { setClinician } = useAppContext();
  
  const [formData, setFormData] = useState({
    name: '',
    pid: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.pid && formData.password) {
      setClinician({ name: formData.name, pid: formData.pid });
      navigate('/home'); // Redirect to new Clinician Home
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-left-pane">
        <div className="login-logo">
          <div className="login-logo-icon"></div>
          Causal Studio
        </div>
        
        <div className="login-card-wrapper">
          <h2>Clinician Portal</h2>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label className="form-label">Clinician Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-field" 
                placeholder="Dr. Smith"
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Clinician PID</label>
              <input 
                type="text" 
                name="pid"
                value={formData.pid}
                onChange={handleChange}
                className="input-field" 
                placeholder="Enter your Provider ID"
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-field" 
                placeholder="••••••••"
                required 
              />
            </div>
            <button type="submit" className="btn-primary auth-submit" style={{ width: '100%' }}>Login</button>
          </form>
        </div>

        <div className="login-tagline">
          Log in to make a difference today
          <span>Your patients are waiting</span>
        </div>
      </div>
      <div className="login-right-pane">
      </div>
    </div>
  );
};

export default Login;
