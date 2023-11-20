import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/homeScreen'
import noticiasScreen from '../screens/noticiasScreen'
import procurarScreen from '../screens/procurarScreen'
import qrcodeScreen from '../screens/qrcodeScreen'
import ChatScreen from '../screens/chatScreen';

import Search from '../screens/componentes_noticias/search';

import { StyleSheet } from 'react-native';
import { Image, Text, View, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent:'center',
            alignItems: 'center',
            ...style.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width:70,
            height:70,
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
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffff',
                    borderRadius: 15,
                    height:90,
                    ... style.shadow
                }
            }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                        source = {require('../assets/icons/home_button.png')}
                        resizeMode = 'contain'
                        style = {{
                            width:25,
                            height:25,
                            tintColor:focused ? '#e32f45' : '#748c94'
                        }}
                        />
                        <Text style = {{color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Home</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="News" component={noticiasScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                        source = {require('../assets/icons/news_button.png')}
                        resizeMode = 'contain'
                        style = {{
                            width:25,
                            height:25,
                            tintColor:focused ? '#e32f45' : '#748c94'
                        }}
                        />
                        <Text style = {{color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>News</Text>
                    </View>
                ),
            }}/>

            <Tab.Screen name="qrCode" component={qrcodeScreen} options={{
                tabBarIcon: ({focused}) => (               
                        <Image 
                        source = {require('../assets/icons/qrcode_button.png')}
                        resizeMode = 'contain'
                        style = {{
                            width:30,
                            height:30,
                            tintColor:'#fff',
                        }}
                        />
                    ),
                    tabBarButton: (props)  => (
                        <CustomTabBarButton {...props}/>
                    )
                }}/>

            <Tab.Screen name="Search" component={procurarScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                        source = {require('../assets/icons/search_button.png')}
                        resizeMode = 'contain'
                        style = {{
                            width:25,
                            height:25,
                            tintColor:focused ? '#e32f45' : '#748c94'
                        }}
                        />
                        <Text style = {{color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Procurar</Text>
                    </View>
                ),
            }}/>

            <Tab.Screen name="Chat" component={ChatScreen} options={{
                tabBarStyle:{ display: 'none'},
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                        source = {require('../assets/icons/chat_button.png')}
                        resizeMode = 'contain'
                        style = {{
                            width:25,
                            height:25,
                            tintColor:focused ? '#e32f45' : '#748c94'
                        }}
                        />
                        <Text style = {{color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Chat</Text>
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