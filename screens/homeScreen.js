import React, { useEffect, useState } from 'react'
import { View,Text, Button, StyleSheet,Image, TouchableOpacity,Dimensions} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native-virtualized-view'
import { ArrowsUpDownIcon } from 'react-native-heroicons/solid'

import MapView, { PROVIDER_GOOGLE,Marker,Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const customMapStyle = [
  {
    featureType: 'all',
    elementType: 'geometry',
    stylers: [
      {
        color: '#d8f8e4', // Defina aqui a cor de fundo desejada
      },
    ],
  },
];

const HomeScreen= ({navigation}) =>{
    const [isModalVisible, setModalVisible] = useState(false);
    const [trilha,setTrilha] = useState(0);

    const [activeCategory, setActiveCategory] = useState('primeira'); // Estado para controlar a categoria ativa

    const changeCategory = (category) => {
      setActiveCategory(category);
  };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleTrilha = (index) =>{
        setTrilha(index)
    };

    // COORDENADAS TRILHA UM
    const [coordinates] = useState([
      {
        latitude: -6.4508533,
        longitude: -36.3063767,
      },
      {
        latitude: -6.4499367,
        longitude: -36.3078555,
      },
      {
        latitude: -6.4497067,
        longitude: -36.3091483,
      },
    ]);

    // COORDENADAS TRILHA DOIS
    const [coordinates_two] = useState([
      {
        latitude: -6.4508533,
        longitude: -36.3063767,
      },
      {
        latitude: -6.4499367,
        longitude: -36.3078555,
      },
      {
        latitude: -6.4497067,
        longitude: -36.3091483,
      },
      {
        latitude: -6.4481817,
        longitude: -36.3074767
      }
    ]);

    // COORDENADAS TRILHA TRES
    const [coordinates_three] = useState([
      {
        latitude: -6.4504272,
        longitude: -36.3059944,
      },
      {
        latitude: -6.4496694,
        longitude: -36.3058889,
      },
      {
        latitude:  -6.4491367,
        longitude: -36.3062167,
      },
      {
        latitude: -6.4486722,
        longitude: -36.3062333,
      },
      {
        latitude:  -6.4478025,
        longitude: -36.30725,
      },
      {
        latitude: -6.4474694,
        longitude: -36.3076806,
      },
      {
        latitude: -6.4478361,
        longitude:  -36.3088333,
      },
      {
        latitude:  -6.4473,
        longitude: -36.3093333,
      },
      {
        latitude: -6.447225,
        longitude: -36.3086694,
      },
      {
        latitude: -6.447228,
        longitude: -36.3074444,
      },
      {
        latitude: -6.4497583,
        longitude:  -36.3059694,
      }
    ]);

    return (
        <View className="flex-1 bg-backgroundprimary">
          <View style ={{flexDirection: 'row'}}>
                <View style={{ alignItems: 'center', paddingVertical: '13%',paddingLeft:'6%' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#3165b0' }}>
                        Trilhas Ambientais
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

          <View style={{marginTop:'-8%',marginBottom:'3%'}}>
            <Text style={{fontWeight:'bold',marginLeft:'6%',fontSize:27}}>Escolha sua trilha:</Text>
            <Text style={{marginTop:'-1%',marginLeft:'6%'}}>As trilhas são separadas por dificultade</Text>
          </View>

          <TouchableOpacity className=" shadow-xl relative mb-4 rounded-xl overflow-hidden" style={{width:'90%',height:'20.5%',marginLeft:'4%',shadowColor: "#000",shadowOffset: { width: 0, height: 8,}, shadowOpacity: 0.44, shadowRadius: 10.32}}onPress={() => navigation.navigate('Facil')}>  
            <View className= {"flex-1 relative flex-row bg-white my-0 mx-0"}>
                <Image source={{ uri: 'https://live.staticflickr.com/65535/53472362006_965cf864dc_w.jpg' }} 
                className= { "h-32 w-32 rounded-l-xl"}
                style={{height:'100%',width:'35%'}}
                resizeMethod='resize'></Image>

                <View className="">
                    <View style={{backgroundColor:"#2D821D",color:"#fff",width:"220%",alignItems:'center'}}>
                      <Text  style={{color:"#fff",fontWeight:"bold",padding:7,fontSize:15}} >TRILHA FÁCIL</Text> 
                    </View>
                    <View className="absolute" style={{marginTop:"35%",width:'110%',marginLeft:'8%'}}>
                        <Text style={{fontWeight:'bold',fontSize:22}}>Trilha Fácil</Text>
                        <View style={{backgroundColor:"#2D821D",color:"#fff",width:"50%",alignItems:'center',borderRadius:70}}>
                          <Text  style={{color:"#fff",fontWeight:"bold",fontSize:10}} >2 PONTOS</Text> 
                        </View>
                        <View style={{flexDirection:"row",marginTop:'4.5%'}}>
                          <Image source={require('../assets/icons/passos.png')} style={{ width: '10%', height: '100%', borderRadius: 25 }}></Image>
                          <Text style={{fontSize:13,paddingLeft:'2%'}}>2.0km</Text>
                          <Image source={require('../assets/icons/relogio.png')} style={{ width: '10%', height: '100%', borderRadius: 25,marginLeft:'20%' }}></Image>
                          <Text style={{fontSize:13,paddingLeft:'2%'}}>40min</Text>
                        </View>
                    </View>
                    <View className="absolute" style={{marginLeft:'8%',marginTop:'100%',height:'130%',width:'200%'}}>
                        <View style={{flexDirection:'row'}}>
                          <Text style={{fontSize:14}}>Pontos de visita: umburada e mirante</Text>
                          <Text style={{marginTop:'7.5%',left:'24%',position:'absolute',fontSize:14.5,color:"#2D821D",fontWeight:'bold'}}>ver mais...</Text>
                        </View>
                        
                    </View>                     
                            
                </View>     
            </View>
        </TouchableOpacity>

        <TouchableOpacity className=" shadow-2xl relative mb-4 rounded-xl overflow-hidden" style={{width:'90%',height:'20.5%',marginLeft:'4%',shadowColor: "#000",shadowOffset: { width: 0, height: 8,}, shadowOpacity: 0.44, shadowRadius: 10.32}} onPress={() => navigation.navigate('Media')}>  
            <View className= {"flex-1 relative flex-row bg-white my-0 mx-0"}>
                <Image source={{ uri: 'https://live.staticflickr.com/65535/53555958611_b12a2a98fa_w.jpg' }} 
                className= { "h-32 w-32 rounded-l-xl"}
                style={{height:'100%',width:'35%'}}
                resizeMethod='resize'></Image>

                <View className="bg-red my-0 mx-0">
                    <View style={{backgroundColor:"#3165B0",color:"#fff",width:"200%",alignItems:'center'}}>
                      <Text  style={{color:"#fff",fontWeight:"bold",padding:7,fontSize:15}} >TRILHA MÉDIA</Text> 
                    </View>
                    <View className="absolute" style={{marginTop:"35%",width:'119%',marginLeft:'8%'}}>
                        <Text style={{fontWeight:'bold',fontSize:22}}>Trilha Média</Text>
                        <View style={{backgroundColor:"#3165B0",color:"#fff",width:"50%",alignItems:'center',borderRadius:70}}>
                          <Text  style={{color:"#fff",fontWeight:"bold",fontSize:10}} >3 PONTOS</Text> 
                        </View>
                        <View style={{flexDirection:"row",marginTop:'4.5%'}}>
                          <Image source={require('../assets/icons/passos.png')} style={{ width: '10%', height: '100%', borderRadius: 25 }}></Image>
                          <Text style={{fontSize:13,paddingLeft:'2%'}}>2.0km</Text>
                          <Image source={require('../assets/icons/relogio.png')} style={{ width: '10%', height: '100%', borderRadius: 25,marginLeft:'20%' }}></Image>
                          <Text style={{fontSize:13,paddingLeft:'2%'}}>40min</Text>
                        </View>
                    </View>
                    <View className="absolute" style={{marginLeft:'9%',marginTop:'95%',height:'130%',width:'190%'}}>
                        <View style={{flexDirection:'row'}}>
                          <Text style={{fontSize:14}}>Pontos de visita: umburada, mirante e ponto 3</Text>
                          <Text style={{marginTop:'7.5%',left:'53%',position:'absolute',fontSize:14.5,color:"#3165B0",fontWeight:'bold'}}>ver mais...</Text>
                        </View>
                        
                    </View>                     
                            
                </View>     
            </View>
        </TouchableOpacity>

        <TouchableOpacity className=" shadow-xl relative mb-4 rounded-xl overflow-hidden" style={{width:'90%',height:'20.5%',marginLeft:'4%',shadowColor: "#000",shadowOffset: { width: 0, height: 8,}, shadowOpacity: 0.44, shadowRadius: 10.32}} onPress={() => navigation.navigate('Dificil')}>  
            <View className= {"flex-1 relative flex-row bg-white my-0 mx-0"}>
                <Image source={{ uri: 'https://live.staticflickr.com/65535/53555963791_e76a4e3118_w.jpg' }} 
                className= { "h-32 w-32 rounded-l-xl"}
                style={{height:'100%',width:'35%'}}
                resizeMethod='resize'></Image>

                <View className="bg-red my-0 mx-0">
                    <View style={{backgroundColor:"#C76828",color:"#fff",width:"200%",alignItems:'center'}}>
                      <Text  style={{color:"#fff",fontWeight:"bold",padding:7,fontSize:15}} >TRILHA DIFÍCIL</Text> 
                    </View>
                    <View className="absolute" style={{marginTop:"35%",width:'112%',marginLeft:'8%'}}>
                        <Text style={{fontWeight:'bold',fontSize:22}}>Trilha Difícil</Text>
                        <View style={{backgroundColor:"#C76828",color:"#fff",width:"50%",alignItems:'center',borderRadius:70}}>
                          <Text  style={{color:"#fff",fontWeight:"bold",fontSize:10}} >10 PONTOS</Text> 
                        </View>
                        <View style={{flexDirection:"row",marginTop:'4.5%'}}>
                          <Image source={require('../assets/icons/passos.png')} style={{ width: '10%', height: '100%', borderRadius: 25 }}></Image>
                          <Text style={{fontSize:13,paddingLeft:'2%'}}>2.0km</Text>
                          <Image source={require('../assets/icons/relogio.png')} style={{ width: '10%', height: '100%', borderRadius: 25,marginLeft:'20%' }}></Image>
                          <Text style={{fontSize:13,paddingLeft:'2%'}}>40min</Text>
                        </View>
                    </View>
                    <View className="absolute" style={{marginLeft:'8%',marginTop:'95%',height:'130%',width:'200%'}}>
                        <View style={{flexDirection:'row'}}>
                          <Text style={{fontSize:14}}>Pontos de visita: Cactáceas, marsupial,Olho D'Água</Text>
                          <Text style={{marginTop:'7%',left:'63%',position:'absolute',fontSize:14.5,color:"#C76828",fontWeight:'bold'}}>ver mais...</Text>
                        </View>
                        
                    </View>                     
                            
                </View>     
            </View>
        </TouchableOpacity>
        </View>

       
    )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  map: {
    flex: 1,
    
  },container_gradient: {
    
    alignItems: 'center',
    
    width:'36%',height:'100%',alignItems:'center',padding:6
  },
  Shadow: {
    shadowColor: "#000",shadowOffset: { width: 0, height: 8,}, shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16,}
 });
