import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  WorkSans_400Regular,
  WorkSans_500Medium,
} from "@expo-google-fonts/work-sans";
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import NavigationButton from "../../components/NavigationButton.js";
import Header from "../../components/Header.js";
import SwitchButton from "../../components/SwitchButton.js";

export default function Tester({ navigation }) {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header
        includeBackArrow={true}
        onBackArrowPress={() => navigation.goBack()}
      />
      <View style={styles.topView}>
        <Text style={styles.title}>
          {" "}
          Get ready to meditate with your group{" "}
        </Text>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={require("../../assets/ProfilePictures/cole.jpeg")}
          />
          <Image
            style={styles.profileImage}
            source={require("../../assets/ProfilePictures/lily.jpeg")}
          />
        </View>
        <Text style={styles.profileImageLabel}>Cole and Lily are ready</Text>
        <TouchableOpacity style={styles.soloMeditationContainer}>
          <Text style={styles.soloMeditationLabel}>
            {" "}
            I want to meditate on my own
          </Text>
          <Feather name="arrow-right" size={18} color="#005453" />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <Image
          style={styles.userImage}
          source={require("../../assets/ProfilePictures/user.jpeg")}
        />
        <View>
          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Video</Text>
            <SwitchButton />
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Audio</Text>
            <SwitchButton />
          </View>
        </View>
        <View style={{ marginBottom: 32 }}>
          <NavigationButton
            text="Enter Session"
            onPress={() => {
              navigation.navigate("GroupMeditation");
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },

  topView: {
    backgroundColor: "#fff1ef",
    alignItems: "center",
  },

  bottomView: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },

  profileImage: {
    height: 64,
    width: 64,
    resizeMode: "contain",
    borderRadius: 100,
    alignItems: "center",
    marginHorizontal: 8,
    marginTop: 16,
    marginBottom: 8,
  },

  piContainer: {
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 24,
  },

  userImage: {
    resizeMode: "cover",
    height: 190,
    width: 340,
    borderRadius: 12,
    marginTop: 12,
  },

  switchContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },

  switchLabel: {
    alignSelf: "center",
    marginRight: 8,
    fontFamily: "WorkSans_400Regular",
    fontSize: 17,
  },

  profileImageContainer: {
    flexDirection: "row",
  },

  profileImageLabel: {
    fontFamily: "WorkSans_400Regular",

    marginBottom: 8,
  },

  title: {
    fontFamily: "WorkSans_400Regular",
    fontSize: 24,
    numberOfLines: 2,
    textAlign: "center",
  },

  soloMeditationContainer: {
    flexDirection: "row",
    marginBottom: 12,
  },

  soloMeditationLabel: {
    marginRight: 8,
    fontFamily: "WorkSans_400Regular",
    fontSize: 14,
    color: "#005453",
  },
});
