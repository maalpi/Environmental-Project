import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import LinearGradient from 'react-native-linear-gradient';
import {ArrowLeftIcon,XCircleIcon} from 'react-native-heroicons/solid';

function Mirante({navigation}) {
  return (
    <LinearGradient
      colors={['#1FAA70', '#00A2DB']}
      opacity={0.7}
      style={styles.container}>
      <View style={{alignItems:'left',marginTop: '7.5%'}}>
      <View >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <XCircleIcon color="#FFF" size={42} />
        </TouchableOpacity>
      </View>
      
      </View>
      <View style={styles.subContainer}>
      <Text style={styles.title}>Mirante</Text>
        <View style={styles.videoContainer}>
          <YoutubePlayer
            width={'100%'}
            height={'100%'}
            play={false}
            videoId={'wSyXp-ahnXQ'}
          />
        </View>
      </View>

      <ScrollView style={styles.descriptionContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.titleContainer}>Mirante</Text>
        </View>
        <View
          style={{
            backgroundColor: '#2D821D',
            color: '#fff',
            width: '34%',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 5,
            padding: '0.5%',
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 14}}>
            {' '}
            Ponto Turístico
          </Text>
        </View>

        <View style={{marginTop: '3%'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#000'}}>
            Descrição:
          </Text>
          <Text style={styles.description}>
            Para chegar até o mirante é necessário percorrer aproximadamente
            450m desde o início da trilha. O mirante está a uma altitude de 637
            m. De lá é possível observar a vegetação exuberante, composta por
            Juremas, catingueiras, além dos planaltos e serras, dentre elas a
            Serra do Pedro e a Serra do Giz. Geologicamente, o mirante está
            localizado na formação Serra dos Martins, que é composta por
            arenitos médios a conglomeráticos, quartzarenitos, arenitos
            argilosos, crosta laterítica com seixos de quartzo e caulim. Vem
            conferir essa linda paisagem!
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  subContainer: {alignItems: 'center', marginTop: '3%'},
  titleContainer: {fontWeight: 'bold', fontSize: 28, color: '#000'},
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    
  },
  videoContainer: {
    width: '100%',
    aspectRatio: 16 / 9, // Aspect ratio 16:9 para o player de vídeo
    marginBottom: 15,
  },
  descriptionContainer: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    borderRadius: 10,
    overflow: 'hidden',
    padding: '5%',
  },
  description: {
    lineHeight: 20,
    marginTop: '2%',
    color: '#000',
    fontSize: 16,
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Mirante;
