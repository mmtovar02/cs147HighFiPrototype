import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import { useFonts, WorkSans_400Regular, WorkSans_500Medium, WorkSans_600SemiBold } from '@expo-google-fonts/work-sans';
import AddFriends from '../../screens/AddHabit/AddFriends.js'

const styles = StyleSheet.create({
    propertyContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#E1E4EB',
        //justifyContent: 'center',
        marginTop: 46,
        height: 70,
        alignItems: 'flex-start'
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

export default function HabitProperty(props) {
    return(
    <TouchableOpacity style = {styles.propertyContainer} onPress={props.onPress}> 
        <Image style = {styles.propertyIcon} source={props.icon}/>
        <Text style = {styles.propertyText}>{props.text}</Text>
    </TouchableOpacity>
    );
}