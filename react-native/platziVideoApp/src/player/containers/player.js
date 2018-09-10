import React, { Component } from 'react'
import Video from 'react-native-video'
import Layout from '../components/layout'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause.js'
import ProgressBar from '../components/progress-bar.js'
import FullScreen from '../components/full-screen.js'
import Timer from '../components/timer.js'

import {
  StyleSheet,
  ActivityIndicator
} from 'react-native';

class Player extends Component {
  state = {
    loading: true,
    paused: false,
    progress: 0,
    minutos: '00',
    segundos: '00',
    progressInSeconds: 0,
  }
  onPress={}
  onErrorVideo = (error) => {
    console.log(error);
  }
  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering,
    })

  }
  onPlayPause = () => {
    this.setState({
      paused: !this.state.paused,
    })
  }
  currentTime = () => {
  }

  setProgress = ( payload ) => {
    this.setState({
      progress: (payload.currentTime / payload.seekableDuration ),
    })
    set = () => {
      if (this.state.progressInSeconds == 59)
      {
        this.setState({
          segundos: 59,
          minutos: this.state.minutos - 1,
          progressInSeconds: 0
        })
      }
      else {
        this.setState({
          segundos: this.state.segundos - 1,
          progressInSeconds: this.state.progressInSeconds + 1
        })
      }
    }
    setTimeout(set, 1000)

  }
  onFullScreen = () => {
    this.player.presentFullscreenPlayer()
  }
  setTime = (payload) => {
    const minutos = Math.floor(payload.duration / 60)
    const segundos = Math.floor(payload.duration % 60)
    this.setState({
      minutos: minutos,
      segundos: segundos,
    })


  }

  render() {
    return(
      <Layout
        loading={this.state.loading}
        video= {
          <Video
            ref = { (ref) => {
              this.player = ref
            }}
            source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={styles.video}
            resizeMode='cover'
            onError={this.onErrorVideo}
            onBuffer={this.onBuffer}
            paused={this.state.paused}
            progressUpdateInterval={1000}
            onProgress={this.setProgress}
            onLoad={this.setTime}
          />
        }
        loader={
          <ActivityIndicator
            color='red'
          />
        }
        controls={
          <ControlLayout>
            <PlayPause
              paused={this.state.paused}
              onPress={this.onPlayPause}
            />

            <ProgressBar
              progress={this.state.progress}
            />
            <FullScreen
              onFullScreen={this.onFullScreen}
            />
            <Timer
              minutos={this.state.minutos}
              segundos={this.state.segundos}
            />
          </ControlLayout>
        }
      />

      )


  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
})

export default Player
