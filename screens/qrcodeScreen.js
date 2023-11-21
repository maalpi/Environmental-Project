import React, { useState,useRef } from "react"
import { View,Text, Button, StyleSheet, TouchableOpacity, Linking,Dimensions} from 'react-native'

import { RNCamera } from 'react-native-camera'
import QRCodeScanner from 'react-native-qrcode-scanner'

import { ArrowLeftIcon, ArrowRightIcon } from 'react-native-heroicons/solid'

const { width, height } = Dimensions.get('window');

const QrcodeScreen= ({navigation}) =>{
    const qrcodeRef = useRef(null);

    const [scanned, setScanned] = useState(false);
    const [barcodeData, setBarcodeData] = useState("");
    

    const navigateToAnimalScreen = () => {
      // Navegar para a tela "Animal"
      if (scanned === true){
        navigation.navigate(barcodeData);
      }

      qrcodeRef.current.reactivate();
  };
    return (
      
        <View style={styles.container}>
            <TouchableOpacity className ="flex-row px-4 py-3 justify-between items-center  opacity-100" >
                    <ArrowLeftIcon  color='#000' size={24} onPress={() => navigation.goBack()}/>
            </TouchableOpacity>

            <QRCodeScanner
            cameraStyle={{ height: height, width: width }}
            ref={qrcodeRef}
            onRead={({data}) =>{  setScanned(true); setBarcodeData(data);  navigateToAnimalScreen(); }}
            flasMode={RNCamera.Constants.FlashMode.off}
            />

            <View>
              <View style={styles.cornerTopLeft} />
              <View style={styles.cornerTopRight} />
              <View style={styles.cornerBottomLeft} />
              <View style={styles.cornerBottomRight} />
            </View>
        </View>
        
    )
}

export default QrcodeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  cornerTopLeft: {
    color:"black",
    position: "absolute",
    top: -550,
    left: 50,
    width: 20,
    height: 20,
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderColor: "white",
  },
  cornerTopRight: {
    position: "absolute",
    top: -550,
    right: 50,
    width: 20,
    height: 20,
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderColor: "white",
  },
  cornerBottomLeft: {
    position: "absolute",
    bottom: 250,
    left: 50,
    width: 20,
    height: 20,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderColor: "white",
  },
  cornerBottomRight: {
    position: "absolute",
    bottom: 250,
    right: 50,
    width: 20,
    height: 20,
    borderBottomWidth: 5,
    borderRightWidth: 5,
    borderColor: "#FFFFFF",
  },
});