import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {

// Esto es necesario en ECMASCRIPT 6 para asignar el contexto
// de la funcion handleClick y que el titulo sea parte de esta:
  // constructor(props){
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this)
  // }

// Con ECMASCRIPT 7 directamente usamos una arrow function ya que las
// a.f heredan el contexto del padre
  //
  handleClick = (event) => {
    this.props.openModal(this.props.id);
  }

// Esto se necesita para cambiar el estado en ECMASCRIPT 6
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     author: props.author
  //   }
  // }

//Con ECMASCRIPT 7 podemos hacerlo mucho mas sencillo:

  // state = {
  //   author: 'Sebastian Segura',
  // }

  render(){
    return(
      <div
        className="Media"
        onClick = {this.handleClick}
      >
        <div className="Media-cover">
          <img
            className="Media-image"
            src={this.props.cover}
            alt=""
            width={260}
            height={160}
          ></img>
        </div>
        <h3 className="Media-tittle">{this.props.title}</h3>
        <p className="Media-author">{this.props.author}</p>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video','audio'])
}

export default Media;
