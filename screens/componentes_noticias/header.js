import React from 'react'
import { View,Text, Button, StyleSheet, TouchableOpacity} from 'react-native'
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid'

const Header = ({navigation}) => {
    return (
        <View className ="flex-row px-4 py-2 justify-between items-center bg-white shadow-lg">
            <Text className="text-base font-semibold text-redprimary">Country Live</Text>
            
            <TouchableOpacity onPress={() => navigation.navigate('earch')}>
                <MagnifyingGlassIcon color='#000' size={24}/>
            </TouchableOpacity>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({});