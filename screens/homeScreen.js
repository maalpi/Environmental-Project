import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>
            Trilhas Ambientais
          </Text>
          <Text style={styles.headerSubtitle}>Conheça mais sobre a caatinga</Text>
        </View>
        <View style={styles.logo}>
          <Image
            source={require('../assets/logo/logo.png')}
            style={styles.logoImage}
          />
        </View>
      </View>

      <View style={styles.trailHeader}>
        <Text style={styles.trailHeaderText}>Escolha sua trilha:</Text>
      </View>

      <TouchableOpacity style={height > 768  ? styles.trailCard : styles.trailCardSmall} onPress={() => navigation.navigate('Facil')}>
        <View style={styles.trailCardContent}>
          <Image
            source={{ uri: 'https://live.staticflickr.com/65535/53626516105_de36a3ea17_o.jpg' }}
            style={styles.trailCardImage}
            resizeMethod="resize"
          />
          <View style={styles.trailCardInfo}>
            <View style={{...styles.trailCardLabel, backgroundColor: '#2D821D'}}>
              <Text style={height > 768  ? styles.trailCardLabelText : styles.trailCardLabelTextSmall}>TRILHA FÁCIL</Text>
            </View>
            <View style={styles.trailCardBody}>
              <Text style={height > 768  ? styles.trailCardTitle : styles.trailCardTitleSmall}>Trilha do Mirante</Text>
              <View style={{...(height > 768  ? styles.trailCardBadge : styles.trailCardBadgeSmall),
                            backgroundColor: '#2D821D'}}>
                <Text style={styles.trailCardBadgeText}>3 PONTOS</Text>
              </View>
              <View style={height > 768  ? styles.trailCardDetails : styles.trailCardDetailsSmall}>
                <Image source={require('../assets/icons/passos.png')} style={height > 768  ? styles.trailCardIcon : styles.trailCardIconSmall} />
                <Text style={styles.trailCardDetailText}>450m</Text>
                <Image source={require('../assets/icons/relogio.png')} style={height > 768  ? styles.trailCardIcon : styles.trailCardIconSmall} />
                <Text style={styles.trailCardDetailText}>30min</Text>
              </View>
            </View>
            <View style={height > 768  ? styles.trailCardFooter : styles.trailCardFooterSmall}>
              <Text style={styles.trailCardFooterText}>Pontos de visita: Umburana e Mirante <Text style={{...styles.trailCardFooterLink, color: '#2D821D'}}>ver mais...</Text></Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={height > 768  ? styles.trailCard : styles.trailCardSmall} onPress={() => navigation.navigate('Facil')}>
        <View style={styles.trailCardContent}>
          <Image
            source={{ uri: 'https://live.staticflickr.com/65535/53626068181_6df82de05d_o.jpg' }}
            style={styles.trailCardImage}
            resizeMethod="resize"
          />
          <View style={styles.trailCardInfo}>
            <View style={{...styles.trailCardLabel, backgroundColor: '#3165B0'}}>
              <Text style={height > 768  ? styles.trailCardLabelText : styles.trailCardLabelTextSmall}>TRILHA MÉDIA</Text>
            </View>
            <View style={styles.trailCardBody}>
              <Text style={height > 768  ? styles.trailCardTitle : styles.trailCardTitleSmall}>Trilha do Olho d’Água</Text>
              <View style={{...(height > 768  ? styles.trailCardBadge : styles.trailCardBadgeSmall),
                            backgroundColor: '#3165B0'}}>
                <Text style={styles.trailCardBadgeText}>3 PONTOS</Text>
              </View>
              <View style={height > 768  ? styles.trailCardDetails : styles.trailCardDetailsSmall}>
                <Image source={require('../assets/icons/passos.png')} style={height > 768  ? styles.trailCardIcon : styles.trailCardIconSmall} />
                <Text style={styles.trailCardDetailText}>830m</Text>
                <Image source={require('../assets/icons/relogio.png')} style={height > 768  ? styles.trailCardIcon : styles.trailCardIconSmall} />
                <Text style={styles.trailCardDetailText}>60min</Text>
              </View>
            </View>
            <View style={height > 768  ? styles.trailCardFooter : styles.trailCardFooterSmall}>
              <Text style={styles.trailCardFooterText}>Pontos de visita: Umburana, Mirante e Olho D'agua <Text style={{...styles.trailCardFooterLink, color: '#3165B0'}}>ver mais...</Text></Text>

            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={height > 768  ? styles.trailCard : styles.trailCardSmall} onPress={() => navigation.navigate('Facil')}>
        <View style={styles.trailCardContent}>
          <Image
            source={{ uri: 'https://live.staticflickr.com/65535/53349610231_3bf6747101_o.jpg' }}
            style={styles.trailCardImage}
            resizeMethod="resize"
          />
          <View style={styles.trailCardInfo}>
            <View style={{...styles.trailCardLabel, backgroundColor: '#C76828'}}>
              <Text style={height > 768  ? styles.trailCardLabelText : styles.trailCardLabelTextSmall}>TRILHA DIFÍCIL</Text>
            </View>
            <View style={styles.trailCardBody}>
              <Text style={height > 768  ? styles.trailCardTitle : styles.trailCardTitleSmall}>Trilha do Marsupial</Text>
              <View style={{...(height > 768  ? styles.trailCardBadge : styles.trailCardBadgeSmall),
                            backgroundColor: '#C76828'}}>
                <Text style={styles.trailCardBadgeText}>9 PONTOS</Text>
              </View>
              <View style={height > 768  ? styles.trailCardDetails : styles.trailCardDetailsSmall}>
                <Image source={require('../assets/icons/passos.png')} style={height > 768  ? styles.trailCardIcon : styles.trailCardIconSmall} />
                <Text style={styles.trailCardDetailText}>1.3km</Text>
                <Image source={require('../assets/icons/relogio.png')} style={height > 768  ? styles.trailCardIcon : styles.trailCardIconSmall} />
                <Text style={styles.trailCardDetailText}>90min</Text>
              </View>
            </View>
            <View style={height > 768  ? styles.trailCardFooter : styles.trailCardFooterSmall}>
              <Text style={styles.trailCardFooterText}>Pontos de visita: Cactáceas, marsupial e Olho D'água <Text style={{...styles.trailCardFooterLink, color:'#C76828'}}>ver mais...</Text></Text>

            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{width:'100%', height:'10%'}}></View>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    maxHeight:'20%',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  headerText: {
    alignItems: 'center',
    paddingTop: '13%',
    paddingLeft: '1%',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3165b0',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#c76828',
    fontStyle: 'italic',
  },
  logo: {
    paddingLeft: '8%',
    paddingTop: '10%',
  },
  logoImage: {
    width: 80,
    height: 80,
    borderRadius: 25,
  },
  trailHeader: {
    marginTop: '1%',
    marginBottom: 10,
    paddingHorizontal:20,
  },
  trailHeaderText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  trailCard: { //large
    flex:1,
    maxHeight:'25%',
    marginBottom: 20,
    marginHorizontal: '5%',
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  trailCardSmall: { //small
    flex:1,
    maxHeight:'25%',
    marginBottom: 10,
    marginHorizontal: '5%',
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  trailCardContent: {
    width:'100%',
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  trailCardImage: {
    flex:1,
    width: '35%',
    height:'100%',
  },
  trailCardInfo: {
    width:'65%',
    height:'100%',
    paddingBottom: 1,
    flexDirection:'column',
  },
  trailCardLabel: {
    maxHeight:'22%',
    alignItems: 'center',
  },
  trailCardLabelText: {//large
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 5,
    fontSize: 18,
  },
  trailCardLabelTextSmall: {//small
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 5,
    fontSize: 14,
  },
  trailCardBody: {
    maxHeight:'48%',
    marginTop: '2%',
    marginLeft: '3%',
  },
  trailCardTitle: {//large
    fontWeight: 'bold',
    fontSize: 21.5,
  },
  trailCardTitleSmall: {//small
    fontWeight: 'bold',
    fontSize: 17,
  },
  trailCardBadge: {//large
    alignItems: 'center',
    borderRadius: 70,
    marginTop: '2%',
    width: '30%',
  },
  trailCardBadgeSmall: {//small
    alignItems: 'center',
    borderRadius: 70,
    width: '28%',
  },
  trailCardBadgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
  },
  trailCardDetails: { //large
    flexDirection: 'row',
    marginTop: '2%',
  },
  trailCardDetailsSmall: { //small
    flexDirection: 'row',
    marginTop: '1%',
  },
  trailCardIcon: {//large
    width: '7%',
    height: '100%',
    borderRadius: 25,
  },
  trailCardIconSmall: {//small
    width: '7%',
    height: '90%',
    borderRadius: 25,
  },
  trailCardDetailText: {
    fontSize: 13,
    paddingLeft: '3%',
    marginRight:10,
  },
  trailCardFooter: {//large
    marginLeft: '3%',
    marginTop: '2%',
    maxWidth:'95%',
    maxHeight:'30%',
  },
  trailCardFooterSmall: {//small
    marginLeft: '3%',
    maxWidth:'95%',
    margin:'-2%',
    maxHeight:'36%',
  },
  trailCardFooterText: {
    fontSize: 14,
  },
  trailCardFooterLink: {
    fontSize: 14.5,
    fontWeight: 'bold',
  },
});
