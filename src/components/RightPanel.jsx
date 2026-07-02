import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { ExternalLink, FileText, Minimize2, Maximize2 } from 'lucide-react';
import './Components.css';

const RightPanel = () => {
  const [activeTab, setActiveTab] = useState('Top Evidence');
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div 
      className={`right-panel ${isCollapsed ? 'collapsed' : ''}`}
      onClick={() => isCollapsed && setIsCollapsed(false)}
    >
      <div className="right-panel-header">
        {!isCollapsed && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>Evidence (RAG)</span>
            <ExternalLink size={16} color="var(--brand-primary)" />
          </div>
        )}
        <button 
          className="panel-toggle-btn" 
          onClick={(e) => { e.stopPropagation(); setIsCollapsed(!isCollapsed); }}
          title={isCollapsed ? "Expand Panel" : "Collapse Panel"}
        >
          {isCollapsed ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
        </button>
      </div>
      
      <div className="evidence-tabs">
        <div 
          className={`evidence-tab ${activeTab === 'Top Evidence' ? 'active' : ''}`}
          onClick={() => setActiveTab('Top Evidence')}
        >
          Top Evidence
        </div>
      </div>
      
      <div className="right-panel-content">
        <div className="evidence-list">
          <div className="evidence-card">
            <div className="evidence-card-header">
              <span className="evidence-type"><FileText size={12} color="#ef4444" /> Systematic Review</span>
              <span className="evidence-relevance" style={{ color: 'var(--brand-secondary)' }}>High Relevance</span>
            </div>
            <h4>Sleep regularity and mental health: A systematic review and meta-analysis</h4>
            <div className="journal">Journal of Sleep Research, 2022</div>
            <p>"Irregular sleep timing is associated with higher perceived stress and depressive symptoms..."</p>
            <div style={{ textAlign: 'right' }}><button className="view-btn">View</button></div>
          </div>

          <div className="evidence-card">
            <div className="evidence-card-header">
              <span className="evidence-type"><FileText size={12} color="#3b82f6" /> Longitudinal Study</span>
              <span className="evidence-relevance" style={{ color: 'var(--brand-secondary)' }}>High Relevance</span>
            </div>
            <h4>Prospective association between sleep irregularity and stress in older adults</h4>
            <div className="journal">Psychoneuroendocrinology, 2021</div>
            <p>"Sleep timing variability predicted next-day stress after adjusting for prior stress..."</p>
            <div style={{ textAlign: 'right' }}><button className="view-btn">View</button></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RightPanel;
