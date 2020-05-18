import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './Homepage.css';
import QuoteRequest from './QuoteRequest';

function Homepage() {
  return (
    <div className="Homepage">
      <header className="Homepage-header">

        <div className='section-1'>
          <img src={logo} className="Homepage-logo" alt="logo" />
          <a className='title'>QUOTE GENERATOR</a>
          <img src={logo} className="Homepage-logo" alt="logo" />
        </div>

        <div>
          <QuoteRequest />
        </div>
      </header>
    </div>
  );
}

export default Homepage;