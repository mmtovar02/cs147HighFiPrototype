import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Toast from 'react-native-toast-message'
import { useFonts, WorkSans_500Medium }from '@expo-google-fonts/work-sans';

import Header from '../../components/Header.js'

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
                title='Cole, Lily' 
                rightButton={<></>}  
                includeBackArrow={true} 
                onBackArrowPress={() => navigation.goBack()}
            />
            <ScrollView>
                
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },

  
});