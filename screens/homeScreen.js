import React, { useEffect, useState } from 'react'
import { View,Text, Button, StyleSheet,Image, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native-virtualized-view'
import { ArrowsUpDownIcon } from 'react-native-heroicons/solid'

const HomeScreen= ({navigation}) =>{
    const [isModalVisible, setModalVisible] = useState(false);
    const [trilha,setTrilha] = useState(0);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleTrilha = (index) =>{
        setTrilha(index)
    };

    return (
        <View className="flex-1 "> 

        <Modal isVisible={isModalVisible} backdropColor="black" backdropOpacity={0.9}>
            <TouchableOpacity onPress={toggleModal} >
                <Image source={require('../assets/icons/close-button.png')}></Image>
            </TouchableOpacity>
            <View style={styles.modalContent}>
            {/* Aqui você pode adicionar suas imagens e qualquer conteúdo adicional */}
            <ScrollView>
            <View style={styles.imageRow}>
              <Image source={require('../assets/logo/caatinga.jpg')} style={styles.itemImage} />
              <Image source={require('../assets/logo/caatinga.jpg')} style={styles.itemImage} />
            </View>

            <View style={styles.imageRow}>
              <Image source={require('../assets/logo/caatinga.jpg')} style={styles.itemImage} />
              <Image source={require('../assets/logo/caatinga.jpg')} style={styles.itemImage} />
            </View>

            <View style={styles.imageRow}>
              <Image source={require('../assets/logo/caatinga.jpg')} style={styles.itemImage} />
              <Image source={require('../assets/logo/caatinga.jpg')} style={styles.itemImage} />
            </View>
            </ScrollView>

            </View>
      </Modal>

        {/* logo inicio */}
        <View style ={{flexDirection: 'row'}}>
                <View style={{ alignItems: 'center', paddingVertical: 38,paddingLeft:25 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#3165b0' }}>
                        Educação Ambiental
                    </Text>    
                    <Text style={{ fontSize: 16, color: '#c76828', fontStyle: 'italic'  }}>Conheça mais sobre a caatinga</Text>
                </View>

                <View style={{ paddingLeft: 45,paddingVertical:28 }}>
                    <Image
                    source={require('../assets/logo/logo.png')}
                    style={{ width: 80, height: 80, borderRadius: 25 }}
                    />
                </View>
            </View>

            <View className="flex-1 overflow-hidden rounded-3xl">

                

                 <LinearGradient
                    colors={['rgba(45, 130, 29, 0.8)', '#359A22','#2D821D','#2D821D','#000']}  // Cores do gradiente
                    style={styles.gradient}
                    className=" overflow-hidden"
                >
                
                {trilha === 0 ?  
                <View>
                    <Image source={require('../assets/logo/caatinga.jpg')} 
                    className= { "h-44 w-full overflow-hidden mt-0" }
                    resizeMethod='resize'></Image>
                        <View style={styles.overlay} />
                    
                        <View className="absolute items-center justify-center ml-16 mt-7">
                            <Text className=" text-3xl text-white mr-5">Trilha Facil </Text>
                            <Text className=" text-sm text-white pt-6 mr-11">Nessa trilha você irá encontrar o umburada e o mirante</Text>
                        </View>
                </View>
                : trilha === 1 ?
                <View>
                    <Image source={require('../assets/logo/caatinga.jpg')} 
                    className= { "h-44 w-full overflow-hidden mt-0" }
                    resizeMethod='resize'></Image>
                        <View style={styles.overlay} />
                
                        <View className="absolute items-center justify-center ml-16 mt-7">
                            <Text className=" text-3xl text-white mr-5">Trilha Média </Text>
                            <Text className=" text-sm text-white pt-6 mr-11">Nessa trilha você irá encontrar o umburada e o mirante</Text>
                        </View>
                </View>
                : 
                <View>
                    <Image source={require('../assets/logo/caatinga.jpg')} 
                    className= { "h-44 w-full overflow-hidden mt-0" }
                    resizeMethod='resize'></Image>
                        <View style={styles.overlay} />
                
                        <View className="absolute items-center justify-center ml-16 mt-7">
                            <Text className=" text-3xl text-white mr-5">Trilha Dificil </Text>
                            <Text className=" text-sm text-white pt-6 mr-11">Nessa trilha você irá encontrar o umburada e o mirante</Text>
                        </View>
                </View>}
                
                {trilha === 0 ?  
                <View className="overflow-hidden">
                    
                    <Image source={require('../assets/icons/bandeiras-melhorada-1.png')} 
                    className= { "w-12 h-80  ml-12 overflow-hidden" }
                    resizeMethod='resize'></Image>

                    <Image source={require('../assets/icons/bandeira.png')} 
                    className="absolute ml-10 mt-2.5 w-14 h-14"
                    style={styles.bandeira}
                    resizeMethod='resize'></Image>
                    <Text  className="absolute mt-5 text-white opacity-80" style={styles.text1}>SAÍDA</Text>    
                    <Text  className="absolute mt-9 text-white opacity-80" style={[styles.text1]}> 658</Text>
                   
                    <Image source={require('../assets/icons/bandeira.png')} 
                    className="absolute ml-14 w-14 h-14"
                    style={[styles.bandeira, styles.rem1]}
                    resizeMethod='resize'></Image>
                    <Text>EMBURADA</Text>

                    <Image source={require('../assets/icons/bandeira.png')} 
                    className="absolute ml-8 w-14 h-14"
                    style={[styles.bandeira, styles.rem2]}
                    resizeMethod='resize'></Image>
                    <Text>MIRANTE</Text>
                </View>
                : trilha === 1 ?
                
                    <Image source={require('../assets/icons/bandeiras-melhorada-1.png')} 
                        className= { "w-28 overflow-hidden" }
                        resizeMethod='resize'></Image>
                
                :
                <Image source={require('../assets/icons/bandeiras-melhorada-1.png')} 
                        className= { "w-28 overflow-hidden" }
                        resizeMethod='resize'></Image> 
                }

                

                <View className="absolute ml-56 mt-36">
                    <TouchableOpacity onPress={() => toggleTrilha(0)}>
                        <Image source={require('../assets/logo/caatinga.jpg')} 
                        className={trilha === 0 ? "h-32 w-32 mb-2 rounded-xl" : "h-24 w-24 mt-4 ml-1 rounded-xl"}
                        style={trilha === 0 ? styles.border : false}
                        resizeMethod='resize'></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => toggleTrilha(1)}>
                        <Image source={require('../assets/logo/caatinga.jpg')} 
                            className={trilha === 1 ? "h-32 w-32 mb-2 rounded-xl mt-2" : "h-24 w-24 mt-4 ml-1 rounded-xl"}
                            style={trilha === 1 ? styles.border : false}
                            resizeMethod='resize'></Image>
                            
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => toggleTrilha(2)}>
                        <Image source={require('../assets/logo/caatinga.jpg')} 
                            className={trilha === 2 ? "h-32 w-32 mb-2 rounded-xl mt-2" : "h-24 w-24 mt-4 ml-1 rounded-xl"}
                            style={trilha === 2 ? styles.border : false}
                            resizeMethod='resize'></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={toggleModal} style={styles.button} className="mt-2">
                        <Text className="text-white  text-sm">GALERIA</Text>
                    </TouchableOpacity>
                </View>
                
                </LinearGradient>
                
            </View>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#8fcbbc'
    },overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(45, 130, 29, 0.6)' // Cor preta semi-transparente
      },gradient: {
        flex: 1, // Para ocupar todo o espaço disponível
      },border: {
        borderWidth:2,
        borderColor:'#fff'
        
      },button: {
        alignItems:'center',
        backgroundColor: 'red',
        padding: 8,
        width:100,
        height:35,
        borderRadius: 10,
      },
      buttonText: {
        color: 'white',
        
      },
      modalContent: {
        backgroundColor: 'transparent',
        padding: 20,
        borderRadius: 10,
      },
      modalImage: {
        width: 200,
        height: 200,
        marginBottom: 10,
      },
      closeButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      },
      closeButtonText: {
        color: 'white',
      },imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },itemImage: {
        width: 150,
        height: 150,
        borderRadius: 10
      },bandeira: {
        backgroundColor:'#3165B0' ,
        borderRadius:50,
        borderWidth: 2,
        borderColor:'#C8942B'
      },rem1: {
        marginTop:133
      },rem2: {
        marginTop:260
      },text1: {
        marginLeft:102
      },arrowSymbol: {
        fontSize: 20, // Ajuste o tamanho conforme necessário
        fontFamily: 'Arial Unicode MS', // Tente mudar para uma fonte que suporte o caractere ⭥
      },
});