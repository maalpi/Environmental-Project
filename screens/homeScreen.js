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
        
        <View className="flex-1 " contentContainerStyle={{ flexGrow: 1 }}> 
        
        <Modal isVisible={isModalVisible} backdropColor="black" backdropOpacity={0.9}>
            <TouchableOpacity onPress={toggleModal} >
                <Image source={require('../assets/icons/close-button.png')}></Image>
            </TouchableOpacity>
            <View style={styles.modalContent}>
            {/* Aqui você pode adicionar suas imagens e qualquer conteúdo adicional */}
            <ScrollView>
            <View style={styles.imageRow}>
              <Image source={require('../assets/logo/caatinga.jpg')} style={styles.itemImage} />
              <Image source={require('../assets/logo/foto1.jpg')} style={styles.itemImage} />
            </View>

            <View style={styles.imageRow}>
              <Image source={require('../assets/logo/foto2.jpg')} style={styles.itemImage} />
              <Image source={require('../assets/logo/foto3.jpg')} style={styles.itemImage} />
            </View>

            <View style={styles.imageRow}>
              <Image source={require('../assets/logo/caatinga.jpg')} style={styles.itemImage} />
              <Image source={require('../assets/logo/caatinga.jpg')} style={styles.itemImage} />
            </View>
            </ScrollView>

            </View>
      </Modal>

        {/* logo inicio */}
        <View style ={{flexDirection: 'row'}} className="bg-backgroundprimary">
                <View style={{ alignItems: 'center', paddingVertical: '13%',paddingLeft:'6%'}}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#3165b0' }}>
                        Educação Ambiental
                    </Text>    
                    <Text style={{ fontSize: 16, color: '#c76828', fontStyle: 'italic'  }}>Conheça mais sobre a caatinga</Text>
                </View>

                <View style={{ paddingLeft: '6%',paddingVertical:'10%' }}>
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
                            <Text className=" text-3xl text-white mr-5">Trilha Fácil </Text>
                            <Text className=" text-sm text-white pt-6 mr-11">Nessa trilha você irá encontrar o umburada e o mirante</Text>
                        </View>
                        
                </View>
                : trilha === 1 ?
                <View >
                    <Image source={require('../assets/logo/foto1.jpg')} 
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
                    <Image source={require('../assets/logo/foto3.jpg')} 
                    className= { "h-44 w-full overflow-hidden mt-0" }
                    resizeMethod='resize'></Image>
                        <View style={styles.overlay} />
                
                        <View className="absolute items-center justify-center ml-16 mt-7">
                            <Text className=" text-3xl text-white mr-5">Trilha Difícil </Text>
                            <Text className=" text-sm text-white pt-6 mr-11">Nessa trilha você irá encontrar as cactáceas e o desertificação</Text>
                        </View>
                </View>}
                
                {trilha === 0 ?  
                <ScrollView>
                <View className="overflow-hidden">
                    
                    <Image source={require('../assets/icons/bandeiras-melhorada-1.png')} 
                    className= { "w-12 h-80  ml-12 overflow-hidden" }
                    resizeMethod='resize'></Image>

                    <Image source={require('../assets/icons/bandeira.png')} 
                    className="absolute ml-10 mt-2.5 w-14 h-14"
                    style={styles.bandeira}
                    resizeMethod='resize'></Image>
                    <Text  className="absolute mt-5 text-white opacity-80" style={styles.text1}>SAÍDA</Text>    
                    <Text  className="absolute mt-9 text-amarelotexto opacity-80" style={[styles.text1]}>alt. 658</Text>
                   
                    <Image source={require('../assets/icons/bandeira.png')} 
                    className="absolute ml-14 w-14 h-14"
                    style={[styles.bandeira, styles.rem1]}
                    resizeMethod='resize'></Image>
                    <Text className="absolute text-white opacity-70" style={styles.emburada}>EMBURADA</Text>
                    <Text className="absolute text-amarelotexto opacity-70" style={styles.emburadacoord}>alt. 660</Text>

                    <Image source={require('../assets/icons/bandeira.png')} 
                    className="absolute ml-8 w-14 h-14"
                    style={[styles.bandeira, styles.rem2]}
                    resizeMethod='resize'></Image>
                    <Text className="absolute text-white opacity-70" style={styles.almirante}>MIRANTE</Text>
                    <Text className="absolute text-amarelotexto opacity-70" style={styles.almirantecoord}>alt. 657</Text>
                </View>
                </ScrollView>
                : trilha === 1 ?
                
                <View className="absolute">
                    <Image source={require('../assets/icons/trilha-media.png')} 
                        className= { "w-12 ml-12 mt-32 absolute overflow-hidden" }
                        style={styles.trilhaMedia}
                        resizeMethod='resize'></Image>
                    <Image source={require('../assets/icons/bandeira.png')} 
                    className="absolute ml-9 mt-32 w-14 h-14"
                    style={styles.bandeira}
                    resizeMethod='resize'></Image>
                    <Text  className="absolute  text-white opacity-80" style={styles.text1_1}>SAÍDA</Text>    
                    <Text  className="absolute mt-12 text-amarelotexto opacity-80" style={[styles.text1_1_1]}>alt. 658</Text>
                    
                    {/* Ponto 2 trilha 2 */}
                    <Image source={require('../assets/icons/bandeira.png')} 
                    className="absolute ml-14 w-14 h-14"
                    style={[styles.bandeira,styles.top2_2]}
                    resizeMethod='resize'></Image>
                    <Text  className="absolute  text-white opacity-80" style={styles.text1_2}>UMBURADA</Text>    
                    <Text  className="absolute mt-12 text-amarelotexto opacity-80" style={[styles.text1_2_2]}>alt. 668</Text>

                    {/* Ponto 3 trilha 2 */}
                    <Image source={require('../assets/icons/bandeira.png')} 
                    className="absolute ml-9 mt-32 w-14 h-14"
                    style={[styles.bandeira,styles.top2_3]}
                    resizeMethod='resize'></Image>
                    <Text  className="absolute  text-white opacity-80" style={styles.text1_3}>MIRANTE</Text>    
                    <Text  className="absolute mt-12 text-amarelotexto opacity-80" style={[styles.text1_3_3]}>alt. 657</Text>

                    {/* Ponto 4 trilha 2 */}
                    <Image source={require('../assets/icons/bandeira.png')} 
                    className="absolute ml-9 mt-32 w-14 h-14"
                    style={[styles.bandeira,styles.top2_4]}
                    resizeMethod='resize'></Image>
                    <Text  className="absolute  text-white opacity-80" style={styles.text1_4}>TRILHA 2</Text>    
                    <Text  className="absolute mt-12 text-amarelotexto opacity-80" style={[styles.text1_4_4]}>alt. 632</Text>

                    
                </View>  
                
                   
                :
                <View className="absolute">
                    <Image source={require('../assets/icons/trilha-media.png')} 
                        className= { "w-12 ml-12 mt-32 absolute overflow-hidden" }
                        style={styles.trilhaMedia}
                        resizeMethod='resize'></Image>
                    <Image source={require('../assets/icons/bandeira.png')} 
                    className="absolute ml-9 mt-32 w-14 h-14"
                    style={styles.bandeira}
                    resizeMethod='resize'></Image>
                    <Text  className="absolute  text-white opacity-80" style={styles.text1_1}>CACTÁCEAS</Text>    
                    <Text  className="absolute mt-12 text-amarelotexto opacity-80" style={[styles.text1_1_1]}>alt. 652</Text>
                    
                    {/* Ponto 2 trilha 2 */}
                    <Image source={require('../assets/icons/bandeira.png')} 
                    className="absolute ml-14 w-14 h-14"
                    style={[styles.bandeira,styles.top2_2]}
                    resizeMethod='resize'></Image>
                    <Text  className="absolute  text-white opacity-80" style={styles.text1_2}>DESERTIFICAÇÃO</Text>    
                    <Text  className="absolute mt-12 text-amarelotexto opacity-80" style={[styles.text1_2_2]}>alt. 654</Text>

                    {/* Ponto 3 trilha 2 */}
                    <Image source={require('../assets/icons/bandeira.png')} 
                    className="absolute ml-9 mt-32 w-14 h-14"
                    style={[styles.bandeira,styles.top2_3]}
                    resizeMethod='resize'></Image>
                    <Text  className="absolute  text-white opacity-80" style={styles.text1_3}>BARRIL JARARACAS</Text>    
                    <Text  className="absolute mt-12 text-amarelotexto opacity-80" style={[styles.text1_3_3]}>alt. 653</Text>

                    {/* Ponto 4 trilha 2 */}
                    <Image source={require('../assets/icons/bandeira.png')} 
                    className="absolute ml-9 mt-32 w-14 h-14"
                    style={[styles.bandeira,styles.top2_4]}
                    resizeMethod='resize'></Image>
                    <Text  className="absolute  text-white opacity-80" style={styles.text1_4}>CUPIZEIRO</Text>    
                    <Text  className="absolute mt-12 text-amarelotexto opacity-80" style={[styles.text1_4_4]}>alt. 640</Text>
                </View>  
                }
                  
                

                <View className="absolute ml-56 mt-36">
                    <TouchableOpacity onPress={() => toggleTrilha(0)}>
                        <Image source={require('../assets/logo/caatinga.jpg')} 
                        className={trilha === 0 ? "h-32 w-32 mb-2 rounded-xl" : "h-24 w-24 mt-4 ml-1 rounded-xl"}
                        style={trilha === 0 ? styles.border : false}
                        resizeMethod='resize'></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => toggleTrilha(1)}>
                        <Image source={require('../assets/logo/foto1.jpg')} 
                            className={trilha === 1 ? "h-32 w-32 mb-2 rounded-xl mt-2" : "h-24 w-24 mt-4 ml-1 rounded-xl"}
                            style={trilha === 1 ? styles.border : false}
                            resizeMethod='resize'></Image>
                            
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => toggleTrilha(2)}>
                        <Image source={require('../assets/logo/foto3.jpg')} 
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
        padding:'1%'
      },itemImage: {
        width: 130,
        height: 130,
        marginLeft:'5%',
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
      },text1_1: {
        marginLeft:93,
        marginTop:135
      },text1_1_1: {
        marginLeft:93,
        marginTop:152
      }
      ,arrowSymbol: {
        fontSize: 20, // Ajuste o tamanho conforme necessário
        fontFamily: 'Arial Unicode MS', // Tente mudar para uma fonte que suporte o caractere ⭥
      },emburada:{
        marginLeft:115,
        marginTop:135
      },
      emburadacoord:{
        marginLeft:115,
        marginTop:153
      },
      almirante:{
        marginTop:272,
        marginLeft: 98
      },
      almirantecoord:{
        marginTop:292,
        marginLeft: 98
      },
      trilhaMedia:{
        height:425
      },
      top2_2:{
        marginTop:229
      },text1_2: {
        marginLeft:116,
        marginTop:240
      },text1_2_2: {
        marginLeft:116,
        marginTop:255
      },
      top2_3:{
        marginTop:368,
        marginLeft:30
      },
      text1_3: {
        marginLeft:90,
        marginTop:378
      },text1_3_3: {
        marginLeft:90,
        marginTop:392
      },
      top2_4:{
        marginTop:465,
        marginLeft:50
      },
      text1_4: {
        marginLeft:113,
        marginTop:480
      },text1_4_4: {
        marginLeft:113,
        marginTop:494
      }
});