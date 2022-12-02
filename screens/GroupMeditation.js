import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useFonts, WorkSans_400Regular, WorkSans_500Medium} from '@expo-google-fonts/work-sans';
import { Feather, FontAwesome5 } from '@expo/vector-icons';


export default function GroupMeditation() {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_500Medium, 
  });

  if (!fontsLoaded) { 
    return null;
  }

  const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'#fff1ef',
    },

    title: {
        fontFamily: 'WorkSans_500Medium',
        fontSize: 22,
        alignSelf: 'center',
    },

    titleContainer: {
        marginTop: 64,
        marginBottom: 32
    },

    x: {
        position: 'absolute',
        top: 0,
        right: 0,
    },

    video: {
        width: '100%',
        height: 209,
        resizeMode: 'cover',
        alignSelf: 'center',
        borderRadius: 12,
        marginBottom: 12,
    },

    profileVideo: {
        width:165,
        height: 120,
        resizeMode: 'cover',
        alignSelf: 'center',
        borderRadius: 8,
        marginTop: 12
    },

    profileVideoContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 16,
    },

    timeLabelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },

    timeLabel: {
        fontFamily: 'WorkSans_400Regular',
        fontSize: 12,
        color: '#2c2d30'
    },

    sliderBar: {
        position: 'relative',
        top: 12,
        height: 4,
        width: "100%",
        backgroundColor: '#dac6c3',
        borderRadius: 2,
    },

    sliderThumb: {
        position: 'relative',
        top: 0,
        backgroundColor:'#2c2d30',
        height: 18,
        width: 18,
        borderRadius: 60,
    }, 

    sliderContainer:{
        height: 18,
    },

    settingContainer: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    settingIcons: {
        alignSelf: 'center',
    },

    meditationContainer: {
        flex: 6,
        marginLeft: 8,
        marginRight: 8,
    }

  });

  return (
    <View style={styles.container}>
        <View style={styles.meditationContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Group Meditation</Text>
                <Feather name='x' size={32} color='#2c2d30' style={styles.x}/>
            </View>
            <ScrollView>
                <Image style={styles.video} source={require('../assets/Miscellaneous/meditationVideo.png')}/>
                <View style={styles.sliderContainer}>
                    <View style={styles.sliderBar}/>
                    <View style={styles.sliderThumb}/>
                </View>
                <View style={styles.timeLabelContainer}>
                    <Text style={styles.timeLabel}>0:00</Text>
                    <Text style={styles.timeLabel}>9:46</Text>
                </View>
                <View style={styles.profileVideoContainer}>
                    <Image style={styles.profileVideo} source={require('../assets/ProfilePictures/cole.jpeg')}></Image>
                    <Image style={styles.profileVideo} source={require('../assets/ProfilePictures/lily.jpeg')}></Image>
                    <Image style={styles.profileVideo} source={require('../assets/ProfilePictures/user.jpeg')}></Image>
                </View>
            </ScrollView>
        </View>
        <View style={styles.settingContainer}>
            <FontAwesome5 name='microphone' size={24} color='#2c2d30' style={styles.settingIcons}/>
            <FontAwesome5 name='video' size={24} color='#2c2d30' style={styles.settingIcons}/>
        </View>
    </View>
  );
}