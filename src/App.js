import React, { useState } from 'react';
import './App.css';

function App() {
  const [playerName, setPlayerName] = useState('');
  const [log, setLog] = useState([]);

  const handleCheckIn = () => {
    if (playerName.trim() === '') return;
    const newEntry = {
      name: playerName,
      time: new Date().toLocaleTimeString(),
    };
    setLog([newEntry, ...log]);
    setPlayerName('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCheckIn();
    }
  };

  return (
    <div className="app-container">
      <h1>🎾 Padel Player Check-In</h1>
      
      <div className="checkin-form">
        <input
          type="text"
          placeholder="Enter player name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleCheckIn}>Check In</button>
      </div>

      <h2>Check-In Log</h2>
      <ul className="log-list">
        {log.map((entry, index) => (
          <li key={index}>
            <span className="padel-icon">🏓</span>
            <strong>{entry.name}</strong>
            <span>checked in at {entry.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;