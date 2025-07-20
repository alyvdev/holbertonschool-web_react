import './Notifications.css';
import React from 'react';
import closeIcon from '../assets/close-button.png';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="notifications">
      {/* Bouton Close */}
      <button
        aria-label="Close"
        onClick={handleClick}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <img src={closeIcon} alt="close icon" style={{ width: '10px', height: '10px' }} />
      </button>

      {/* Message */}
      <p>Here is the list of notifications</p>

      {/* Liste des notifications */}
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}
