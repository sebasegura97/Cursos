import{
  CLOSE_MODAL,
  OPEN_MODAL,
  SEARCH_ENTITIES,
  SEARCH_ASYNC_ENTITIES,
  IS_LOADING
} from '../actions-types/index'

export function openModal(mediaId){
  return{
    type: OPEN_MODAL,
    payload: {
      mediaId
    }
  }
}
export function closeModal(mediaId){
  return{
    type: CLOSE_MODAL,
  }
}

export function searchEntities(query){
  return{
    type: SEARCH_ENTITIES,
    payload: {
      query,
    }
  }
}


export function searchAsyncEntities(query){
  return (dispatch) => {
    dispatch(isLoading(true))
    setTimeout( () => {
      dispatch(isLoading(false))
      dispatch(searchEntities(query))
    } , 5000)
  }
}

export function isLoading(value){
  return{
    type: IS_LOADING,
    payload: {
      value
    }
  }
}
