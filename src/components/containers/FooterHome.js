import React from "react";
import "./../../styles/components/footerHome.css";
import Contact from "./../../components/presentations/contact";
import Grid from "@material-ui/core/Grid";
import SearchButton from "../presentations/searchButton";
import ShareButton from "../presentations/shareButton";
import GroupSocialMedia from "../presentations/groupSocialMedia";
const FooterHome = () => {
  return (
    <div className="footer-home">
      <Grid container >
        <Grid item xs={12} md={4}>
          <div className="item-1">
            <h3 id="about">About</h3>
            <img src="logo.jpg" alt="logo" id="logo" />
            <p id="decription-about">
              We aspire to be the highest quality coding and robots school for
              children. we aspire to raise the bar on standards.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="item-2">
            <h3 id="getIntouch"> Get in Touch</h3>
            <p id="description-add">
              No. 28,street 368, Sangkat Boeng Keng Kang. Near Toul Sleng
              Museum. Behind the old firefighter station
            </p>
            <div className="group-contact">
              <Contact
                urlIcon="assets/icons/phone.png"
                dataContact="(855) 012-555-080"
              />
              <br />
              <Contact
                urlIcon="assets/icons/box_message.png"
                dataContact="sabaicode@gmail.com"
              />
              <br />
              <Contact
                urlIcon="assets/icons/location.png"
                dataContact="28 saint 368, Phnom Penh, Cambodia"
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="item-3">
            <SearchButton />
            <h3 id="follow-us">Follow US</h3>
            <GroupSocialMedia />
            <ShareButton />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterHome;
