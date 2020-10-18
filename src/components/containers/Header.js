import React, { useState, useContext, useEffect } from "react";
import {
  Drawer as MapDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Iconbuttonn from "@material-ui/core/Iconbutton";
import { useHistory } from "react-router-dom";
// =================My Import ============
import "../../styles/header.css";

import Home from "./../../pages/home";
import About from "./../../pages/about";
import Course from "./../../pages/course";
import OurPeople from "./../../pages/ourPeople";
import Press from "./../../pages/press";
import ContactPage from "./../../pages/contactPage";
import DrawerContext from "./../../contexts/drawerContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    postion: "relative",
  },
  // ========= STYLE FOR DESKTOP SECTION =========
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },

  // =========STYLE FOR MOBILE SECTION========
  sectionMobile: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  tab: {
    backgroundColor: "white",
    color: "black",
  },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        // p ={3} to make padding effectively inside elements
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function DemoTabs(props) {
  const { labelId, onChange, selectionFollowsFocus, value } = props;
  const [statusDrawer, setSatusDrawer] = useContext(DrawerContext);
  console.log(DrawerContext);
  // const history = useHistory();

  useEffect(() => {
    setSatusDrawer(statusDrawer);
  });

  console.log(statusDrawer);
  return (
    <div className="rootTabs">
      <Tabs
        aria-labelledby={labelId}
        variant="scrollable"
        onChange={onChange}
        selectionFollowsFocus={selectionFollowsFocus}
        value={value}
        className="tabs"
        orientation={statusDrawer ? "vertical" : "horizontal"}
      >
        <Tab label="Home" aria-controls="a11y-tabpanel-0" id="a11y-tab-0" />
        <Tab label="About" aria-controls="a11y-tabpanel-1" id="a11y-tab-1" />
        <Tab label="courses" aria-controls="a11y-tabpanel-2" id="a11y-tab-2" />
        <Tab
          label="our people"
          aria-controls="a11y-tabpanel-3"
          id="a11y-tab-3"
        />
        <Tab label="press" aria-controls="a11y-tabpanel-4" id="a11y-tab-4" />
        <Tab label="contact" aria-controls="a11y-tabpanel-5" id="a11y-tab-5" />
      </Tabs>
    </div>
  );
}
DemoTabs.propTypes = {
  labelId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  selectionFollowsFocus: PropTypes.bool,
  value: PropTypes.number.isRequired,
};

export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(0);
  const [statusDrawer, setSatusDrawer] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 

  return (
    <DrawerContext.Provider value={[statusDrawer, setSatusDrawer]}>
      <AppBar position="static" style={{ padding: -20, margin: 0 }}>
        <Toolbar className="header" style={{ padding: 0 }}>
          <div className="sub-header">
            <div className="group-logos">
              <Iconbuttonn
                onclick={() => {
                  localStorage.removeItem("usertoken");
                  history.push(`/`);
                  console.log("logout!")
                }}
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <img src="logo.jpg" className="logo" alt="logo" />
              </Iconbuttonn>
              <h2 className="title">
                Sabai Code
                <p>Coding and STEM for the Youngters</p>
              </h2>
            </div>
            <div className="botton-links">
              <div className={classes.sectionDesktop}>
                <DemoTabs
                  labelId="demo-a11y-tabs-automatic-label"
                  selectionFollowsFocus
                  onChange={handleChange}
                  value={value}
                />
              </div>
            </div>
            <div className="drawer">
              <div className={classes.sectionMobile}>
                <div>
                  {/* Update Status Drawer */}
                  <IconButton onClick={() => setSatusDrawer(true)}>
                    <MenuIcon style={{ color: " #000000" }} fontSize="large" />
                  </IconButton>
                  <MapDrawer
                    open={statusDrawer}
                    anchor="right"
                    style={{ minWidth: 400 }}
                  >
                    <List>
                      <ListItem button onClick={() => setSatusDrawer(false)}>
                        <ListItemIcon>
                          <ClearIcon fontSize="medium" color="secondary" />
                        </ListItemIcon>
                        <ListItemText style={{ color: "red" }}>
                          Close Drawer
                        </ListItemText>
                      </ListItem>
                      <Divider />
                    
                      <DemoTabs
                        labelId="demo-a11y-tabs-manual-label"
                        onChange={handleChange}
                        value={value}
                      />
                    </List>
                  </MapDrawer>
                </div>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Course />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <OurPeople />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Press />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <ContactPage />
      </TabPanel>
      <TabPanel value={value} index={6}></TabPanel>
    </DrawerContext.Provider>
  );
}
