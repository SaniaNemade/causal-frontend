import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { RefreshCw, Bot, Minimize2, Maximize2, Send, Paperclip, Image as ImageIcon, Database } from 'lucide-react';
import './Components.css';

const ChatAssistant = () => {
  const { setActiveTimeline, setIsDatasetsModalOpen } = useAppContext();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showAttachMenu, setShowAttachMenu] = useState(false);

  return (
    <div 
      className={`chat-assistant ${isCollapsed ? 'collapsed' : ''}`}
      onMouseEnter={() => !isCollapsed && setActiveTimeline('Research Questions')}
      onClick={() => isCollapsed && setIsCollapsed(false)}
    >
      <div className="chat-header">
        {!isCollapsed && <span style={{ fontWeight: 600 }}>Chat / Assistant</span>}
        <button 
          className="panel-toggle-btn" 
          onClick={(e) => { e.stopPropagation(); setIsCollapsed(!isCollapsed); }}
          title={isCollapsed ? "Expand Chat" : "Collapse Chat"}
        >
          {isCollapsed ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
        </button>
      </div>
      
      <div className="chat-messages">
        <div className="message assistant">
          <div className="message-sender"><Bot size={16} /> Causal Assistant</div>
          <div className="message-content">
            <p>Great! Let's clarify your causal question.</p>
            <ul>
              <li>Population: Older adults with MCI</li>
              <li>Exposure: Irregular sleep timing</li>
              <li>Outcome: Next-day perceived stress (PSS)</li>
            </ul>
            <p>Is this correct?</p>
          </div>
        </div>
        
        <div className="message user">
          <div className="message-sender">You</div>
          <div className="message-content">
            <p>Yes, that's correct.</p>
          </div>
        </div>

        <div className="message assistant">
          <div className="message-sender"><Bot size={16} /> Causal Assistant</div>
          <div className="message-content">
            <p>I have profiled your dataset and identified candidate variables. You can review and edit them in the table.</p>
            <p>What would you like to do next?</p>
            <div className="action-buttons">
              <button className="chat-btn">Suggest Confounders</button>
              <button className="chat-btn">Draw Causal Graph</button>
              <button className="chat-btn">Check Identification</button>
              <button className="chat-btn">Recommend Estimator</button>
            </div>
          </div>
        </div>
      </div>

      <div className="chat-input-area" onClick={() => setShowAttachMenu(false)}>
        <div className="chat-input-wrapper">
          <div style={{ position: 'relative' }}>
            <button 
              className="chat-attach-btn" 
              onClick={(e) => { e.stopPropagation(); setShowAttachMenu(!showAttachMenu); }}
              style={{ background: 'transparent', border: 'none', color: '#888', cursor: 'pointer', padding: '8px', display: 'flex', alignItems: 'center' }}
            >
              <Paperclip size={18} />
            </button>
            {showAttachMenu && (
              <div className="attach-menu" style={{
                position: 'absolute',
                bottom: '100%',
                left: '0',
                background: '#fff',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                minWidth: '150px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                marginBottom: '8px',
                zIndex: 10
              }}>
                <button 
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: 'none', cursor: 'pointer', padding: '8px', textAlign: 'left', borderRadius: '4px', width: '100%', color: '#333' }}
                  onClick={(e) => { e.stopPropagation(); setShowAttachMenu(false); /* Handle Media Upload */ }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <ImageIcon size={16} /> Upload Media
                </button>
                <button 
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: 'none', cursor: 'pointer', padding: '8px', textAlign: 'left', borderRadius: '4px', width: '100%', color: '#333' }}
                  onClick={(e) => { e.stopPropagation(); setShowAttachMenu(false); setIsDatasetsModalOpen(true); }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <Database size={16} /> Upload Data
                </button>
              </div>
            )}
          </div>
          <input type="text" placeholder="Message Causal Assistant..." className="chat-input" />
          <button className="chat-send-btn">
            <Send size={14} />
          </button>
        </div>
      </div>
      {!isCollapsed && (
        <div className="ai-warning">
          This Causal LLM is AI and can make mistakes. Please verify the outputs.
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;
