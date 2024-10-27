import React from 'react';
import './App.css';
import adobeimg from './adobe express.png';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


function TryNow() {
  const routeChange = () =>{ 
    let path = `https://www.adobe.com/express/`; 
    navigate(path);
  }
}


function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button classname="menu-button" onClick={toggleDropdown}>Dropdown Button</button>
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
  const learnMoreRef = React.useRef();
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
            Welcome to AIRA, an Artificial Intelligence (w)Riter App designed so you can create a more accessible world. Graphics, no matter how well made, aren't always easy to read. With AIRA, creating alt text has never been easier. Simply download our Adobe Express add-on, click generate alt-text, and upload it alongside your graphic. In just three easy steps, graphic designers and content creators everywhere can ensure that the everyone can access their designs. This product was coded with React, Adobe Express CLI, and the OpenAI library. Happy creating!   
          </p>
          <div className="button-container">
            <button className="action-button" onClick={() => {learnMoreRef.current.scrollIntoView({ behavior: "smooth" });}}>
              Learn More
            </button>
            <button className="action-button" onClick={routeChange}>Try Now</button>
          </div>
        </div>
      </main>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      
      <div className="mydivcontainer">
        <div className="mydiv" ref = {learnMoreRef}>lu la la lu la la lu la lu la lei</div>
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