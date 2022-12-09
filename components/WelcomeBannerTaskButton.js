import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {
  useFonts,
  WorkSans_400Regular,
  WorkSans_500Medium,
} from "@expo-google-fonts/work-sans";

export default function WelcomeBannerTaskButton(props) {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.container}>
      {props.icon}
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 260,
    flexDirection: "row",
    borderColor: "#fff",
    borderWidth: 4,
    padding: 16,
    borderRadius: 30,
    marginBottom: 12,
    alignSelf: "flex-start",
  },

  label: {
    fontFamily: "WorkSans_400Regular",
    fontSize: 16,
    color: "#2c2d30",
    marginLeft: 16,
    alignSelf: "center",
  },
});
