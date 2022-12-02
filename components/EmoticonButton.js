import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {useFonts, WorkSans_400Regular} from '@expo-google-fonts/work-sans'

export default function EmoticonButton(props) {
    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
    });
    
    if (!fontsLoaded) { 
        return null;
    }

    const styles = StyleSheet.create({
        emoticonIcon: {
            height: 40,
            width: 40,
            resizeMode: 'contain',
            alignSelf: 'center'
        },
  
        emoticonBackground: {
            height: 60,
            width: 60,
            borderRadius: 60,
            borderColor: '#fff',
            borderWidth: 4,
            justifyContent: 'center',
            alignSelf: 'center',
        },
      
        emoticonText: {
            fontFamily: 'WorkSans_400Regular',
            fontSize: 12,
            textAlign: 'center',
            marginTop: 8,
            marginBottom: 32,
        },
    });

    return (
        <TouchableOpacity>
            <View style={styles.emoticonBackground}>
                <Image style={styles.emoticonIcon} source={props.icon}></Image>
            </View>
            <Text style={styles.emoticonText}>{props.label}</Text>
        </TouchableOpacity>
    );  
}