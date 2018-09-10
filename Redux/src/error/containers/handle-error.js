import React, { Component } from 'react'
import RegularError from '../components/regular-error.js'

class HandleError extends Component {

  state = {
    handleError: false,
  }

  componentDidCatch(error, info){
    this.setState({
      handleError: true,
    })
    // envia este error a un servicio como Sentry

  }

  render(props){
    if (this.state.handleError){
      return(
        <RegularError/>
      )
    }
    return this.props.children
  }
}

export default HandleError;
