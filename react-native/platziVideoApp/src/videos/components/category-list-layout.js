import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

function CategoryListLayout(props){
  return(
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={styles.container}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        {props.children}
      </View>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 8,

  },

})
export default CategoryListLayout
