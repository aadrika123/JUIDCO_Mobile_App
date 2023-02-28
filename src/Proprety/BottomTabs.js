import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { GrHomeRounded } from 'react-icons/gr'
import { SvgUri } from 'react-native-svg';

const BottomTabs = ({ navigation }) => {
    const [quicAccessStaus, setQuicAccessStaus] = useState(false)
    return (
        <>
            {/* QUICK ACCESS VIEW */}
            {quicAccessStaus && <View style={styles.quickAccessContainer}>
                <View style={styles.quickAccessCard}>
                    <View style={styles.quickAccessCardInner}>
                        <View style={styles.container}>
                            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Property')}>
                                <View style={styles.rounded}>
                                    <Image style={{ 'width': 20, 'height': 20 }} source={require('../assets/media/home.png')} />
                                    <Text style={styles.title}>Property</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Property')}>
                                <View style={styles.rounded}>
                                    <Image style={{ 'width': 20, 'height': 20 }} source={require('../assets/media/home.png')} />
                                    <Text style={styles.title}>Property</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Property')}>
                                <View style={styles.rounded}>
                                    <Image style={{ 'width': 20, 'height': 20 }} source={require('../assets/media/home.png')} />
                                    <Text style={styles.title}>Property</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.container2}>
                            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Property')}>
                                <View style={styles.rounded}>
                                    <Image style={{ 'width': 20, 'height': 20 }} source={require('../assets/media/home.png')} />
                                    <Text style={styles.title}>Property</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Property')}>
                                <View style={styles.rounded}>
                                    <Image style={{ 'width': 20, 'height': 20 }} source={require('../assets/media/home.png')} />
                                    <Text style={styles.title}>Property</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Property')}>
                                <View style={styles.rounded}>
                                    <Image style={{ 'width': 20, 'height': 20 }} source={require('../assets/media/home.png')} />
                                    <Text style={styles.title}>Property</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>
            </View>}


            {/* BOTOOM TAB BUTTONS */}
            <View style={styles.tabContainer}>

                <View style={styles.button}>
                    <Text style={styles.text}>🏠</Text>
                </View>
                <View style={styles.button}>
                    <Text style={styles.text}>🏠</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => setQuicAccessStaus(!quicAccessStaus)}>
                    <View style={styles.button}>
                        <Text style={styles.text}>🏠</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.text}>🏠</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Property')}>
                    <View style={styles.button}>
                        <Text style={styles.text}>🏠</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default BottomTabs

const styles = StyleSheet.create({
    tabContainer: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        elevation: 3

    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'black'
    },
    quickAccessContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
    ,
    quickAccessCard: {
        width: 300,
        height: 300,
        backgroundColor: '#5271FF',
        borderRadius: 300,
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 20,

    },
    quickAccessCardInner: {
        width: '100%',
        height: '80%',
        borderRadius: 300,
        justifyContent: 'center',
        alignItems: 'center',

    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
    },
    container2: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },
    card: {
        flex: 1,
        borderRadius: 10,
        padding: 4,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    rounded: {
        padding: 4,
        borderRadius: 100,
        backgroundColor: 'white',
        shadowColor: 'black',
        width: 70,
        height: 70,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontWeight: 'bold'
    }
})