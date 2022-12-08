import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useFonts, WorkSans_400Regular, WorkSans_500Medium }from '@expo-google-fonts/work-sans';

export default function Message(props) {
    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
        WorkSans_500Medium, 
    });

    if (!fontsLoaded) { 
        return null;
    }

    return (
        <View style={[styles.container, { flexDirection: props.user ? 'row-reverse': 'row'}]}>
            <View style={styles.imageContainer}>
                <Image source={props.image} style={[styles.image, {opacity: props.removeImage? 0 : 1}]}/>
            </View>
            <View style={styles.messageContainer}>
                {props.label? <Text style={styles.labelText}>{props.label}</Text> : ''}
                <View style={[ styles.message, { backgroundColor: props.user? '#e7f4f5' : '#f8f8f8'}]}>
                    <Text style={styles.messageText}>{props.message}</Text>
                </View>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 8,
        marginHorizontal: 16
    },

    messageContainer: {
        marginHorizontal: 8,
    },

    message: {
        backgroundColor: '#e7f4f5',
        width: 220,
        padding: 16,
        borderRadius: 16,
    },

    messageText: {
        fontFamily: 'WorkSans_400Regular',
        fontSize: 16,
        color: '#2c2d30'
    },

    labelText: {
        fontFamily: 'WorkSans_400Regular',
        fontSize: 14,
        color: '#767c8a'
    },

    imageContainer: {
        justifyContent: 'flex-end',
    },

    image: {
        height: 40,
        width: 40,
        borderRadius: 100, 
    }

});