import React, { useState } from "react";
import "./App.css";

function App() {
  // Track which button is selected
  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <div className="app-container">
      {/* Top Main Menu */}
      <header className="top-menu">
        <h1>My React App</h1>
        <nav>
          <ul className="top-nav">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Layout with Side Menu + Content */}
      <div className="layout">
        {/* Side Menu */}
        <aside className="side-menu">
          {[...Array(10)].map((_, i) => (
            <button
              key={i}
              className="side-button"
              onClick={() => setSelectedButton(i + 1)}
            >
              Button {i + 1}
            </button>
          ))}
        </aside>

        {/* Main Content Area */}
        <main className="content">
          <h2>Welcome!</h2>
          {selectedButton ? (
            <p>You clicked Button {selectedButton}</p>
          ) : (
            <p>Select a button from the side menu.</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;