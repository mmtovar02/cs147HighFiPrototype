import { useFonts, WorkSans_400Regular, WorkSans_500Medium} from '@expo-google-fonts/work-sans';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home/Home.js';
import Home_meditationComplete from '../screens/Home/Home_meditationComplete.js';


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
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false
        }}
        >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Home_meditationComplete" component={Home_meditationComplete}/>
      </Stack.Navigator>
  );
}