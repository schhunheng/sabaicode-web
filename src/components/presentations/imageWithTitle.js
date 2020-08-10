import React from 'react';
import './../../styles/components/imageWithTitle.css'

export default function ImageWithTitle() {
    return (
        <div>
            <h3 className="title">WHY</h3>
            <img src="assets/pictures/helloworld.png"  alt="why" className="img"/>
            <p className="subtitle">This is why we do what we do. </p>
        </div>
    );
}