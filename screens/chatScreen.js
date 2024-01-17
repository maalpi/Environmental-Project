import React, { useState } from 'react'
import { View,Text, Button, StyleSheet, TouchableOpacity,Dimensions} from 'react-native'

import { ArrowLeftIcon, ArrowRightIcon } from 'react-native-heroicons/solid'

import Quiz from './componentes_quiz/Quiz';

const {width,height} = Dimensions.get('window');

const SIZES = {
    bases: 10,
    width,
    height
}

const ChatScreen= ({navigation}) =>{

    return (
        <Quiz/>
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