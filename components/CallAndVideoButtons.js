import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CallAndVideoButtons(props) {
    return (
        <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity style={{ marginRight: 16}}>
                <FontAwesome5 name='phone-alt' size={24} color='#2c2d30'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onVideoPress}>
                <FontAwesome5 name='video' size={24} color='#2c2d30'/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },
});