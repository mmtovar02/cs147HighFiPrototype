import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Toast from 'react-native-toast-message'
import { useFonts, WorkSans_500Medium }from '@expo-google-fonts/work-sans';

import Header from '../../components/Header.js'
import SearchField from '../../components/SearchField.js';
import ContactBlock from '../../components/ContactBlock.js';

export default function AddFriends({ navigation }) {
    let [fontsLoaded] = useFonts({
        WorkSans_500Medium, 
    });

    if (!fontsLoaded) { 
        return null;
    }

    return (
        <View style={styles.container}>
            <Header 
                title='Add friends' 
                rightButtonLabel='Done'  
                includeBackArrow={true} 
                onBackArrowPress={() => navigation.goBack()}
                onRightButtonPress={() => {
                    Toast.show({
                        type: 'invitationSent', 
                        text1: 'Invitation sent to Cole and Lily',
                        position: 'bottom', 
                        bottomOffset: 0,
                    });
                    navigation.navigate('AddHabit', { version: 'friendsSelected' });
                }} 
            />
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