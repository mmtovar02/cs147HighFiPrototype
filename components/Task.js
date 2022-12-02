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
    });
 
    return (
        <TouchableOpacity style={styles.task} onPress={() => {props.navigation.navigate('GroupMeditation')}}>
            <View>
                <Text style={styles.taskTimeText}>{props.time}</Text>
                <Text style={styles.taskTitleText}>{props.title}</Text>
                <View style={styles.taskProfileContainer}>
                    <Image style={styles.taskProfileImage} source={require('../assets/ProfilePictures/user.jpeg')}></Image>
                    <Image style={styles.taskProfileImage} source={require('../assets/ProfilePictures/cole.jpeg')}></Image>
                    <Image style={styles.taskProfileImage} source={require('../assets/ProfilePictures/lily.jpeg')}></Image>
                </View>
            </View>
            <View style={styles.taskIconBackground}>
                <Image style={styles.taskIcon} source={props.icon}></Image>
            </View>
        </TouchableOpacity>
    );
    
}

