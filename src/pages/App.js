import React,{useEffect,useContext,useState} from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../components/containers/Header";
import Register from './registerAndLogin';
import GuardedRoute from './../components/containers/GuardRoute/GuardeRoute';
import AuthenticatedContext from './../contexts/authenticated';
import Home from './home';
function App() {
  // const [isAuthenticated,setIsAuthenticated] = useContext(AuthenticatedContext);
  // useEffect(() => {
  //   setIsAuthenticated(isAuthenticated);
  // });
  
  return (
    // <AuthenticatedContext.Provider value="provider">
    // <Router>
    //   <div className="App">
    //     {/* <Route exact path="/" component={Register} /> */}
    //     <GuardedRoute exact path="/home" component={Header} auth={true}/>
    //   </div>
    // </Router>
    
    // </AuthenticatedContext.Provider>  
    <div>
      <Header/>
    </div>
  );
}

export default App;
