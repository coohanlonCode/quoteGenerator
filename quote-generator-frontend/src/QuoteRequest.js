import React, {useState } from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import ResponseBox from './ResponseBox';
import SubmitButton from './SubmitButton';
import './index.css';


// import axios from 'axios';

function QuoteRequest() {

    const [randomQuote, setRandomQuote] = useState('');

    console.log(`randomQuote state = ${randomQuote}`)
    return (<div >
        <div className='section-2' >
            <SubmitButton id="generateQuote" cssStyle='generate-button'
                displayText="Generate Quote"
                onClickFromReq={() => setRandomQuote(callRandomQuoteService(randomQuote))} />
        </div>

        <div className='section-2'>
            <ResponseBox id="primaryQuoteBox" cssStyle='primary-quote'
                quoteTextValue={randomQuote}
                placeHolderText='' />
        </div>

        <div className='section-2'>
            <SubmitButton id="resetQuoteBox" cssStyle='reset-button'
                displayText="Reset"
                onClickFromReq={() => setRandomQuote('')} />
        </div>
    </div >
    )
}

function callRandomQuoteService(inputQuote) {

    console.log(`Input quote = ${inputQuote}`)
    // getMyTextFnc = (e) => {
    //     e.preventDefault();
    //     axios.get('https://api.openweathermap.org/data/2.5/weather?q=Zeist&appid=MYID')
    //     .then(res => {
    //       console.log(res.data); 
    //     });
    // }

    let myResponse = // webservice call will go her
        { quoteText: "", }

    let myQuote = myResponse.quoteText;

    myQuote = "Littering and, litterning and, littering and...";
    myQuote = "You ARE freaking out. Man.";

    if (inputQuote) {
        myQuote = "I don't want a large Farva. I want a goddam liter of cola. here is a ton of other text that goes way far";
    }



    return myQuote;
}

export default QuoteRequest