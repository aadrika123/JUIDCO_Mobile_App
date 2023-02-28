import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TopHeader = () => {
    return (
        <View style={styles.card}>
            <View style={{ flex: 1 }}>
                <Text style={styles.text}></Text>
            </View>
            <View style={{ flex: 2 }}>
                <Text style={styles.text}>Captian America</Text>
            </View>
            <View style={styles.rightCard}>
                <View style={styles.imageCard}></View>
            </View>
        </View>
    )
}

export default TopHeader

const styles = StyleSheet.create({
    card: {
        height: 50,
        width: '100%',
        backgroundColor: '#5271FF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,

    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    },
    rightCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageCard: {
        backgroundColor: 'white',
        width: 30,
        height: 30,
        borderRadius: 50
    }
})