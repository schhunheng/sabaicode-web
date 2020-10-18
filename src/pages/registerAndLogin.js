import React, {useState, useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import AuthenticatedContext from './../contexts/authenticated';
// import login from '../services/Users';
// import registerUser from '../services/Users';
import axios from 'axios';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
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

function allyProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}
function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
   width: 600,
    backgroundColor: "#5BE0E5",
    marginTop: "10%",
    marginLeft: `calc(50% - ${300}px)`,
    borderRadius: 5,
  },
  input: {
    padding: 10,
      margin: 10,
    width: 500,
    },
    labelInput: {
        
        fontSize: 16
  },
  btn: {
    padding: 10,
     width: 200,
    backgroundColor: "#00A550",
    color: "#FFF",
    fontSize: 16,
    borderRadius: 10,
    marginTop: 15,
  },
  selection: {
    padding: 10,
    width: 200,
    fontSize: 16,
    marginLeft: 10,
  },
}));
const RegisterAndLogin = () => {
  // tab props
  const history = useHistory();
  const classes = useStyles();
  
  const [value, setValue] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const registerUser = newUser => {
    return axios
      .post('users/register', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password
      })
      .then(response => {
        alert('Registered')
      })
  }
  const login = user => {
    return axios
      .post('users/login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        localStorage.setItem('usertoken', response.data);
        
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Form
  const { handleSubmit, register, errors } = useForm({
    reValidateMode: "onSubmit",
  });
  // useEffect(() => {
    
  // })
  // show data input in console
  const onSubmitRegister = (formData) => {
    // formData.preventDefault();
    console.log(formData);
    registerUser(formData);

    //   .then(res => {
    //     props.history.push(`/`);
    // })
  };
  const onSubmitLogin = (formData) => {
    console.log(formData);
    login(formData).then(res => {
      if (res) {
        // GuardRoute
        setIsAuthenticated(true);
        history.push(`/home`)
      }
    })
  }
  return (
    <AuthenticatedContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
    <Grid container justify="center">
      <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.root}>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label="Login" href="/drafts" {...allyProps(0)} />
            <LinkTab label="Register" href="/trash" {...allyProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Grid container>
              <Grid item>
                <div style={{textAlign:'center',backgroundColor: "#ebd234",padding:5,margin:10}}>
                  <img src="logo.jpg" className="logo" />
                </div>
                <form onSubmit={handleSubmit(onSubmitLogin)}>
                  <label  className={classes.labelInput}>Email: </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className={classes.input}
                      ref={register({required: true,})}
                  />
                  {errors.email&&<p>Do not exist email</p>}
                  <br />
                  <label  className={classes.labelInput}>Password: </label>
                  <input
                      name="password"
                    type="password"
                    placeholder="Password"
                    className={classes.input}
                      ref={register({required: true,})}
                  />
                  {errors.password && <p>wrong password</p> }
                  <br />
                 
                  <button className={classes.btn} type="submit">
                    Login
                  </button>
                </form>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container>
              <Grid item>
                <form onSubmit={handleSubmit(onSubmitRegister)}>
                  <label  className={classes.labelInput}>First Name : </label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className={classes.input}
                    ref={register({ required: true,minLength:3 })}
                  />
                  {errors.firstname&& <p>name is too short!</p>}
                  <br />
                  <label  className={classes.labelInput}>Last Name : </label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className={classes.input}
                    ref={register({ required: true })}
                  />
                  {errors.lastname&&<p>name is too short!</p>}
                  <br />
                  <label >Email : </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={classes.input}
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message:"invalid email address"
                  }  })}
                  />
                  {errors.email&&errors.email.message}
                  <br />
                  <label  className={classes.labelInput}>Password : </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={classes.input}
                    ref={register({
                      required: true,
                      minLength:8,
                    })}
                    
                  />
                  {errors.password&& <p>minlength 8 digits</p> }
                  <br />
                
                  <button type="submit" className={classes.btn}>
                    Register
                  </button>
                </form>
              </Grid>
            </Grid>
          </TabPanel>
        </Paper>
      </Grid>
    </Grid>
    </AuthenticatedContext.Provider>
  );
};

export default RegisterAndLogin;
