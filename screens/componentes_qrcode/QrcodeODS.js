import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {XCircleIcon} from 'react-native-heroicons/solid';
import Carousel from 'react-native-snap-carousel';

const images = [
  require('../../assets/imagens/VivendoODS3.jpg'),
  require('../../assets/imagens/VivendoODS1.jpg'),
  require('../../assets/imagens/VivendoODS2.jpg'),
];

const QrcodeODS = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const renderItem = ({item: image, index}) => {
    return (
      <TouchableOpacity onPress={() => handleImagePress(image)}>
        <Image style={styles.image} source={image} />
      </TouchableOpacity>
    );
  };

  const handleImagePress = image => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <LinearGradient
      colors={['#1FAA70', '#00A2DB']}
      opacity={0.7}
      style={styles.container}>
      <View style={{marginTop: '7.5%', marginLeft: '5%'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <XCircleIcon color="#FFF" size={42} />
        </TouchableOpacity>
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.title}>Vivendo os ODS</Text>
        <View style={styles.slide}>
          <Carousel
            style={styles.slide}
            layout="default"
            data={images}
            renderItem={renderItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={350}
          />
        </View>
      </View>

      <ScrollView style={styles.descriptionContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.titleContainer}>Vivendo os ODS</Text>
        </View>
        <View
          style={{
            backgroundColor: '#2D821D',
            color: '#fff',
            width: '14%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderRadius: 5,
            padding: '0.5%',
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 14}}>
            {' '}
            Jogo
          </Text>
        </View>

        <View style={{marginTop: '3%'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#000'}}>
            Descrição:
          </Text>
          <Text style={styles.description}>
            O jogo “Vivendo os ODS” é um instrumento lúdico que tem por objetivo
            apresentar os 17 Objetivos de Desenvolvimento Sustentável que
            pretendem erradicar a pobreza, proteger o Planeta e assegurar
            prosperidade a todos, até 2030. Para conhecer os ODS basta seguir o
            jogo e observar com atenção todo o percurso. Aproveite também para
            registrar esse momento explorando as artes 3D que estão no caminho.
            A arte em grafite é de autoria do paraibano Ulisses Cavalcante, mais
            conhecido por @wilisgrafittioficial.
          </Text>
        </View>
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <Image style={styles.modalImage} source={selectedImage} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  subContainer: {
    alignItems: 'center',
    marginTop: '0%',
  },
  titleContainer: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#000',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  slide: {
    width: '100%',
    height: 200,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
    height:'105%',
    color: '#000',
    fontSize: 16,
    textAlign: 'justify',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  modalImage: {
    width: Dimensions.get('window').height * 0.9,
    height: Dimensions.get('window').width * 0.9,
    resizeMode: 'contain',
    transform: [{rotate: '270deg'}],
  },
});

export default QrcodeODS;
