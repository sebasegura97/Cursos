import { createStore } from 'redux'
import reducer from './reducers/videos.js'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// const store = createStore(
//     reducer, 
//     {
//     suggestionList: [],
//     categoryList: [],   
//     },  
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// )

const persistConfig = {
    key: 'root',
    storage,
    blackList: ['selectedMovie']
}
const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)


export { store, persistor };