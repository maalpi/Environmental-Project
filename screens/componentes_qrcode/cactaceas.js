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

function Cactaceas({navigation}) {
  return (
    <LinearGradient
      colors={['#1FAA70', '#00A2DB']}
      opacity={0.7}
      style={styles.container}>
      <View style={{alignItems:'left', marginTop: '7.5%'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <XCircleIcon color="#FFF" size={42} />
        </TouchableOpacity>
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.title}>Portal das Cactáceas</Text>

        <View style={styles.videoContainer}>
          <YoutubePlayer
            width={'100%'}
            height={'100%'}
            play={false}
            videoId={'wv4JkbGOa-A'}
          />
        </View>
      </View>

      <ScrollView style={styles.descriptionContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.titleContainer}>Portal das Cactáceas</Text>
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
            Compreende a área com maior concentração de cactáceas, ou cactos,
            como são popularmente conhecidas. Estas plantas são frequentemente
            utilizadas na ornamentação, mas algumas espécies são utilizadas na
            culinária e medicina popular. A Melocactus zehntneri, popularmente
            conhecida como Coroa-de-frade é a mais abundante dessa área,
            compondo o habitat para várias espécies de lagartos e serpentes,
            como o Calango de lagedo Tropidurus semitaeniatus, Calango listrado
            Ameivula ocellifera e Teiú Salvator merianae.
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
    marginBottom: 3,
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

export default Cactaceas;
