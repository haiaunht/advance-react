import React from "react"
import { Route, Switch, Link } from "react-router-dom"
import Resume from "./Resume"
import ProjectsIndex from "./ProjectsIndex"
import ProjectShow from "./ProjectShow"
import About from "./About"
import SkillsList from "./SkillsList"
import WorkExperiencesList from "./WorkExperiencesList"
import EducationExperiencesList from "./EducationExperiencesList"
import VolunteerExperiencesList from "./VolunteerExperiencesList"

const Navbar = props => {
  return (
    <div className="layout">      
      <div className="top-bar grid-x">
        <div className="top-bar-left">
          <Link to="/" >Home</Link>
        </div>

        <div className="top-bar-left">
          <Link to="/skills">Skills</Link>
        </div>

        <div className="top-bar-left">
          <Link to="/work-experiences" >Experiences</Link>
        </div>

        <div className="top-bar-left">
          <Link to="/education-experiences" >Educations</Link>
        </div>

        <div className="top-bar-left">
          <Link to="/volunteer-experiences" >Volunteer Experiences</Link>
        </div>

        <div className="top-bar-left">
         <Link to="/resume" > Resume </Link>          
        </div>
        
        <div className="top-bar-right">
          <Link to="/projects" > Projects </Link>
        </div>      
      </div>

     <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/skills" component={SkillsList} />
      <Route exact path="/work-experiences" component={WorkExperiencesList} />
      <Route exact path="/education-experiences" component={EducationExperiencesList} />
      <Route exact path="/volunteer-experiences" component={VolunteerExperiencesList} />
      <Route exact path="/resume" component={Resume}/>
      <Route exact path="/projects" component={ProjectsIndex}/>
      <Route exact path="/projects/:id" component={ProjectShow} />
     </Switch>
    </div>
  )
}


export default Navbar