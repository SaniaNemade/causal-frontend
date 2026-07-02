import React from 'react';
import { Bell, Mail, HelpCircle, LogOut, MoreHorizontal, Clock, Calendar, CheckSquare, FileText, Activity } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import '../pages/Home.css';

const avatarUrl = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop";
const patientAvatar1 = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop";
const patientAvatar2 = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop";

const ClinicianOverview = () => {
  const { clinician } = useAppContext();

  return (
    <div className="home-dashboard-wrapper">
      {/* Topbar */}
      <div className="home-topbar">
        <div className="home-topbar-left">
          <img src={avatarUrl} alt="Dr. Avatar" className="home-avatar" />
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Welcome,</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Dr. {clinician?.name || "Elena Rossi"}</div>
          </div>
        </div>
        <div className="home-topbar-right">
          <div className="home-topbar-icon">
            <Bell size={20} />
            <span>Notifications</span>
          </div>
          <div className="home-topbar-icon">
            <Mail size={20} />
            <span>Messages</span>
            <div className="badge">1</div>
          </div>
          <div className="home-topbar-icon">
            <HelpCircle size={20} />
            <span>Help</span>
          </div>
          <div className="home-topbar-icon">
            <LogOut size={20} />
            <span>Log Out</span>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="home-grid">
        {/* LEFT COLUMN */}
        <div className="grid-col">
          
          {/* Top Section (Glance + Quick Look) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.5rem' }}>
            {/* Glance */}
            <div className="widget-card">
              <div className="widget-header">
                <span>Today's At A Glance</span>
                <MoreHorizontal size={16} />
              </div>
              <div className="glance-item">
                <Clock size={16} className="glance-icon" />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Next Patient:</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Sarah Chen (10:15 AM - Telehealth - New Symptom Check)</div>
                </div>
              </div>
              <div className="glance-item">
                <Calendar size={16} className="glance-icon" />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Upcoming appointments: 9</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>(8 In-Clinic, 1 Telehealth)</div>
                </div>
              </div>
              <div className="glance-item">
                <CheckSquare size={16} className="glance-icon" />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Tasks: 3 Outstanding</div>
                </div>
              </div>
            </div>

            {/* Quick Look */}
            <div className="widget-card">
              <div className="widget-header">
                <span>Patient Quick Look</span>
              </div>
              <div className="patient-quick-card">
                <img src={patientAvatar1} alt="Sarah Chen" className="patient-quick-img" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>Sarah Chen, F, 34</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Appointment: 10:15</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Reason: New Symptom</div>
                  <div className="status-badge">Awaiting</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section (Schedule + Activity) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '1.5rem' }}>
            {/* Schedule */}
            <div className="widget-card">
              <div className="widget-header">
                <span>Appointment Schedule</span>
                <MoreHorizontal size={16} />
              </div>
              <div>
                <div className="schedule-item">
                  <div className="schedule-time">9:00</div>
                  <div className="schedule-block">
                    <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>David Kim - Follow-up</span>
                  </div>
                </div>
                <div className="schedule-item">
                  <div className="schedule-time">10:15</div>
                  <div className="schedule-block active">
                    <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>Sarah Chen</span>
                  </div>
                </div>
                <div className="schedule-item">
                  <div className="schedule-time">11:30</div>
                  <div className="schedule-block">
                    <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#10b981' }}>Robert J. - Urgent Care</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="widget-card">
              <div className="widget-header">
                <span>Recent Patient Activity</span>
                <MoreHorizontal size={16} />
              </div>
              <div>
                <div className="activity-item">
                  <img src={patientAvatar2} alt="Jones Kim" className="activity-avatar" />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Jones Kim, F</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Recently viewed path brief update...</div>
                  </div>
                </div>
                <div className="activity-item">
                  <img src={patientAvatar1} alt="Sarah Chen" className="activity-avatar" />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Sarah Chen, F</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Update viewed brief update.</div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-avatar" style={{ background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#64748b' }}>DM</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Davis, M.</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Recently viewed path brief update...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="grid-col">
          
          {/* Tasks & Alerts */}
          <div className="widget-card">
            <div className="widget-header">
              <span>Clinical Tasks & Alerts</span>
              <MoreHorizontal size={16} />
            </div>
            <div>
              <div className="task-item">
                <Activity size={16} className="task-icon" />
                <div>Lab results for Jones, K.</div>
              </div>
              <div className="task-item">
                <FileText size={16} className="task-icon" style={{ color: '#3b82f6' }} />
                <div>Prescription refill for Davis, M.</div>
              </div>
              <div className="task-item">
                <CheckSquare size={16} className="task-icon" style={{ color: '#10b981' }} />
                <div>Sign notes: 4</div>
              </div>
            </div>
          </div>

          {/* Performance Insights */}
          <div className="widget-card">
            <div className="widget-header">
              <span>My Performance Insights</span>
              <MoreHorizontal size={16} />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '8px', height: '8px', background: 'var(--brand-primary)', borderRadius: '50%' }}></div> Patients Seen per Week</span>
                <span>Average Appointment Time</span>
              </div>
              
              <div className="chart-container">
                <div className="chart-bar-wrapper"><div className="chart-bar" style={{ height: '40%' }}></div><span className="chart-label">Mon</span></div>
                <div className="chart-bar-wrapper"><div className="chart-bar" style={{ height: '70%' }}></div><span className="chart-label">Tue</span></div>
                <div className="chart-bar-wrapper"><div className="chart-bar" style={{ height: '50%' }}></div><span className="chart-label">Wed</span></div>
                <div className="chart-bar-wrapper"><div className="chart-bar" style={{ height: '60%' }}></div><span className="chart-label">Thu</span></div>
                <div className="chart-bar-wrapper"><div className="chart-bar" style={{ height: '90%' }}></div><span className="chart-label">Fri</span></div>
                <div className="chart-bar-wrapper"><div className="chart-bar" style={{ height: '20%' }}></div><span className="chart-label">Sat</span></div>
                <div className="chart-bar-wrapper"><div className="chart-bar" style={{ height: '10%' }}></div><span className="chart-label">Sun</span></div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.75rem', color: 'var(--text-secondary)', textAlign: 'right' }}>
                <div>200/wk</div>
                <div>15.8m</div>
                <div>60/d</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ClinicianOverview;
