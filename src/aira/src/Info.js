import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <header className="title-bar">
        <img src="https://file.garden/ZhkD9yUtsAenJzxk/logo.png"
        alt="Logo" 
        className="logo" />
        <img src="https://file.garden/ZhkD9yUtsAenJzxk/font.png"
        alt="Font" 
        className="font" />
        <button className="menu-button">Menu</button>
      </header>

      <main>
        <div>Test</div>
        <div className="mydivcontainer">
            <div className="mydiv"></div>
            <div className="mydiv"></div>
            <div className="mydiv"></div>
        </div>
      </main>
      <br></br>

    </div>
  );
};

export default App;