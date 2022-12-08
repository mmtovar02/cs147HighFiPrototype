import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import { useFonts, WorkSans_400Regular, WorkSans_500Medium, WorkSans_600SemiBold } from '@expo-google-fonts/work-sans';

const styles = StyleSheet.create({
    propertyContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#E1E4EB',
        //justifyContent: 'center',
        marginTop: 100,
    },

    propertyIcon: {
        height: 20,
        width: 20,
        marginLeft: 20
    },

    propertyText: {
        color: '#767C8A',
        fontFamily: 'WorkSans_400Regular',
        fontSize: 16,
        marginLeft: 16
    },
});

export default function HabitProperty({icon, text}) {
    return(
    <TouchableOpacity style = {styles.propertyContainer}> 
        <Image style = {styles.propertyIcon} source={icon}/>
        <Text style = {styles.propertyText}> {text}</Text>
    </TouchableOpacity>
    );
}