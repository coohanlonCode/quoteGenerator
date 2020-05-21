import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

 function ResponseBox(props) {

    return (
        <textarea  
            className={props.cssStyle}
            placeholder={props.placeHolderText}
            value={props.quoteTextValue}
        />
    )
}

export default ResponseBox