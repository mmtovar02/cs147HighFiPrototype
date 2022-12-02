import { useFonts, WorkSans_400Regular, WorkSans_500Medium} from '@expo-google-fonts/work-sans';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import Home from './Home.js'
import WelcomeBanner from '../components/WelcomeBanner.js';


const Tab = createMaterialBottomTabNavigator();

export default function MainTabs() {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_500Medium, 
  });

  if (!fontsLoaded) { 
    return null;
  }

  return (
    <Tab.Navigator 
    initialRouteName='Home'
    activeColor="#2c2d30"
    inactiveColor="#d5d9e2"
    labeled={false}
    barStyle={{ 
        backgroundColor: '#ffff', 
        borderTopColor: '#e1e4eb', 
        borderTopWidth: 0.5, 
        shadowOpacity: 0, 
        elevation: 0,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 24,
        paddingRight: 24}}>
    <Tab.Screen 
        name='Home' 
        component={Home} 
        options={{
        tabBarIcon: ({color}) =>
            (<FontAwesome5 name='calendar' size={24} color={color}/>)
        }}/>
    <Tab.Screen 
        name='Chat' 
        component={WelcomeBanner} 
        options={{
        tabBarIcon: ({color}) =>
            (<FontAwesome5 name='comment' size={24} color={color}/>)
        }}/>
        <Tab.Screen 
        name='Profile' 
        component={WelcomeBanner} 
        options={{
        tabBarIcon: ({color}) =>
            (<FontAwesome5 name='user' size={32} color={color}/>)
        }}/>
    </Tab.Navigator>
  );
}