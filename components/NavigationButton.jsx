import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native'
import {useFonts, WorkSans_400Regular, WorkSans_500Medium} from '@expo-google-fonts/work-sans'

export default function NavigationButton({text, onPress}) {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: '#A4DFDE',
            height: 46,
            width: 358,
            borderRadius: 100,
            justifyContent: 'center',
            
        },

        buttonText: {
            color: '#005453',
            textAlign: 'center',
            fontFamily: 'WorkSans_500Medium'
        }
    });

    return(
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MeditationCompletion.jsx')}>
            <View style={styles.button}>
                <Text style={styles.buttonText}> {text} </Text>
            </View>
        </TouchableOpacity>
    )
}

