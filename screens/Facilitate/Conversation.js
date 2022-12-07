import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useFonts, WorkSans_500Medium }from '@expo-google-fonts/work-sans';

import Header from '../../components/Header.js'
import CallAndVideoButtons from '../../components/CallAndVideoButtons.js';

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
                facilitatorSubtitle={true}
                rightButton={<CallAndVideoButtons onVideoPress={() => {}}/>}  
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