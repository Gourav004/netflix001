import React from 'react'

const GPTMovieSuggestions = (props) => {
  return (
    <div className="card">
  <div className="card-img"><img src={props.poster} alt= {props.name} /></div>
  <div className="card-info">
    <p className="text-title">{props.name} </p>
    {/* <p className="text-body">Movie description and details</p> */}
    
  </div>
  <div className="card-footer">
  <span className="text-title">{props.year}</span>
  <div className="card-button">
    +
  </div>
</div>
</div>
  )
}

export default GPTMovieSuggestions
