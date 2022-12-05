import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts, WorkSans_500Medium }from '@expo-google-fonts/work-sans';

import AddContactButton from './AddContactButton.js'

export default function ContactBlock(props) {
    let [fontsLoaded] = useFonts({
        WorkSans_500Medium, 
    });

    if (!fontsLoaded) { 
        return null;
    }

    return (
        <View style={styles.container}>
            {props.image2 ? 
                <View style={styles.imageContainer}>
                    <Image style={[styles.groupContactImage, {top: 0, left: 12}]} source={props.image1} />
                    <Image style={[styles.groupContactImage, {top: 12, left: 0}]} source={props.image2} />
                </View> 
                :
                <View style={styles.imageContainer}>
                    <Image style={styles.singleContactImage} source={props.image1} />
                </View> 
            }
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

    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 64,
        paddingBottom: 16,
        marginRight: 24
    },

    groupContactImage: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
        borderRadius: 100, 
        position: 'absolute',
        marginTop: 16
    },

    singleContactImage: {
        height: 40,
        width: 40,
        borderRadius: 100, 
        alignSelf: 'center',
        marginTop: 12
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