import React from 'react'
import FullScreenIcon from '../../icons/components/full-screen.js'
import './full-screen.css'

const FullScreen = (props) =>{
return(
  <div
    className="FullScreen"
    onClick={props.handleFullScreenClick}
  >
    <FullScreenIcon
      size={25}
      color="white"
    />
  </div>
)

}

export default FullScreen
