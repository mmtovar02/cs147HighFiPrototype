import { useState } from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function AddContactButton() {
    const [checked, setChecked] = useState(false);

    return (
        <TouchableOpacity onPress={() => setChecked(!checked)} style={styles.addContactButton}>
            { checked ? 
                <AntDesign name='checkcircle' size={24} color='#4d8d8c' />
                :
                <AntDesign name='pluscircle' size={24} color='#767c8a' />
            }
        </TouchableOpacity>     
    );
}

const styles = StyleSheet.create({
    addContactButton: {
        alignSelf: 'center',
    },
});