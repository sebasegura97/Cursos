import React, { Component, Fragment } from 'react';
import Header from '../../sections/components/header';
import SuggestionList from '../../videos/containers/suggestion-list';
import CategoryList from '../../videos/containers/category-list';
import API from '../../../utils/api';
import { connect } from 'react-redux'
import Movie from '../../screens/containers/movie'
import Search from '../../sections/containers/search'


class Home extends Component {
  static navigationOption = () => {
    return{
      header: Header,
    }
  }
  async componentDidMount() {
    const suggestionList = await API.getSuggestions(10);
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList,
      }
    })

    const categoryList = await API.getMovies();
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
  }
  render() {
    if (this.props.selectedMovie) {
      return <Movie />
    }
    return (
      <Fragment>
        <Search />
        <CategoryList />
        <SuggestionList />
      </Fragment>
    )
  }
}


export default connect(null)(Home);
