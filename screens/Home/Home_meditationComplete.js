import { StyleSheet, Text, ScrollView, View} from 'react-native';
import { useFonts, WorkSans_400Regular, WorkSans_500Medium} from '@expo-google-fonts/work-sans';

import WelcomeBanner from '../../components/WelcomeBanner.js';
import Task from "../../components/Task.js"
import AddHabitButton from '../../components/AddHabitButton.js';


export default function Home_meditationComplete({ navigation }) {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_500Medium, 
  });

  if (!fontsLoaded) { 
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.scrollLimit}></View>
      <ScrollView>
        <WelcomeBanner/>
        <View style={styles.feed}>
            <Text style={styles.homeTitle}>Today</Text>
            <View style={styles.taskContainer}>
                <Task title="Journal" time="Any time" icon={require('../../assets/TaskIcons/journal.png')} complete={false}/>
                <Task title="Listen to music" time="Any time" icon={require('../../assets/TaskIcons/music.png')} complete={false}/>
                <Task title="Take a walk" time="Any time" icon={require('../../assets/TaskIcons/walk.png')} complete={false}/>
            </View>
            <Text style={styles.homeTitle}>Done</Text>
            <View style={styles.taskContainer}>
                <Task title="Meditate" time="8:00 PM" icon={require('../../assets/TaskIcons/meditate.png')} complete={true} navigation={navigation}/>
            </View>
        </View>
      </ScrollView>
      <AddHabitButton navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff1ef',
    fontFamily: 'WorkSans_400Regular',
    color: '#2c2d30',
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

  scrollLimit: {
    height: 50,
    width: '100%',

  },

  feed: {
    backgroundColor: '#fff',
    paddingBottom: 64
  },
});