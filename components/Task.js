import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {useFonts, WorkSans_400Regular, WorkSans_500Medium} from '@expo-google-fonts/work-sans'

export default function Task(props) {
    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
        WorkSans_500Medium, 
    });
    
    if (!fontsLoaded) { 
        return null;
    }
 
    return (
        <TouchableOpacity style={props.complete? styles.completedTask : styles.task} onPress={() => {props.navigation? props.navigation.navigate('WaitingRoom') : null}}>
            <View>
                <Text style={styles.taskTimeText}>{props.time}</Text>
                <Text style={styles.taskTitleText}>{props.title}</Text>
                <View style={styles.taskProfileContainer}>
                    <Image style={styles.taskProfileImage} source={require('../assets/ProfilePictures/user.jpeg')}/>
                    <View style={styles.fadedProfileImageBackground}>
                        <Image style={[styles.taskProfileImage, { opacity: props.profileImageFaded? 0.4 : 1}]} source={require('../assets/ProfilePictures/cole.jpeg')}/>
                    </View>
                    <View style={styles.fadedProfileImageBackground}>
                        <Image style={[styles.taskProfileImage, { opacity: props.profileImageFaded? 0.4 : 1}]} source={require('../assets/ProfilePictures/lily.jpeg')}/>
                    </View>
                </View>
            </View>
            <View style={props.complete? styles.completedTaskIconBackground : styles.taskIconBackground}>
                <Image style={styles.taskIcon} source={props.icon}></Image>
            </View>
        </TouchableOpacity>
    );
    
}

const styles = StyleSheet.create({
    task: {
        fontFamily: 'WorkSans_400Regular',
        marginBottom: 8,
        paddingLeft: 24,
        paddingRight: 24,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: '#fff1ef',
        borderRadius: 24, 
    },

    taskTimeText: {
        fontFamily: 'WorkSans_400Regular',
        color: '#828997',
        fontSize: 14,
        marginTop: 16
    },

    taskTitleText: {
        fontFamily: 'WorkSans_500Medium',
        fontSize: 20,
        marginTop: 8,
    },

    taskProfileContainer: {
        flexDirection: 'row', 
        marginTop: 8, 
        marginBottom: 16,
    },

    taskProfileImage: {
        height: 32,
        width: 32,
        resizeMode: 'contain',
        borderRadius: 100, 
        marginRight: 8,
     },

    fadedProfileImageBackground: {
        height: 32,
        width: 32,
        borderRadius: 100, 
        marginRight: 8,
        backgroundColor: '#eee1e1'
    },
  
    taskIcon: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        alignSelf: 'center'
    },

    taskIconBackground: {
        backgroundColor:'#fff1ef',
        height: 60,
        width: 60,
        justifyContent: 'center',
        borderRadius: 60,
        alignSelf: 'center',
    },

    completedTask: {
        fontFamily: 'WorkSans_400Regular',
        marginBottom: 8,
        paddingLeft: 24,
        paddingRight: 24,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: '#fff1ef',
        borderRadius: 24, 
        backgroundColor:'#fff8f8',
    },

    completedTaskIconBackground: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        borderRadius: 60,
        alignSelf: 'center',
    },

});

