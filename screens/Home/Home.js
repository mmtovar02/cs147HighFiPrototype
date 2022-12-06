import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message'
import { useFonts, WorkSans_400Regular, WorkSans_500Medium, WorkSans_600SemiBold} from '@expo-google-fonts/work-sans';

import WelcomeBanner from '../../components/WelcomeBanner.js';
import Task from "../../components/Task.js"
import AddHabitButton from '../../components/AddHabitButton.js';

const toastConfig = {
  invitationSent: (props) => (
    <View 
      style={{
        flexDirection: 'row',
        height: 60,
        width: 340,
        borderRadius: 8,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
        backgroundColor: '#2c2d30',
        
        justifyContent: 'space-around',
    }}>
      <Text
        style={{
          fontFamily: 'WorkSans_400Regular',
          fontSize: 16,
          color: '#ffff',
          alignSelf: 'center'
        }}  
      >
        {props.text1}
      </Text>
      <TouchableOpacity
        style={{
          alignSelf: 'center'
        }}
      >
        <Text
          style={{
            fontFamily: 'WorkSans_600SemiBold',
            fontSize: 16,
            color: '#ffff',
          }} 
        >
          Undo
        </Text> 
      </TouchableOpacity>  
    </View>
  ),
}



export default function Home({ navigation }) {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_500Medium, 
    WorkSans_600SemiBold
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
            <Task title="Meditate" time="8:00 PM" icon={require('../../assets/TaskIcons/meditate.png')} navigation={navigation}/>
            <Task title="Journal" time="Any time" icon={require('../../assets/TaskIcons/journal.png')}/>
            <Task title="Listen to music" time="Any time" icon={require('../../assets/TaskIcons/music.png')}/>
            <Task title="Take a walk" time="Any time" icon={require('../../assets/TaskIcons/walk.png')}/>
          </View>
        </View>
      </ScrollView>
      <AddHabitButton navigation={navigation}/>
      <Toast config={toastConfig}/>
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

  toast: {
    backgroundColor: '#2c2d30'
  }
});

