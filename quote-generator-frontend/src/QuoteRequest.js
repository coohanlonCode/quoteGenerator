import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import ResponseBox from './ResponseBox';
import SubmitButton from './SubmitButton';
import './index.css';

import axios from 'axios';

function QuoteRequest() {

    const defaultText = 'Click above to generate a quote';

    const [randomQuote, setRandomQuote] = useState(defaultText);

    return (<div >
        <div className='section-2' >
            <SubmitButton id="generateQuote" cssStyle='generate-button'
                displayText="Generate Quote"
                onClickFromReq={() => createQuoteUsingState(setRandomQuote)} />
        </div>

        <div className='section-2'>
            <ResponseBox id="primaryQuoteBox" cssStyle='primary-quote'
                quoteTextValue={randomQuote} />
        </div>

        <div className='section-2'>
            <SubmitButton id="resetQuoteBox" cssStyle='reset-button'
                displayText="Reset"
                onClickFromReq={() => setRandomQuote(defaultText)} />
        </div>
    </div >
    )
}

async function createQuoteUsingState(stateSetter) {
    stateSetter(await callRandomQuoteService())
}

async function callRandomQuoteService() {

    var myResponseObject = await callToJava();
    let myQuote = myResponseObject.quoteText;

    return myQuote;
}

async function callToJava(request, response) {

    const restResponseObjectUrl = 'http://localhost:8080/random';

    return await axios.get(restResponseObjectUrl)
        .then(
            (response) => {
                console.log(`data contents = ${JSON.stringify(response.data)}`)
                return response.data
            }, (error) => {
                console.log(error);
            });
}

export default QuoteRequest