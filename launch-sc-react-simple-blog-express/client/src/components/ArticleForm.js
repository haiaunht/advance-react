import React, { useState, useEffect } from "react"
import _ from "lodash"
import ErrorList from "./ErrorList"

const ArticleForm = props => {
  const [articleRecord, setArticleRecord] = useState({
    title: "",
    content: ""
  })
  const [errors, setErrors] = useState({})
  
  const handleChangeInput = event => {
    event.preventDefault()
    setArticleRecord({
      ...articleRecord,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  
  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["title", "content"]
    requiredFields.forEach(field => {
      if (articleRecord[field].trim() === "") {
        submitErrors = {...submitErrors, [field]:"is blank"}
      }
    })    
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  } 

  const handleSubmit = event => {
    event.preventDefault()  

    if (validForSubmission()) {
      props.addNewArticle(articleRecord)
    }     
  }

  const clearForm = event => {    
    event.preventDefault()
    setArticleRecord({
      title: "",
      content: ""
    })
    setErrors({})
  }
  
  return (
    <form className="new-article-form callout success" onSubmit={handleSubmit}>
      <ErrorList errors={errors} />
      <label>
        Article Title:
        <input
          name="title"
          id="title"
          type="text"
          onChange={handleChangeInput}
          value={articleRecord.title}
        />
      </label>
      <label>
        Article Content:
        <textarea
          name="content"
          id="content"
          onChange={handleChangeInput}
          value={articleRecord.content}
        />
      </label>

      <div className="button-group">
        <button className="button" onClick={clearForm}>Clear</button>
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default ArticleForm
