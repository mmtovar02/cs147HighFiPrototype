import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { useFonts, WorkSans_400Regular, WorkSans_500Medium }from '@expo-google-fonts/work-sans';
import { AntDesign } from '@expo/vector-icons';

import Header from '../../components/Header.js'
import SearchField from '../../components/SearchField.js';
import ContactBlock from '../../components/ContactBlock.js';

export default function AddFriends() {
    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
        WorkSans_500Medium, 
    });

    if (!fontsLoaded) { 
        return null;
    }

    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView>
                <SearchField />
                <View style={styles.friendsContainer}>
                    <Text style={styles.sectionTitle}>GROUPS</Text>
                    <ContactBlock 
                        label='Cole, Lily' 
                        image1={require('../../assets/ProfilePictures/lily.jpeg')} 
                        image2={require('../../assets/ProfilePictures/cole.jpeg')}/>
                    <ContactBlock 
                        label='Mom, Dad' 
                        image1={require('../../assets/ProfilePictures/dad.jpeg')} 
                        image2={require('../../assets/ProfilePictures/mom.jpeg')}/>
                    <Text style={[styles.sectionTitle, {marginTop: 16}]}>PEOPLE</Text>
                    <ContactBlock 
                        label='Cole' 
                        image1={require('../../assets/ProfilePictures/cole.jpeg')} />
                    <ContactBlock 
                        label='Dad' 
                        image1={require('../../assets/ProfilePictures/dad.jpeg')} />
                    <ContactBlock 
                        label='Lily' 
                        image1={require('../../assets/ProfilePictures/lily.jpeg')} />
                    <ContactBlock 
                        label='Mom' 
                        image1={require('../../assets/ProfilePictures/mom.jpeg')} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },

    friendsContainer: {
        backgroundColor: '#fff',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 64,
    },

    sectionTitle: {
        fontFamily: 'WorkSans_500Medium',
        fontSize: 16,
        color: '#767c8a',
        marginBottom: 16,
    },

});