import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import {useFonts, WorkSans_400Regular, WorkSans_500Medium} from '@expo-google-fonts/work-sans'

import NavigationButton from '../components/NavigationButton.jsx'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'WorkSans_400Regular',
        color: '#2c2d30',
        alignItems: 'center'
      },
    
    greatJobContainer: {
        fontFamily: 'WorkSans_400Regular',
        marginTop: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },

    greatJobText: {
        fontFamily: 'WorkSans_400Regular',
        fontSize: 32
    },

    everyoneText: {
        fontFamily: 'WorkSans_400Regular',
        fontSize: 16,
        color: '#767C8A',
        marginTop: 8
    },

    profileImageContainer: {
        flexDirection: 'row',
        marginTop: 25
    },

    heartImage: {
        height: 101,
        width: 129,
        
    },
    profileImage: {
        height: 48,
        width: 48,
        resizeMode: 'contain',
        borderRadius: 100
    },

    streakContainer: {
        height: 53,
        width: 236,
        backgroundColor: '#FFF8F7',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24
    },

    streakText: {
        fontFamily: 'WorkSans_500Medium',
        fontSize: 20,
        color: '#FF8E1A'
    },

    circle: {
        height: 200,
        width: 200,
        backgroundColor: '#FFF8F7',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 98
    }
})

function MeditationCompletion(){
    return(
        <View style = {styles.container}>
            
            <View style = {styles.circle}> 
                <Image style = {styles.heartImage} source={require('../assets/HeartEmoticons/amazing.png')}></Image>
            </View>
            <View style = {styles.greatJobContainer}> 
                <Text style = {styles.greatJobText}> Great job!</Text>
                <Text style = {styles.everyoneText}> Everybody in your group meditated today. </Text>
            </View>
            <View style = {styles.profileImageContainer}> 
                <Image style = {{...styles.profileImage, marginRight: 8}} source={require('../assets/ProfilePictures/cole.jpeg')}></Image>
                <Image style = {{...styles.profileImage, marginLeft: 8, marginRight: 8}} source={require('../assets/ProfilePictures/lily.jpeg')}></Image>
                <Image style = {{...styles.profileImage, marginLeft: 8}} source={require('../assets/ProfilePictures/user.jpeg')}></Image>
            </View>
            <View style = {styles.streakContainer}>
                <Text style = {styles.streakText}>
                    3 day group streak
                </Text>
            </View>
            <View style = {{marginTop: 88}}>
                <NavigationButton text ='Return to Home'> </NavigationButton> 
            </View>
            
        </View>
    );
}

export default MeditationCompletion;