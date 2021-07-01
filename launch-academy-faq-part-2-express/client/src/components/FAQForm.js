import React, {useState} from "react"
import _ from "lodash"
import ErrorList from "./ErrorList"

const FAQForm = props => {

  const [questionRecord, setQuestionRecord] = useState({
    question: "",
    answer: ""
  })

  const [errors, setErrors] = useState({})

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["question", "answer"]
    requiredFields.forEach(field => {
      if (questionRecord[field].trim() === "") {
        submitErrors = {...submitErrors, [field]:"is blank"}
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (validForSubmission()) {
      props.addQuestion(questionRecord)      
    }     
    setQuestionRecord({
      question: "",
      answer: ""
    })
  }  

  const handleChangeInput = event => {
    event.preventDefault()
    setQuestionRecord({
      ...questionRecord,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearForm = event => {
    event.preventDefault()
    setQuestionRecord({
      question: "",
      answer: ""
    })
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <ErrorList errors={errors} />
        <label htmlFor="question">Question:
          <input type="text" name="question" value={questionRecord.question} onChange={handleChangeInput}/><br/>
        </label>

        <label htmlFor="answer">Answer:
          <input type="text" name="answer" value={questionRecord.answer} onChange={handleChangeInput}/><br/><br/>
        </label>

        <div className="button-group">
          <button className="button" onClick={clearForm}>Clear Form</button>
          <input className="button" type="submit" value="Add" />
        </div>
      </form>
    </div>
  )

}

export default FAQForm