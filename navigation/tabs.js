import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/homeScreen'
import noticiasScreen from '../screens/noticiasScreen'
import procurarScreen from '../screens/procurarScreen'
import qrcodeScreen from '../screens/qrcodeScreen'
import ChatScreen from '../screens/chatScreen';

import Search from '../screens/componentes_noticias/search';
import LinearGradient from 'react-native-linear-gradient';

import { StyleSheet } from 'react-native';
import { Image, Text, View, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
        style={{
            top: 0,
            justifyContent:'center',
            alignItems: 'center',
            ...style.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width:50,
            height:50,
            borderRadius:35,
            backgroundColor: '#e32f45'
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions ={{
                headerShown: false,
                tabBarShowLabel:false,
                tabBarStyle: {
                    position:'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: 'transparent',
                    borderRadius: 15,
                    height:70,
                    
                },
                tabBarBackground:() => (
                    <View>
                      <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        colors={["#1FAA70", "#00A2DB"]}
                        style={{ height: 100 }}
                      />
                    </View>
                  ),
            }}>
            
            <Tab.Screen name="News" component={noticiasScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                        source = {focused ? require('../assets/icons/Home-icon.png') : require('../assets/icons/Home-icon-not.png')}
                        resizeMode = 'contain'
                        style = {{
                            width:focused ? 55 : 55,
                            height:focused ? 55 : 55,
                            top:focused ? -40 : -10,
                            backgroundColor:focused? '#E8E7E4' : 'transparent',
                            borderRadius:focused? 50 : 0,
                            borderWidth:focused? 2 : 0,
                            borderColor:'#fff'
                        }}
                        />
                    </View>
                ),
            }}/>

            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                        source = {focused ? require('../assets/icons/Trilha-icon-select.png') : require('../assets/icons/Trilha-icon.png')}
                        resizeMode = 'contain'
                        style = {{
                            width:focused ? 55 : 50,
                            height:focused ? 55 : 50,
                            top:focused ? -40 : -10,
                            backgroundColor:focused? '#E8E7E4' : 'transparent',
                            borderRadius:focused? 50 : 0,
                            borderWidth:focused? 2 : 0,
                            borderColor:'#fff'
                        }}
                        />
                    </View>
                ),
            }}/>

            <Tab.Screen name="qrCode" component={qrcodeScreen} options={{
                tabBarIcon: ({focused}) => (               
                    <Image 
                        source = {focused ? require('../assets/icons/QR-code-icon-select.png') : require('../assets/icons/QR-code-icon.png')}
                        resizeMode = 'contain'
                        style = {{
                            width:focused ? 55 : 55,
                            height:focused ? 55 : 55,
                            top:focused ? -40 : 1,
                            backgroundColor:focused? '#E8E7E4' : 'transparent',
                            borderRadius:focused? 50 : 0,
                            borderWidth:focused? 2 : 0,
                            borderColor:'#fff'
                        }}
                    />
                    ),

                    // tabBarButton: (props)  => (
                    //     <CustomTabBarButton {...props}/>
                    // )
                }
                }/>

            <Tab.Screen name="Chat" component={ChatScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                        source = {focused ? require('../assets/icons/Quiz-icon-select.png') : require('../assets/icons/Quiz-icon.png')}
                        resizeMode = 'contain'
                        style = {{
                            width:focused ? 55 : 55,
                            height:focused ? 55 : 55,
                            top:focused ? -40 : -10,
                            backgroundColor:focused? '#E8E7E4' : 'transparent',
                            borderRadius:focused? 50 : 0,
                            borderWidth:focused? 2 : 0,
                            borderColor:'#fff'
                        }}
                        />
                        
                    </View>
                ),
            }}/>

            <Tab.Screen name="Search" component={procurarScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                        source = {focused ? require('../assets/icons/portfolio.png') : require('../assets/icons/portfolio-icon-branco.png')}
                        resizeMode = 'contain'
                        style = {{
                            width:focused ? 55 : 55,
                            height:focused ? 55 : 55,
                            top:focused ? -40 : -10,
                            backgroundColor:focused? '#E8E7E4' : 'transparent',
                            borderRadius:focused? 50 : 0,
                            borderWidth:focused? 2 : 0,
                            borderColor:'#fff'
                        }}
                        />
                        
                    </View>
                ),
            }}/>


        </Tab.Navigator>
    );
}

export default Tabs;

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