import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { useFonts, WorkSans_400Regular, WorkSans_500Medium} from '@expo-google-fonts/work-sans';

import Task from "../components/Task.js"
import WelcomeBanner from '../components/WelcomeBanner.js';

export default function Home() {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_500Medium, 
  });

  if (!fontsLoaded) { 
    return null;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff1ef',
      fontFamily: 'WorkSans_400Regular',
      color: '#2c2d30',
    },

    welcomeBanner: {
      backgroundColor:'#fff1ef',
    },

    welcomeTitle: {
      fontFamily: 'WorkSans_500Medium',
      fontSize: 22, 
      marginTop: 75, 
      marginLeft: 16,
      marginRight: 16,
      
    },

    welcomeSubtitle: {
      fontSize: 16, 
      marginTop: 24, 
      marginLeft: 16,
      marginRight: 16,
    },

    welcomeEmoticonsImages: {
      height: 50,
      width: 50,
      resizeMode: 'contain',
      borderWidth: 2,
      paddingTop: 50,
      paddingLeft: 50, 
      borderRadius: 100, 
      borderColor: '#fff',
    },

    welcomeEmoticonsContainer: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
      marginTop: 16,
      marginLeft: 16 ,
      marginRight: 16, 
    },

    welcomeEmoticonText: {
      fontSize: 12,
      textAlign: 'center',
      marginTop: 8,
      marginBottom: 32,
    },

    homeTitle: {
      fontFamily: 'WorkSans_500Medium',
      fontSize: 22,
      marginLeft: 16,
      marginRight: 16,
      marginTop: 24,
      marginBottom: 24,
      
    },

    taskContainer: {
      marginLeft: 16,
      marginRight: 16,
    },

    plusBackground: {
      height: 50,
      width: 50,
      borderRadius: 60,
      backgroundColor: '#a4dfde',
      position: 'absolute',
      bottom: 0,
      right: 0,
      margin: 16,
      shadowColor: 'd0e4e4',
      shadowOffset: {width: 1, height: 3},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
      justifyContent: 'center',
      alignSelf: 'center',
    },

    plusIcon: {
      height: 24,
      width: 24,
      resizeMode: 'contain',
      alignSelf: 'center'
    },

    scrollLimit: {
      height: 50,
      width: '100%',

    },

    feed: {
      backgroundColor: '#fff',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.scrollLimit}></View>
      <ScrollView>
        <WelcomeBanner/>
        <View style={styles.feed}>
          <Text style={styles.homeTitle}>Today</Text>
          <View style={styles.taskContainer}>
            <Task title="Meditate" time="8:00 PM" icon={require('../assets/TaskIcons/meditate.png')}/>
            <Task title="Journal" time="Any time" icon={require('../assets/TaskIcons/journal.png')}/>
            <Task title="Listen to music" time="Any time" icon={require('../assets/TaskIcons/music.png')}/>
            <Task title="Take a walk" time="Any time" icon={require('../assets/TaskIcons/walk.png')}/>
          </View>
        </View>
      </ScrollView>
      <View style={styles.plusBackground}>
        <Image style={styles.plusIcon} source={require('../assets/NavigationIcons/plus.png')}/>
      </View>
    </View>
  );
}
