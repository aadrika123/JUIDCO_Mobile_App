import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function SplashScreen() {
    return (
        <View style={styles.container}>
            {/* <View style={styles.imageContainer}>
                <Image style={styles.headerImg} source={require('../assets/media/globe.png')} />
            </View> */}
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Mange your tax the best way</Text>
                <Text style={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit a at consectetur repellat animi.</Text>
                <Text style={styles.loadingText}>Loding..</Text>
            </View>
        </View>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5271FF',
        height: '100%',
        justifyContent:'center'

    },
    imageContainer: {
        width: 400,
        padding:40
    },

    headerImg: {
        width: 400,
        position: 'absolute',
    },
    
   
    welcomeContainer: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        width: '80%',
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        lineHeight:50

    },
    desc: {
        marginTop:20,
        width: '80%',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        lineHeight:30
    },
    loadingText:{
        marginTop:20,
        width:'100%',
        textAlign:'center',
        color:'white',
        fontSize:20
    }
   
})