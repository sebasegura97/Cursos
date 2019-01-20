import React, {Component} from 'react'
import {
    Animated
} from 'react-native'
import MovieLayout from '../components/movie-layout';
// import Player from '../../player/containers/player.js';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close'
import { connect } from 'react-redux'
import Details from '../../videos/components/details';

class Movie extends Component{
    state = {
        opacity: new Animated.Value(0)
    }
    closeVideo = () => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: null,
            }
        })
    }
    render(){
        return(
            <Animated.View
                style={{
                    flex:1,
                    opacity: this.state.opacity,
                }}
            >
                <MovieLayout>
                    <Header>
                        <Close 
                            onPress={this.closeVideo}
                        />
                    </Header>
                    {/* <Player /> */}
                    <Details 
                        {...this.props.movie}
                    />
                </MovieLayout>
            </Animated.View>
        )
    }
    componentDidMount(){
        Animated.timing(
            this.state.opacity,
            {
                toValue: 1,
                duration: 500,
            }
        ).start();
    }
}
function mapStateToProps(state){
    return{
        movie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(Movie)