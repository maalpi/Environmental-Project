import React,{useState} from 'react'
import { View,Text, ScrollView, StyleSheet, TouchableOpacity,Image,useWindowDimensions, StatusBar} from 'react-native'

import Animated,{useSharedValue, useAnimatedStyle,useAnimatedScrollHandler,interpolate} from 'react-native-reanimated'

const Carrossel = ({data}) =>{
    const {width} = useWindowDimensions();
    const SIZE = (width) * 0.7;
    const SPACER = (width - SIZE) / 3;

    console.log(data);
    const [newData] = useState([{key:'spacer-left'}, ...data, {key: 'spacer-right'}])
    console.log(newData);
    const x = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        }
    })
    return (
        <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false} 
        bounces={false}
        scrollEventThrottle={16}
        snapToInterval={SIZE}
        decelerationRate="fast"
        onScroll={onScroll}
        contentOffset={{ x: SIZE, y: 0 }}>
            {newData.map((item,index) => {
                const style = useAnimatedStyle(() => {
                    const scale = interpolate(
                        x.value,
                        [(index-2)*SIZE, (index - 1) * SIZE, index * SIZE],
                        [0.8,1, 0.8]
                    )
                    return{
                        transform: [{scale}],
                    }
                })
                if(!item.image){
                    return <View style={{width: SPACER}} key={index}/>
                }
                return (
                        <View style={{width: SIZE}} key={index}>
                            <Animated.View style={[styles.imageContainer,style]}>
                                <View style={{width:'200%'}}>
                                    <Image
                                    source={{uri: item.image ? item.image : "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/11/g7.png?w=1038&h=576&crop=1"}}
                                    style={styles.image}
                                    resizeMode="cover"/>
                                </View>
                            </Animated.View>
                        </View>
                )
            })}
        </Animated.ScrollView>
    )
}

export default Carrossel

const styles = StyleSheet.create({
    imageContainer:{
        borderRadius:0,
        overflow:'hidden',
    },
    image:{
        width:'60%',
        height:undefined,
        aspectRatio:1,
        resizeMode:"contain",
        transform: [{ translateX: -26}]
        
    },
    dotView:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    circle:{
        width: 10,
        height: 10,
        backgroundColor: 'grey',
        borderRadius: 50,
        marginHorizontal: 5
    }
})