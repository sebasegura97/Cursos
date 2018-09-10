import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


function Layout(props){
  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        {
          props.loading &&
          props.loader
        }

      </View>
      <View style={styles.video}>
        {props.video}
      </View>

      {
        props.controls
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingTop: '56.25%',
    // height: 200,
    // width: 300
  },
  video: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Layout
