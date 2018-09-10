import { fromJS } from 'immutable'
import { OPEN_MODAL , CLOSE_MODAL } from '../actions-types/index';


const initialState = fromJS({
  visibility: false,
  mediaId: null,
})

function modal(state = initialState, action){
  switch (action.type) {
    case OPEN_MODAL:
      return state.merge({
        visibility: true,
        mediaId: action.payload.mediaId,
      })
    case CLOSE_MODAL:
      return state.set('visibility', false)
    default:
      return (state) //si esta linea se rompe todo
  }
}

export default modal
