import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './Homepage.css';
import QuoteRequestContainer from './QuoteRequestContainer';

function Homepage() {
  return (
    <div className="Homepage">

      <header className="Homepage-header">

        <div>
          <img src={logo} className="Homepage-logo" alt="logo" />
          <a className='title'>QUOTE GENERATOR</a>
          <img src={logo} className="Homepage-logo" alt="logo" />
        </div>
      </header>

      <div>
        <QuoteRequestContainer />
      </div>

    </div>
  );
}

export default Homepage;