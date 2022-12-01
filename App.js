import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import {useFonts, WorkSans_400Regular, WorkSans_500Medium} from '@expo-google-fonts/work-sans'

import Task from "./components/Task.js"

export default function App() {
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
      backgroundColor: '#fff',
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

    task: {
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
      borderRadius: 100, 
      alignSelf: 'center'
    },

    taskIconBackground: {
      backgroundColor:'#fff1ef',
      height: 60,
      width: 60,
      justifyContent: 'center',
      borderRadius: 60,
      alignSelf: 'center',
    }
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcomeBanner}> 
        <Text style={styles.welcomeTitle}>Welcome, Sarah</Text>
        <Text style={styles.welcomeSubtitle}>How are you feeling?</Text>
        <View style={styles.welcomeEmoticonsContainer}>
          <View>
            <Image style={styles.welcomeEmoticonsImages} source={require('./assets/HeartEmoticons/amazing.png')}></Image>
            <Text style={styles.welcomeEmoticonText}>Amazing</Text>
          </View>
          <View>
            <Image style={styles.welcomeEmoticonsImages} source={require('./assets/HeartEmoticons/good.png')}></Image>
            <Text style={styles.welcomeEmoticonText}>Good</Text>
          </View>
          <View>
            <Image style={styles.welcomeEmoticonsImages} source={require('./assets/HeartEmoticons/neutral.png')}></Image>
            <Text style={styles.welcomeEmoticonText}>Neutral</Text>
          </View>
          <View>
            <Image style={styles.welcomeEmoticonsImages} source={require('./assets/HeartEmoticons/bad.png')}></Image>
            <Text style={styles.welcomeEmoticonText}>Bad</Text>
          </View>
          <View>
            <Image style={styles.welcomeEmoticonsImages} source={require('./assets/HeartEmoticons/awful.png')}></Image>
            <Text style={styles.welcomeEmoticonText}>Awful</Text>
          </View>
        </View>
      </View>
      <Text style={styles.homeTitle}>Today</Text>
      <View style={styles.taskContainer}>
        <Task title="Meditate" time="8:00 PM" icon={require('./assets/TaskIcons/meditate.png')}/>
        <Task title="Journal" time="Any time" icon={require('./assets/TaskIcons/journal.png')}/>
        <Task title="Listen to music" time="Any time" icon={require('./assets/TaskIcons/music.png')}/>
        <Task title="Take a walk" time="Any time" icon={require('./assets/TaskIcons/walk.png')}/>
      </View>
    </ScrollView>
  );
}

