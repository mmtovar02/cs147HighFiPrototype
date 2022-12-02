import 'react-native-gesture-handler';
import React from "react";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts, WorkSans_400Regular, WorkSans_500Medium} from '@expo-google-fonts/work-sans'

import WaitingRoom from './screens/WaitingRoom.jsx'
import MeditationCompletion from './screens/MeditationCompletion.jsx'

const Stack = createStackNavigator();
function MyStack () {
  
}

export default function App() {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_500Medium, 
  });

  if (!fontsLoaded) { 
    return null;
  }
  return(
    <NavigationContainer> 
    <Stack.Navigator>
      <Stack.Screen name="Great job!" component={WaitingRoom}/>
    </Stack.Navigator>
  </NavigationContainer>
    
  );
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      fontFamily: 'WorkSans_400Regular',
      color: '#2c2d30'
    },

    welcomeBanner: {
      backgroundColor:'#fff1ef',
    },

    welcomeTitle: {
      fontFamily: 'WorkSans_500Medium',
      fontSize: 22, 
      paddingTop: 75, 
      paddingLeft: 15
    },

    welcomeSubtitle: {
      fontSize: 16, 
      paddingTop: '5%', 
      paddingLeft: 15
    },

    welcomeEmoticonsImages: {
      height: 50,
      width: 50,
      resizeMode: 'contain',
      borderWidth: 2,
      paddingTop: 50,
      paddingLeft: 50, 
      borderRadius: 100, 
      borderColor: '#fff',
    },

    welcomeEmoticonsContainer: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
      paddingTop: '5%',
      paddingLeft: 15 ,
      paddingRight: 15, 
    },

    welcomeEmoticonText: {
      fontSize: 12,
      textAlign: 'center',
      paddingTop: 5,
      paddingBottom: 25
    },

    homeTitle: {
      fontFamily: 'WorkSans_500Medium',
      fontSize: 22,
      paddingLeft: 15,
      paddingTop: '5%',
    },

    taskContainer: {

    },

    taskProfileImage: {
      height: 30,
      width: 30,
      resizeMode: 'contain',
      borderRadius: 100, 
    }
    
  });
}

