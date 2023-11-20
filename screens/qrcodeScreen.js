import React from "react"
import { View,Text, Button, StyleSheet} from 'react-native'

const QrcodeScreen= ({navigation}) =>{
    return (
        <View style={styles.container}>
            <Text>QR Code tela</Text>
            <Button
            title="Clique aqui"
            onPress={() => alert('button clicked')}
            />
        </View>
    )
}

export default QrcodeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#8fcbbc'
    },
});