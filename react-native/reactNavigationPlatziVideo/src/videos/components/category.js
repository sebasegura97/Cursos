import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

// async getGeneros(props) {
//   const generos = await props.genres[1];
//   console.log(generos);
// }

function Category(props) {

  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <ImageBackground
        style={styles.wrapper}
        source={{
          uri: props.background_image
        }}
      >
        <Text
          style={styles.genre}
        >
          {/* No podemos mostrar el genero debido a que uno de los valores del array de la api es undefined */}
          Genero

        </Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, .75)',
    textShadowOffset: {
      width: -2,
      height: 2,
    },
    textShadowRadius: 1,
  }
})

export default Category
