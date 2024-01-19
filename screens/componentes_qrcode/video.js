import React, { useEffect, useCallback, useRef, useState } from 'react'
import { View,Text,ScrollView, Button, StyleSheet, TouchableOpacity,Image,Platform, StatusBar} from 'react-native'
import { ArrowLeftIcon, ArrowRightIcon, VideoCameraIcon, AsyncStorage } from 'react-native-heroicons/solid'

import YoutubePlayer from "react-native-youtube-iframe";
import Modal from 'react-native-modal';
function Video({navigation}) {
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
    <>
    <View className ="flex-row px-4 py-3 justify-between items-center opacity-100 shadow-lg">
             <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftIcon color='#000' size={24}/>
            </TouchableOpacity>
    </View>
   <View className="mt-10">
        <Text className="px-5 py-2 text-2xl uppercase font-extrabold">QUEM SOMOS</Text>
            <YoutubePlayer
            height={250}   
                play={playing}
                videoId={"xOjdUpCJMZw"}
                onChangeState={onStateChange}
                />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  imagem: {
    width: "100%",
    height: 300,
  },
  bottom: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    width: "100%",
    height: "auto",
    padding: 30,
    top: -30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  title: {
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  new: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: "justify",
  },
});

export default Video;