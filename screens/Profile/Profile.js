import { StyleSheet, View, Image } from "react-native";
import {
  useFonts,
  WorkSans_400Regular,
  WorkSans_500Medium,
} from "@expo-google-fonts/work-sans";

export default function GroupMeditation(props) {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/HeartEmoticons/amazing.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    alignSelf: "center",
    height: 200,
    width: 200,
  },
});
