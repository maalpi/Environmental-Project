import React, { useState } from 'react';
import { View,Text,ScrollView, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';

import MapView, { PROVIDER_GOOGLE,Marker,Polyline } from 'react-native-maps';
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
          longitude: -36.3074767,
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
                        <ArrowLeftIcon color="#3165B0" size={32}/>
                    </TouchableOpacity>

                    <View style={{alignItems:'center'}}>
                        <Text style={{fontSize:32,fontWeight:'bold'}}>Trilha do Olho d’Água:</Text>
                        <Text>Contemple as belezas naturais da região</Text>
                    </View>

                    <View style={styles.viewMapa} >
                        <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={{
                        latitude: coordinates_two[0].latitude + 0.0005,
                        longitude: coordinates_two[0].longitude - 0.0012,
                        latitudeDelta: 0.0072,
                        longitudeDelta: 0.0011,
                        }}
                        customMapStyle={customMapStyle}>
                        <Marker coordinate={coordinates_two[0]} />
                        <Marker coordinate={coordinates_two[2]} description={'Ponto UM'} icon={require('../../assets/logo/MarkerAzul.png')}
                        onPress={() => {
                          toggleModal(); // Alternar o modal
                          navigation.navigate('Mirante'); // Navegar para 'Mirante'
                      }}/>
                        <Marker coordinate={coordinates_two[3]} description={'Ponto TRES'} icon={require('../../assets/logo/MarkerAzul.png')}
                        onPress={() => {
                          navigation.navigate('OlhoDagua'); // Navegar para 'Mirante'
                      }}/>
                        <Polyline
                        coordinates={coordinates_two}
                        strokeColor="#3165B0" // fallback for when `strokeColors` is not supported by the map-provider
                        strokeColors={['#7F0000']}
                        strokeWidth={4}/>
                    </MapView>
                </View>
                <Image source={require('../../assets/icons/CirculoAzul.png')} style={{ position: 'absolute', left: '40%', bottom: '1%'}}  resizeMode='cover'></Image>
                </View>
            </Modal>

            <View style={{marginTop:'7.5%',marginLeft:'5%'}}>
             <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftIcon color="#3165B0" size={24}/>
            </TouchableOpacity>
            </View>

            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:32,fontWeight:'bold',marginLeft:'5%'}}>Trilha do Olho d’Água:</Text>
                <Text>Contemple as belezas naturais da região</Text>
                <Image source={require('../../assets/logo/caatinga.jpg')}
                style ={{width:'100%',overflow:'hidden',height:'50%',marginTop:'5%'}}
                resizeMethod="resize"></Image>
            </View>

            <View style={{marginTop:'-35%',marginLeft:'10%'}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold',fontSize:28}}>Trilha do Olho d’Água</Text>

                </View>
                <View style={{backgroundColor:'#3165B0',color:'#fff',width:'30%',alignItems:'center',flexDirection:'row',borderRadius:20}}>
                    <Image source={require('../../assets/icons/ponto.png')} style={{ width:8,height:8, borderRadius: 25,marginLeft:'5%'}}></Image>
                    <Text  style={{color:'#fff',fontWeight:'bold',fontSize:14}} > Trilha Média</Text>
                    <Image source={require('../../assets/icons/passos.png')} style={{ width: '15%', height: '50%', borderRadius: 25,marginLeft:'20%',marginTop:'2.5%' }}></Image>
                    <Text style={{fontSize:16,marginTop:'2.5%'}}>830m</Text>
                    <Image source={require('../../assets/icons/relogio.png')} style={{ width: '15%', height: '60%', borderRadius: 25,marginLeft:'10%',marginTop:'2.5%' }}></Image>
                    <Text style={{fontSize:16,marginTop:'2.5%'}}>1hr</Text>
                </View>

                <View style={{marginTop:'3%'}}>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Descrição:</Text>
                    <Text style={{paddingRight:'13%',textAlign: 'justify', lineHeight:20,marginTop:'2%',color:'#000'}}>Classificada em médio nível de dificuldade e dá acesso ao Olho D'água, localizado a 830 metros do início da trilha. O tempo estimado para completar todo o percurso é de 60 minutos.</Text>
                </View>

                <View style={{flexDirection:'row',marginTop:'3%'}}>
                    <Image source={require('../../assets/icons/Vector.png')} style={{ width:'4%',height:'100%', borderRadius: 25}}></Image>
                    <Text style={{fontWeight:'bold',fontSize:15}}> 3 Pontos:</Text>

                </View>
                <ScrollView style={{marginLeft:'9%',height:'10%',width:'70%'}} indicatorStyle={{backgroundColor: 'red'}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/icons/bandeiraAzul.png')} style={{ width:'4%',height:'100%', marginRight: '2%'}}></Image>
                        <Text style={{fontWeight:'bold',color:'#3165B0',fontSize:13}}>Saída</Text>
                    </View>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>

                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/icons/bandeiraAzul.png')} style={{ width:'4%',height:'100%', marginRight: '2%'}}></Image>
                        <Text style={{fontWeight:'bold',color:'#3165B0',fontSize:13}}>Umburada</Text>
                    </View>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>

                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/icons/bandeiraAzul.png')} style={{ width:'4%',height:'100%', marginRight: '2%'}}></Image>
                        <Text style={{fontWeight:'bold',color:'#3165B0',fontSize:13}}>Mirante</Text>
                    </View>

                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>
                    <Text style={styles.linha}>|</Text>

                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/icons/bandeiraAzul.png')} style={{ width:'4%',height:'100%', marginRight: '2%'}}></Image>
                        <Text style={{fontWeight:'bold',color:'#3165B0',fontSize:13}}>Olho d'Água</Text>
                    </View>

                </ScrollView>

                <TouchableOpacity style={styles.button} onPress={toggleModal} >
                <Image source={require('../../assets/icons/Walking.png')} style={{ width:'4%', height:'100%', marginLeft:'21.5%'}}></Image>
                    <Text style={styles.buttonText}>Iniciar Trilha</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3165B0',
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
        color:'#3165B0',
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
  });

export default Media;
