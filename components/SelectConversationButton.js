import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function SelectConversationButton() {
    const [checked, setChecked] = useState(false);

    return (
        <TouchableOpacity onPress={() => setChecked(!checked)} style={styles.addContactButton}>
            { checked ? 
                <AntDesign name='checkcircle' size={24} color='#4d8d8c' />
                :
                <View style={styles.unchecked}/>
                
            }
        </TouchableOpacity>     
    );
}

const styles = StyleSheet.create({
    addContactButton: {
        alignSelf: 'center',
        marginRight: 14,
    },

    unchecked: {
        width: 24,
        height: 24,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#e1e4eb'
    }
});