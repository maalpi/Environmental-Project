import React, { useEffect, useCallback, useRef, useState } from 'react'
import { View,Text,ScrollView, Button, StyleSheet, TouchableOpacity,Image,Platform, StatusBar,Linking } from 'react-native'
import { ArrowLeftIcon, ArrowRightIcon, VideoCameraIcon } from 'react-native-heroicons/solid'

import MapView, { PROVIDER_GOOGLE,Marker,Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Modal from 'react-native-modal';

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

const Media = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    // COORDENADAS TRILHA DOIS
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
    return(
        <View style={{backgroundColor:'#E8E7E4',flex:1}}>

            <Modal animationType="slide"
                   transparent={false}
                   visible={isModalVisible}
                   style={{ margin: 0 }}
                   onRequestClose={toggleModal}>
                <View style={{flex:1,backgroundColor:'#E8E7E4'}}>

                    <TouchableOpacity style={{marginLeft:'5%',marginTop:'5%'}} onPress={toggleModal} >
                        <ArrowLeftIcon color='#C76828' size={32}/>
                    </TouchableOpacity>

                    <View style={{alignItems:'center'}}> 
                        <Text style={{fontSize:32,fontWeight:'bold'}}>Trilha Difícil:</Text>   
                        <Text>Inserir alguma frase de efeito</Text>
                    </View>

                    <View style={styles.viewMapa} >
                        <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={{
                        latitude: coordinates_three[0].latitude + 0.0015, 
                        longitude: coordinates_three[0].longitude - 0.0015,
                        latitudeDelta: 0.0072,
                        longitudeDelta: 0.0011,
                        }}
                        customMapStyle={customMapStyle}>
                        <Marker coordinate={coordinates_three[0]} />
                        <Marker coordinate={coordinates_three[1]} />
                        <Marker coordinate={coordinates_three[2]} />
                        <Marker coordinate={coordinates_three[6]} />
                        <Marker coordinate={coordinates_three[8]} />
                        <Polyline
                        coordinates={coordinates_three}
                        strokeColor="#C8942B" // fallback for when `strokeColors` is not supported by the map-provider
                        strokeColors={['#7F0000']}
                        strokeWidth={4}/>
                    </MapView>
                </View>
                </View>
            </Modal>

            <View style={{marginTop:'7.5%',marginLeft:'5%'}}>
             <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftIcon color='#C76828' size={24}/>
            </TouchableOpacity>
            </View>
            
            <View style={{alignItems:'center'}}> 
                <Text style={{fontSize:32,fontWeight:'bold'}}>Trilha Difícil:</Text>   
                <Text>Inserir alguma frase de efeito</Text>
                <Image source={require('../../assets/logo/caatinga.jpg')} 
                style ={{width:'100%',overflow:'hidden',height:'50%',marginTop:'5%'}}
                resizeMethod='resize'></Image>
            </View>

            <View style={{marginTop:'-35%',marginLeft:'10%'}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold',fontSize:28}}>Trilha Difícil</Text>
                    
                        <Image source={require('../../assets/icons/passos.png')} style={{ width: '5%', height: '50%', borderRadius: 25,marginLeft:'10%',marginTop:'2.5%' }}></Image>
                        <Text style={{fontSize:16,marginTop:'2.5%'}}>5.0km</Text>
                        <Image source={require('../../assets/icons/relogio.png')} style={{ width: '5%', height: '50%', borderRadius: 25,marginLeft:'5%',marginTop:'2.5%' }}></Image>
                        <Text style={{fontSize:16,marginTop:'2.5%'}}>1:30hrs</Text>
                   
                </View>
                <View style={{backgroundColor:"#C76828",color:"#fff",width:"30%",alignItems:'center',flexDirection:'row',borderRadius:20}}>
                    <Image source={require('../../assets/icons/ponto.png')} style={{ width:8,height:8, borderRadius: 25,marginLeft:'5%'}}></Image>
                    <Text  style={{color:"#fff",fontWeight:"bold",fontSize:14}} > Trilha Difícil</Text> 
                </View>

                <View style={{marginTop:'3%'}}>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Descrição:</Text>
                    <Text style={{paddingRight:'13%',textAlign: 'justify', lineHeight:20,marginTop:'2%',color:'#000'}}>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </Text>
                </View>

                <View style={{flexDirection:'row',marginTop:'3%'}}>
                    <Image source={require('../../assets/icons/Vector.png')} style={{ width:'4%',height:'100%', borderRadius: 25}}></Image>
                    <Text style={{fontWeight:'bold',fontSize:15}}> 10 Pontos:</Text>

                </View>
                <ScrollView style={{marginLeft:'9%',height:'10%',width:'70%'}} indicatorStyle={{backgroundColor: 'red'}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/icons/bandeiraMarrom.png')} style={{ width:'4%',height:'100%', marginRight: '2%'}}></Image>
                        <Text style={{fontWeight:'bold',color:'#C76828',fontSize:13}}>Saída</Text>
                    </View>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>
                    
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/icons/bandeiraMarrom.png')} style={{ width:'4%',height:'100%', marginRight: '2%'}}></Image>
                        <Text style={{fontWeight:'bold',color:'#C76828',fontSize:13}}>Portal das Cactáceas</Text>
                    </View>
                    
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>
                    
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/icons/bandeiraMarrom.png')} style={{ width:'4%',height:'100%', marginRight: '2%'}}></Image>
                        <Text style={{fontWeight:'bold',color:'#C76828',fontSize:13}}>Área de desertificação</Text>
                    </View>

                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>
                    
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/icons/bandeiraMarrom.png')} style={{ width:'4%',height:'100%', marginRight: '2%'}}></Image>
                        <Text style={{fontWeight:'bold',color:'#C76828',fontSize:13}}>Barril das jararacas</Text>
                    </View>

                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>
                    
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/icons/bandeiraMarrom.png')} style={{ width:'4%',height:'100%', marginRight: '2%'}}></Image>
                        <Text style={{fontWeight:'bold',color:'#C76828',fontSize:13}}>Cupinzeiro</Text>
                    </View>

                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>

                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/icons/bandeiraMarrom.png')} style={{ width:'4%',height:'100%', marginRight: '2%'}}></Image>
                        <Text style={{fontWeight:'bold',color:'#C76828',fontSize:13}}>Portal do Mandacarú</Text>
                    </View>

                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>

                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/icons/bandeiraMarrom.png')} style={{ width:'4%',height:'100%', marginRight: '2%'}}></Image>
                        <Text style={{fontWeight:'bold',color:'#C76828',fontSize:13}}>Marsupial</Text>
                    </View>

                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>

                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/icons/bandeiraMarrom.png')} style={{ width:'4%',height:'100%', marginRight: '2%'}}></Image>
                        <Text style={{fontWeight:'bold',color:'#C76828',fontSize:13}}>Pedra lascada</Text>
                    </View>

                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>

                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/icons/bandeiraMarrom.png')} style={{ width:'4%',height:'100%', marginRight: '2%'}}></Image>
                        <Text style={{fontWeight:'bold',color:'#C76828',fontSize:13}}>Quixabeira</Text>
                    </View>

                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>

                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/icons/bandeiraMarrom.png')} style={{ width:'4%',height:'100%', marginRight: '2%'}}></Image>
                        <Text style={{fontWeight:'bold',color:'#C76828',fontSize:13}}>Olho D'água</Text>
                    </View>

                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>

                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/icons/bandeiraMarrom.png')} style={{ width:'4%',height:'100%', marginRight: '2%'}}></Image>
                        <Text style={{fontWeight:'bold',color:'#C76828',fontSize:13}}>Chegada</Text>
                    </View>
                    
                </ScrollView>
                
                <TouchableOpacity style={styles.button} onPress={toggleModal} >
                <Image source={require('../../assets/icons/Walking.png')} style={{ width:'4%',height:'100%', marginLeft:'21.5%'}}></Image>
                    <Text style={styles.buttonText}>Iniciar Trilha</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#C76828',
        paddingVertical: '3%',
        paddingHorizontal: '4%',
        width:'70%',
        marginTop:'5%',
        marginLeft:'12%',
        borderRadius:10,
        flexDirection:'row',
        alignItems: 'center',
        
      },
      buttonText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:'4%'
      },
      linha: {
        fontWeight:'bold',
        color:'#C76828',
        fontSize:13,
        marginLeft:'5.5%'
      },
      map: {
        flex: 1,
        
      },viewMapa: {
            marginLeft: '7%',
            marginTop:'3%',
            borderRadius:20,
            overflow: 'hidden',
            height: '80%',
            width:'85%',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
                },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5
      },
  });

export default Media