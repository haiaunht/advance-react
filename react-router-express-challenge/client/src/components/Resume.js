import React from "react"
import { Link } from "react-router-dom"
import SkillsList from "./SkillsList"
import VolunteerExperiencesList from "./VolunteerExperiencesList"
import WorkExperiencesList from "./WorkExperiencesList"
import EducationExperiencesList from "./EducationExperiencesList"

const Resume = props => {
  return (
    <div className="small-12 small-centered columns">
      <h1 className="page-title text-center"> Jane Jupiter, Developer </h1>
      <div className="small-3 columns">
        <h3>
          <Link to="/skills">Skills</Link>
        </h3>
      </div>
      <div className="small-3 columns">
        <h3>
          <Link to="/education-experiences">Education</Link>
        </h3>
      </div>
      <div className="small-3 columns">
        <h3>
          <Link to="/work-experiences">Past Work</Link>
        </h3>
      </div>
      <div className="small-3 columns">
        <h3>
          <Link to="/volunteer-experiences">Volunteer Experience</Link>
        </h3>
      </div>

      <div className="resume-section" id="skills">
        <SkillsList />
      </div>
      <div className="resume-section" id="education">
        <EducationExperiencesList />
      </div>
      <div className="resume-section" id="past-work">
        <WorkExperiencesList />
      </div>
      <div className="resume-section" id="volunteer-experience">
        <VolunteerExperiencesList />
      </div>
    </div>
  )
}

export default Resume
