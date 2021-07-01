import express from "express"
import getClientIndexPath from "../config/getClientIndexPath.js"

const router = new express.Router()

// PAY ATTENTION on /work-experiences, /education-experiences... Missing / in front will not work when refresh
const clientRoutes = ["/client", "/name", "/", "/resume", "/projects", 
                      "/projects/:id", "/skills", "/work-experiences", "/education-experiences", "/volunteer-experiences"]
router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath())
})

export default router
