import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout.js'
import Video from '../components/video.js'
import Title from '../components/title.js'
import PlayPause from '../components/play-pause.js'
import Timer from '../components/timer.js'
import Controls from '../components/video-player-controls.js'
import ProgressBar from '../components/progress-bar.js'
import Spinner from '../components/spinner.js'
import Volume from '../components/volume.js'
import FullScreen from '../components/full-screen.js'
import { connect } from 'react-redux'
class VideoPlayer extends Component{

  state = {
    pause: true,
    duration: 0,
    secDuration:0,
    currentTime: 0,
    formatCurrentTime: 0,
    loading: false,
  }

  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause,
      }
    )
  }

  componentDidMount(){
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.formattedTime(this.video.duration),
      secDuration: this.video.duration,
    })
  }

  handleTimeUpdate = event => {
    this.setState({
      // necesito el tiempo en segundos para el progress bar:
      currentTime: this.video.currentTime,
      // el tiempo en minutos para el timer:
      formatCurrentTime: this.formattedTime(this.video.currentTime)
    })
  }

  formattedTime = (secs) =>{
    const minutes = parseInt(secs/60, 10)
    const seconds = parseInt(secs % 60, 10)
    return `${minutes} : ${seconds}`
  }

  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }

  handleSeeking = event => {
    this.setState({
      loading:true,
    })
  }

  handleSeeked = event => {
    this.setState({
      loading:false,
    })
  }
  handleVolumeChange = event => {
    this.video.volume = event.target.value
  }

  handleVolumeClick = () => {
    const prev = this.video.volume
    this.video.volume != 0 ? this.video.volume = 0 : this.video.volume = 1
  }
  handleFullScreenClick = event =>{
    if(!document.webkitIsFullScreen){
      this.player.webkitRequestFullscreen()
    } else{
      document.webkitExitFullscreen()
    }
  }
  setRef = element =>{
    this.player = element
  }
  render(){
    return(
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title
          title={this.props.media.get('title')}
        />
        <Video
          src={this.props.media.get('src')}
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate = {this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />

        <Controls>
          <PlayPause
            pause = {this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={this.state.duration}
            formatCurrentTime={this.state.formatCurrentTime}
          />
          <ProgressBar
            secDuration={this.state.secDuration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            handleVolumeClick={this.handleVolumeClick}
          />
          <FullScreen
            handleFullScreenClick = {this.handleFullScreenClick}
          />
        </Controls>

        <Spinner
          active={this.state.loading}
        />

      </VideoPlayerLayout>
    )
  }
}
function mapStateToProps(state, props){
  return {
    media: state.get('data').get('entities').get('media').get(props.id)
  }
}
export default connect(mapStateToProps)(VideoPlayer)
