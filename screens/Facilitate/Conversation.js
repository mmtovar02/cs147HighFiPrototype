import { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, ScrollView, TextInput, KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useFonts, WorkSans_400Regular, WorkSans_500Medium }from '@expo-google-fonts/work-sans';

import Header from '../../components/Header.js'
import CallAndVideoButtons from '../../components/CallAndVideoButtons.js';
import MessageStream from '../../components/MessageStream.js';
import Message from '../../components/Message.js';
import MessageTextInput from '../../components/MessageTextInput.js';
import DiscussionTopic from '../../components/DiscussionTopic.js';

export default function Conversation({ navigation, route }) {
    const [messageSent, setMessageSent] = useState(false);
    const [ref, setRef] = useState(null);

    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
        WorkSans_500Medium, 
    });

    if (!fontsLoaded) { 
        return null;
    }

    let { discussionTopic } = route.params ? route.params : { discussionTopic: false };

    return (
        <View style={styles.container}>
            <Header 
                title='Cole, Lily' 
                facilitatorSubtitle={true}
                rightButton={<CallAndVideoButtons onVideoPress={() => {}}/>}  
                includeBackArrow={true} 
                onBackArrowPress={() => navigation.goBack()}
            />
            <KeyboardAwareScrollView 
                style={{marginBottom: 60}}
                ref={ref => {setRef(ref)}}
                onContentSizeChange={() => ref.scrollToEnd({animated: true})}
            >
                <MessageStream />
                {discussionTopic ?
                    <Message 
                        message="What are you doing this week to take care of yourself?"
                        label='Me'
                        user={true}
                        image={require('../../assets/ProfilePictures/user.jpeg')}
                        removeImage={messageSent}
                    />
                    :
                    ""
                }
                {messageSent ?
                    <Message 
                        message="How are you all doing?"
                        user={true}
                        label={!discussionTopic ? 'Me' : ''}
                        image={require('../../assets/ProfilePictures/user.jpeg')}
                    />
                    :
                    ""
                } 
            </KeyboardAwareScrollView>
            <MessageTextInput setMessageSent={setMessageSent}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },

});