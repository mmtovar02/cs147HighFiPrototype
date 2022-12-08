import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import { useFonts, WorkSans_400Regular, WorkSans_500Medium, WorkSans_600SemiBold } from '@expo-google-fonts/work-sans';

const styles = StyleSheet.create({
    habitContainer: {
        flexDirection: 'row',
        marginLeft: 16,
        marginBottom: 36
    },

    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    habitTextContainer: {
        flexDirection: 'column',
        marginLeft: 16
    },

    textHeader: {
        fontFamily: 'WorkSans_500Medium',
        fontSize: 20,
    },

    textBody: {
        fontFamily: 'WorkSans_400Regular',
        fontSize: 14,
        color: '#767C8A',
        marginTop: 6
    },

    iconBackground: {
        backgroundColor: '#FFF8F7',
        height: 45,
        width: 45,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'

    },

    habitIcon: {
        height: 25,
        width: 25,
        borderRadius: 100
    },
});


export default function Habit(props) {

    // let {isLast} = props.isLast ? props.isLast: false;
    
    return(
    <TouchableOpacity style = {styles.habitContainer} onPress={props.onPress}> 
        <View style = {styles.iconContainer}>
            <View style ={styles.iconBackground} > 
                <Image style = {styles.habitIcon} source={props.icon}/>
            </View>
        </View>
        <View style = {styles.habitTextContainer}>
            <Text style={styles.textHeader}> {props.textHeader} </Text>
            <Text style={styles.textBody}> {props.textBody}</Text>
        </View>
    </TouchableOpacity>
    );
}