import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Menu, MobileMenu } from 'ssw.megamenu';

const App = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const actionOnToggleClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };


  return (
    <div className="App">
      <Menu onClickToggle={() => actionOnToggleClick()}></Menu>
      <MobileMenu isMenuOpened={isMenuOpened}></MobileMenu>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
