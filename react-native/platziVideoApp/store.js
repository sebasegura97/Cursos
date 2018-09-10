import { createStore } from 'redux'
import reducer from './reducers/videos.js'

const store = createStore(
    reducer, 
    {
    suggestionList: [],
    categoryList: [],   
    },  
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

export default store;