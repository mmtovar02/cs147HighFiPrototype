import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, Button, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import {useFonts, WorkSans_400Regular, WorkSans_500Medium} from '@expo-google-fonts/work-sans'
import { Feather, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import Header from '../../components/Header.js';

import NavigationButton from '../../components/NavigationButton.js'
import SwitchButton from '../../components/SwitchButton.js'
import { useLinkProps } from '@react-navigation/native';
//const {fontScale} = useWindowDimensions();
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'WorkSans_400Regular',
        color: '#2c2d30',
        //justifyContent: 'space-between'
      },
    pinkBackground: {
        backgroundColor:'#fff1ef',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%',
        width: '100%'
      },
    
    whiteBackground: {
        backgroundColor: '#fff',
        alignItems: 'center',
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
        flexDirection: 'column',
        paddingVertical: 10,

    },
    getReadyWithGroup: {
        fontFamily: 'WorkSans_400Regular',
        textAlign: 'center',
        fontSize: 24,
        flexWrap: 'wrap',
       // flexShrink: 1,
        paddingHorizontal: 40,
        // height: 56,
        // width: 303,
        numberOfLines: 2
    },
    coleAndLilyText: {
        fontFamily: 'WorkSans_400Regular',
        textAlign: 'center',
        marginTop: 8,
        fontSize: 16
    },

    profileImage: {
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
        //alignSelf: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        //marginTop: 8,
     },

    soloMeditateText: {
        fontFamily: 'WorkSans_400Regular',
        textAlign: 'center',
        justifyContent: 'center',
        color: '#005453',
        //marginTop: 24,
       // marginBottom: 16

    },
});

function WaitingRoom(props) {
    return(
        // Remember to change ScrollView back to normal View if we don't keep it
        <ScrollView style = {styles.container}>
            <Header 
                    title='Waiting Room' 
                    includeBackArrow={true} 
                    onBackArrowPress={() => props.navigation.goBack()}
                    />
            <View style = {styles.pinkBackground}> 
                <Text style = {styles.getReadyWithGroup}> Get ready to meditate with your group </Text>
                <View style = {styles.friendContainer}>
                    <Image style = {styles.profileImage} source={require('../../assets/ProfilePictures/cole.jpeg')}></Image>
                    <Image style = {styles.profileImage} source={require('../../assets/ProfilePictures/lily.jpeg')}></Image>
                </View>
                <Text style = {styles.coleAndLilyText}> Cole and Lily are ready </Text>
                <TouchableOpacity style={{marginTop: 24, marginBototm: 16}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style = {styles.soloMeditateText}> I want to meditate on my own</Text> 
                        <Feather name="arrow-right" size={18} color="#005453" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style = {styles.whiteBackground}>
                <Image style = {styles.userImage} source={require('../../assets/ProfilePictures/user.jpeg')}></Image>
                <View style = {{justifyContent: 'center', flexDirection: 'row'}}>
                    <View style = {{...styles.toggleContainer, marginTop: 16}}>  
                        <Text style = {styles.toggleText}> Video </Text>
                        <Text style = {styles.toggleText}> Audio </Text>
                    </View>
                    <View style = {{...styles.toggleContainer, marginTop: 16, marginBottom: 58}}>
                        <SwitchButton> </SwitchButton>
                        <SwitchButton> </SwitchButton>
                    </View> 
                </View> 
                <NavigationButton text='Enter Session' onPress={() => {props.navigation.navigate('GroupMeditation')}}> </NavigationButton>
            </View>
        </ScrollView>
        
    );
}

export default WaitingRoom;