import React from 'react'
import Play from '../../icons/components/play.js'
import Pause from '../../icons/components/pause.js'
import './play-pause.css'


function PlayPause(props){
  return(

    <div className="PlayPause">
      {
        props.pause ?
          <button
            className="PlayPause button"
            onClick={props.handleClick}
          >
            <Play
              size = {25}
              color="white"
            />
          </button>
        :
        <button
          className="PlayPause button"
          onClick={props.handleClick}
        >
          <Pause
            size={25}
            color="white"
          />
        </button>
      }

    </div>




  )
}

export default PlayPause
