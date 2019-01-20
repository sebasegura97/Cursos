import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
import { NavigationActions } from 'react-navigation'

class Login extends Component {
    handlePress = () => {
        this.props.navigation.dispatch(
            NavigationActions.navigate({
                routeName: 'About',
            })
        )
        console.log(this.props.navigation);
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Login</Text>
                <Button
                    title="Ir al about"
                    onPress={this.handlePress}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Login;