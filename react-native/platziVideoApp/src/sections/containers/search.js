import React, { Component }  from 'react'
import {
    TextInput,
    StyleSheet
} from 'react-native'
import API from '../../../utils/api'
import { connect } from 'react-redux'

class Search extends Component{
    state = {
        text: '',
    }
    handleSubmit = async () => {
        const movies = await API.searchMovie(this.state.text);
        console.log(movies)
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: movies[0]
            }
        })
    } 
    
    render(){
        return(
            <TextInput 
                placeholder="Busca tu pelicula favorita"
                underlineColorAndroid='transparent'
                autoCorrect={false}
                autoCapitalize='sentences'
                onSubmitEditing={this.handleSubmit}
                // onChangeText={this.handleOnChangeText}
            />
        )
    }
}

export default connect () (Search)