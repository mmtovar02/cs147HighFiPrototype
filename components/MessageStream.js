import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useFonts, WorkSans_500Medium }from '@expo-google-fonts/work-sans';

import Message from './Message.js';

export default function MessageStream({ navigation }) {
    let [fontsLoaded] = useFonts({
        WorkSans_500Medium, 
    });

    if (!fontsLoaded) { 
        return null;
    }

    const getLastMessages = () => {
        if (props.version == 'discussionTopic') {
            return (
                <View>
                    <Message 
                        message="What are you doing this week to take care of yourself?"
                        image={require('../assets/ProfilePictures/user.jpeg')}
                        user={true}
                    />
                </View>
            );
        }
    }

    return (
        <View style={styles.container}>
            <Message 
                message="Anyone want to share an issue they've been dealing with lately?"
                image={require('../assets/ProfilePictures/user.jpeg')}
                user={true}
            />
            <Message 
                message="I've been struggling with social anxiety lately, it's hard for me to leave my house because I'm worrried about running into people."
                image={require('../assets/ProfilePictures/lily.jpeg')}
                label='Lily'
            />
            <Message 
                message="I can relate"
                label='Cole'
            />
            <Message 
                message="It's gotten better but I used to struggle a lot with going to public places with a lot of people in them"
            />
            <Message 
                message="I don't have that experience any more but I definitely did when I was younger"
                image={require('../assets/ProfilePictures/cole.jpeg')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        marginBottom: 16,
    },

});