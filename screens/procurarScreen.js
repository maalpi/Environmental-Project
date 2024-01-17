import React,{useState,useEffect} from "react"
import { View,Text, Button, StyleSheet,TouchableOpacity,ScrollView, FlatList,Image,StatusBar,TextInput} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import { collection, onSnapshot } from "firebase/firestore";

import database from "../assets/config/firebaseconfig"

import {MagnifyingGlassIcon} from 'react-native-heroicons/solid'

const FindScreen= ({navigation}) =>{
    //Cores pro gradiente da barra de status
    const gradientColors = ['#3165b0', '#c76828', '#42385D'];
    useEffect(() => {
        // Configurando o gradiente
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setTranslucent(true);
        StatusBar.setBarStyle('light-content');
      }, []);

    //Especies da fauna ou flora
    const [Data, setData] = useState([]);
    const [DataFlora, setDataFlora] = useState([]);

    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState('');

    const [activeCategory, setActiveCategory] = useState('Fauna'); // Estado para controlar a categoria ativa

    //fauna == 0 e flora == 1
    let fauna_flora = 0;

    //Carregando os dados, da fauna primeiro
    // o onSnapshot adiciona um dado logo q é inserido
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(database, "Fauna"), (querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id });
          });
          setData(list);
          filterData(list, searchText); // Filtra os dados inicialmente
          
        });
    
        return () => unsubscribe();
      }, []);

      useEffect(() => {
        const unsubscribe = onSnapshot(collection(database, "Flora"), (querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id });
          });
          setDataFlora(list);
          filterData(list, searchText); // Filtra os dados inicialmente
          
        });
    
        return () => unsubscribe();
      }, []);
    
    const filterData = (dataToFilter, text) => {
        const filtered = dataToFilter.filter(item =>
            item.nome && item.nome.toLowerCase().includes(text.toLowerCase())
            );
            console.log(filtered);
            setFilteredData(filtered);
      };

    const changeCategory = (category) => {
        setActiveCategory(category);
    };

    // Mostrando os itens
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <TouchableOpacity>
                <Image source={{ uri: item.imagem }} style={styles.itemImage} resizeMethod='resize' />
                <Text style={styles.itemText} ellipsizeMode="tail">{item.nome}</Text>
            </TouchableOpacity>
        </View>
      );
    
    //FAZENDO O NAVBAR SUMIR
    const handleScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        if (offsetY > 0) {
          navigation.setOptions({
            tabBarStyle: {display: 'none'}, // Oculta o navigator quando a tela é rolada para baixo
          });
        } else {
          navigation.setOptions({
            tabBarStyle: {
                position:'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                elevation: 0,
                backgroundColor: 'transparent',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                height:70,
            } // Mostra o navigator quando a tela é rolada para cima
          });
        }
    };

    return (
    <LinearGradient colors={['#3165b0', '#c76828']} style={{ flex: 1 }}>
      <StatusBar translucent={false}  />
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>

        <View style ={{flexDirection: 'row'}}>
            <View style={{ alignItems: 'center', paddingVertical: 38,paddingLeft:25 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#3165b0' }}>
                    Catálogo Ambiental
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

        <View style ={{flexDirection: 'row-reverse'}}>
        <TextInput
          style={styles.searchBar}
          placeholder="Digite para pesquisar..."
          onChangeText={(text) => {
            setSearchText(text);
            filterData(data, text);
          }}
          value={searchText}
        />

        <MagnifyingGlassIcon name="search" size={25} color="#3165b0" style={{paddingTop:62,marginRight:20, position: 'absolute'}} />
      </View>

    <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            { backgroundColor: '#c76828' }, // Cor laranja
            { zIndex: activeCategory === 'Fauna' ? 1 : 0 },
            
          ]}
          onPress={() => changeCategory('Fauna')}
        >
          <Text style={styles.buttonText}>Fauna</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.categoryButton,
            { backgroundColor: '#529c44' }, // Cor verde
            { zIndex: activeCategory === 'Flora' ? 1 : 0 },
            
          ]}
          onPress={() => changeCategory('Flora')}
        >
          <Text style={styles.buttonText}>Flora</Text>
        </TouchableOpacity>
      </View>

        <ScrollView style={{backgroundColor: activeCategory === 'Fauna' ? '#c76828' : '#529c44'}} onScroll={handleScroll}>
            <FlatList
                data={activeCategory === 'Fauna' ? Data : DataFlora}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </ScrollView>
    </View>
    </LinearGradient>
    )
}

export default FindScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f5f5f5',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: -105,
        marginTop: 15
      },
      categoryButton: {
        height: '30%',
        width: '55%', // Ajuste conforme necessário
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', // Para garantir que a posição seja respeitada
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
    itemContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      margin: 8,
    },
    
    itemImage: {
      width: 150,
      height: 150,
      borderRadius: 10,
      borderWidth:2,
      borderColor:"#ffffff"
    },
    searchIcon: {
        marginLeft: 10,
      },
    searchBar: {
        width: 370,
        height: 40,
        margin: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 2, 
        borderColor: '#3165b0'
      },    
    itemText: {
      marginTop: 8,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      color:'#ffffff',
    },
    activeButton: {
        zIndex: 1, // Configura a sobreposição // Cor diferente para a categoria ativa
    },
    
  });