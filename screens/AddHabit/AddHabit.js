import 'react-native-gesture-handler';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message'
import { useFonts, WorkSans_500Medium }from '@expo-google-fonts/work-sans';

import Header from '../../components/Header.js'
import SearchField from '../../components/SearchField.js';
import ContactBlock from '../../components/ContactBlock.js';
import Habit from '../../components/HabitComponents/Habit.js';
//import styles from 'rn-range-slider/styles.js';

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },


});

export default function AddHabit() {
return(
    <View style = {styles.container}>
        <Habit textHeader='Do yoga' textBody='Connect with your body' icon = {require('../../assets/TaskIcons/yoga.png')}></Habit>
        <Habit textHeader='Draw' textBody = 'Let your creative juices flow freely' icon={require('../../assets/TaskIcons/draw.png')}></Habit>
        <Habit textHeader='Get outside' textBody = 'Take in nature and enjoy the scenery' icon={require('../../assets/TaskIcons/get-outside.png')}></Habit>
        <Habit textHeader='Practice affirmations' textBody = 'Think positively to influence your life' icon={require('../../assets/TaskIcons/affirmations.png')}></Habit>
        <Habit textHeader='Practice gratitude' textBody = 'Treasure good moments in your life' icon={require('../../assets/TaskIcons/gratitude.png')}></Habit>
        <Habit textHeader='Practice deep breathing' textBody = 'Calm your mind' icon={require('../../assets/TaskIcons/breathing.png')}></Habit>
        <Habit textHeader='Reach out to a friend' textBody = 'Cultivate your friendships' icon={require('../../assets/TaskIcons/reach-out.png')}></Habit>
        <Habit textHeader='Write anything' textBody = 'Express your feelings' icon={require('../../assets/TaskIcons/write.png')}></Habit>
    </View>
 );
};
