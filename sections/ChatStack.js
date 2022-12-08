import { createStackNavigator } from '@react-navigation/stack';

import Inbox from '../screens/Facilitate/Inbox.js';

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
      </Stack.Navigator>
  );
}