import React from "react";
import "./../../styles/sien.css";
import { Button, colors } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "white",
    borderRadius: 50,
    border: "1px solid grey",
    color: "Grey",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 2px 3px #9e9e9e",
  },
  label: {
    textTransform: "uppercase",
    fontSize: "20px",
  },
});

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "25px",
        marginBottom: "25px",
        borderBottom: "5px solid rgb(26, 141, 170)",
        color: "grey",
        height: 48,
        fontSize: "25px",
        fontfamily: "",
        padding: "0 60px",
      },
    },
  },
});

export default function Sien() {
  const classes = useStyles();

  return (
    <div className="King">
      <h1 className="content">RELATED ARTICLES</h1>
      <img src="assets/images/Press2.jpg" />
      <hr className="Line"></hr>

      <h4 className="Founder">
        From our Founder: Three subjects to teach in every school
      </h4>
      <p className="Date">July 19, 2020 by Sabaicode</p>
      <div className="tm_element">
        <a href=" https://www.phnompenhpost.com/opinion/three-practical-subjects-teach-every-school" style={{textAlign:"justify"}}>
          https://www.phnompenhpost.com/opinion/ three-practical-subjects-teach-every-school
        </a>
      </div>

      <h4 className="Founder"> We're in the news!</h4>
      <p className="Date">February 18, 2020 by Sabaicode</p>
      <p className="Date">
        Thank you Phnom Penh Post for your interests! We're committed to
        building the next generation of leaders!
      </p>
      <br />
      <a href=" https://www.phnompenhpost.com/lifestyle-creativity-innovation/sabai-code-developing-young-coders-potential">
       
        https://www.phnompenhpost.com/lifestyle-creativity-innovation/sabai-code-developing-young-coders-potential
      </a>

      <br />
      <Button
        classes={{
          root: classes.root,
          label: classes.label,
        }}
      >
        View all Post
      </Button>

      <hr className="Line"></hr>
      <h4 className="Founder">FOLLOW MY BLOG</h4>
      <p className="Date">Get new content delivered directly to your inbox.</p>
      <form>
        <TextField
          id="Enter Your Email..."
          label="Enter Your Email..."
          variant="outlined"
        />
      </form>

      <ThemeProvider theme={theme}>
        <Button>Subcribe</Button>
      </ThemeProvider>
    </div>
  );
}
