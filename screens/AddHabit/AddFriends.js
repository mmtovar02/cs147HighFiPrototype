
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { useFonts, WorkSans_400Regular, WorkSans_500Medium }from '@expo-google-fonts/work-sans';
import { Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export default function AddFriends() {
    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
        WorkSans_500Medium, 
    });

    if (!fontsLoaded) { 
        return null;
    }

    return (
        <View>
            <View>
                <Text>Add Friends</Text>
                <TouchableOpacity>
                    <Text>Done</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff1ef',
    }, 
});