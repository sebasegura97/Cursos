import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
import Name from '../profile/components/name.js'

class Profile extends Component {
    handlePress = () => {
        // console.log(this.props.navigation);
        this.props.navigation.navigate('Home')
    }
    setParams = () => {
        this.props.navigation.setParams({
            name: 'Y eña',
        })
    }
    static navigationOptions = ({ navigation }) => {
        return{
            title: `${navigation.getParam('name')} ${navigation.getParam('age', 23)}`,
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Profile</Text>
                <Button
                    title="Home"
                    onPress={this.handlePress}
                />
                <Button 
                    title="Cambiar nombre"
                    onPress={this.setParams}
                />
                <Name />
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

export default Profile;