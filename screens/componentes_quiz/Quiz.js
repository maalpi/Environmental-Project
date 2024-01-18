import React, { useState } from 'react'
import { View,Text,Modal, Animated, StyleSheet, TouchableOpacity,Dimensions,Image} from 'react-native'

import { XMarkIcon, CheckIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context';

import Data from '../../assets/Data/quizData';


const {width,height} = Dimensions.get('window');

const SIZES = {
    bases: 10,
    width,
    height
}
const selectRandomQuestions = () => {
    const easyQuestions = Data.filter(question => question.dificulty === 'facil').slice(0);
    const mediumQuestions = Data.filter(question => question.dificulty === 'media').slice(0);
    const hardQuestions = Data.filter(question => question.dificulty === 'dificil').slice(0);

    // Função para obter um número aleatório dentro de um intervalo
    const getRandomIndex = (max) => Math.floor(Math.random() * max);

    // Selecionando aleatoriamente 5 questões de cada dificuldade
    const selectedEasyQuestions = [];
    const selectedMediumQuestions = [];
    const selectedHardQuestions = [];

    while (selectedEasyQuestions.length < 5 && easyQuestions.length > 0) {
        const randomIndex = getRandomIndex(easyQuestions.length);
        const selectedQuestion = easyQuestions[randomIndex];
        selectedEasyQuestions.push(selectedQuestion);
        easyQuestions.splice(randomIndex, 1);
    }

    while (selectedMediumQuestions.length < 5 && mediumQuestions.length > 0) {
        const randomIndex = getRandomIndex(mediumQuestions.length);
        const selectedQuestion = mediumQuestions[randomIndex];
        selectedMediumQuestions.push(selectedQuestion);
        mediumQuestions.splice(randomIndex, 1);
    }

    while (selectedHardQuestions.length < 5 && hardQuestions.length > 0) {
        const randomIndex = getRandomIndex(hardQuestions.length);
        const selectedQuestion = hardQuestions[randomIndex];
        selectedHardQuestions.push(selectedQuestion);
        hardQuestions.splice(randomIndex, 1);
    }
    return [
        ...selectedEasyQuestions,
        ...selectedMediumQuestions,
        ...selectedHardQuestions
      ];
    }

    // Concatenando as questões selecionadas em uma lista única
    // const allQuestions = [
    //     ...selectedEasyQuestions,
    //     ...selectedMediumQuestions,
    //     ...selectedHardQuestions
    // ];

const Quiz = ({navigation}) =>{

    const [allQuestions, setAllQuestions] = useState(selectRandomQuestions());
    console.log(allQuestions);

    const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0);
    const [currentOptionsSelected,setCurrentOptionsSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisable,setIsOptionsDisable] = useState(false);
    const [score,setScore] = useState(0);
    const [showNextButton,setShowNextButton] = useState(false);
    const [showScoreModal,setShowScoreModal] = useState(false);


    const [progress,setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0,15],
        outputRange: ['0%','100%']
    })

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionsSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisable(true);
        if (selectedOption == correct_option){
            setScore(score + 1);
            
        }
        setShowNextButton(true);
    }

    const handleNext = () => {
        //ultimo - 1
        if(currentQuestionIndex==14){
            //ultima pergunta
            //mostrar o numero de acertos
            setShowScoreModal(true);
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionsSelected(null);
            setCorrectOption(null);
            setIsOptionsDisable(false);
            setShowNextButton(false);
        }
        Animated.timing(progress,{
            toValue:currentQuestionIndex+1,
            duration:1000,
            useNativeDriver:false
        }).start();
    }

    const restartQuiz = () => {
        setShowScoreModal(false);
        
        setCurrentQuestionIndex(0);
        setScore(0);
        
        setCurrentOptionsSelected(null);
        setCorrectOption(null);
        setIsOptionsDisable(false);
        setShowNextButton(false);
        const newQuestions = selectRandomQuestions();
        setAllQuestions(newQuestions);
        Animated.timing(progress,{
            toValue:0,
            duration:1000,
            useNativeDriver:false
        }).start();
    }

    const renderProgressBar = () => {
        console.log(progressAnim);
        return (
            <View style={{
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: '#00000020',

            }}>
                <Animated.View style={[{
                    height:20,
                    borderRadius:20,
                    backgroundColor:'#90ee90'
                },{
                    width: progressAnim,

                }]}> 
                </Animated.View>
            </View>
        )
    }

    const renderQuestion = () => {
        return(
            <View className="w-48 h-56 bg-greenchat rounded-md shadow-lg mt-4">
                {/* <View className="flex-row items-end">
                    <Text className="text-black text-xl opacity-60 mr-2">{currentQuestionIndex}</Text>
                    <Text className="text-black text-base opacity-60">/ {15}</Text>
                </View> */}
                
                <Text className="text-black text-base font-serif">
                    {allQuestions[currentQuestionIndex]?.question}
                </Text>
            </View>
        )
    }

    const renderOptions = () => {
        return (
            <View className="shadow-lg">
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity 
                        onPress = {() => validateAnswer(option)}
                        disabled={isOptionsDisable}
                        key={option}
                        style={{borderWidth:3, borderColor: option==correctOption ? "#84CC16": option==currentOptionsSelected ? "#EF4444" : "#1E90FF"+"40",
                                backgroundColor:option==correctOption ? "#84CC16"+"20": option==currentOptionsSelected ? "#EF4444"+"20" : "#00A2DB"+"20",
                                height: 70,width:300, borderRadius:20,
                                flexDirection: 'row',
                                alignItems: 'center', justifyContent:'space-between',
                                marginLeft: 30,
                                marginVertical: 5,
                                }}
                               >
                            <Text className = "text-xl text-black indent-20 ml-2">{option}</Text>

                            {
                                option == correctOption ? (
                                    <View style={{width:30,height:30,borderRadius:30/2}} className="bg-green-500 items-center justify-center">
                                        <CheckIcon color='#000' size={20}/>
                                    </View>
                                ) : option == currentOptionsSelected ?(
                                    <View style={{width:30,height:30,borderRadius:30/2}} className="bg-red-500 items-center justify-center">
                                        <XMarkIcon color='#000'/>
                                    </View>

                                ) : null
                            }
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }

    const renderNextButton = () => {
        if (showNextButton){
            return(
                <TouchableOpacity 
                className = "mt-3 bg-blue-500 p-6 rounded-lg h-11 items-center"
                onPress={handleNext}
                >
                    <Text className="mt-3 absolute text-base text-white text-center ">Próximo</Text>
                </TouchableOpacity>
            )
        }else{
            return null
        }
    }

    return (
        <SafeAreaView className="flex-1 py-8 px-4 bg-backgroundprimary">
            <View>
            <View style ={{flexDirection: 'row'}}>
                <View style={{ alignItems: 'center',paddingLeft:25, flexDirection: 'row',marginBottom:13 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#3165b0' }}>
                        Quiz da caatinga
                    </Text>    
                    <View style={{ paddingLeft: 45 }}>
                    <Image
                    source={require('../../assets/logo/logo.png')}
                    style={{ width: 80, height: 80, borderRadius: 25 }}
                    />
                    </View>
                </View>
            </View>
            {renderProgressBar()}
            <View style ={{flexDirection: 'row', overflow: 'hidden'}}>
            <View style={{ paddingLeft: 2,marginTop:20 }}>
                    <Image
                    source={require('../../assets/logo/lina-menor.png')}
                    style={{ width: 150, height: 200 }}
                    resizeMethod='resize' 
                    />
                    <View style={styles.leftTriangle} />
                    </View>
            {renderQuestion()}
            </View>
            </View>
            {renderOptions()}

            {renderNextButton()}

            <Modal
            animationType="slide"
            transparent={true}
            visible={showScoreModal}
            >
                <View style={{flex:1, backgroundColor:'#000000',alignItems:'center',justifyContent:'center'}}>
                    <View className="bg-white w-11/12 rounded-lg p-6 flex items-center">
                        <Text className="text-3xl font-bold">{score > 2 ? 'Parabenss!!' : 'Oops!!'}</Text>

                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginVertical:20}}>
                            <Text style={{fontSize: 30, color: score> (2)? "#84CC16": "#EF4444"}}>{score}</Text>
                            <Text style={{fontSize:20,color:"#000000"}}>/ 15</Text>
                        </View>
                        <TouchableOpacity 
                        onPress={restartQuiz}
                        className = "mt-5 bg-blue-500 p-6 rounded-lg">
                            <Text className="text-xl text-white text-center">Recomeçar Quiz</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    leftTriangle: {
    position:'absolute',
      width: 15,
      height: 15,
      marginLeft:148,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 0,
      borderRightWidth: 10,
      borderBottomWidth: 10,
      borderTopWidth: 10,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
      borderTopColor: '#1FAA70', // Cor do triângulo
      transform: [{ rotate: '-50deg' }], // Gira o triângulo para apontar para a esquerda
    },
  });

export default Quiz