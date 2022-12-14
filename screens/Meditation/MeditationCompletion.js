import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, Button, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import {useFonts, WorkSans_400Regular, WorkSans_500Medium} from '@expo-google-fonts/work-sans'

import NavigationButton from '../../components/NavigationButton.js'

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#fff',
      },

    innerContainer: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'WorkSans_400Regular',
        color: '#2c2d30',
        alignItems: 'center',
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
        flexDirection:'row',
        marginTop: 24
    },

    streakIcon: {
        height: 24,
        width: 24,
        resizeMode:'contain',
        marginRight: 8
    },

    streakText: {
        fontFamily: 'WorkSans_500Medium',
        fontSize: 20,
        color: '#DC5D47'
    },

    circle: {
        height: 200,
        width: 200,
        backgroundColor: '#FFF8F7',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%'
    }
})

function MeditationCompletion(props){
    return(
        <View style = {styles.outerContainer}>
            <View style = {styles.innerContainer}>
                <View style = {styles.circle}> 
                    <Image style = {styles.heartImage} source={require('../../assets/HeartEmoticons/amazing.png')}></Image>
                </View>
                <View style = {styles.greatJobContainer}> 
                    <Text style = {styles.greatJobText}> Great job!</Text>
                    <Text style = {styles.everyoneText}> Everybody in your group meditated today. </Text>
                </View>
                <View style = {styles.profileImageContainer}> 
                    <Image style = {{...styles.profileImage, marginRight: 8}} source={require('../../assets/ProfilePictures/cole.jpeg')}></Image>
                    <Image style = {{...styles.profileImage, marginLeft: 8, marginRight: 8}} source={require('../../assets/ProfilePictures/lily.jpeg')}></Image>
                    <Image style = {{...styles.profileImage, marginLeft: 8}} source={require('../../assets/ProfilePictures/user.jpeg')}></Image>
                </View>
                <View style = {styles.streakContainer}>
                    <Image style ={styles.streakIcon} source={require('../../assets/Miscellaneous/streak.png')}></Image>
                    <Text style = {styles.streakText}>
                        3 day group streak
                    </Text>
                </View>
            </View>
            <View style = {{alignSelf:'center', marginBottom: 24}}> 
            <NavigationButton text ='Return to Home' onPress={() => {props.navigation.navigate('Home', { version: 'meditationComplete' })}}> </NavigationButton> 
            </View>
        {/* <View style = {{marginBottom: 24}}>
            </View>  
    </View> */}
        </View>
    );
}

export default MeditationCompletion;