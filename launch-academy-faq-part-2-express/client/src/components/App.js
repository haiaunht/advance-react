import React from "react"
import { hot } from "react-hot-loader/root"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import FAQList from "./FAQList"
import LauncherList from "./LauncherList"
import LauncherShow from "./LauncherShow"
import "../assets/scss/main.scss" 

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FAQList}/>
        <Route exact path="/launchers" component={LauncherList} />
        <Route exact path="/launchers/:id" component={LauncherShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)


