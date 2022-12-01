import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';


import {useFonts, WorkSans_400Regular, WorkSans_500Medium} from '@expo-google-fonts/work-sans'

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
      color: '#2c2d30'
    },

    welcomeBanner: {
      backgroundColor:'#fff1ef',
    },

    welcomeTitle: {
      fontFamily: 'WorkSans_500Medium',
      fontSize: 22, 
      paddingTop: 75, 
      paddingLeft: 15
    },

    welcomeSubtitle: {
      fontSize: 16, 
      paddingTop: '5%', 
      paddingLeft: 15
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
      paddingTop: '5%',
      paddingLeft: 15 ,
      paddingRight: 15, 
    },

    welcomeEmoticonText: {
      fontSize: 12,
      textAlign: 'center',
      paddingTop: 5,
      paddingBottom: 25
    },

    homeTitle: {
      fontFamily: 'WorkSans_500Medium',
      fontSize: 22,
      paddingLeft: 15,
      paddingTop: '5%',
    },

    taskContainer: {

    },

    taskProfileImage: {
      height: 30,
      width: 30,
      resizeMode: 'contain',
      borderRadius: 100, 
    }
    
  });

  return (
    <View style={styles.container}>
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
      <View>
        <View>
          <View>
            <Text>8:00 PM</Text>
            <Text>Meditate</Text>
            <View>
              <Image style={styles.taskProfileImage} source={require('./assets/ProfilePictures/user.jpeg')}></Image>
              <Image style={styles.taskProfileImage} source={require('./assets/ProfilePictures/cole.jpeg')}></Image>
              <Image style={styles.taskProfileImage} source={require('./assets/ProfilePictures/lily.jpeg')}></Image>
            </View>
          </View>
          
        </View>
      

      </View>
    </View>
  );
}

