import { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, ScrollView, TextInput, KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useFonts, WorkSans_400Regular, WorkSans_500Medium }from '@expo-google-fonts/work-sans';
import { FontAwesome5 } from '@expo/vector-icons';

import Header from '../../components/Header.js'
import CallAndVideoButtons from '../../components/CallAndVideoButtons.js';
import MessageStream from '../../components/MessageStream.js';
import MessageTextInput from '../../components/MessageTextInput.js';


const styles = StyleSheet.create( {
    container: {
       // justifyContent: 'space-between',
        backgroundColor: 'black',
        flexDirection: 'column'
    },

    videoScreen: {
        height: 210,
        width: 358,
        alignSelf: 'center',
        //resizeMode: 'contain'

    }

});

export default function VideoConference({navigation}) {
    return(
    <ScrollView style = {styles.container}>
        <Header 
                title='Cole, Lily' 
                facilitatorSubtitle={true}
                //rightButton={<CallAndVideoButtons onVideoPress={() => {navigation.navigate(VideoConference)}}/>}  
                includeBackArrow={true} 
                onBackArrowPress={() => navigation.goBack()}
            />
        <Image style = {styles.videoScreen} source={require('../../assets/ProfilePictures/cole.jpeg')}/>
        <Image style = {styles.videoScreen} source={require('../../assets/ProfilePictures/lily.jpeg')}/>
        <Image style = {styles.videoScreen} source={require('../../assets/ProfilePictures/user.jpeg')}/>
    </ScrollView>
    );
}