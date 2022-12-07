import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native';
import { useFonts, WorkSans_400Regular ,WorkSans_500Medium }from '@expo-google-fonts/work-sans';

export default function ContactBlock(props) {
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
                <Text>Ends in 54:28</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.question}>What are you doing this week to take care of yourself?</Text>
                <TouchableOpacity style={styles.askButton}>
                    <Text style={styles.askButtonLabel}>Ask</Text>
                </TouchableOpacity>
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