import React from 'react';
import './App.css';
import adobeimg from './adobe express.png';
import menu from './menu button.webp';
import test from './image.png';
import loading from './loading image.png';

import { useState } from 'react';
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
        {/* <h1>{DropdownMenu()}</h1> */}
        <img src= {menu}
        alt="Font" 
        className="menuP" />
      </header>
      <br></br>
      <br></br>
      <br></br>
        <main>
          <img src="https://file.garden/ZhkD9yUtsAenJzxk/%7B926AA1A1-D782-410C-941A-7E5BF833AE40%7D.png" alt="Info" className="info-image" />
        <div className = 'shitter1'>
          <h1 className="header">
            About our product
          </h1>
          <p className="paragraph">
            Welcome to AIRA, an Artificial Intelligence (w)Riter App designed so you can create a more accessible world. Graphics, no matter how well made, aren't always easy to read. With AIRA, creating alt-text has never been easier. Simply download our Adobe Express add-on, click generate alt-text, and upload it alongside your graphic. In just three easy steps, graphic designers and content creators everywhere can ensure that the everyone can access their designs. This product was coded with React, Adobe Express CLI, and the OpenAI library. Happy creating!   
          </p>
          <div className="button-container">
            <button className="action-button" onClick={() => {learnMoreRef.current.scrollIntoView({ behavior: "smooth"});}}>Learn More</button>
            <a class="link-button" href="https://www.adobe.com/express/">Try now</a>
          </div>
        </div>
      </main>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <div className = 'header1'>
        <h1 className = 'line'>
          Additional Information
        </h1>
        <h1 className = 'line'>
          -------------------------------------------------
        </h1>
      </div>
      
      <div className="mydivcontainer">
        <div className="mydiv">
        <br />
        <h1 style={{ color: 'white', fontSize: '32px' }}>
            Instructions
          </h1>
          <p style={{ color: 'white', fontSize: '18px' }}>
            1. Install add-on<br /><br />
            2. Click 'Generate Alt Text'<br /><br />
            3. Enjoy<br /><br />
            4. It's that easy!<br /><br />
          </p>
        </div>
        <div className="mydiv">
          <img src ={loading} className = 'test'/>
        </div>
        <div className="mydiv">
        <br />
        <h1 style={{ color: 'white', fontSize: '32px' }}>
            Contributers
          </h1>
          <p style={{ color: 'white', fontSize: '18px' }}>
            Diana Lin <br />
            <br />
            Ishara Shanmugasundaram <br />
            <br />
            Jessica Su <br />
            <br />
            Michelle Che <br />
            <br />
          </p>
        </div>
      </div>
      <div className = 'line2'>
      -------------------------------------------------
      </div>
      <br></br>
      <div className = 'cont'>
        <p className = 'header'>
          Sample Alt Text Generation
        </p>
        <img src ={test} className = 'test1'/>
      </div>
      <br></br>
      <br></br>
      <div className='credit'>
        <a href = "https://github.com/dianalin2/technica-2024">
          Github
        </a>
        <p className = 'linked'></p>
        <a href = "https://devpost.com/software/aira-8u0qpj">
          Devpost
        </a>
        <p>
          @ Technica 2024
        </p>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default App;