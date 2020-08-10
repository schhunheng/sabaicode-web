import React from "react";
import './../styles/press.css';
import { Player } from 'video-react';
  
export default function Press() {
  return (
    <div className="container">
      <h1>Press Page</h1>
      <span className="hello">Hello EveryBody</span>
      <img src="assets/pictures/helloworld.png" />
      <img src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"/>
      <Player
      playsInline
      poster="./assets/pictures/cover1.jpg"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
    </div>
  );
}
