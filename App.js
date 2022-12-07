import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddHabit from './screens/AddHabit/AddHabit.js';

import BottomNavigation from './sections/BottomNavigation.js';

import WaitingRoom from './screens/Meditation/WaitingRoom.js';
import GroupMeditation from './screens/Meditation/GroupMeditation.js';
import MeditationCompletion from './screens/Meditation/MeditationCompletion.js';


const Stack = createStackNavigator();

export default function App() {
  return (
    <AddHabit/>
    /*
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="NewHabit" component={AddHabit}/>
        <Stack.Screen name="BottomNavigation" component={BottomNavigation}/>
        <Stack.Screen name="WaitingRoom" component={WaitingRoom}/>
        <Stack.Screen name="GroupMeditation" component={GroupMeditation}/>
        <Stack.Screen name="MeditationCompletion" component={MeditationCompletion}/>
      </Stack.Navigator>
   </NavigationContainer>

   */
  );
}

