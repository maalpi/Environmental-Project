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
import {XCircleIcon} from 'react-native-heroicons/solid';

function OlhoDagua({navigation}) {
  return (
    <LinearGradient
      colors={['#1FAA70', '#00A2DB']}
      opacity={0.7}
      style={styles.container}>
      <View style={{marginTop: '7.5%'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <XCircleIcon color="#FFF" size={42} />
        </TouchableOpacity>
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.title}>Olho D’Água das Onças</Text>

        <View style={styles.videoContainer}>
          <YoutubePlayer
            width={'100%'}
            height={'100%'}
            play={false}
            videoId={'WwvVPUldv8A'}
          />
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.titleContainer}>Olho D’Água</Text>
        </View>
        <View
          style={{
            backgroundColor: '#2D821D',
            color: '#fff',
            width: '35%',
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
            Em tempos remotos as onças Suçuarana Puma concolor habitavam essa
            região. Há relatos que durante as suas caçadas, ao sentirem sede, as
            onças vinham beber água na nascente,{' '}
            <Text style={styles.bold}>Olho d'água</Text>. Está nascente está a
            uma distância de 830 metros do início da trilha.
          </Text>
        </View>
      </View>
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
    marginBottom: 30,
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

export default OlhoDagua;
