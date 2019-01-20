import React, { PureComponent } from 'react'
import './generic-page.css'

class NotFound extends PureComponent{
    handleBackClick = () => {
        this.props.history.goBack();
    }
    handleForwardClick = () => {
        this.props.history.goForward();
    }
    handleRandomClick = () => {
        // generar numero aleatorio
        const random = Math.round(Math.random() * (10 - 1) + 1)
        
        // reemplaza el ultimo elemento en el historial
        this.props.history.push(`/videos?id=${random}`, {id: random})
    }
    render(){
        return(
            <div className="Page NotFound">
                <h1>404</h1>
                <h3 className="SadFace" >:(</h3>
                <h2>No encontramos la pagina que buscabas</h2>
                
                <button
                className="Button"
                onClick={this.handleForwardClick}
                >
                    Ir a la siguiente ruta 👉🏼
                </button>
                
                <button
                className="Button"
                onClick={this.handleBackClick}

                >
                    Ir a la ruta anterior 👈 
                </button>
                
                <button
                className="Button"
                onClick={this.handleRandomClick}

                >
                    video random 
                </button>
            </div>
        )
        
    }
}
export default NotFound