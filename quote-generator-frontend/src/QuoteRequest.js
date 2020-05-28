import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import ResponseBox from './ResponseBox';
import SubmitButton from './SubmitButton';
import './index.css';

import axios from 'axios';

function QuoteRequest(props) {

    const defaultText = props.defaultText ? props.defaultText : 'Click above to generate a quote';

    const [randomQuote, setRandomQuote] = useState(defaultText);

    return (<div className={'input-controls'}>
        <SubmitButton id="generateQuote" cssStyle='generate-button'
            displayText="Generate Quote"
            onClickFromReq={() => createQuoteUsingState(setRandomQuote, props.urlEndPt)} />

        <ResponseBox id="primaryQuoteBox" cssStyle='primary-quote'
            quoteTextValue={randomQuote} />

        <SubmitButton id="resetQuoteBox" cssStyle='reset-button'
            displayText="Reset"
            onClickFromReq={() => setRandomQuote(defaultText)} />
    </div >
    )
}

async function createQuoteUsingState(stateSetter, urlEndPt) {
    stateSetter(await callQuoteService(urlEndPt))
}

async function callQuoteService(urlEndPt) {

    let myQuote = 'Unable to retrieve from Java';

    if (urlEndPt === 'random') {
        var myGETResponseObject = await getFromJava();
        myQuote = myGETResponseObject.quoteText;

    } else if (urlEndPt === 'specific') {
        var myPOSTResponseObject = await postToJava(urlEndPt);
        myQuote = myPOSTResponseObject.quoteText;
    }

    return myQuote;
}

async function getFromJava() {

    let getUrl = `http://localhost:8080/random`;

    return await axios.get(getUrl)
        .then(
            (response) => {
                console.log(`data contents = ${JSON.stringify(response.data)}`)
                return response.data
            }, (error) => {
                console.log(error);
            });
}

async function postToJava() {

    let postUrl = `http://localhost:8080/specific`;

    let myRandomNumber = Math.floor((Math.random() * 100) + 1);
    console.log(`Random number = ${myRandomNumber}`)

    const requestPayload = { inputNumber: myRandomNumber }

    console.log(`inputPayload = ${JSON.stringify(requestPayload)}`)

    return await axios.post(postUrl, requestPayload)
        .then(
            (response) => {
                console.log(`data contents = ${JSON.stringify(response.data)}`)
                return response.data
            }, (error) => {
                console.log(error);
            });
}

export default QuoteRequest