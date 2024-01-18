import React, { useEffect, useCallback, useRef, useState } from 'react'
import { View,Text,ScrollView, Button, StyleSheet, TouchableOpacity,Image,Platform, StatusBar} from 'react-native'
import { ArrowLeftIcon, ArrowRightIcon, VideoCameraIcon } from 'react-native-heroicons/solid'

import YoutubePlayer from "react-native-youtube-iframe";

import Caurosel from './carrossel' 

const Leitor = ({navigation, route}) => {
    const { item, cont } = route.params;

    const dateObj = new Date(item.publishedAt);
    const dia = dateObj.getDate();
    let mes = dateObj.toLocaleString('default', { month: 'long' });
    const ano = dateObj.getFullYear();
    console.log(cont);
    

    const data = [
        {
        image: item.urlToImage,
        },
        {
         image: item.urlToImage,  
        },
        {
         image: item.urlToImage,  
        }
    ]
   
    const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

    return (
        <ScrollView>
         <View className ="flex-row px-4 py-3 justify-between items-center  shadow-lg">
             <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftIcon color='#000' size={24}/>
            </TouchableOpacity>
            <Text>Tela de leitura</Text>
         </View>
         <View className=" px-4 py-4 mb-4 relative">
            <Text className= "px-3 py-2 uppercase font-bold">{item.category}</Text>
            <Text className="px-3 py-2 text-2xl font-extrabold text-black ">{item.title}</Text>
            <Text className="px-3 mt-6 uppercase text-xl font-extrabold text-red-900 ">
                {`${mes} ${dia} - ${ano}`}
            </Text>

         </View>

        <View className=" px-4 py-4 mb-4 relative items-center">
            <Caurosel data={data}/>
            <Text className="mt-5 text-black font-bold">{item.author}</Text>
         </View>

         <View >
            <Text className= "px-5 py-2 text-l uppercase font-extrabold">Descrição</Text>
            <Text  className= "px-5 py-2 text-l text-justify font-bold ">{item.description}</Text>
         </View>

         {cont === 0? <View className="flex-1 relative overflow-hidden">
            <Text className="px-5 py-2 text-l uppercase font-extrabold">O que são ODS?</Text>
            <YoutubePlayer
            height={250}
            play={playing}
            videoId={"CL6obyrHdkM"}
            onChangeState={onStateChange}
            />
            <View className="mt--16">
            <Text className="px-5 py-2 text-l uppercase font-extrabold">Unidades de Conservação</Text>
                <YoutubePlayer
                height={250}
               
                play={playing}
                videoId={"KPp5CpJyHJw"}
                onChangeState={onStateChange}
                />
            </View>

            <View className="mt--16">
            <Text className="px-5 py-2 text-l uppercase font-extrabold">Reserva Particular do Patrimônio Natural</Text>
                <YoutubePlayer
                height={250}   
                play={playing}
                videoId={"CFKKyN-UVzU"}
                onChangeState={onStateChange}
                />
            </View>
            {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
         </View> :
         false}
         </ScrollView>

    )
}

export default Leitor;

const styles = StyleSheet.create({
    imageContainer:{
        borderRadius:10,
        overflow:'hidden',
    },
    image:{
        width:'120%',
        height:'10',
        height:undefined,
        aspectRatio: 1
    },
    dotView:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    descricao: {
        paddingHorizontal: 5,
        paddingVertical: 2,
        fontSize: 16,
        textAlign: 'justify',
        fontWeight: 'bold',
      },
})

