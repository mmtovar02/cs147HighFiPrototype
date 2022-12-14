import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts, WorkSans_400Regular, WorkSans_500Medium, WorkSans_600SemiBold }from '@expo-google-fonts/work-sans';

import ContactProfileImage from './ContactProfileImage.js';
import SelectConversationButton from './SelectConversationButton.js';

export default function ConversationBlock(props) {
    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
        WorkSans_500Medium,
        WorkSans_600SemiBold, 
    });

    if (!fontsLoaded) { 
        return null;
    }

    const getInnerConversationBlockComponents = () => {
        return (
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
                    {props.facilitatorReminder ?
                        <Text style={styles.facilitatorReminder}>{props.facilitatorReminder}</Text>
                        : ""
                    }
                    
                </View>
                {props.notification? <View style={styles.notification}/> : "" }
            </View>
        );
    }

    const getConversation = () => {
        if (props.selected) {
            return (
                <View style={styles.container}>
                    <SelectConversationButton />
                    <ContactProfileImage image1={props.image1} image2={props.image2}/>
                    {getInnerConversationBlockComponents()}
                </View>
            );
        } else if (props.grayed){
            return (            
                <View style={{opacity: 0.3}}>
                    <View style={[styles.container, {opacity: 0.3}]}>
                        <ContactProfileImage image1={props.image1} image2={props.image2}/>
                        {getInnerConversationBlockComponents()}
                    </View>
                </View>
            );
        } else {
            return (
                <TouchableOpacity onPress={props.onPress} style={styles.container}>
                    <ContactProfileImage image1={props.image1} image2={props.image2}/>
                    {getInnerConversationBlockComponents()}
                </TouchableOpacity>
            );
        }
    }

    return (getConversation());
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 8,
    },

    labelContainer: {
        flex: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 7,
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