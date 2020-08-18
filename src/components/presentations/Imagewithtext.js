import React from 'react';
import './../../styles/components/imageWithTextComponent.css';
export default function Imagewithtext(props) {
    return (
        <div>
            <h3 class="home-title">{props.title}</h3>
            <div className="container-image"> <img src={props.url} alt="WHY" className="home-images"/></div>
            <h5 class="home-subtitle">{props.subtitle} </h5>
        </div>
    );
}