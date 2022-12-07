import { StyleSheet, Text, View } from 'react-native';
import {useFonts, WorkSans_400Regular, WorkSans_500Medium} from '@expo-google-fonts/work-sans'

import EmoticonButton from './EmoticonButton'; 

export default function WelcomeBanner() {
    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
        WorkSans_500Medium, 
    });
    
    if (!fontsLoaded) { 
        return null;
    }
 
    return (
        <View style={styles.welcomeBanner}> 
        <Text style={styles.welcomeTitle}>Welcome, Sarah</Text>
        <Text style={styles.welcomeSubtitle}>How are you feeling?</Text>
        <View style={styles.welcomeEmoticonsContainer}>
            <EmoticonButton label='Amazing' icon={require('../assets/HeartEmoticons/amazing.png')}/>
            <EmoticonButton label='Good' icon={require('../assets/HeartEmoticons/good.png')}/>
            <EmoticonButton label='Neutral' icon={require('../assets/HeartEmoticons/neutral.png')}/>
            <EmoticonButton label='Bad' icon={require('../assets/HeartEmoticons/bad.png')}/>
            <EmoticonButton label='Awful' icon={require('../assets/HeartEmoticons/awful.png')}/>
        </View>
      </View>
    );
    
}

const styles = StyleSheet.create({
    welcomeBanner: {
        backgroundColor:'#fff1ef',
    },
  
    welcomeTitle: {
        fontFamily: 'WorkSans_500Medium',
        fontSize: 22, 
        marginTop: 24, 
        marginLeft: 16,
        marginRight: 16, 
    },
  
    welcomeSubtitle: {
        fontFamily: 'WorkSans_400Regular',
        fontSize: 16, 
        marginTop: 24, 
        marginLeft: 16,
        marginRight: 16,
    },
  
    welcomeEmoticonsContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginTop: 16,
        marginLeft: 16 ,
        marginRight: 16, 
    },
  
});