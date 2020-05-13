import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './Homepage.css'; 
import QuoteRequest from './QuoteRequest';

function Homepage() {
  return (
    <div className="Homepage">
      <header className="Homepage-header">

        <p>QUOTE GENERATOR</p>
        <img src={logo} className="Homepage-logo" alt="logo" />

        <QuoteRequest/>

      </header>
    </div>
  );
}

export default Homepage;