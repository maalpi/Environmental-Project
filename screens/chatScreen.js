import React, { useState } from 'react'
import { View,Text, Button, StyleSheet, TouchableOpacity,Dimensions,Image,SafeAreaView} from 'react-native'

import { ArrowLeftIcon, ArrowRightIcon } from 'react-native-heroicons/solid'

import Quiz from './componentes_quiz/Quiz';

const {width,height} = Dimensions.get('window');

const SIZES = {
    bases: 10,
    width,
    height
}

const ChatScreen= ({navigation}) =>{
    const [showQuiz, setShowQuiz] = useState(false);

    const handleStartQuiz = () => {
        setShowQuiz(true);
    };

    return (
    <SafeAreaView className="flex-1 py-8 px-4 bg-backgroundprimary">
            <View style ={{flexDirection: 'row'}}>
                <View style={{ alignItems: 'center',paddingLeft:25, flexDirection: 'row',marginBottom:13 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#3165b0' }}>
                        Quiz Ambiental
                    </Text>    
                    <View style={{ paddingLeft: 45 }}>
                    <Image
                    source={require('../assets/logo/logo.png')}
                    style={{ width: 80, height: 80, borderRadius: 25 }}
                    />
                    </View>
                </View>
            </View>
            
            <View style={{justifyContent:'center',alignItems: 'center'}}>
            <Image
                source={require('../assets/logo/cientistaALFA.gif')}
                style={{ width: 250, height: 250, borderRadius: 25,marginTop:55}}
            />
            <Text style={{ width: 245, height: 120, fontSize: 25,marginTop:10,paddingLeft:5,textAlign:'center',color:'#000'}}>Olá! Vamos testar seus conhecimentos?</Text>
            </View>

      {showQuiz ? ( <Quiz />) : ( 
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quiz')}>
                <Text style={styles.buttonText}>SIM! VAMOS JOGAR</Text>
            </TouchableOpacity>
      )}
    </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#8fcbbc'
    },button: {
        backgroundColor: '#00A2DB',
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginTop: 10,
        borderRadius:30,
      },
      buttonText: {
        color: '#FFDD00',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
      },
});