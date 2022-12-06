import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useFonts, WorkSans_500Medium }from '@expo-google-fonts/work-sans';
import { Feather } from '@expo/vector-icons';

export default function Header(props) {
    let [fontsLoaded] = useFonts({
        WorkSans_500Medium, 
    });

    if (!fontsLoaded) { 
        return null;
    }

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.leftButton}>
                <Feather name='chevron-left' size={32} color='#2c2d30'/>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Add friends</Text>
            <TouchableOpacity style={styles.rightButton}>
                <Text style={styles.rightButtonText}>Done</Text>
            </TouchableOpacity>
        </View>   
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:'#fff1ef',
        paddingTop: 64,
        paddingBottom: 16,
    },
  
    headerTitle: {
        fontFamily: 'WorkSans_500Medium',
        fontSize: 22,
        alignSelf: 'center',
    },

    rightButton: {
        position: 'absolute',
        alignSelf: 'center',
        marginRight: 16,
        marginTop: 64,
        top: 0,
        right: 0,
    },

    rightButtonText: {
        fontFamily: 'WorkSans_500Medium',
        fontSize: 22,
        color: '#4d8d8c'
    },

    leftButton: {
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: 8,
        marginTop: 64,
        top: -3,
        left: 0,
    },

});