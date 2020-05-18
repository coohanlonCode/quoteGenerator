import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

function ResponseBox(props) {

    return (
        <input
            placeholder={props.placeHolderText}
            value={props.colinVal}
        />

    )
}

export default ResponseBox