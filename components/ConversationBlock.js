import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts, WorkSans_400Regular, WorkSans_500Medium, WorkSans_600SemiBold }from '@expo-google-fonts/work-sans';

import ContactProfileImage from './ContactProfileImage.js';

export default function ConversationBlock(props) {
    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
        WorkSans_500Medium,
        WorkSans_600SemiBold, 
    });

    if (!fontsLoaded) { 
        return null;
    }

    return (
        <TouchableOpacity style={styles.container}>
            <ContactProfileImage image1={props.image1} image2={props.image2}/>
            <View style={styles.labelContainer}>
                <View>
                    {props.facilitator ? 
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.facilitatorConversationLabel}>{props.label}</Text>
                            <FontAwesome5 name='crown' size={16} color='#ffa899'/>
                        </View>    
                        : 
                        <Text style={styles.conversationLabel}>{props.label}</Text>
                    }
                    <Text style={styles.lastMessage}>{props.lastMessage}</Text>
                    <Text style={styles.facilitatorReminder}>{props.facilitatorReminder}</Text>
                </View>
                {props.notification? <View style={styles.notification}/> : "" }
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 24,
    },

    labelContainer: {
        flex: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },

    facilitatorConversationLabel: {
        fontFamily: 'WorkSans_600SemiBold',
        fontSize: 16,
        color: '#2c2d30',
        marginBottom: 4,
        marginRight: 10,
    },

    conversationLabel: {
        fontFamily: 'WorkSans_400Regular',
        fontSize: 16,
        color: '#2c2d30',
        marginBottom: 4,
    },

    lastMessage: {
        fontFamily: 'WorkSans_400Regular',
        fontSize: 14,
        color: '#767c8a',
        marginBottom: 4,
    },

    facilitatorReminder: {
        fontFamily: 'WorkSans_500Medium',
        fontSize: 14,
        color: '#dc5d47'
    },

    notification: {
        width: 12,
        height: 12,
        backgroundColor: '#4d8d8c',
        borderRadius: 100,
        alignSelf: 'center'
    }

});