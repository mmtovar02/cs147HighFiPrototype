import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts, WorkSans_400Regular ,WorkSans_500Medium }from '@expo-google-fonts/work-sans';
import CountDownTimer from 'react-native-countdown-timer-hooks';

export default function DiscussionTopic(props) {
    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
        WorkSans_500Medium, 
    });

    if (!fontsLoaded) { 
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.contentContainer, {marginBottom: 12}]}>
                <Text style={styles.title}>DISCUSSION TOPIC</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.timerLabel}>Ends in </Text>
                    <CountDownTimer timestamp={3268} textStyle={styles.timer}/>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.question}>What are you doing this week to take care of yourself?</Text>
                {props.displayAskButton ? 
                    <TouchableOpacity onPress={props.onAskButtonPress} style={styles.askButton}>
                        <Text style={styles.askButtonLabel}>Ask</Text>
                    </TouchableOpacity>
                    : <View style={[styles.askButton, { backgroundColor: 'transparent' }]}/> }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7F4F5',
        borderRadius: 8,
        margin: 16,
        padding: 16,
    },

    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    title: {
        fontFamily: 'WorkSans_500Medium',
        fontSize: 16,
        color: '#005453',
    },

    timerLabel: {
        fontFamily: 'WorkSans_400Regular',
        fontSize: 14,
        color: '#005453'
    },

    timer: {
        fontFamily: 'WorkSans_500Medium',
        fontSize: 14,
        color: '#005453'
    },

    question: {
        fontFamily: 'WorkSans_400Regular',
        fontSize: 16,
        flex: 1,
        flexWrap: 'wrap',
        marginRight: 12,
    },

    askButton: {
        width: 76,
        height: 38,
        borderRadius: 100,
        backgroundColor: '#a4dfde',
        justifyContent: 'center'
    },

    askButtonLabel: {
        fontFamily: 'WorkSans_500Medium',
        fontSize: 16,
        color: '#005453',
        alignSelf: 'center',
    },

});