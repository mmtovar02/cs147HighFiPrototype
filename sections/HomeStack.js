import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home/Home.js";
import AddHabit from "../screens/AddHabit/AddHabit.js";
import AddFriends from "../screens/AddHabit/AddFriends.js";
import MeditationCompletion from "../screens/Meditation/MeditationCompletion.js";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddHabit" component={AddHabit} />
      <Stack.Screen name="AddFriends" component={AddFriends} />
      <Stack.Screen
        name="MeditationCompletion"
        component={MeditationCompletion}
      />
    </Stack.Navigator>
  );
}
