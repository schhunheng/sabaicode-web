import React from "react";
import Grid from "@material-ui/core/Grid";
import Contact from "../components/presentations/contact";
import GroupSocialMedia from "../components/presentations/groupSocialMedia";
import "./../styles/contact.css";
import Footer from "./../components/containers/Footer";
export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-title">
        <h2>CONTACT</h2>
        <p>Don't hesitate to ask questions or make comments</p>
      </div>
      <Grid container spacing={10} justify="center">
        <Grid item xs={10} md={5}>
          <h3 className="title-contact-info">CONTACT INFORMATION</h3>
          <from className="form-contact">
            <input placeholder="Name" />
            <br />
            <input placeholder="Email" />
            <br />
            <input placeholder="Subject" />
            <br />
            <textarea placeholder=" comment ..."></textarea>
            <br />
            <button>Submit</button>
          </from>
        </Grid>
        <Grid item xs={10} md={5}>
          <h3 className="title-contact-info">GET IN TOUCH</h3>
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
          <h3>SOCIAL SHARING</h3>
          <div style={{ marginLeft: 65, marginTop: 20 }}>
            <GroupSocialMedia />
          </div>
        </Grid>
      </Grid>
      <div style={{ marginTop: 30 }}>
        <Footer />
      </div>
    </div>
  );
}
