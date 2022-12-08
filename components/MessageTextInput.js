import { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import { useFonts, WorkSans_400Regular, WorkSans_500Medium }from '@expo-google-fonts/work-sans';
import { FontAwesome5 } from '@expo/vector-icons';

export default function MessageTextInput() {
    const [keyboardOffset, setKeyboardOffset] = useState(40);

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardWillShow', e => setKeyboardOffset(e.endCoordinates.height));
        const hideSubscription =  Keyboard.addListener('keyboardWillHide', () => setKeyboardOffset(40));

        return () => {
            showSubscription.remove()
            hideSubscription.remove()
        }
    }, [setKeyboardOffset]);

    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
        WorkSans_500Medium, 
    });

    if (!fontsLoaded) { 
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.textInputContainer, { bottom: keyboardOffset, }]}>
                <TouchableOpacity style={styles.topicsButton}>
                    <Image source={require('../assets/NavigationIcons/topics.png')} style={styles.topicsIcon}/>
                    <Text style={styles.topicsLabel}>Topics</Text>
                </TouchableOpacity>
                <View style={{flex: 1, height: 32, flexDirection: 'row', }}>
                    <TextInput 
                        style={[styles.textInput] }
                        placeholder='Aa'
                        placeholderTextColor='#767c8a'
                    /> 
                    <TouchableOpacity style={styles.microphone}>
                        <FontAwesome5 name='microphone' size={18} color='#2c2d30' />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomBorder}/>
        </View>
    );
}

const styles = StyleSheet.create({

    textInputContainer: {
        flex: 1,
        backgroundColor: '#ffff',
        width: '100%', 
        height: 48,
        paddingHorizontal: 24,
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center', 
    },

    textInput: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        borderRadius: 100,

        color: '#2c2d30',
        fontFamily: 'WorkSans_400Regular',
        fontSize: 16,
        paddingHorizontal: 16,
    },

    topicsButton: {
        backgroundColor: '#4d8d8c',
        height: 32,
        width: 108,
        marginRight: 16,
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center'
    },

    bottomBorder: {
        backgroundColor: '#ffff',
        height: 40,
    },

    topicsIcon: {
        height: 20, 
        width: 20, 
        resizeMode: 'contain'
    }, 

    topicsLabel: {
        fontFamily: 'WorkSans_400Regular',
        fontSize: 16,
        color: '#ffff',
        marginLeft: 12,
    }, 

    microphone: {
        position: 'absolute',
        bottom: 6, 
        right: 12
    }
});