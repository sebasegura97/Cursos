import schema from '../schemas/index.js';
import { fromJS } from 'immutable'
import { SEARCH_ENTITIES } from '../actions-types/index';

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: '',
})

function data(state = initialState, action){

  switch (action.type) {

    case SEARCH_ENTITIES:
    {
      // console.log('SEARCH_VIDEO se esta llamando');
      // let results = []
      //
      // state.data.categories.map( category => {
      //   results = results.concat(category.playlist)
      // })
      //
      // results = results.filter(item => {
      //   const author = item.author.toLowerCase()
      //   const query = action.payload.query.toLowerCase()
      //   return author.includes(query)
      // })
      //
      // // const list = state.data.categories[2].playlist;
      //
      //
      // return {
      //   ...state,
      //   search: results
      // }
      return state.set('search', action.payload.query)
    }

    default:

      return state
  }
}

export default data;
