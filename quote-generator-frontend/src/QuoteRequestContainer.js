import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import ResponseBox from './ResponseBox';
import SubmitButton from './SubmitButton';
import './index.css';


import QuoteRequest from './QuoteRequest';

import axios from 'axios';

function QuoteRequestContainer(props) {

    return (
        <div className='rowC'>
            <QuoteRequest defaultText='GET a random QUOTE' urlEndPt='random' />
            <QuoteRequest defaultText='POST to get a specific quote' urlEndPt='specific' />
        </div>
    );
}
export default QuoteRequestContainer