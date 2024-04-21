import React from 'react'
import { View,Text, Button, StyleSheet, TouchableOpacity,Image,SafeAreaView} from 'react-native'
import { MagnifyingGlassIcon, ArrowRightIcon } from 'react-native-heroicons/solid'

import { MegaphoneIcon } from 'react-native-heroicons/solid'
import Leitor from './leitor'


const Card = ({navigation,item,cont}) => {
    
    return (
        <>

        {cont === 0 ?
        <View className="flex-row py-4 ml-3">
             <MegaphoneIcon color='#3165b0' className="mt-10"></MegaphoneIcon>
             <Text className=" text-xl text-black"> Curiosidades </Text> 
             </View>
        : null
        }
       

          
             {/* <Text className="font-bold mb-4 text-2xl text-black font-sans"> Ultimas Noticias </Text>  */}
        
        
        <TouchableOpacity className="flex-1 shadow-xl relative mb-4 rounded-xl overflow-hidden ml-4 mr-4" style={{width:'92%',height:'92%'}}onPress={() => navigation.navigate('Leitor',  {item: item, cont: cont})}>  
            <View className= {"flex-1 relative flex-row bg-white my-0 mx-0"}>
                <Image source={{uri: item.url ? item.url : "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/11/g7.png?w=1038&h=576&crop=1"}} 
                className= { "h-32 w-32 rounded-l-xl"}
                resizeMethod='resize'></Image>

                <View className="bg-white my-0 mx-0">
                    
                    <Text className="px-3 py-2 text-sm text-black font-bold w-60 " >{item.title}</Text> 
                    <View className="ml-4 mt-24 absolute">
                        <Text className="text-xs text-black ">{item.diaMes}</Text>
                    </View>
                    <View className="mt-24 flex-row-reverse justify-between items-center absolute" style={{marginLeft:'37%'}}>
                        <Text className="text-xs  text-laranjaprimary ">SAIBA MAIS</Text>
                    </View>                     
                            
                </View>     
            </View>
        </TouchableOpacity>
        
        </>
         
    )
}

export default Card;

const styles = StyleSheet.create({});