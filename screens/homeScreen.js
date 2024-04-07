import React, { useState } from 'react';
import { View,Text, StyleSheet,Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) =>{
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

          <View style={{marginTop:'-10%',marginBottom:'3%'}}>
            <Text style={{fontWeight:'bold',marginLeft:'6%',fontSize:27}}>Escolha sua trilha:</Text>
          </View>

          <TouchableOpacity className=" shadow-xl relative mb-4 rounded-xl overflow-hidden" style={{width:'90%',height:'20.5%',marginLeft:'4%',shadowColor: "#000",shadowOffset: { width: 0, height: 8,}, shadowOpacity: 0.44, shadowRadius: 10.32}}onPress={() => navigation.navigate('Facil')}>  
            <View className= {"flex-1 relative flex-row bg-white my-0 mx-0"}>
                <Image source={{ uri: 'https://live.staticflickr.com/65535/53626516105_de36a3ea17_o.jpg' }} 
                className= { "h-32 w-32 rounded-l-xl"}
                style={{height:'100%',width:'35%'}}
                resizeMethod='resize'></Image>

                <View className="">
                    <View style={{backgroundColor:"#2D821D",color:"#fff",width:"220%",alignItems:'center'}}>
                      <Text  style={{color:"#fff",fontWeight:"bold",padding:7,fontSize:15}} >TRILHA FÁCIL</Text> 
                    </View>
                    <View className="absolute" style={{marginTop:"35%",width:'110%',marginLeft:'8%'}}>
                        <Text style={{fontWeight:'bold',fontSize:21.5,width:'160%'}}>Trilha do Mirante</Text>
                        <View style={{backgroundColor:"#2D821D",color:"#fff",width:"50%",alignItems:'center',borderRadius:70,marginTop:'4%'}}>
                          <Text  style={{color:"#fff",fontWeight:"bold",fontSize:10}} >2 PONTOS</Text> 
                        </View>
                        <View style={{flexDirection:"row",marginTop:'4.5%'}}>
                          <Image source={require('../assets/icons/passos.png')} style={{ width: '10%', height: '100%', borderRadius: 25 }}></Image>
                          <Text style={{fontSize:13,paddingLeft:'2%'}}>450m</Text>
                          <Image source={require('../assets/icons/relogio.png')} style={{ width: '10%', height: '100%', borderRadius: 25,marginLeft:'20%' }}></Image>
                          <Text style={{fontSize:13,paddingLeft:'2%'}}>30min</Text>
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
                <Image source={{ uri: 'https://live.staticflickr.com/65535/53626068181_6df82de05d_o.jpg' }} 
                className= { "h-32 w-32 rounded-l-xl"}
                style={{height:'100%',width:'35%'}}
                resizeMethod='resize'></Image>

                <View className="bg-red my-0 mx-0">
                    <View style={{backgroundColor:"#3165B0",color:"#fff",width:"220%",alignItems:'center'}}>
                      <Text  style={{color:"#fff",fontWeight:"bold",padding:7,fontSize:15}} >TRILHA MÉDIA</Text> 
                    </View>
                    <View className="absolute" style={{marginTop:"35%",width:'119%',marginLeft:'8%'}}>
                        <Text style={{fontWeight:'bold',fontSize:20.5,width:'170%'}}>Trilha do Olho d’Água</Text>
                        <View style={{backgroundColor:"#3165B0",color:"#fff",width:"50%",alignItems:'center',borderRadius:70,marginTop:'3%'}}>
                          <Text  style={{color:"#fff",fontWeight:"bold",fontSize:10}} >3 PONTOS</Text> 
                        </View>
                        <View style={{flexDirection:"row",marginTop:'4.5%'}}>
                          <Image source={require('../assets/icons/passos.png')} style={{ width: '10%', height: '100%', borderRadius: 25 }}></Image>
                          <Text style={{fontSize:13,paddingLeft:'2%'}}>830m</Text>
                          <Image source={require('../assets/icons/relogio.png')} style={{ width: '10%', height: '100%', borderRadius: 25,marginLeft:'20%' }}></Image>
                          <Text style={{fontSize:13,paddingLeft:'2%'}}>60min</Text>
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

        <TouchableOpacity className=" shadow-xl relative mb-4 rounded-xl overflow-hidden" style={{width:'90%',height:'20.5%',marginLeft:'4%',shadowColor: '#000',shadowOffset: { width: 0, height: 8,}, shadowOpacity: 0.44, shadowRadius: 10.32}} onPress={() => navigation.navigate('Dificil')}>  
            <View className= {"flex-1 relative flex-row bg-white my-0 mx-0"}>
                <Image source={{ uri: 'https://live.staticflickr.com/65535/53349610231_3bf6747101_o.jpg' }} 
                className= { "h-32 w-32 rounded-l-xl"}
                style={{height:'100%',width:'35%'}}
                resizeMethod='resize'></Image>

                <View className="bg-red my-0 mx-0">
                    <View style={{backgroundColor:"#C76828",color:"#fff",width:"220%",alignItems:'center'}}>
                      <Text  style={{color:"#fff",fontWeight:"bold",padding:7,fontSize:15}} >TRILHA DIFÍCIL</Text> 
                    </View>
                    <View className="absolute" style={{marginTop:"35%",width:'112%',marginLeft:'8%'}}>
                        <Text style={{fontWeight:'bold',fontSize:22,width:'150%'}}>Trilha do Marsupial</Text>
                        <View style={{backgroundColor:"#C76828",color:"#fff",width:"50%",alignItems:'center',borderRadius:70,marginTop:'2%'}}>
                          <Text  style={{color:"#fff",fontWeight:"bold",fontSize:10}} >9 PONTOS</Text> 
                        </View>
                        <View style={{flexDirection:"row",marginTop:'4.5%'}}>
                          <Image source={require('../assets/icons/passos.png')} style={{ width: '10%', height: '100%', borderRadius: 25 }}></Image>
                          <Text style={{fontSize:13,paddingLeft:'2%'}}>1.3km</Text>
                          <Image source={require('../assets/icons/relogio.png')} style={{ width: '10%', height: '100%', borderRadius: 25,marginLeft:'20%' }}></Image>
                          <Text style={{fontSize:13,paddingLeft:'2%'}}>90min</Text>
                        </View>
                    </View>
                    <View className="absolute" style={{marginLeft:'9%',marginTop:'95%',height:'130%',width:'190%'}}>
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
    width:'36%',
    height:'100%',
    padding:6,
  },
  Shadow: {
    shadowColor: "#000",shadowOffset: { width: 0, height: 8,}, shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16,}
 });
