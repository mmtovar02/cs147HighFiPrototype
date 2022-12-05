import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import {useFonts, WorkSans_400Regular, WorkSans_500Medium} from '@expo-google-fonts/work-sans'

import NavigationButton from '../../components/NavigationButton.jsx'
import SwitchButton from '../../components/SwitchButton.jsx'
import { useLinkProps } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'WorkSans_400Regular',
        color: '#2c2d30',
      },
    pinkBackground: {
        backgroundColor:'#fff1ef',
      },
    
    whiteBackground: {
        backgroundColor: '#fff',
        alignItems: 'center'
    },

    friendContainer: { 
        flexDirection: 'row',
        backgroundColor: '#fff1ef',
        alignItems: 'center',
        justifyContent: 'center', // puts the entire container in the center
        marginTop: 24,
        marginBottom: 8
    },
    toggleContainer: {
        flexDirection: 'row',
    },
    getReadyWithGroup: {
        fontFamily: 'WorkSans_400Regular',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 24,
        marginTop: 74,
        marginLeft: 43,
        marginRight: 44
    },
    coleAndLilyText: {
        fontFamily: 'WorkSans_400Regular',
        textAlign: 'center',
        marginTop: 8,
        fontSize: 16
    },

    coleProfileImage: {
        height: 64,
        width: 64,
        resizeMode: 'contain',
        borderRadius: 100, 
        marginRight: 8,
     },

    lilyProfileImage: {
        height: 64,
        width: 64,
        resizeMode: 'contain',
        borderRadius: 100, 
        marginRight: 8,
     },

    userImage: {
        marginTop: 16,
        resizeMode: 'cover',
        height: 210,
        width: 360,
        borderRadius: 12
     },

    toggleText: {
        fontFamily: 'WorkSans_400Regular',
        justifyContent: 'center',
        marginTop: 8,
        marginRight: 21
     },

    soloMeditateText: {
        fontFamily: 'WorkSans_400Regular',
        textAlign: 'center',
        justifyContent: 'center',
        color: '#005453',
        marginTop: 24,
        marginBottom: 16

    },
});

function WaitingRoom(props) {
    return(
        <View style = {styles.container}>
            <View style = {styles.pinkBackground}> 
                <Text style = {styles.getReadyWithGroup}> Get ready to meditate with your group </Text>
                <View style = {styles.friendContainer}>
                    <Image style = {styles.coleProfileImage} source={require('../../assets/ProfilePictures/cole.jpeg')}></Image>
                    <Image style = {styles.lilyProfileImage} source={require('../../assets/ProfilePictures/lily.jpeg')}></Image>
                </View>
                <Text style = {styles.coleAndLilyText}> Cole and Lily are ready </Text>
                <Text style = {styles.soloMeditateText}> I want to meditate on my own</Text>
            </View>
            <View style = {styles.whiteBackground}>
                <Image style = {styles.userImage} source={require('../../assets/ProfilePictures/user.jpeg')}></Image>
                <View style = {{...styles.toggleContainer, marginTop: 16}}>  
                    <Text style = {styles.toggleText}> Video  </Text>
                    <SwitchButton> </SwitchButton>
                </View>
                <View style = {{...styles.toggleContainer, marginTop: 16, marginBottom: 58}}>
                    <Text style = {{...styles.toggleText, marginRight: 22}}> Audio </Text>
                    <SwitchButton> </SwitchButton>
                </View> 
                <NavigationButton text='Enter Session' onPress={() => {props.navigation.navigate('GroupMeditation')}}> </NavigationButton>
            </View>
        </View>
        
    );
}

export default WaitingRoom;