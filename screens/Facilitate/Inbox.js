import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useFonts, WorkSans_400Regular, WorkSans_500Medium }from '@expo-google-fonts/work-sans';

import Header from '../../components/Header.js'

export default function Inbox({ navigation }) {
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
                title='Inbox' 
                rightButton={
                    <Image 
                        source={require('../../assets/NavigationIcons/newMessage.png')}
                        style={{
                            height: 24,
                            width: 24,
                            resizeMode: 'contain',
                            alignSelf: 'center',
                        }}
                    />
                }
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