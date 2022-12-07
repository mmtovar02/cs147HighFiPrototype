import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useFonts, WorkSans_400Regular, WorkSans_500Medium }from '@expo-google-fonts/work-sans';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

export default function Header(props) {
    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
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
                <TouchableOpacity onPress={props.onRightButtonPress} style={styles.rightButton}>
                    <Text style={styles.rightButtonLabel}>{props.rightButtonLabel}</Text>
                </TouchableOpacity>
            );
        } else if (props.rightButton) {
            return (
                <View style={styles.rightButton}>
                    {props.rightButton}
               </View>
            );
        } 
    }

    return (
        <View style={styles.header}>
            {getLeftComponents()}
            <View style={{ alignSelf: 'center' }}>
                <Text style={styles.headerTitle}>{props.title}</Text>
                {props.facilitatorSubtitle? 
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <FontAwesome5 name='crown' size={16} color='#ffa899' style={styles.facilitatorSubtitleIcon}/>
                        <Text style={styles.facilitatorSubtitle}>You are the facilitator</Text>
                    </View>
                    : 
                    ''
                }
            </View>
            {getRightComponents()}
        </View>   
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:'#fff1ef',
        height: 116,
        paddingTop: 64,
        paddingBottom: 16,
    },
  
    headerTitle: {
        fontFamily: 'WorkSans_500Medium',
        fontSize: 22,
        alignSelf: 'center',
        marginBottom: 2
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

    facilitatorSubtitleIcon: {
        marginRight: 6,
    },

    facilitatorSubtitle: {
        fontFamily: 'WorkSans_400Regular',
        fontSize: '14',
        color: '#767c8a',
    }
});