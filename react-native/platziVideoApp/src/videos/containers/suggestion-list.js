import React, { Component } from 'react';
import {
  FlatList,
  Text,
} from 'react-native'
import Layout from '../components/suggestion-list-layout.js'
import Empty from '../components/empty.js'
import Separator from '../components/vertical-separator'
import Suggestion from '../components/suggestion'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    list: state.suggestionList
  }
}

class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias"/>
  itemSeparator = () => <Separator/>
  renderItem = ({item}) => {
    return(
      <Suggestion {...item}/>
    )
  }
  keyExtractor = (item) => item.id.toString()

  render(){
    return(
      <Layout
        title='Recomendados para ti'
      >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          renderItem={this.renderItem}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
        />

      </Layout>

    )
  }
}



export default connect(mapStateToProps)(SuggestionList)
