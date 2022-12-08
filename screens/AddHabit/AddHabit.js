import 'react-native-gesture-handler';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message'
import { useFonts, WorkSans_400Regular, WorkSans_500Medium }from '@expo-google-fonts/work-sans';

import AddFriends from './AddFriends.js'
import Header from '../../components/Header.js'
import SearchField from '../../components/SearchField.js';
import ContactBlock from '../../components/ContactBlock.js';
import Habit from '../../components/HabitComponents/Habit.js';
import HabitProperty from '../../components/HabitComponents/HabitProperty.js'
import NavigationButton from '../../components/NavigationButton.js'

import { useLinkProps } from '@react-navigation/native';

const styles = StyleSheet.create({

});

export default function AddHabit({navigation, route}) {
    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
        WorkSans_500Medium, 
    });

    if (!fontsLoaded) { 
        return null;
    }

    let {version} = route.params ? route.params : {version: 'default'};
    
    let getHabitVersion = () => {
        if (version == 'default') {
            return(
                <View >
                <Habit textHeader='Do yoga' textBody='Connect with your body' icon = {require('../../assets/TaskIcons/yoga.png')} onPress={() => {navigation.navigate('AddHabit', { version: 'YogaSelected' })}}> </Habit>
                <Habit textHeader='Draw' textBody = 'Let your creative juices flow freely' icon={require('../../assets/TaskIcons/draw.png')}></Habit>
                <Habit textHeader='Get outside' textBody = 'Take in nature and enjoy the scenery' icon={require('../../assets/TaskIcons/get-outside.png')}></Habit>
                <Habit textHeader='Practice affirmations' textBody = 'Think positively to influence your life' icon={require('../../assets/TaskIcons/affirmations.png')}></Habit>
                <Habit textHeader='Practice gratitude' textBody = 'Treasure good moments in your life' icon={require('../../assets/TaskIcons/gratitude.png')}></Habit>
                <Habit textHeader='Practice deep breathing' textBody = 'Calm your mind' icon={require('../../assets/TaskIcons/breathing.png')}></Habit>
                <Habit textHeader='Reach out to a friend' textBody = 'Cultivate your friendships' icon={require('../../assets/TaskIcons/reach-out.png')}></Habit>
                <Habit textHeader='Write anything' textBody = 'Express your feelings' icon={require('../../assets/TaskIcons/write.png')}></Habit>
                </View>
            )
        } else if (version == 'YogaSelected') {
            return(
            <View>
                <Habit textHeader='Do yoga' textBody='Connect with your body' icon = {require('../../assets/TaskIcons/yoga.png')}> </Habit>
                <HabitProperty icon={require('../../assets/HabitProperties/friends.png')} text='Add friends' onPress={() => {navigation.navigate('AddFriends')}}/>
                <HabitProperty icon={require('../../assets/HabitProperties/frequency.png')} text='Daily'/>
                <HabitProperty icon={require('../../assets/HabitProperties/end-date.png')} text='Does not end'/>
                <HabitProperty icon={require('../../assets/HabitProperties/time.png')} text='Any time of day'/>
            </View>
            );
        } else if (version == 'friendsSelected') {
            return(
                <View style={{justifyContent:'space-between', flex:1, marginTop: 24}}>
                    <View> 
                        <Habit textHeader='Do yoga' textBody='Connect with your body' icon = {require('../../assets/TaskIcons/yoga.png')}> </Habit>
                        <HabitProperty icon={require('../../assets/HabitProperties/friends.png')} friendsSelected={true}/>
                        <HabitProperty icon={require('../../assets/HabitProperties/frequency.png')} text='Daily'/>
                        <HabitProperty icon={require('../../assets/HabitProperties/end-date.png')} text='Does not end'/>
                        <HabitProperty icon={require('../../assets/HabitProperties/time.png')} text='Any time of day'/>
                    </View>
                    <View style = {{alignSelf:'center'}}>
                        <NavigationButton text ='Save' onPress={() => {navigation.navigate('Home', { version: 'addHabitComplete' })}}> </NavigationButton> 
                    </View>
                </View>
               
                )
        }
    }
        return(
            <View style = {{backgroundColor: 'white', flex: 1}}>
                <Header 
                    title='Add new habit' 
                    includeBackArrow={true} 
                    onBackArrowPress={() => navigation.goBack()}
                    />
                    {getHabitVersion()}
                {/*  <View style = {{marginTop: 24}}> 
                    
                </View> */}
            </View>
        );
    
};
