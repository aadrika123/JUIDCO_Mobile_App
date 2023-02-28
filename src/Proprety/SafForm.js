import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { WebView } from 'react-native-webview';
import React, { useState, useEffect } from 'react'
import BottomTabs from './BottomTabs';
import TopHeader from './TopHeader';

const SafForm = () => {
    const [isLoading, setisLoading] = useState(false)

    // useEffect(() => {
    //     setisLoading(true)
    // }, [])

    return (
        <>
            {/* {isLoading && <ActivityIndicator
                color="blue"
                size="large"
            />} */}
            <TopHeader />
            <WebView onLoad={() => setisLoading(false)} source={{ uri: 'http://192.168.0.160/admin/safform/new/0' }} />
            <BottomTabs />
        </>
    )
}

export default SafForm

const styles = StyleSheet.create({})