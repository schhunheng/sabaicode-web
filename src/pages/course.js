import React from "react";
import "../../node_modules/video-react/dist/video-react.css"; 
import Grid from "@material-ui/core/Grid";
import { Player } from 'video-react';
export default function Course() {
  return (
    <>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Player
            playsInline
            poster="logo.jpg"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}
