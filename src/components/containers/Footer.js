import React from "react";
import Grid from "@material-ui/core/Grid";
import "./../../styles/components/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <Grid container>
        <Grid item xs={4}>
          <div className="item1">
            <h2>About </h2>
            <img src="logo.jpg" alt="logo" className="logo" />
            <p>
              We aspire to be the highest quality coding and robotics school for
              children. We aspire to raise the bar on standards.
            </p>
          </div>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
}
