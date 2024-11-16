import React, { useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className='sidebar'>
      <div className="top">
        <img
          onClick={() => setExtended(prev => !prev)}
          className='menu'
          src={assets.menu_icon}
          alt="Menu Icon"
        />
        
        {/* Plus Icon with Tooltip */}
        <div className="new-chat">
          <div className="icon-container">
            <img src={assets.plus_icon} alt="New Chat Icon" />
            <span className="tooltip-text">New Chat</span> {/* Tooltip for Plus Icon */}
          </div>
          {extended ? <p>New Chat</p> : null}
        </div>

        {/* Recent chats section */}
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="Message Icon" />
              <p>What is react ...</p>
            </div>
          </div>
        )}
      </div>

      <div className="bottom">
        {/* Help Icon with Tooltip */}
        <div className="bottom-item recent-entry">
          <div className="icon-container">
            <img src={assets.question_icon} alt="Help Icon" />
            <span className="tooltip-text">Help</span>
          </div>
          {extended ? <p>Help</p> : null}
        </div>

        {/* Activity Icon with Tooltip */}
        <div className="bottom-item recent-entry">
          <div className="icon-container">
            <img src={assets.history_icon} alt="Activity Icon" />
            <span className="tooltip-text">Activity</span>
          </div>
          {extended ? <p>Activity</p> : null}
        </div>

        {/* Settings Icon with Tooltip */}
        <div className="bottom-item recent-entry">
          <div className="icon-container">
            <img src={assets.setting_icon} alt="Settings Icon" />
            <span className="tooltip-text">Settings</span>
          </div>
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;