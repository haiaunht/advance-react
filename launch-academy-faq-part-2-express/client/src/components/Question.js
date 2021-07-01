import React from 'react'

const Question = props => {
  let answer, button, questionClass

  // props.selected is true or false from FAQList
  // if selected === true, there is questionClass, button, and answer => else qustionClass and button
  if (props.selected) {
    questionClass = 'selected-question'
    button = (
      <i
        onClick={props.handleClick}
        className="fa fa-minus-square fa-2x green"
        aria-hidden="true"
      />
    )
    answer = props.answer
  } else {
    questionClass = 'unselected-question'
    button = (
      <i
        onClick={props.handleClick}
        className="fa fa-plus-square fa-2x"
        aria-hidden="true"
      />
    )
  }

  return (
    <div>
      <div className={questionClass}>
        <h5 className="margin-left" onClick={props.handleClick}><span>{button}   </span>{props.question}</h5>
      </div>
      <p className="margin-left">{answer}</p>
    </div>
  )
}

export default Question
