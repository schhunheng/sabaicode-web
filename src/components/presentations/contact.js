import React from 'react';
import './../../styles/components/contact.css';
const contact = (props) => {
    return (
        <div id="contact">
            <img src={props.urlIcon} alt="icons" style={{marginLeft:20}} />
            <span>{props.dataContact}</span>
        </div>
    );
};
export default contact;