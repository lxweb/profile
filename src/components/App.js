import React, { Component } from 'react';
import './App.css';
import linkedinLogo from '../images/linkedin.svg';
import githubLogo from '../images/github.svg';
import avatar from '../images/avatar.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="header">
          <div className="avatar">
            <img src={avatar} alt="logo" />
          </div>
        </div>

        <ul className="socialNetworks">
          <li>
            <a href="https://www.linkedin.com/in/lisandro-fernandez-b040625/">
              <img src={linkedinLogo} className="logo" alt="Linkedin logo" />
            </a>
          </li>
          <li>
            <a href="https://github.com/lxweb/">
              <img src={githubLogo} className="logo" alt="Github logo" />
            </a>
          </li>
        </ul>
        
      </div>
    );
  }
}

export default App;
