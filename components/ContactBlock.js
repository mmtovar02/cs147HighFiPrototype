import { StyleSheet, Text, View } from 'react-native';
import { useFonts, WorkSans_500Medium }from '@expo-google-fonts/work-sans';

import AddContactButton from './AddContactButton.js'
import ContactProfileImage from './ContactProfileImage.js';

export default function ContactBlock(props) {
    let [fontsLoaded] = useFonts({
        WorkSans_500Medium, 
    });

    if (!fontsLoaded) { 
        return null;
    }

    return (
        <View style={styles.container}>
            <ContactProfileImage image1={props.image1} image2={props.image2}/>
            <View style={styles.labelAndButtonContainer}>
                <Text style={styles.contactLabel}>{props.label}</Text>
                <AddContactButton />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },

    labelAndButtonContainer: {
        flex: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    contactLabel: {
        fontFamily: 'WorkSans_500Medium',
        fontSize: 16,
        color: '#2c2d30',
        alignSelf: 'center',
    },

});