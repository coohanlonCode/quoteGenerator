import React from 'react';
import './index.css';

function SubmitButton(props) {

  return (
    <button className={props.cssStyle} onClick={props.onClickFromReq}>{props.displayText}</button>
  )
}



export default SubmitButton