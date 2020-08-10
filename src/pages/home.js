import React from "react";
import "./../styles/home.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import HeaderCarousel from "./../components/presentations/headerCarousel";
import ImageWithTitle from "./../components/presentations/imageWithTitle";
import Footer from '../components/containers/Footer';
// import ImageWithTitle from './../components/presentations/imageWithTitle';
export default function Home() {
  return (
    <div className="home">
      <div className="sliderBackground">
        <HeaderCarousel />
      </div>
      
      <div>
        <Grid
          container
          direction="row"
          // justify="center"
           //alignItems="center"
          spacing={2}
        
        >
          <Grid item xs={12} md={6} lg={4}>
          <ImageWithTitle/>
          </Grid>
          <Grid item  xs={12} md={6} lg={4}>
          <ImageWithTitle/>
          </Grid>
          <Grid item  xs={12} md={6} md={4}>
          <ImageWithTitle/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
