import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/home.js'
import About from './src/screens/about'
import Login from './src/screens/login'
import Profile from './src/screens/profile'


const AppNavigator = createStackNavigator(
  // routeConfig
  {
    Home:{
      screen: Home,
      path: 'home/',
      navigationOptions: {
        title: 'Esta es la home',
      }
    },
    About,
    Login,
    Profile
  },
  // stackNavigatorConfig:
  // title                                  headerStyle 
  // header                                 headerForceInset
  // headerTitle                            headerTitleStyle
  // headerAllowFontScalling                headerTintColor
  // headerBackImage                        headerPressColorAndroid
  // headerBackTitle                        headerTransparent
  // headerTruncatedBackTitle               headerBackground
  // headerRight                            gesturesEnabled 
  // headerLeft                             gesturesResponseDistance
  //                                        gesturesDirection
  {
    initialRouteName: 'Login',
    navigationOptions: {
      title: 'Un titulo generico',
      headerTitleAllowFontScaling: true,
      headerBackTitle: 'Atras',
      gesturesEnabled: true,
      headerBackImage: <Text>🇦🇷  </Text>
      // headerBackImage: '',
      // header: <Text style={{color: 'white'}}> Esto es un header </Text>,
    },
    initialRouteKey: 'login',
    initialRouteParams: {
      nombre: 'Sebastian Segura',
    },
    headerMode: 'float', // Al cambiar de pantalla el header desaparece y aparece el nuevo. values: none, screen, float.
    mode: 'card', // values: card, modal
    cardStyle: {
      borderWidth: 2,
      // backgroundColor: 'red',
    },
    // headerTransitionPreset: 'fade-in-place' | 'uikit'
    headerTransitionPreset: 'uikit',
  }
)

const Main = createStackNavigator(
  {
    Main: {
      screen: AppNavigator,
    },
    Login: {
      screen: Login,
    }
  },
  {
    mode: 'card',
    headerMode: 'none'
  }

)

export default Main;