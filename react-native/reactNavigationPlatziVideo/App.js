import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from './src/sections/components/loading'
import AppLayout from './src/app'
import AppNavigatorWithState from './src/app-navigator-with-state'


type Props = {}

export default class App extends Component<Props>{
  
  render(){
    return(
      <Provider
        store={store}
      >
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <AppNavigatorWithState />
        </PersistGate>
      </Provider>      
    )
  }
}
