import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ArticleShow = props => {
  const [article, setArticle] = useState({})

  const fetchArticle = async () => {
    let id = props.match.params.id

    try {
      const response = await fetch(`/api/v1/articles/${id}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }

      const body = await response.json()
      setArticle(body.article)
    } catch (err) {
      console.error(`Error in fetch launcher: ${err.message}`)
    }
  }

  useEffect( () => {
    fetchArticle()
  }, [])

  return (
    <div className="article-show">
      <h2 className="text-center">{article.title}</h2>
      <p className="content">{article.content}</p>
      <h3 className="text-center"><Link to="/">Home</Link></h3>
    </div>
  )
}

export default ArticleShow
