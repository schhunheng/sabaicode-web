import React from 'react';
import './../../styles/coursePage.css';

export default function CourseComponent(props) {
    return (
        <div>
            <h2 className="course-title" >{props.title}</h2>
            <img src={props.url} alt="coding" width="100%" height="auto"></img>
            <p className="course-subtitle">{props.subtitle}</p>
        </div>
    );
}