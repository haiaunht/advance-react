import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import Goodbye from "./Goodbye"
import Greeting from "./Greeting"
import Form from "./Form"
import CustomGreeting from "./CustomGreeting"
import "../assets/scss/main.scss"


const NavBar = props => {
  return (    
    <div className="layout" >
      <div className="top-bar grid-x">
        <div className="top-bar-left">
          <Link to="/greeting" >Greeting</Link>
        </div>
        <div className="top-bar-left">
          <Link to="/goodbye" >Goodbye</Link>
        </div>
        <div className="top-bar-right">
          <Link to="/custom" >Custom Greeting</Link>
        </div>
        {/* <ul className="menu">
          <li><Link to="/greeting" >Greeting</Link></li>
          <li><Link to="/goodbye" >Goodbye</Link></li>
          <li><Link to="/custom" >Custom Greeting</Link></li>
        </ul> */}
      </div>      
      
      <Switch>
        <Route exact path="/greeting" component={Greeting}/>
        <Route exact path="/goodbye" component={Goodbye}/>
        <Route exact path="/custom" component={CustomGreeting}/>
      </Switch>

    </div>
  )
}

export default NavBar
