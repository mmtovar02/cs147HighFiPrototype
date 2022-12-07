import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native'
import {useFonts, WorkSans_400Regular, WorkSans_500Medium} from '@expo-google-fonts/work-sans'

export default function ToggleButton() {
    const [isEnabled, setIsEnabled] = useState(true)
    const toggleSwitch = () =>{
        setIsEnabled(previousState => !previousState)
    }
    return(
        <View>
        <Switch
            trackColor={{false: "white", true: "#dee3df"}}
            thumbColor={isEnabled ? "#4D8D8C": "white"}
            onValueChange={toggleSwitch}
            ios_backgroundColor="white"
            value={isEnabled}
        /> 
        </View>
    )
}


