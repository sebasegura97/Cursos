import React from 'react'
import './timer.css'

function Timer(props){
  return(
    <div className="Timer">
      <p>
        <span> {props.formatCurrentTime} / {props.duration} </span>
      </p>
    </div>
  )
}

export default Timer
