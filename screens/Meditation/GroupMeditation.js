
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { useFonts, WorkSans_400Regular, WorkSans_500Medium }from '@expo-google-fonts/work-sans';
import { Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import BottomModal from '../../components/BottomModal.js'

export default function GroupMeditation(props) {
    const [modalVisible, setModalVisible] = useState(false);
    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
        WorkSans_500Medium, 
    });

    if (!fontsLoaded) { 
        return null;
    }

    let exit = () => {
        setModalVisible(true)};

    return (
        <View style={styles.container}>
            <View style={styles.meditationContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Group Meditation</Text>
                    <TouchableOpacity onPress={exit}  style={styles.x}>
                        <Feather name='x' size={32} color='#2c2d30'/>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.darkenedVideoBackground}>
                        <Image style={styles.video} source={require('../../assets/Miscellaneous/meditationVideo.png')}/>
                        <MaterialCommunityIcons name='closed-caption' size={32} color={'#ffff'} style={styles.closedCaptionIcon}/>
                        <TouchableOpacity style={styles.playBackground}>
                            <FontAwesome5 name='play' size={32} color={'#ffff'} style={styles.playIcon}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sliderContainer}>
                        <View style={styles.sliderBar}/>
                        <View style={styles.sliderThumb}/>
                    </View>
                    <View style={styles.timeLabelContainer}>
                        <Text style={styles.timeLabel}>0:00</Text>
                        <Text style={styles.timeLabel}>9:46</Text>
                    </View>
                    <View style={styles.profileVideoContainer}>
                        <Image style={styles.profileVideo} source={require('../../assets/ProfilePictures/cole.jpeg')}></Image>
                        <Image style={styles.profileVideo} source={require('../../assets/ProfilePictures/lily.jpeg')}></Image>
                        <Image style={styles.profileVideo} source={require('../../assets/ProfilePictures/user.jpeg')}></Image>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.settingContainer}>
                <TouchableOpacity style={styles.settingButton}>
                    <FontAwesome5 name='microphone' size={24} color='#2c2d30'/>
            </TouchableOpacity>
                <TouchableOpacity style={styles.settingButton}>
                    <FontAwesome5 name='video' size={24} color='#2c2d30'/>
                </TouchableOpacity>
            </View>
            <BottomModal 
                isVisible={modalVisible} 
                stay={() => {setModalVisible(false)}} 
                leave={()=> {
                    setModalVisible(false);
                    props.navigation.navigate('MeditationCompletion');
                }} 
            />
        </View>
    );
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
        top: -3,
        right: 0,
    },

    video: {
        width: '100%',
        height: 209,
        resizeMode: 'cover',
        alignSelf: 'center',
        borderRadius: 12,
        marginBottom: 12,
        opacity: 0.7
    },

    darkenedVideoBackground: {
        width: '100%',
        height: 209,
        borderRadius: 12,
        marginBottom: 12,
        backgroundColor: 'black'
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
        justifyContent: 'space-evenly',
    },

    settingButton: {
        marginTop: 24,

    },

    meditationContainer: {
        flex: 6,
        marginLeft: 8,
        marginRight: 8,
    },

    closedCaptionIcon: {
        position: 'absolute',
        top: 8,
        right: 8,
    },

    playIcon: {
        alignSelf: 'center'
    },

    playBackground: {
        position: 'absolute',
        width: 82,
        height: 82,
        borderRadius: 80,
        backgroundColor: '#2c2d30',
        alignSelf: 'center',
        justifyContent: 'center',
        top: '32%'
    }, 

});