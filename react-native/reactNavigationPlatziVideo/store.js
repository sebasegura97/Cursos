import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

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
    blackList: ['navigation']
}
const navigationMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.navigation
);
const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(
    persistedReducer,
    applyMiddleware(navigationMiddleware)
    )
const persistor = persistStore(store)


export { store, persistor };