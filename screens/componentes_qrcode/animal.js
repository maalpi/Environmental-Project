import React from "react";
import { View, Image, Text, StyleSheet,TouchableOpacity } from "react-native";

import { ArrowLeftIcon, ArrowRightIcon } from 'react-native-heroicons/solid'

function Animal({navigation}) {
  return (
    <>
    <View className ="flex-row px-4 py-3 justify-between items-center opacity-100 shadow-lg">
             <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftIcon color='#000' size={24}/>
            </TouchableOpacity>
    </View>
    <View style={styles.container}>
      <Image style={styles.imagem} source={{uri:"https://live.staticflickr.com/65535/53345585841_3cb883b87f_k.jpg"}} />
      <View style={styles.bottom}>
        <Text style={styles.title}>Calango</Text>
        <Text style={styles.new}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          rutrum enim. Aliquam aliquet suscipit lacus in bibendum. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; In blandit enim eu sem tempus suscipit.
        </Text>
      </View>
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

export default Animal;