import React from "react"
import { render } from "react-dom"

import config from "./config"
import RedBox from "redbox-react"
import App from "./components/App"

document.addEventListener("DOMContentLoaded", () => {
  let reactElement = document.getElementById("app")

  if (reactElement) {
    if (config.env === "development") {
      try {
        render(<App />, reactElement)
      } catch (e) {
        render(<RedBox error={e} />, reactElement)
      }
    } else {
      render(<App />, reactElement)
    }
  }
})

//EDIT FROM HERE