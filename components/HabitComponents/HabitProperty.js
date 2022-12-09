import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import { useFonts, WorkSans_400Regular, WorkSans_500Medium, WorkSans_600SemiBold } from '@expo-google-fonts/work-sans';

const styles = StyleSheet.create({
    propertyContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#E1E4EB',
        //justifyContent: 'center',
        //marginTop: 36,
        paddingVertical: 15,
        //height: 70,
        alignItems: 'center'
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

    friendNameContainer: {
        marginLeft: 16,
        flex: 1,
        flexDirection: 'row'
    },

    friendNamePlate: {
        backgroundColor: '#ECEEF2',
        height: 38,
        width: 121,
        alignItems: 'center',
        justifyContent: 'center'
    },

    friendName: {
        fontFamily: 'WorkSans_400Regular',
        fontSize: 16,
    }
});

export default function HabitProperty(props) {
    if (props.friendsSelected == true) {
        return(
            <TouchableOpacity style = {styles.propertyContainer} onPress={props.onPress}> 
                <Image style = {styles.propertyIcon} source={props.icon}/>
                <View style = {styles.friendNameContainer}>
                    <View style = {styles.friendNamePlate}>
                        <Text style = {styles.friendName}> Cole Everhard</Text>
                    </View>
                    <View style = {[styles.friendNamePlate, {marginLeft: 16}]}>
                        <Text style = {styles.friendName}> Lily Achebe </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    } else {
        return(
            <TouchableOpacity style = {styles.propertyContainer} onPress={props.onPress}> 
                <Image style = {styles.propertyIcon} source={props.icon}/>
                <Text style = {styles.propertyText}>{props.text}</Text>
            </TouchableOpacity>
        );
    }

}