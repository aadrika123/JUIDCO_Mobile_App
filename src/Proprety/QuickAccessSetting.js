import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TopHeader from './TopHeader';
import { BottomNavigation } from 'react-native-paper';
import BottomTabs from './BottomTabs';

const QuickAccessSetting = () => {

    const OPTIONS = [
        { option: 'New Apply', url: 'safform' },
        { option: 'Property', url: 'Property' },
        { option: 'Search', url: 'search' },
    ]

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const quickAction = () => {

    }
    return (
        <>
            <TopHeader />
            {
                OPTIONS?.map((data, index) => (
                    <View style={styles.container}>
                        <View style={styles.rowContainer}>
                            <View style={styles.textView}><Text style={styles.cardText}>Property</Text></View>
                            <View style={styles.switchView}>
                                <TouchableOpacity style={styles.card} onPress={() => quickAction(index)}>
                                    <View style={styles.button}>
                                        <Text style={styles.buttonTitle}>Add</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))
            }
            <BottomTabs />
        </>
    )
}

export default QuickAccessSetting

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // backgroundColor: 'white',
        padding: 10,

    },
    rowContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        elevation: 3,
        flexDirection: 'row',
        height: 45,
        borderRadius: 10,
        marginTop: 1
    },
    textView: {
        flex: 3,
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 10
    },
    switchView: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        paddingRight: 20,

    },
    cardText: {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 16
    },
    button: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        borderRadius: 10,
        elevation: 3
    },
    buttonTitle: {
        color: 'white',
        fontWeight: 'bold'
    }
})