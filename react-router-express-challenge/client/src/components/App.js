import React from "react"
import { hot } from "react-hot-loader/root"
import { BrowserRouter, Route } from "react-router-dom"
import Navbar from "./Navbar"

import "../assets/scss/main.scss"

const App = props => {
  // this navbar will render each page beacuse each router start with "/". NOTE that NO "exact"
  return(
    <BrowserRouter>   
      <Route  path="/" component={Navbar}/>
    </BrowserRouter>
  )
    
}

export default hot(App)
