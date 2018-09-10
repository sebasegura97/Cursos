import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import API from './utils/api';
import Player from './src/player/containers/player.js';
import { Provider } from 'react-redux'
import store from './store'


type Props = {}

export default class App extends Component<Props>{
  state = {
    // suggestionList: [],
    // categoryList: []
  }


  async componentDidMount(){
    const suggestionList = await API.getSuggestions(10);
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })

    const categoryList = await API.getMovies();
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
  }
  render(){
    return(
      <Provider
        store={store}
      >
        <Home>
          <Header />
          <Player />
          <Text>header</Text>
          <Text>buscador</Text>
          <CategoryList />
          <SuggestionList />

        </Home>
      </Provider>      
    )
  }
}
