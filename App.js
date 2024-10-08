import React from 'react';
import { NavigationContainer} from '@react-navigation/native';

import Tabs from './navigation/tabs';
import Search from './screens/componentes_noticias/search';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

//TELAS DO QRCODE
import Leitor from './screens/componentes_noticias/leitor';
import Animal from './screens/componentes_qrcode/animal';
import Mirante from './screens/componentes_qrcode/mirante';
import Cactaceas from './screens/componentes_qrcode/cactaceas';
import OlhoDagua from './screens/componentes_qrcode/olhoDagua';
import Video from './screens/componentes_qrcode/video';
import Quiz from './screens/componentes_quiz/Quiz';
import Facil from './screens/componentes_mapa/trilhaFacil';
import Media from './screens/componentes_mapa/trilhaMedia';
import Dificil from './screens/componentes_mapa/trilhaDificil';
import QrcodeODS from './screens/componentes_qrcode/QrcodeODS';
import QrcodePainel from './screens/componentes_qrcode/QrcodePainel';

const Stack = createNativeStackNavigator();

export default () => (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false, tabBarShowLabel:false}} >
                    <Stack.Screen name="Tabs" component={Tabs}/>
                    <Stack.Screen name="earch" component={Search}/>
                    <Stack.Screen name="Leitor" component={Leitor}/>
                    <Stack.Screen name="Animal" component={Animal}/>
                    <Stack.Screen name="Mirante" component={Mirante}/>
                    <Stack.Screen name="Cactaceas" component={Cactaceas}/>
                    <Stack.Screen name="OlhoDagua" component={OlhoDagua}/>
                    <Stack.Screen name="Video" component={Video}/>
                    <Stack.Screen name="Quiz" component={Quiz}/>
                    <Stack.Screen name="Facil" component={Facil}/>
                    <Stack.Screen name="Media" component={Media}/>
                    <Stack.Screen name="QrcodeODS" component={QrcodeODS}/>
                    <Stack.Screen name="QrcodePainel" component={QrcodePainel}/>
                    <Stack.Screen name="Dificil" component={Dificil}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
        );
