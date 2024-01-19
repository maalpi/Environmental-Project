import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

import {ArrowLeftIcon, ArrowRightIcon} from 'react-native-heroicons/solid';

const {width, height} = Dimensions.get('window');

const QrcodeScreen = ({navigation}) => {
  const qrcodeRef = useRef(null);

  const [scanned, setScanned] = useState(false);
  const [barcodeData, setBarcodeData] = useState('');

  const navigateToAnimalScreen = () => {
    // Navegar para a tela "Animal"
    if (scanned === true) {
      navigation.navigate(barcodeData);
    }

    qrcodeRef.current.reactivate();
  };

  return (
    <LinearGradient
      colors={['#1FAA70', '#00A2DB']}
      style={{
        flex: 1,
        opacity: 0.62,
      }}>
      <View style={styles.container}>
        <Image
          source={require('./assets/icons/x_branco.png')}
          style={styles.icon}
        />
        <Image
          source={require('./assets/logo/logo_branca.png')}
          style={styles.image}
        />
        <View style={styles.barcodebox}>
          <QRCodeScanner
            ref={qrcodeRef}
            onRead={({data}) => {
              setScanned(true);
              setBarcodeData(data);
              navigateToAnimalScreen();
            }}
            flashMode={RNCamera.Constants.FlashMode.off}
          />
        </View>
        <Text style={styles.text}>CENTRALIZE O QR CODE NA CAIXA ACIMA</Text>
      </View>
    </LinearGradient>
  );
};

export default QrcodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  barcodebox: {
    position: 'absolute',
    top: 287,
    height: 260,
    width: 260,
    overflow: 'hidden',
    borderColor: '#FFAB00',
    borderStyle: 'solid',
    borderRadius: 29,
    borderWidth: 2,
    opacity: 1,
  },
  icon: {
    position: 'absolute',
    top: 28,
    left: 30,
    width: 24,
    height: 24,
    opacity: 1,
  },
  text: {
    top: 571,
    fontSize: 14,
    maxWidth: 156,
    textAlign: 'center',
  },
  image: {
    position: 'absolute',
    top: 110,
    width: 114,
    height: 114,
  },
});
