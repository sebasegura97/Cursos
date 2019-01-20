import React from 'react';
import {
  ProgressBarAndroid,
  ProgressViewIOS,
  Platform,
  StyleSheet
} from 'react-native';

function ProgressBar(props) {

  return(
    Platform.select({
      // ios: <ProgressViewIOS progress={props.progress} style={styles.progressBar}/>,
      //
      // android: <ProgressBarAndroid progress={props.progress} style={styles.progressBar}/>,
      ios:  <ProgressViewIOS  style={styles.progressBar} progressTintColor='black' trackTintColor='light-gray' progress={props.progress} />,
      android: <ProgressBarAndroid style={styles.progressBar} progress={props.progress}  />
    })
  )
}
const styles = StyleSheet.create({
  progressBar: {
    width: 220,
  }
})
export default ProgressBar
