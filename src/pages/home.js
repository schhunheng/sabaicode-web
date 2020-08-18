import React from "react";
import "./../styles/home.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import HeaderCarousel from "./../components/presentations/headerCarousel";
import FooterHome from "../components/containers/FooterHome";
import Imagewithtext from "./../components/presentations/Imagewithtext";

export default function Home() {
  return (
    <div className="home-page">
      <div className="sliderBackground">
        <HeaderCarousel />
      </div>
      <div className="home">
        <Grid container  justify="center">
          <Grid item xs={9}>
            <h1 className="our-story">Our Story</h1>
          </Grid>
          <Grid item xs={9}>
            <h3 className="our-story-des">
              We founded the company because we saw a huge mismatch between
              where the future is going and where our Cambodian children are
              headed.
            </h3>
          </Grid>
        </Grid>
        <Grid container >
          <Grid item xs={4}></Grid>
          <Grid item xs={2}>
            <button type="button" className="button-continueReading" style={{textAlign:'center'}}>
              Continue Reading
            </button>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        <Grid container spacing={3} justify="center">
          <Grid item xs={10} sm={5} md={3}>
            <Imagewithtext
              title="Why"
              url="assets/images/why.jpg"
              subtitle="This is why we do what we do."
            />
          </Grid>
          
          <Grid item xs={10} sm={5} md={3}>
            <Imagewithtext
              title="HOW"
              url="assets/images/how.png"
              subtitle="Here is how we do it."
            />
          </Grid>
          <Grid item xs={10} sm={5} md={3}>
            <Imagewithtext
              title="WHAT "
              url="assets/images/what.png"
              subtitle="And this is what we do"
            />
          </Grid>
        </Grid>
        <h1 className="our-mission">Our Mission</h1>
        <Grid container spacing={3} justify="center">
          <Grid item xs={10} sm={5} md={3}>
            <img
              src="/assets/images/img_3129.jpg"
              alt="why"
              className="image2"
            />
          </Grid>
          <Grid item xs={10} sm={5} md={3}>
            <img
              src="/assets/images/img_3134.jpg"
              alt="why"
              className="image2"
            />
          </Grid>
          <Grid item xs={10} sm={5} md={3}>
            <img
              src="assets/images/img_3253.jpg"
              alt="why"
              className="image3"
            />
          </Grid>
          {/* <Grid item xs={10} sm={5} md={3}>
            <img
              src="/assets/images/img_3129.jpg"
              alt="why"
              className="image2"
            />
          </Grid> */}
        </Grid>
        <Grid container spacing={3} justify="center">
          <Grid item xs={10} sm={5} md={3}>
            <img
              src="assets/images/img_3123.jpg"
              alt="why"
              className="image3"
            />
          </Grid>
          <Grid item xs={10} sm={5} md={3}>
            <img
              src="assets/images/img_3154.jpg"
              alt="why"
              className="image3"
            />
          </Grid>
          <Grid item xs={10} sm={5} md={3}>
            <img
              src="/assets/images/img_3129.jpg"
              alt="why"
              className="image2"
            />
          </Grid>
          {/* <Grid item xs={10} sm={5} md={3}>
            <img
              src="assets/images/img_3123.jpg"
              alt="why"
              className="image3"
            />
          </Grid> */}
        </Grid>
      </div>
      <div className="footer-page">
        <FooterHome />
      </div>
    </div>
  );
}
