import React, { useEffect, useCallback, useRef, useState } from 'react';
import { View,Text,ScrollView, Button, StyleSheet, TouchableOpacity,Image,Platform, StatusBar,Linking } from 'react-native';
import { ArrowLeftIcon, ArrowRightIcon, VideoCameraIcon } from 'react-native-heroicons/solid';

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
    return (
        <View style={{backgroundColor:'#E8E7E4',flex:1}}>

            <Modal animationType="slide"
                   transparent={false}
                   visible={isModalVisible}
                   style={{ margin: 0 }}
                   onRequestClose={toggleModal}>
                <View style={{flex:1,backgroundColor:'#E8E7E4'}}>

                    <TouchableOpacity style={{marginLeft:'5%',marginTop:'5%'}} onPress={toggleModal} >
                        <ArrowLeftIcon color="#2D821D" size={32}/>
                    </TouchableOpacity>

                    <View style={{alignItems:'center'}}>
                        <Text style={{fontSize:32,fontWeight:'bold'}}>Trilha Fácil:</Text>
                        <Text>Clique nos marcadores para ver informações</Text>
                    </View>

                    <View style={styles.viewMapa} >
                        <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={{
                        latitude: coordinates[0].latitude + 0.0005,
                        longitude: coordinates[0].longitude - 0.0012,
                        latitudeDelta: 0.0092,
                        longitudeDelta: 0.0021,
                        }}
                        customMapStyle={customMapStyle}>
                        <Marker coordinate={coordinates[0]}
                       style={{width:'20%'}}
                       icon={require('../../assets/logo/MarkerVerde.png')}
                        onPress={() => {
                              toggleModal(); // Alternar o modal
                              navigation.navigate('Media'); // Navegar para 'Media'
                          }}>

                        </Marker>

                        <Marker coordinate={coordinates[2]} description={'Ponto UM'} icon={require('../../assets/logo/MarkerVerde.png')}
                        onPress={() => {
                          toggleModal(); // Alternar o modal
                          navigation.navigate('Mirante'); // Navegar para 'Mirante'
                      }}/>
                        <Polyline
                        coordinates={coordinates}
                        strokeColor="#2D821D" // fallback for when `strokeColors` is not supported by the map-provider
                        strokeColors={['#7F0000']}
                        strokeWidth={6}/>
                    </MapView>
                </View>
                <Image source={require('../../assets/icons/CicurloVer.png')} style={{ position: 'absolute', left: '40%', bottom: '1%'}}  resizeMode='cover'></Image>
                </View>
            </Modal>

            <View style={{marginTop:'7.5%',marginLeft:'5%'}}>
             <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftIcon color="#2D821D" size={24}/>
            </TouchableOpacity>
            </View>

            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:32,fontWeight:'bold'}}>Trilha do Mirante:</Text>
                <Text>Contemple as belezas naturais da região.</Text>
                <Image source={require('../../assets/logo/caatinga.jpg')}
                style ={{width:'100%',overflow:'hidden',height:'50%',marginTop:'5%'}}
                resizeMethod="resize"></Image>
            </View>

            <View style={{marginTop:'-35%',marginLeft:'10%'}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold',fontSize:27.5}}>Trilha do Mirante</Text>
                </View>
                <View style={{backgroundColor:'#2D821D',color:'#fff',width:'30%',alignItems:'center',flexDirection:'row',borderRadius:20}}>
                    <Image source={require('../../assets/icons/ponto.png')} style={{ width:8,height:8, borderRadius: 25,marginLeft:'5%'}}></Image>
                    <Text  style={{color:'#fff',fontWeight:'bold',fontSize:14}} > Trilha Fácil</Text>
                    <Image source={require('../../assets/icons/passos.png')} style={{ width: '15%', height: '50%', borderRadius: 25,marginLeft:'20%',marginTop:'2.5%' }}></Image>
                    <Text style={{fontSize:16,marginTop:'2.5%'}}>450m</Text>
                    <Image source={require('../../assets/icons/relogio.png')} style={{ width: '15%', height: '60%', borderRadius: 25,marginLeft:'10%',marginTop:'2.5%' }}></Image>
                    <Text style={{fontSize:16,marginTop:'2.5%'}}>30min</Text>
                </View>

                <View style={{marginTop:'3%'}}>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Descrição:</Text>
                    <Text style={{paddingRight:'13%',textAlign: 'justify', lineHeight:20,marginTop:'2%',color:'#000'}}>Classificada em baixo nível de dificuldade, a trilha dá acesso ao mirante onde é possível contemplar as belezas naturais da região.</Text>
                </View>

                <View style={{flexDirection:'row',marginTop:'3%'}}>
                    <Image source={require('../../assets/icons/Vector.png')} style={{ width:'4%',height:'100%', borderRadius: 25}}></Image>
                    <Text style={{fontWeight:'bold',fontSize:15}}> 2 Pontos:</Text>

                </View>
                <ScrollView style={{marginLeft:'9%',height:'10%',width:'70%'}} indicatorStyle={{backgroundColor: 'red'}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/icons/bandeiraVerde.png')} style={{ width:'4%',height:'100%', marginRight: '2%'}}></Image>
                        <Text style={{fontWeight:'bold',color:'#2D821D',fontSize:13}}>Saída</Text>
                    </View>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>

                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/icons/bandeiraVerde.png')} style={{ width:'4%',height:'100%', marginRight: '2%'}}></Image>
                        <Text style={{fontWeight:'bold',color:'#2D821D',fontSize:13}}>Umburana</Text>
                    </View>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>

                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/icons/bandeiraVerde.png')} style={{ width:'4%',height:'100%', marginRight: '2%'}}></Image>
                        <Text style={{fontWeight:'bold',color:'#2D821D',fontSize:13}}>Mirante</Text>
                    </View>

                </ScrollView>

                <TouchableOpacity style={styles.button} onPress={toggleModal} >
                <Image source={require('../../assets/icons/Walking.png')} style={{ width:'4%',height:'100%', marginLeft:'21.5%'}}></Image>
                    <Text style={styles.buttonText}>Iniciar Trilha</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2D821D',
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
        marginLeft:'4%',
      },
      linha: {
        fontWeight:'bold',
        color:'#2D821D',
        fontSize:13,
        marginLeft:'5.5%',
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
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
                },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
      },
      markerImage: {
        width: 20,
        height: 20,
        resizeMode:'contain',
      },
  });

export default Media;
