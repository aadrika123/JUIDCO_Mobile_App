import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import GetLocation from 'react-native-get-location'
import BottomTabs from './BottomTabs'
import TopHeader from './TopHeader'

const Home = ({ navigation }) => {

    // const [location, setlocation] = useState(0)

    // useEffect(() => {
    //     getCurrentLocation()
    // }, [])

    // const getCurrentLocation = () => {
    //     GetLocation.getCurrentPosition({
    //         enableHighAccuracy: true,
    //         timeout: 15000,
    //     })
    //         .then(location => {
    //             console.log(location);
    //             setlocation(location)
    //         })
    //         .catch(error => {
    //             const { code, message } = error;
    //             console.warn(code, message);
    //         })
    // }


    return (
        <>
            <TopHeader />
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Property')}>
                        <Image style={{ 'width': 60, 'height': 60 }} source={require('../assets/media/home.png')} />
                        <Text style={styles.title}>Property</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <Image style={{ 'width': 60, 'height': 60 }} source={require('../assets/media/water.png')} />
                        <Text style={styles.title}>Water</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity style={styles.card}>
                        <Image style={{ 'width': 60, 'height': 60 }} source={require('../assets/media/trade.png')} />
                        <Text style={styles.title}>Trade</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <Image style={{ 'width': 60, 'height': 60 }} source={require('../assets/media/swm.png')} />
                        <Text style={styles.title}>SWM</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <BottomTabs />
        </>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        flex: 1
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: 'white'
    },
    container2: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: 'white'
    },
    card: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
});

export default Home

