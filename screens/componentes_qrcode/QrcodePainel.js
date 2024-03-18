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

const singleImage =
  'https://live.staticflickr.com/65535/53472693814_b40a718a6c_o.jpg';

const QrcodePainel = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = () => {
    setSelectedImage(singleImage);
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
        <Text style={styles.title}>Olho D’Água das Onças</Text>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={handleImagePress}>
          <Image
            style={styles.image}
            source={{
              uri: singleImage,
            }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.descriptionContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.titleContainer}>
            A Biodiversidade da Caatinga
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#2D821D',
            color: '#fff',
            width: '18%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderRadius: 5,
            padding: '0.5%',
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 14}}>
            {' '}
            Painel
          </Text>
        </View>

        <View style={{marginTop: '3%'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#000'}}>
            Descrição:
          </Text>
          <Text style={styles.description}>
            O painel “A Biodiversidade da Caatinga” tem como objetivo destacar a
            beleza e a biodiversidade da região. Utiliza a arte em grafite como
            instrumento de sensibilização para despertar na população o
            interesse em valorizar e preservar os recursos naturais da Caatinga.
            O painel é de autoria do paraibano Ulisses Cavalcante, mais
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
            <Image style={styles.modalImage} source={{uri: selectedImage}} />
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
    marginTop: '4%',
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
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.67,
    marginBottom: 15,
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
    height: '100%',
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

export default QrcodePainel;
