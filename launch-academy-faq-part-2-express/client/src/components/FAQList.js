import React, { useEffect, useState } from 'react'
import Question from './Question'
import FAQForm from './FAQForm'
import { hot } from "react-hot-loader/root"
import { Link } from "react-router-dom"

const FAQList = props => {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState([])  

  const toggleQuestionSelect = id => {
    if (id === selectedQuestion) {
      setSelectedQuestion(null)
    } else {
      setSelectedQuestion(id)
    }
  }

  const getAllFAQ = async () => {    
    try {
      const response = await fetch('http://localhost:3000/api/v1/questions')
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }      
      const responseData = await response.json()
      setQuestions(responseData.questions)
      console.log(questions)
    } catch(err) {
      console.log(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getAllFAQ()
  },[])

  const addQuestion = async (formPayload) => {
    try {
      const response = await fetch('/api/v1/questions', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(formPayload)
      })

      if (!response.ok) {
        if (response.status === 422) {
          const error = await response.json()
          return setErrors(error.errors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw(error)
        }
      }

      const body = await response.json()
      // setQuestions(questions.concat(body.question))
      setQuestions([...questions,body.question])
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }


  const questionListItems = questions.map(question => {
    let selected
    if (selectedQuestion === question.id) {
      selected = true
    }

    let handleClick = () => {
      toggleQuestionSelect(question.id)
    }  

    return (
      <Question
        key={question.id}
        question={question.question}
        answer={question.answer}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })

  return (
    <div className="page">
      <h1>We Are Here To Help</h1>
      <FAQForm addQuestion={addQuestion}/>
      <div className="question-list">{questionListItems}</div>
      <h3 className="text-center"><Link to="/launchers">Launcher List</Link></h3>
    </div>
  )
}

export default hot(FAQList)
