import { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { useFonts, WorkSans_400Regular }from '@expo-google-fonts/work-sans';
import { Ionicons } from '@expo/vector-icons';

export default function SearchField() {
    const [value, setValue] = useState('')

    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
    });

    if (!fontsLoaded) { 
        return null;
    }

    return (
        <SearchBar 
            placeholder='Search'
            value={value}
            onChangeText={setValue}
            searchIcon={<Ionicons name='ios-search' size={16} color='#767c8a'/>}
            containerStyle={styles.container}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}/>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        borderWidth: 0,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
    },

    inputContainer: {
        backgroundColor: '#f8f8f8f8',
        height:  32,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 16,
        marginBottom: 16,
    },

    input: {
        fontFamily: 'WorkSans_400Regular',
        fontSize: 16,
        color: '#767c8a'
    }
});