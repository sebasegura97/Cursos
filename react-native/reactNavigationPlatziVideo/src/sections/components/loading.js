import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ActivityIndicator
} from 'react-native'

function Loading(props){
    return(
        <View style={styles.container}>
            <Image
            source={require('../../../assets/Logo2018.png')}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 80,
        alignItems: 'center',
        marginBottom: 10,
    }
})

export default Loading;