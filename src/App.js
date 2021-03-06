import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider.js";

function App() {
    const[{}, dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log("THE USER IS >>>" ,authUser);
            
            if(authUser){
                //user just logged in
                dispatch({
                    type:'SET_USER',
                    user: authUser
                })
            }
            else{
               //user logged out

               dispatch({
                    type:'SET_USER',
                    user: null
                })
            }
        })
        //runs nl when app component loads...
    }, [])
return (
  
    <Router>
      <div className="app">
      <Switch>
        <Route path="/login">
      <Login/>

        </Route>
        <Route path="/checkout"> 
        <Header/> 
          <Checkout />
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
        </Route>
      </Switch>
      </div>
    </Router>
 
);
}
export default App;