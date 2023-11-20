import React from 'react'
import { View,Text, Button, StyleSheet} from 'react-native'

const ChatScreen= ({navigation}) =>{
    return (
        <View style={styles.container}>
            <Text>Chat tela</Text>
            <Button
            title="Clique aqui"
            onPress={() => alert('button clicked')}
            />
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#8fcbbc'
    },
});