import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import {
  useFonts,
  WorkSans_400Regular,
  WorkSans_500Medium,
} from "@expo-google-fonts/work-sans";

import EmoticonButton from "./EmoticonButton";
import WelcomeBannerTaskButton from "./WelcomeBannerTaskButton";

export default function WelcomeBanner() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [positive, setPositive] = useState();

  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  const getWelcomeBanner = () => {
    if (!buttonClicked) {
      return (
        <View style={styles.welcomeBanner}>
          <Text style={styles.welcomeTitle}>Welcome, Sarah</Text>
          <Text style={styles.welcomeSubtitle}>How are you feeling?</Text>
          <View style={styles.welcomeEmoticonsContainer}>
            <EmoticonButton
              onPress={() => {
                setPositive(true);
                setButtonClicked(true);
              }}
              label="Amazing"
              icon={require("../assets/HeartEmoticons/amazing.png")}
            />
            <EmoticonButton
              onPress={() => {
                setPositive(true);
                setButtonClicked(true);
              }}
              label="Good"
              icon={require("../assets/HeartEmoticons/good.png")}
            />
            <EmoticonButton
              onPress={() => {
                setPositive(true);
                setButtonClicked(true);
              }}
              label="Neutral"
              icon={require("../assets/HeartEmoticons/neutral.png")}
            />
            <EmoticonButton
              onPress={() => {
                setPositive(false);
                setButtonClicked(true);
              }}
              label="Bad"
              icon={require("../assets/HeartEmoticons/bad.png")}
            />
            <EmoticonButton
              onPress={() => {
                setPositive(false);
                setButtonClicked(true);
              }}
              label="Awful"
              icon={require("../assets/HeartEmoticons/awful.png")}
            />
          </View>
        </View>
      );
    } else if (positive) {
      return (
        <View style={styles.welcomeBanner}>
          <TouchableOpacity
            onPress={() => {
              setButtonClicked(false);
            }}
            style={styles.backArrowContainer}
          >
            <Feather name="arrow-left" size={24} color="#005453" />
            <Text style={styles.backArrowText}>Choose another feeling</Text>
          </TouchableOpacity>
          <Text style={styles.welcomeSubtitle}>
            Wonderful! Here are some recommended activities for you.
          </Text>
          <View style={styles.welcomeBannerTaskContainer}>
            <WelcomeBannerTaskButton
              label="Practice Gratitude"
              icon={<FontAwesome name="heart" size={24} color="#2c2d30" />}
            />
            <WelcomeBannerTaskButton
              label="Write Anything"
              icon={
                <FontAwesome5 name="pencil-alt" size={24} color="#2c2d30" />
              }
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.welcomeBanner}>
          <TouchableOpacity
            onPress={() => {
              setButtonClicked(false);
            }}
            style={styles.backArrowContainer}
          >
            <Feather name="arrow-left" size={24} color="#005453" />
            <Text style={styles.backArrowText}>Choose another feeling</Text>
          </TouchableOpacity>
          <Text style={styles.welcomeSubtitle}>
            Sorry to hear that. Here are some things that might help you feel
            better.
          </Text>
          <View style={styles.welcomeBannerTaskContainer}>
            <WelcomeBannerTaskButton
              label="Reach out to a friend"
              icon={<FontAwesome5 name="phone-alt" size={24} color="#2c2d30" />}
            />
            <WelcomeBannerTaskButton
              label="Get outside"
              icon={<FontAwesome5 name="tree" size={24} color="#2c2d30" />}
            />
          </View>
        </View>
      );
    }
  };

  return getWelcomeBanner();
}

const styles = StyleSheet.create({
  welcomeBanner: {
    backgroundColor: "#fff1ef",
  },

  welcomeTitle: {
    fontFamily: "WorkSans_500Medium",
    fontSize: 22,
    marginTop: 24,
    marginLeft: 16,
    marginRight: 16,
  },

  welcomeSubtitle: {
    fontFamily: "WorkSans_400Regular",
    fontSize: 16,
    marginTop: 24,
    marginLeft: 16,
    marginRight: 16,
  },

  welcomeEmoticonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },

  backArrowText: {
    fontFamily: "WorkSans_400Regular",
    fontSize: 14,
    color: "#005453",
    alignSelf: "center",
    marginLeft: 8,
  },

  backArrowContainer: {
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 16,
    marginRight: 16,
  },

  welcomeBannerTaskContainer: {
    justifyContent: "flex-start",
    marginHorizontal: 16,
    marginVertical: 24,
  },
});
