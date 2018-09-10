import React from 'react'
import {
  TouchableHighlight,
  TouchableWOpacity,
  TouchableWithoutFeedback,
  Text,
  Platform,
  StyleSheet,
} from 'react-native'
import Icon from '../../icons/components/icon.js'

function PlayPause(props){

  const iconPlay = Platform.select({
    ios: 'ios-play',
    android: 'md-play',
  })
  const iconPause = Platform.select({
    ios: 'ios-pause',
    android: 'md-pause',
  })

  return(

    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      underlayColor="rgba(0,0,0,.3)"
      // hitSlop permite darle un mayor radio de reaccion al boton ante el toque del dedo
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5,
      }}
    >
      {
        props.paused ?
          <Icon
            iconName={iconPlay}
            style={styles.icon}
          />
        :
        <Icon
          iconName={iconPause}
          size={20}
          style={styles.icon}

        />
      }

    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 25,
    width: 25,
  },
  icon: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold'
  }
})

export default PlayPause
