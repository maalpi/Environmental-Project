import React, { useEffect, useCallback, useRef, useState } from 'react'
import { View,Text,ScrollView, Button, StyleSheet, TouchableOpacity,Image,Platform, StatusBar} from 'react-native'
import { ArrowLeftIcon, ArrowRightIcon, VideoCameraIcon } from 'react-native-heroicons/solid'

import YoutubePlayer from "react-native-youtube-iframe";
import Modal from 'react-native-modal';

import Caurosel from './carrossel' 

const Leitor = ({navigation, route}) => {
    const { item, cont } = route.params;

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openImageModal = (image) => {
        setSelectedImage(image);
        setModalVisible(true);
      };
    
      const closeImageModal = () => {
        setModalVisible(false);
      };

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
            {cont === 1 ? 
            <View style={{ paddingHorizontal: 16, marginBottom: 10 }}>
            <Text style={{ textAlign: 'justify', textIndent: 20, fontSize: 16,lineHeight:24, fontWeight: 'normal' }}>
              {item.description.title}
            </Text>
    
            {item.description.content.map((section, index) => (
              <View key={index} style={{ marginBottom: 10 }}>
                {section.subtitle && (
                  <Text style={{ textAlign: 'justify', textIndent: 20, fontSize: 16,lineHeight:24, fontWeight: 'bold' }}>
                    {section.subtitle}
                  </Text>
                )}
    
                <Text style={{ textAlign: 'justify', textIndent: 20, fontSize: 16,lineHeight:24, fontWeight: 'normal' }}>
                  {section.text}
                </Text>
                
                <View style={{ flexDirection: 'row'}}>
                {section.imagem1 && (
                <TouchableOpacity onPress={() => openImageModal(section.imagem1)}>
                    <Image
                    source={{ uri: section.imagem1 }}
                    style={{ width: 150, height: 150,borderRadius:10, marginVertical: 10, marginLeft: 10 }}
                    />
                </TouchableOpacity>
                )}
                
                {section.imagem2 && (
                    <TouchableOpacity onPress={() => openImageModal(section.imagem2)}>
                        <Image
                        source={{ uri: section.imagem2 }}
                        style={{ width: 150, height: 150,borderRadius:10, marginVertical: 10, marginLeft:35}}
                        />
                </TouchableOpacity>
                )}
                </View>
              </View>
            ))}

            {/* Modal de Imagem */}
            <Modal isVisible={modalVisible} onBackdropPress={closeImageModal}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={{ uri: selectedImage }}
                    style={{ width: '120%', height: '40%', borderRadius: 10 }}
                    resizeMode="contain"
                />
                </View>
            </Modal>

          </View>
            : cont === 3 ? 
            <View style={{ paddingHorizontal: 16, marginBottom: 10 }}>
            <Text style={{ textAlign: 'justify', textIndent: 20, fontSize: 16,lineHeight:24, fontWeight: 'normal' }}>
              {item.description.title}
            </Text>
    
            {item.description.content.map((section, index) => (
              <View key={index} style={{ marginBottom: 10 }}>
                {section.subtitle && (
                  <Text style={{ textAlign: 'justify', textIndent: 20, fontSize: 16,lineHeight:24, fontWeight: 'bold' }}>
                    {section.subtitle}
                  </Text>
                )}
    
                <Text style={{ textAlign: 'justify', textIndent: 20, fontSize: 16,lineHeight:24, fontWeight: 'normal' }}>
                  {section.text}
                </Text>
                
                <View style={{ flexDirection: 'row'}}>
                {section.imagem1 && (
                <TouchableOpacity onPress={() => openImageModal(section.imagem1)}>
                    <Image
                    source={{ uri: section.imagem1 }}
                    style={{ width: 150, height: 150,borderRadius:10, marginVertical: 10, marginLeft: 10 }}
                    />
                </TouchableOpacity>
                )}
                
                {section.imagem2 && (
                    <TouchableOpacity onPress={() => openImageModal(section.imagem2)}>
                        <Image
                        source={{ uri: section.imagem2 }}
                        style={{ width: 150, height: 150,borderRadius:10, marginVertical: 10, marginLeft:35 }}
                        />
                </TouchableOpacity>
                )}
                </View>
              </View>
            ))}
          </View>
            : 
            <Text  className= "px-5 py-2 text-base text-justify  ">{item.description}</Text>}
         </View>

            

         {cont === 0? <View className="flex-1 relative overflow-hidden">
            <Text className="px-5 py-2 text-l uppercase font-extrabold">Quem somos?</Text>
            <YoutubePlayer
            height={250}
            play={playing}
            videoId={"xOjdUpCJMZw"}
            onChangeState={onStateChange}
            />
            <View className="mt--16">
              <Text className="px-5 py-2 text-l uppercase font-extrabold">O que são ODS?</Text>
              <YoutubePlayer
              height={250}
              play={playing}
              videoId={"CL6obyrHdkM"}
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

