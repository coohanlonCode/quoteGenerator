import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import ResponseBox from './ResponseBox';
import SubmitButton from './SubmitButton';
import './index.css';

function QuoteRequest() {

    const [randomQuote, setRandomQuote] = useState('');

    console.log(`randomQuote state = ${randomQuote}`)
    return (<div>

        <SubmitButton id="generateQuote" cssStyle='generate-button' displayText="GenerateQuote" 
        onClickFromReq={() => setRandomQuote(callRandomQuoteService(randomQuote))} />
        
        <ResponseBox colinVal={randomQuote} placeHolderText='' />

        <SubmitButton id="resetQuoteBox" cssStyle='reset-button' displayText="Reset" onClickFromReq={() => setRandomQuote('')} />
    </div >
    )
}

function callRandomQuoteService(inputQuote) {

    // getMyTextFnc = (e) => {
    //     e.preventDefault();
    //     axios.get('https://api.openweathermap.org/data/2.5/weather?q=Zeist&appid=MYID')
    //     .then(res => {
    //       console.log(res.data); 
    //     });
    // }

    let myResponse = // webservice call will go her
        { quoteText: "You ARE freaking out. Man.", }

    let myQuote = myResponse.quoteText;

    myQuote = "Littering and, litterning and, littering and...";

    if (inputQuote) {
        myQuote = "You are freaking out, man";
    }



    return myQuote;
}

export default QuoteRequest