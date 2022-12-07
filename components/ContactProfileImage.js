import { StyleSheet, View, Image } from 'react-native';

export default function ContactProfileImage(props) {
    return props.image2 ? 
        (<View style={styles.imageContainer}>
            <Image style={[styles.groupContactImage, {top: 0, left: 12}]} source={props.image1} />
            <Image style={[styles.groupContactImage, {top: 12, left: 0}]} source={props.image2} />
        </View>)
        :
        (<View style={styles.imageContainer}>
            <Image style={styles.singleContactImage} source={props.image1} />
        </View>);
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 64,
        paddingBottom: 16,
        marginRight: 24,
    },

    groupContactImage: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
        borderRadius: 100, 
        position: 'absolute',
        marginTop: 16
    },

    singleContactImage: {
        height: 40,
        width: 40,
        borderRadius: 100, 
        alignSelf: 'center',
        marginTop: 12
    },
});