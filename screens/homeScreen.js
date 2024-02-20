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
        
        <View  style={styles.container} className="bg-backgroundprimary"> 
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
            <View style={{top:'-3%',height:'30%'}}>
              <Text style={{fontSize: 25, fontWeight:'bold',marginLeft:'6%'}} className="text-laranjaprimary">Escolha a dificultade:</Text>
              <View style={{flexDirection: 'row', marginLeft:'5%',marginTop:'2%',alignItems:'center'}}>
              <TouchableOpacity onPress={() => changeCategory('primeira')} 
                style={[
                  { alignItems: 'center', backgroundColor: '#fff', width: '22%', height: '93%', borderRadius: 10, marginRight: '10%' }, 
                  activeCategory === 'primeira' && { backgroundColor: '#1FAA70', width: '27%',height:'95%' }
                  ]}
                  >
                {activeCategory === 'primeira' ? (
                  <>
                    <Image 
                      source={require('../assets/icons/facil_white.png')} 
                      style={{ top: '7%', right: '1%', height: '25%', width: '32%', marginBottom: '10%' }}
                      resizeMethod='resize'
                    />
                    <Text style={{ color: '#fff', fontSize: 20, marginTop: '12%', fontWeight: 'bold' }}>TRILHA</Text>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>FÁCIL</Text>
                  </>
                ) : (
                  <>
                    <Image 
                      source={require('../assets/icons/facil.png')} 
                      style={{ top: '7%', right: '1%', height: '25%', width: '39%', marginBottom: '10%' }}
                      resizeMethod='resize'
                    />
                    <Text style={{ color: '#000', fontSize: 18, marginTop: '12%' }}>TRILHA</Text>
                    <Text style={{ color: '#000', fontSize: 18 }}>FÁCIL</Text>
                  </>
                )}
                
                  </TouchableOpacity>
                
                
                  <TouchableOpacity onPress={() => changeCategory('segunda')} 
                style={[
                  { alignItems: 'center', backgroundColor: '#fff', width: '22%', height: '93%', borderRadius: 10, marginRight: '10%' }, 
                  activeCategory === 'segunda' && { backgroundColor: '#3165b0', width: '27%',height:'95%' }
                  ]}
                  >
                {activeCategory === 'segunda' ? (
                  <>
                <Image source={require('../assets/icons/medio_white.png')} 
                    
                    style={{top:'7%',right:'1%',height:'27%',width:'33%',marginBottom:'10%'}}

                    resizeMethod='resize'></Image>
                    <Text style={{color:'#fff',fontSize:20,marginTop:'12%',fontWeight:'bold'}}>TRILHA</Text>
                    <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>MEDIA</Text>
                  </>
                  ) : (
                  <>
                    <Image 
                      source={require('../assets/icons/medio.png')} 
                      style={{ top: '7%', right: '1%', height: '31%', width: '40%', marginBottom: '10%' }}
                      resizeMethod='resize'
                    />
                    <Text style={{ color: '#000', fontSize: 18, marginTop: '12%' }}>TRILHA</Text>
                    <Text style={{ color: '#000', fontSize: 18,  }}>MEDIA</Text>
                  </>
                )}
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => changeCategory('terceira')} 
                style={[
                  { alignItems: 'center', backgroundColor: '#fff', width: '22%', height: '93%', borderRadius: 10, marginRight: '10%' }, 
                  activeCategory === 'terceira' && { backgroundColor: '#C73E28', width: '27%',height:'95%' }
                  ]}
                  >
                
                {activeCategory === 'terceira' ? (
                  <>
                <Image source={require('../assets/icons/dificil.png')} 
                    
                    style={{top:'7%',right:'1%',height:'27%',width:'35%',marginBottom:'10%'}}

                    resizeMethod='resize'></Image>
                  <Text style={{color:'#fff',fontSize:20,marginTop:'12%',fontWeight:'bold'}} >TRILHA</Text>
                  <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}} >DIFICIL</Text>
                  </>
                  ) : (
                    <>
                    <Image 
                      source={require('../assets/icons/dificil.png')} 
                      style={{ top: '7%', right: '1%', height: '25%', width: '39%', marginBottom: '10%' }}
                      resizeMethod='resize'
                    />
                    <Text style={{ color: '#000', fontSize: 18, marginTop: '12%' }}>TRILHA</Text>
                    <Text style={{ color: '#000', fontSize: 18,  }}>DIFICIL</Text>
                  </>
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ top:'-10%',marginLeft: '7%',borderRadius:1000, overflow: 'hidden', height: '60%',width:'85%', shadowColor: "#000",
                            shadowOffset: {
                              width: 0,
                              height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5}} 
                            className="bg-blueprimary">
              
              {activeCategory == 'primeira' &&(             
              <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              initialRegion={{
                latitude: coordinates[0].latitude, 
                longitude: coordinates[0].longitude - 0.0012,
                latitudeDelta: 0.0072,
                longitudeDelta: 0.0051,
              }}
              customMapStyle={customMapStyle}>
              <Marker coordinate={coordinates[0]} />
              <Marker coordinate={coordinates[1]} />
              <Marker coordinate={coordinates[2]} />
              <Polyline
                coordinates={coordinates}
                strokeColor="#C8942B" // fallback for when `strokeColors` is not supported by the map-provider
                strokeColors={['#7F0000']}
                strokeWidth={6}/>
              </MapView>
              )}
              {activeCategory == 'segunda' && (
              <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                  latitude: coordinates_two[0].latitude + 0.0005, 
                  longitude: coordinates_two[0].longitude - 0.0012,
                  latitudeDelta: 0.0052,
                  longitudeDelta: 0.0011,
                }}
                customMapStyle={customMapStyle}>
                <Marker coordinate={coordinates_two[0]} />
                <Marker coordinate={coordinates_two[1]} />
                <Marker coordinate={coordinates_two[3]} />
                <Polyline
                  coordinates={coordinates_two}
                  strokeColor="#C8942B" // fallback for when `strokeColors` is not supported by the map-provider
                  strokeColors={['#7F0000']}
                  strokeWidth={6}/>
              </MapView>
              )}
              {activeCategory == 'terceira' && (
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={styles.map}
                  initialRegion={{
                    latitude: coordinates_three[0].latitude + 0.0005, 
                    longitude: coordinates_three[0].longitude - 0.0013,
                    latitudeDelta: 0.0072,
                    longitudeDelta: 0.0011,
                  }}
                  customMapStyle={customMapStyle}>
                  <Marker coordinate={coordinates_three[0]} />
                  <Marker coordinate={coordinates_three[5]} />
                  <Marker coordinate={coordinates_three[10]} />
                   <Polyline
                    coordinates={coordinates_three}
                    strokeColor="#C8942B" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeColors={['#7F0000']}
                    strokeWidth={4}/> 
                 
                </MapView>
              )}              
          </View>
          
          <View style={{position:'absolute',bottom:'9%',alignItems:'center',marginLeft:'2%'}}>
          {activeCategory == 'primeira' &&(
              <View style={{flexDirection:'row'}}>
                <View style={{backgroundColor:'#fff',width:'30%',height:'100%',alignItems:'center',padding:6,borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                  <Text style={{fontSize:26}}>2.0</Text>
                  <Text style={{fontSize:24}}>KM</Text>
                </View>
                
                  <LinearGradient
                    colors={['#1FAA70', 'white']}
                    style={styles.container_gradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                  >
                    <Text style={{fontSize:26,fontWeight: 'bold',color:'#fff'}}>2</Text>
                    <Text style={{fontSize:24,fontWeight: 'bold',color:'#1FAA70'}}>PONTOS</Text>
                  </LinearGradient>
                
                <View style={{backgroundColor:'#fff',width:'30%',height:'100%',alignItems:'center',padding:6,borderTopRightRadius:20,borderBottomRightRadius:20}}>
                  <Text style={{fontSize:26}}>NIVEL</Text>
                  <Text style={{fontSize:26}}>FACIL</Text>
                </View>
              </View>
          )}

          {activeCategory == 'segunda' &&(
              <View style={{flexDirection:'row'}}>
                <View style={{backgroundColor:'#fff',width:'30%',height:'100%',alignItems:'center',padding:6,borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                  <Text style={{fontSize:26}}>2.0</Text>
                  <Text style={{fontSize:24}}>KM</Text>
                </View>
                
                  <LinearGradient
                    colors={['#3165b0', 'white']}
                    style={styles.container_gradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                  >
                    <Text style={{fontSize:26,fontWeight: 'bold',color:'#fff'}}>3</Text>
                    <Text style={{fontSize:24,fontWeight: 'bold',color:'#3165b0'}}>PONTOS</Text>
                  </LinearGradient>
                
                <View style={{backgroundColor:'#fff',width:'30%',height:'100%',alignItems:'center',padding:6,borderTopRightRadius:20,borderBottomRightRadius:20}}>
                  <Text style={{fontSize:26}}>NIVEL</Text>
                  <Text style={{fontSize:26}}>MEDIA</Text>
                </View>
              </View>
          )}

        {activeCategory == 'terceira' &&(
              <View style={{flexDirection:'row'}}>
                <View style={{backgroundColor:'#fff',width:'30%',height:'100%',alignItems:'center',padding:6,borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                  <Text style={{fontSize:26}}>2.0</Text>
                  <Text style={{fontSize:24}}>KM</Text>
                </View>
                
                  <LinearGradient
                    colors={['#C73E28', 'white']}
                    style={styles.container_gradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                  >
                    <Text style={{fontSize:26,fontWeight: 'bold',color:'#fff'}}>9</Text>
                    <Text style={{fontSize:24,fontWeight: 'bold',color:'#C73E28'}}>PONTOS</Text>
                  </LinearGradient>
                
                <View style={{backgroundColor:'#fff',width:'30%',height:'100%',alignItems:'center',padding:6,borderTopRightRadius:20,borderBottomRightRadius:20}}>
                  <Text style={{fontSize:26}}>NIVEL</Text>
                  <Text style={{fontSize:26}}>DIFICIL</Text>
                </View>
              </View>
          )}
          </View>
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
 });
