import React, {useState} from "react"
import ErrorList from "./ErrorList"
import _ from "lodash"

const ReviewForm = props => {
  //setting reviewRecord to {}, and pass this record up to App when user submit successfully
  const [reviewRecord, setReviewRecord] = useState({
    name: "",
    rating: "",
    content: ""
  })
  const [errors, setErrors] = useState({})

  const handleInputChange = event => {   
    setReviewRecord({
      ...reviewRecord,
      [event.currentTarget.name]: event.currentTarget.value     
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "rating", "content"]
    requiredFields.forEach(field => {
      if (reviewRecord[field].trim() === "") {
        submitErrors = {...submitErrors, [field]:"is blank"}
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const onSubmitHandler = event => {
    event.preventDefault()
    
    if (validForSubmission()) {
      props.addReview({...reviewRecord, restaurant_id: props.selectedId})
    }
    
    setReviewRecord({
      name: "",
      rating: "",
      content: ""
    })
  }

  const clearForm = (event) => {
    event.preventDefault()
    setReviewRecord({name: "",restaurant_id: 'jm-curley-boston', rating: 0, content: ""})
  }


  return (
    <div>
      <form className="callout" onSubmit={onSubmitHandler}>
        <ErrorList errors={errors} />
        <label htmlFor="name">Your Name
          <input id="name" type="text" name="name" onChange={handleInputChange} value={reviewRecord.name}/>
        </label>

        <label htmlFor="rating">Rating: 
           1<input type="radio" id="rating-1" name="rating" onChange={handleInputChange} value="20" />
           2<input type="radio" id="rating-2" name="rating" onChange={handleInputChange} value="40" />
           3<input type="radio" id="rating-3" name="rating" onChange={handleInputChange} value="60" />
           4<input type="radio" id="rating-4" name="rating" onChange={handleInputChange} value="80" />
           5<input type="radio" id="rating-5" name="rating" onChange={handleInputChange} value="100" />
        </label>

        <label htmlFor="content">Your Review
          <input id="content" type="text" name="content" onChange={handleInputChange} value={reviewRecord.content}/>
        </label>

        <div className="button-group">
          <button className="button" onClick={clearForm}>Clear Form</button>
          <input className="button" type="submit" value="Submit" ></input>
        </div>
      </form>
    </div>
  )
}

export default ReviewForm