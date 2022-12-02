import { useFonts, WorkSans_400Regular, WorkSans_500Medium} from '@expo-google-fonts/work-sans';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabs from './screens/MainTabs.js';
import GroupMeditation from './screens/GroupMeditation.js';

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
        <Stack.Screen name="GroupMeditation" component={GroupMeditation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

