import { StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AddTaskButton(props) {
    return (
        <TouchableOpacity style={styles.plusBackground} onPress={() => {props.navigation.navigate('AddFriends')}}>
            <Image style={styles.plusIcon} source={require('../assets/NavigationIcons/plus.png')}/>
        </TouchableOpacity>
    );  
}

const styles = StyleSheet.create({
    plusBackground: {
        height: 50,
        width: 50,
        borderRadius: 60,
        backgroundColor: '#a4dfde',
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 16,
        shadowColor: 'd0e4e4',
        shadowOffset: {width: 1, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        justifyContent: 'center',
        alignSelf: 'center',
    },

    plusIcon: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
});