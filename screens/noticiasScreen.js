import React, { useEffect, useState } from 'react'
import { View,Text, Button, StyleSheet, TouchableOpacity, FlatList} from 'react-native'

import Header from './componentes_noticias/header'
import Card from './componentes_noticias/card'
import DataInfo from '../assets/info/info.json'

import { ScrollView } from 'react-native-virtualized-view'

const NoticiasScreen= ({navigation}) =>{
    //navigation.setOptions({ tabBarStyle: {display: 'none'}})

    const [Data, setData] = useState([]);
    const [Select,setSelect] = useState(0);
    const [Category,setCategory] = React.useState([
        {
            id: 4,
            name: 'Principais Noticias',
            category:'general',
        },
        {
            id: 5,
            name: 'Ensino',
            category: 'ensino',
        },

        {
            id: 2,
            name: 'Turismo',
            category: 'turismo',
        },
        {
            id: 1,
            name: 'Curiosidades',
            category:'curiosidade',
        },

    ]);
    
    
    let cont = 0;
    useEffect(() => {
        const getData = async () => {
          try {
            const json = require('../assets/info/info.json');
            if (Category[Select].category === 'general'){
                setData(json.articles)
            }else{
                const filteredArticles = json.articles.filter(
                (article) => article.category === Category[Select].category
                );
                setData(filteredArticles);
            }
          } catch (error) {
            console.error('Erro ao carregar o JSON:', error);
          }
        };
    
        getData(); // Chama a função fetchData diretamente no useEffect
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [Select]);


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
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#ffff',
                borderRadius: 15,
                height:90,
                ... style.shadow
            } // Mostra o navigator quando a tela é rolada para cima
          });
        }
      };
    
      useEffect(() => {
        // Sua lógica de carregamento de dados aqui
      }, [Select]);
    
    return (
        <ScrollView onScroll={handleScroll}>
        <View className="flex-1 "> 
        <Header navigation={navigation}/> 

            <View className="px-4 py-2">
                <FlatList data = {Category} horizontal showsHorizontalScrollIndicator={false} renderItem={({item,index}) =>{
                    return(
                        <TouchableOpacity className={ index == Select ? 'px-4 py-1 rounded-md bg-redprimary mr-3' : 'px-4 py-1 rounded-md mr-3 bg-gray-200'} 
                        onPress={() =>{ 
                            setSelect(index);
                            //getData();
                            }}>
                            <Text className={index == Select ? "text-white" : "text-black"}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}></FlatList>
            </View>

            <View>
                
                <FlatList data={Data} renderItem={({item,index}) =>{
                    return(
                        <Card navigation={navigation} item={item} cont={index}/>  
                    )
                }} />
            </View>
        </View>
        </ScrollView>
    )
}

export default NoticiasScreen

const style = StyleSheet.create({
    shadow:{
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})
