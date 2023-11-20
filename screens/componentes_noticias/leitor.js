import React from 'react'
import { View,Text,ScrollView, Button, StyleSheet, TouchableOpacity,Image,Platform, StatusBar} from 'react-native'
import { ArrowLeftIcon, ArrowRightIcon } from 'react-native-heroicons/solid'

import Caurosel from './carrossel' 

const Leitor = ({navigation, route}) => {
    const { item, cont } = route.params;

    const dateObj = new Date(item.publishedAt);
    const dia = dateObj.getDate();
    let mes = dateObj.toLocaleString('default', { month: 'long' });
    const ano = dateObj.getFullYear();

    

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

