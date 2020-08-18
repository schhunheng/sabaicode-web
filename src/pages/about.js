import React from "react";
import { Player } from "video-react";
import "../../node_modules/video-react/dist/video-react.css";
import "./.././styles/about.css";
import Footer from "../components/containers/Footer";
import Grid from "@material-ui/core/Grid";
export default function About() {
  return (
    <div className="about-page">
      {/* Video */}
 
      
      <div className="header-about">
        <h2 className="our-story">OUR STORY </h2>
      </div>
      <Grid container justify="center">
        <Grid item xs={10} style={{marginTop: 40}}>
        <Player
          className="video "
          playInline
          poster="logo.jpg"
          src="assets/videos/img_655.mp4"
        />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1}>
          {" "}
        </Grid>
        <Grid item xs={10}>
          <div className="our-story-des1">
            We founded the company because we saw a huge mismatch between where
            the future is going and where our Cambodian children are headed. The
            world is in growing needs for people with high creativity, problem
            solving and leadership skills. These skills are embedded in the
            field of computer science. Cambodia is way behind. So SabaiCode was
            born
          </div>
          <div className="our-story-des2">
            Our goal is not to produce future computer scientists (although we
            would not be surprised if it happens). Our goal is to introduce
            computer science fundamentals to students at a young age. So that
            they do not grow up intimidated by computer science field. So that
            our girls do not think that computer science is just for boys. So
            that our kids know that learning computer science can be fun. So
            that they will become creators, and not just users of technology.
            And so that they grow creativity, problem solving ability and mental
            toughness at a young age.
          </div>
          <div className="our-story-des3">
            We know we have ambitious goals. But trust us, together we can
            achieve them.
          </div>
          <div className="our-story-des4">
            We make it fun to learn. Each of our teacher (coach) will take care
            of only 8 students or less. So the learning is personalized and
            engaging.
          </div>
        </Grid>
        <Grid item xs={1}>
          {" "}
        </Grid>
        
        <Grid item xs={12}><h2 className="vision">VISION</h2></Grid>
        <Grid item xs={1}>
          {" "}
        </Grid>
        <Grid item xs={10}>
          <p className="vision-dec">
            To develop the next generation of Cambodian leaders in technology
            and innovation, whose goals are to make an enormous impact on
            society at large
          </p>
        </Grid>
        <Grid item xs={1}>
          {" "}
        </Grid>
        <Grid item xs={12}><h2 className="mission">MISSION</h2></Grid>
        <Grid item xs={1}>
          {" "}
        </Grid>
        <Grid item xs={10}>
         
          <p className="mission-des">
            To empower every Cambodian child with transformative knowledge and
            cutting edge technologies so that they can reach their full
            potential and take Cambodia to the next level
          </p>
        </Grid>
        <Grid item xs={1}>
          {" "}
        </Grid>
      </Grid>
      <div className="footer-page">
          <Footer/>
      </div>
    </div>
  );
}
