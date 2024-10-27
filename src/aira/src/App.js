import React from 'react';
import './App.css';
import adobeimg from './adobe express.png';


import { useState } from 'react';
function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDropdown}>Dropdown Button</button>
      {isOpen && (
        <ul className="menu">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
}

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
        <h1>{DropdownMenu()}</h1>
      </header>
      <br></br>
      <br></br>
      <br></br>
        <main>
          <img src={adobeimg} alt="Info" className="info-image" />
        <div className = 'shitter1'>
          <h1 className="header">
            About our product
          </h1>
          <p className="paragraph">
            long ass explanation as to what we did          
          </p>
          <div className="button-container">
            <button className="action-button">Learn More</button>
            <button className="action-button">Try Now</button>
          </div>
        </div>
      </main>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      
      <div className="mydivcontainer">
        <div className="mydiv">lu la la lu la la lu la lu la lei</div>
        <div className="mydiv">lu la lu la lu la lu la lu la lei</div>
        <div className="mydiv">lu la la lu la la lu la lu la lei</div>
      </div>
      <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
    </div>
  );
};

export default App;