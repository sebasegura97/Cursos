import React, { Component } from 'react';
import {
  Animated
} from 'react-native'

class Home extends Component {
  state = {
    opacity: new Animated.Value(0)
  }
  render() {
    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: this.state.opacity,
        }}
        >

      {this.props.children}
      </Animated.View>
      )
  }
  componentDidMount() {
    Animated.timing(
      this.state.opacity,
      {
        toValue: 1,
        duration: 500,
      }
    ).start();
  }
}

export default Home;
