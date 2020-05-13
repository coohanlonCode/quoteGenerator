import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import ResponseBox from './ResponseBox';
import SubmitButton from './SubmitButton';



function QuoteRequest() {
  const [randomQuote, setRandomQuote] = useState('');

  return (
    <div>
      <SubmitButton onClickFromReq={() => setRandomQuote(callRandomQuoteService())} />
      <ResponseBox textValue={'STATIC text'} />
    </div>

  )
}

function callRandomQuoteService() {

  let myResponse = { quoteText: "You ARE freaking out. Man.", }

  // webservice call will go here

  let myQuote = myResponse.quoteText


  return alert(`${myQuote}`);
}

export default QuoteRequest
