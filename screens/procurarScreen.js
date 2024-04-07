import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,TouchableOpacity, FlatList,Image,StatusBar,TextInput,Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-virtualized-view';
import {MagnifyingGlassIcon} from 'react-native-heroicons/solid';

import { collection, onSnapshot } from 'firebase/firestore';

import database from '../assets/config/firebaseconfig';

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
    const [filteredDataFlora, setFilteredDataFlora] = useState([]);
    const [searchText, setSearchText] = useState('');

    const [activeCategory, setActiveCategory] = useState('Fauna'); // Estado para controlar a categoria ativa

    //salvando item pro modal e o stado do modal
    const [selectedItem, setSelectedItem] = useState(null);  // Adicionado para rastrear o item selecionado
    const [modalVisible, setModalVisible] = useState(false);

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
          filterDataFlora(list, searchText); // Filtra os dados inicialmente
          
        });
    
        return () => unsubscribe();
      }, []);
    
      
    const filterData = (dataToFilter, text) => {
        const filtered = dataToFilter.filter(item =>
            item.nome && item.nome.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredData(filtered);
      };

      const filterDataFlora = (dataToFilter, text) => {
        const filtered = dataToFilter.filter(item =>
            item.nome && item.nome.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredDataFlora(filtered);
      };

    const changeCategory = (category) => {
        setActiveCategory(category);
    };

    // Mostrando os itens
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => handleItemClick(item)}>
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

    const handleItemClick = (item) => {
      setSelectedItem(item);
      setModalVisible(true);
    };

    return (
    <LinearGradient colors={['#3165b0', '#c76828']} style={{ flex: 1 }}>
      <StatusBar translucent={false}  />

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.7)' }}>
            
          <View style={{ flex: 0.8, width: '90%', backgroundColor: 'white', borderRadius: 10 }}>
            {selectedItem && (
              <>
                <Image source={{ uri: selectedItem.imagem }} style={{ flex: 1, borderTopLeftRadius: 10,borderTopRightRadius: 10, resizeMode: 'cover' }} />
                <Text style={{ marginLeft:'5%',fontSize: 20, fontWeight: 'bold', marginBottom: 0, color: '#C73E28',marginTop:5 }}>{selectedItem.nome}</Text>
                <Text style={{ marginLeft:'5%',fontSize: 15, marginTop: -4, fontWeight: 'bold', fontStyle: 'italic', marginBottom: 5 }}>{selectedItem.nomeCientifico}</Text>
                <View style={{ marginLeft:'5%',width:'38%',height: '6%', borderRadius: 15, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',borderWidth:1,borderColor:'grey' }}>
                  <Text style={{ fontSize: 15, color: 'grey',fontWeight:'bold' }}>{selectedItem.tipo}</Text>
                </View>

                {activeCategory === 'Fauna' ? (
                <View style={{ marginLeft: '2%', flex: 1, backgroundColor: 'transparent', borderRadius: 10, overflow: 'hidden' }}>
                  <ScrollView>
                    <Text style={{ fontSize: 16, padding: 15, textAlign: 'justify', color: 'grey' }}>
                      {selectedItem.descricao}
                    </Text>
                  </ScrollView>
                  <Text style={{marginLeft:'40%', color: 'grey',fontSize:12}}>Creditos Imagem: Valécia Estrela</Text>
                </View>
                ) : <Text></Text>}
              </>
      )}

    </View>
    <TouchableOpacity onPress={() => setModalVisible(false)} style={{position:'absolute', backgroundColor: 'red',top: '10%', left: '86.8%', padding: '3%' ,alignItems:'center',justifyContent:'center', borderTopRightRadius:10}}>
              <Text style={{color: 'white', textAlign:'center' }}>X</Text>
          </TouchableOpacity>
  </View>
</Modal>

    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>

        <View style ={{flexDirection: 'row'}}>
            <View style={{ alignItems: 'center',paddingVertical: '13%',paddingLeft:'6%' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#3165b0' }}>
                    Catálogo Ambiental
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

        <View style ={{flexDirection: 'row-reverse'}}>
          <TextInput
            style={styles.searchBar}
            placeholder="Digite para pesquisar..."
            onChangeText={(text) => {
              setSearchText(text);
              filterData(Data, text);
              filterDataFlora(DataFlora,text);
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
                data={activeCategory === 'Fauna' ? filteredData : filteredDataFlora}
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
        marginBottom: '-28%',
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
        width: '95%',
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