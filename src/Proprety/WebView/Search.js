import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import TopHeader from '../TopHeader'
import WebView from 'react-native-webview'
import BottomTabs from '../BottomTabs'

const Search = () => {
    const [isLoading, setisLoading] = useState(false)
  return (
    <>
    <TopHeader />
    <WebView onLoad={() => setisLoading(false)} source={{ uri: 'http://192.168.0.160/admin/search/fresh/direct/direct' }} />
    <BottomTabs />
</>
  )
}

export default Search

const styles = StyleSheet.create({})