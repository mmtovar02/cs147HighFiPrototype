import { createStackNavigator } from '@react-navigation/stack';

import Inbox from '../screens/Facilitate/Inbox.js';
import VideoConference from '../screens/Facilitate/VideoConference.js'


const Stack = createStackNavigator();

export default function ChatStack() {
  return (
      <Stack.Navigator
        initialRouteName="Inbox"
        screenOptions={{
          headerShown: false
        }}
        >
        <Stack.Screen name="Inbox" component={Inbox}/>
        <Stack.Screen name="VideoConference" component={VideoConference}></Stack.Screen>

      </Stack.Navigator>
  );
}