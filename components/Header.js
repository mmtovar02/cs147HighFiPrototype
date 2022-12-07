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

    const getLeftComponents = () => {
        if (props.includeBackArrow) {
            return (
                <TouchableOpacity onPress={props.onBackArrowPress} style={styles.leftButton}>
                    <Feather name='chevron-left' size={32} color='#2c2d30'/>
                </TouchableOpacity>
            );
        }
    }

    const getRightComponents = () => {
        if (props.rightButtonLabel) {
            return (
                <Text style={styles.rightButtonLabel}>{props.rightButtonLabel}</Text>
            );
        } else if (props.rightButton) {
            return props.rightButton;
        }
    }

    return (
        <View style={styles.header}>
            {getLeftComponents()}
            <Text style={styles.headerTitle}>{props.title}</Text>
            <TouchableOpacity onPress={props.onRightButtonPress} style={styles.rightButton}>
                {getRightComponents()}
            </TouchableOpacity>
        </View>   
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:'#fff1ef',
        height: 108,
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

    rightButtonLabel: {
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