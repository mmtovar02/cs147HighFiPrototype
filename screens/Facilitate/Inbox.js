import { useState } from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import Header from '../../components/Header.js'
import DiscussionTopic from '../../components/DiscussionTopic.js'
import ConversationBlock from '../../components/ConversationBlock.js'

export default function Inbox({ navigation }) {
    const [askState, setAskState] = useState(false);

    const getHeader = () => {
        return askState ?
            (<Header 
                title='' 
                includeBackArrow={true}
                onBackArrowPress={() => setAskState(!askState)}
                rightButtonLabel='Send'
                onRightButtonPress={() => navigation.navigate('Conversation', { discussionTopic: true})}
            />)
            :
            (<Header 
                title='Inbox' 
                rightButton={
                    <TouchableOpacity>
                        <Image source={require('../../assets/NavigationIcons/newMessage.png')} style={styles.newMessageIcon}/>
                    </TouchableOpacity>
                }
            />);
    }

    return (
        <View style={styles.container}>
            {getHeader()}
            <ScrollView>
                <DiscussionTopic displayAskButton={!askState} onAskButtonPress={() => setAskState(!askState)}/>
                <View style={styles.conversationContainer}>
                    <ConversationBlock
                        label='Cole, Lily' 
                        lastMessage="Cole: I don't have that... &#x2022; Fri"
                        facilitatorReminder="3 days since last message. Check in?"
                        facilitator={true}
                        notification={!askState}
                        selected={askState}
                        onPress={() => navigation.navigate('Conversation')}
                        image1={require('../../assets/ProfilePictures/lily.jpeg')} 
                        image2={require('../../assets/ProfilePictures/cole.jpeg')}
                    />
                    <ConversationBlock
                        label='Mom, Dad' 
                        lastMessage="Mom: I see &#x2022; 4:43 pm"
                        grayed={askState}
                        image1={require('../../assets/ProfilePictures/dad.jpeg')} 
                        image2={require('../../assets/ProfilePictures/mom.jpeg')}
                    />
                    <ConversationBlock
                        label='Cole' 
                        lastMessage="Cole: That's awesome! &#x2022; 12:03 pm"
                        grayed={askState}
                        image1={require('../../assets/ProfilePictures/cole.jpeg')} 
                    />
                    <ConversationBlock
                        label='Lily' 
                        lastMessage="Me: That's a good question... &#x2022; Sun"
                        grayed={askState}
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

    newMessageIcon: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
        alignSelf: 'center',
    }
});