import { StyleSheet, View, ScrollView, Image } from 'react-native';

import Header from '../../components/Header.js'
import DiscussionTopic from '../../components/DiscussionTopic.js'
import ConversationBlock from '../../components/ConversationBlock.js'

export default function Inbox({ navigation }) {
    return (
        <View style={styles.container}>
            <Header 
                title='Inbox' 
                rightButton={
                    <Image 
                        source={require('../../assets/NavigationIcons/newMessage.png')}
                        style={{
                            height: 24,
                            width: 24,
                            resizeMode: 'contain',
                            alignSelf: 'center',
                        }}
                    />
                }
            />
            <ScrollView>
                <DiscussionTopic/>
                <View style={styles.conversationContainer}>
                    <ConversationBlock
                        label='Cole, Lily' 
                        lastMessage="Cole: I don't have that... &#x2022; Fri"
                        facilitatorReminder="3 days since last message. Check in?"
                        facilitator={true}
                        notification={true}
                        image1={require('../../assets/ProfilePictures/lily.jpeg')} 
                        image2={require('../../assets/ProfilePictures/cole.jpeg')}
                    />
                    <ConversationBlock
                        label='Mom, Dad' 
                        lastMessage="Mom: I see &#x2022; 4:43 pm"
                        image1={require('../../assets/ProfilePictures/dad.jpeg')} 
                        image2={require('../../assets/ProfilePictures/mom.jpeg')}
                    />
                    <ConversationBlock
                        label='Cole' 
                        lastMessage="Cole: That's awesome! &#x2022; 12:03 pm"
                        image1={require('../../assets/ProfilePictures/cole.jpeg')} 
                    />
                    <ConversationBlock
                        label='Lily' 
                        lastMessage="Me: That's a good question... &#x2022; Sun"
                        image1={require('../../assets/ProfilePictures/lily.jpeg')} 
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },

    conversationContainer: {
        backgroundColor: '#fff',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 64,
    },
});