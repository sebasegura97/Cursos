import React, { Component } from 'react'
import Search from '../components/search.js'
import { connect } from 'react-redux' //sirve para traer a dispatch()
import { searchEntities } from '../../actions/index'
import { bindActionCreators } from 'redux'
import * as actions from  '../../actions/index'

class SearchContainer extends Component {
state = {
  value: 'Luis Fonsi'
}
handleSubmit = event => {
  // console.log(this.input.value,'submit');

  event.preventDefault(); // No dejar que se actualice la pagina

  // REDUX
  this.props.actions.searchAsyncEntities(this.input.value)
}

setInputRef = element => {
  this.input = element;
}
handleInputChange = event =>{
  this.setState({
    value: event.target.value.replace(' ', '-')
  })
}
render(){
    return(
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange = {this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SearchContainer);
