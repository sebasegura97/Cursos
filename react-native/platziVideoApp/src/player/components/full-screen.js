import React from 'react'
import Icon from '../../icons/components/icon.js'
import {
  Platform,
  TouchableHighlight
} from 'react-native'

function FullScreen(props) {
  const icon = Platform.select({
    ios: 'ios-expand',
    android: 'md-expand'
  })
  return(
    <TouchableHighlight
      onPress={props.onFullScreen}
    >
      <Icon
        iconName={icon}
      />
    </TouchableHighlight>

  )
}

export default FullScreen
