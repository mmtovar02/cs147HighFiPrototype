import { useFonts, WorkSans_400Regular, WorkSans_500Medium} from '@expo-google-fonts/work-sans';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabs from './screens/MainTabs.js';
import WaitingRoom from './screens/WaitingRoom.jsx';

import GroupMeditation from './screens/GroupMeditation.js';
import MeditationCompletion from './screens/MeditationCompletion.jsx';
import Home_meditationComplete from './screens/Home_meditationComplete.js';
import Home from './screens/Home.js';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_500Medium, 
  });

  if (!fontsLoaded) { 
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="MainTabs" component={MainTabs}/>
        <Stack.Screen name="WaitingRoom" component={WaitingRoom}/>
        <Stack.Screen name="GroupMeditation" component={GroupMeditation}/>
        <Stack.Screen name="MeditationCompletion" component={MeditationCompletion}/>
        <Stack.Screen name="HomeMeditationComplete" component={MainTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

