import React from 'react'
import { View,Text, Button, StyleSheet, TouchableOpacity,Image,SafeAreaView} from 'react-native'
import { MagnifyingGlassIcon, ArrowRightIcon } from 'react-native-heroicons/solid'

import Leitor from './leitor'

const Card = ({navigation,item,cont}) => {
    
    return (
        <>
        <View>
             {cont === 0 ? 
             <Text className="font-bold py-4 text-3xl text-black"> Destaque </Text> 
            : false}

            {cont === 1 ? 
             <Text className="font-bold mb-4 text-2xl text-black font-sans"> Ultimas Noticias </Text> 
            : false}
        </View>
        <TouchableOpacity className="flex-1 shadow-md relative " onPress={() => navigation.navigate('Leitor',  {item: item, cont: cont})}>
        <View className= {cont === 0 ? "flex-1 px-4 py-4 mb-4 relative" : "flex-1 px-4 py-2 mb-5 relative flex-row w-40 h-full"}>
            <Image source={{uri: item.urlToImage ? item.urlToImage : "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/11/g7.png?w=1038&h=576&crop=1"}} 
            className= {cont === 0 ? "h-52 w-full rounded-xl" : "h-32 w-32 rounded-xl" }
            resizeMethod='resize'></Image>

            <View >
                {cont === 0 ? 
                <Text className="px-3 py-2 text-left text-xl text-black font-bold  ">{item.title}</Text>
                :  <Text className="px-3 py-2 text-sm text-gray-700 w-60 ">{item.title}</Text>}  
                {/* <Text className="text-xs my-2">{item.description}</Text> */}  

                {cont === 0 ?          
                false : <View className="flex-row justify-between items-center">
                    <Text className=" px-3 text-xs my-0.25">abdef</Text>
                </View>}
                    {/* {cont === 0 ? 
                    false 
                    :   <View className="flex-row-reverse">
                            <TouchableOpacity className="bg-redprimary mr-120 py-1.5 mt-2 w-32 justify-center absolute items-center rounded-md flex-row space-x-2">
                                <Text className="text-white text-xs font-semibold ">Read more</Text>
                                <ArrowRightIcon color='#fff' size={18}/>
                            </TouchableOpacity>
                        </View>} */}
                        
                        
            </View>
            

            {/* <View className="absolute top-4 right-6 bg-redprimary px-4 rounded-md">
                <Text className="text-xs text-white py-1">{item.source.name}</Text>
            </View> */}

            
        </View>
        </TouchableOpacity>
        </>
         
    )
}

export default Card;

const styles = StyleSheet.create({});