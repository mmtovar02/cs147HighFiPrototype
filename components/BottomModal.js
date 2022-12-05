import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal'
import {useFonts, WorkSans_400Regular,WorkSans_500Medium} from '@expo-google-fonts/work-sans'

export default function BottomModal(props) {
    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
        WorkSans_500Medium,
    });
    
    if (!fontsLoaded) { 
        return null;
    }

    const styles = StyleSheet.create({
        modal: {
            backgroundColor: '#ffff',
            flex: 0.2,
            borderRadius: 16,
        },

        text: {
            fontFamily: 'WorkSans_400Regular',
            fontSize: 16,
            marginTop: 24,
            marginLeft: 16,
            color: '#2c2d30'
        },

        buttonContainer: {
            marginTop: 16,
            marginLeft: 16,
            marginRight: 16,
            flexDirection: 'row', 
            justifyContent: 'space-between'
        },

        neutralButton: {
            width: 160,
            height: 46,
            borderColor: '#e1e4eb',
            borderWidth: 1, 
            borderRadius: 100,
            justifyContent: 'center',
        },

        neutralButtonText: {
            fontFamily: 'WorkSans_500Medium', 
            fontSize: 16, 
            alignSelf: 'center', 
            color: '#2c2d30'
        },

        actionButton: {
            width: 171,
            height: 46,
            borderRadius: 100,
            backgroundColor: '#e32754',
            justifyContent: 'center',
        },

        actionButtonText: {
            fontFamily: 'WorkSans_500Medium', 
            fontSize: 16, 
            alignSelf: 'center', 
            color: '#ffff'
        }


    });

    return (
        <Modal
            isVisible={props.isVisible}
            backdropTransitionOutTiming={0}
            hideModalContentWhileAnimating={true}
            style={{justifyContent: 'flex-end', margin: 0}}>
            <View style={styles.modal}>
                <Text style={styles.text}>Leave this group meditation session?</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={props.stay} style={styles.neutralButton}>
                        <Text style={styles.neutralButtonText}>Stay</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={props.leave} style={styles.actionButton}>
                        <Text style={styles.actionButtonText}>Leave</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );  
}