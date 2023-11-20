import React from "react"
import {SafeAreaView, Text, StyleSheet} from 'react-native'

import { NavigationContainer} from '@react-navigation/native'
import Tabs from './navigation/tabs'
import Search from "./screens/componentes_noticias/search"

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NoticiasScreen from "./screens/noticiasScreen"
import Header from "./screens/componentes_noticias/header"
import Leitor from "./screens/componentes_noticias/leitor"

const Stack = createNativeStackNavigator();

export default () => (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false, tabBarShowLabel:false}}>
                    <Stack.Screen name="Tabs" component={Tabs}/>
                    <Stack.Screen name="earch" component={Search}/> 
                    <Stack.Screen name="Leitor" component={Leitor}/>
                </Stack.Navigator>
            </NavigationContainer>

            {/* <NavigationContainer>
                <Stack.Screen name="Header" component={Header}/> 
                <Stack.Screen name="earch" component={Search}/> 
            </NavigationContainer> */}
        </>
        )


const style = StyleSheet.create({
    App: {
    backgroundColor: '#E3EEE1',
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
        }
    })