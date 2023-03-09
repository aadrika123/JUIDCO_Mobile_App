/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/Proprety/Home';
import SafForm from './src/Proprety/SafForm';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Proprety/Login';
import SplashScreen from './src/Proprety/SplashScreen';
import PropertyModule from './src/Proprety/PropertyModule';
import Search from './src/Proprety/WebView/Search';
import QuickAccessSetting from './src/Proprety/QuickAccessSetting';
import BottomTabs from './src/Proprety/BottomTabs';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const Stack = createNativeStackNavigator();

  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000); // simulate a 3-second loading time
  // }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (

    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }} initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Property" component={PropertyModule} />
          <Stack.Screen name="quickaccess" component={QuickAccessSetting} />
          <Stack.Screen name="bottomtabs" component={BottomTabs} />

          {/* WEBVIEW */}
          <Stack.Screen name="safform" component={SafForm} />
          <Stack.Screen name="search" component={Search} />

        </Stack.Navigator>
      </NavigationContainer>
    </>


    // <SafForm/>
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.tsx</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>

    // <View style={styles.container}>
    //   <View style={styles?.ass}>
    //     <View style={{'backgroundColor':'white','height':'100%','width':'100%','display':'flex','justifyContent':'center',"alignItems":'center'}}>
    //       <Text style={{'color':'black'}}>Assessment</Text>
    //     </View>
    //   </View>
    //   <View style={styles?.ver}>
    //     <View style={{'backgroundColor':'blue','height':'100%','width':'100%'}}>
    //       <Text>Verification</Text>
    //     </View>
    //   </View>
    //   <View style={styles?.geo}>
    //     <View style={{'backgroundColor':'yellow','height':'100%','width':'100%'}}>
    //       <Text>Geo Tagging</Text>
    //     </View>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,

  },
  ass: {
    flex: 1,
    height: 150,
    padding: 20
  }
  ,
  ver: {
    flex: 1,
    height: 150,
    padding: 20
  }
  ,
  geo: {
    flex: 1,
    height: 150,
    padding: 20
  },
  shadow: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
});

export default App;
