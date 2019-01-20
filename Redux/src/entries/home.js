import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home.js'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/index.js'
import data from '../schemas/index.js'
import { Map as map } from 'immutable'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

// function logger({getState, dispatch}){
//   return (next) => {
//     return (action) => {
//       console.log('este es mi viejo estado', getState().toJS());
//       console.log('vamos a enviar esta accion', action);
//       const value = next(action)
//       console.log('este es mi nuevo estado', getState().toJS());
//       return value
//     }
//   }
// }

// const logger = ({getState, dispatch}) => next => action => {
//   console.log('este es mi viejo estado', getState().toJS());
//   console.log('vamos a enviar esta accion', action);
//   const value = next(action)
//   console.log('este es mi nuevo estado', getState().toJS());
//   return value
// }

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
)

const homeContainer = document.getElementById('home-container');

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  homeContainer);