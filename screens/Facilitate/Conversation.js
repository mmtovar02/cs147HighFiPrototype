import { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, ScrollView, TextInput, KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useFonts, WorkSans_400Regular, WorkSans_500Medium }from '@expo-google-fonts/work-sans';
import { FontAwesome5 } from '@expo/vector-icons';

import Header from '../../components/Header.js'
import CallAndVideoButtons from '../../components/CallAndVideoButtons.js';
import MessageStream from '../../components/MessageStream.js';
import MessageTextInput from '../../components/MessageTextInput.js';

export default function Conversation({ navigation }) {
    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
        WorkSans_500Medium, 
    });

    if (!fontsLoaded) { 
        return null;
    }

    return (
        <View style={styles.container}>
            <Header 
                title='Cole, Lily' 
                facilitatorSubtitle={true}
                rightButton={<CallAndVideoButtons onVideoPress={() => {}}/>}  
                includeBackArrow={true} 
                onBackArrowPress={() => navigation.goBack()}
            />
            <KeyboardAwareScrollView>
                <MessageStream />
            </KeyboardAwareScrollView>
            <MessageTextInput/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },

});