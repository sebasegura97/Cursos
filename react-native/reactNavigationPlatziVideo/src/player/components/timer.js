import React from 'react'
import {
  Text
} from 'react-native'

function Timer(props){
  return(
    <Text>0:{props.minutos}:{props.segundos}</Text>
  )
}

export default Timer
