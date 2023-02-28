import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SvgUri } from 'react-native-svg';
import Apilist from './Apilist/Apilist';
import axios from 'axios';

const Login = ({ navigation }) => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [isLoading, setisLoading] = useState(false)

    const { api_login } = Apilist()

    const authUser = () => {
        setisLoading(true)

        let requestBody = {
            email: username,
            password: password
        }

        console.log('--1--before login send...', requestBody)
        // return
        axios.post(api_login, requestBody)
            .then(function (response) {
                if (response.data.status == true) {
                    console.log('--2--login response...', response?.data)
                    navigation.navigate('Home')

                } else {
                    setisLoading(false)
                    console.log('not authorized...')
                    navigation.navigate('Home')
                }
            })
            .catch(function (error) {
                setisLoading(false)
                console.log('--2--login error...', error)
                navigation.navigate('Home')
            })

    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image style={styles.headerImg} source={require('../assets/media/graph.png')} />
                <Text style={styles.headText}>JUIDCO</Text>
            </View>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Welcome</Text>
                <Text style={styles.text}>Log in to your account</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.title}>Username</Text>
                <TextInput style={styles.input} onChange={(e) => setusername(e.nativeEvent.text)} value={username} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.title}>Password</Text>
                <TextInput style={styles.input} onChange={(e) => setpassword(e.nativeEvent.text)} value={password} />
            </View>

            <View style={styles.loginContainer}>
                <TouchableOpacity style={styles.login} onPress={authUser}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        height: '100%'
    },
    header: {
        width: '100%',
        height: 160,
        // backgroundColor: '#5271FF',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    headerImg: {
        width: 600,
        position: 'absolute',
        bottom: -100,
        transform: [{ rotate: '0deg' }]
        // height:100
    },
    text: {
        fontSize: 17
    },
    headText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,

    },
    welcomeContainer: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        fontSize: 45,
        fontWeight: 'bold',
        color: 'black'

    },
    inputContainer: {
        marginTop: 40,
        width: '100%',
        height: 45,
        backgroundColor: 'white',
        paddingVertical: 10,
        alignItems: 'center'
    },
    title: {
        width: '80%',

    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 2,
    },
    loginContainer: {
        marginTop: 60,
        width: '100%',
        alignItems: 'center'
    },
    login: {
        width: '80%',
        height: 50,
        backgroundColor: '#5271FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,


    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
    }
})