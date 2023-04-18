import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { COLORS, SIZES } from '../../constants';
import Swiper from 'react-native-swiper';
const windowWidth = Dimensions.get('window').width;
const Tour = ({ navigation }) => {
 
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.touch}>X</Text>
      </TouchableOpacity>
      <Swiper autoplay={true} loop={true}>
        <View style={styles.swiper}>
          <Text style={{ color: 'green', padding: 10 }}>
            {' '}
            <AntDesign name="checkcircleo" style={{ fontSize: 38 }} />{' '}
          </Text>
          <Text style={styles.primarytext}>Let's explore your new wallet!</Text>
          <Text style={styles.secondarytext}>
            No dirty old receipts & half filled coffee loylity cards in here...
          </Text>
          <Image
            style={styles.image}
            source={require('../../assets/pns.png')}
          />
        </View>

        <View style={styles.swiper}>
          <Image
            source={require('../../assets/local_Offer.png')}
            style={{
              width: 50,
              height: 50,
              alignSelf: 'flex-start',
              padding: 20,
            }}
          />
          <Text style={styles.primarytext}>Buy Crypto</Text>
          <Text style={styles.secondarytext}>
            Buy instantly via card to start getting the most out of your new
            wallet
          </Text>
          <Image
            style={styles.image}
            source={require('../../assets/pns.png')}
          />

          <Text style={styles.Btn}>Buy now</Text>
        </View>
        <View style={styles.swiper}>
          <Text
            style={{ color: '#f5c132', alignSelf: 'flex-start', padding: 10 }}
          >
            <Ionicons name="md-image-outline" style={{ fontSize: 38 }} />
          </Text>
          <Text style={styles.primarytext}>Deposit NFTs</Text>
          <Text style={styles.secondarytext}>
            Store all of your NFTs here - Solana,Ethereum,Polygon -we've ot the
            chains to back it up
          </Text>
          <Image
            style={styles.image}
            source={require('../../assets/nft.jpeg')}
          />

          <Text style={styles.Btn}>Deposit Now</Text>
        </View>
        <View style={styles.swiper}>
          <Text
            style={{
              color: '#f5c132',
              fontSize: 36,
              alignSelf: 'flex-start',
              padding: 10,
            }}
          >
            <AntDesign name="download" style={{ fontSize: 38 }} />
          </Text>

          <Text style={styles.primarytext}>Deposit crypto</Text>
          <Text style={styles.secondarytext}>
            Deposit your existing tokens from other wallets & exhanges all in
            one place
          </Text>
          <Image
            style={styles.image}
            source={require('../../assets/pns.png')}
          />
          {/* <Button title="Deposit now"/> */}
          <Text style={styles.Btn}>Deposit now</Text>
        </View>
      </Swiper>
    </View>
  );
};

export default Tour;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    padding: 5,
  },
  swiper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    
  },
  image: {
    marginTop: 40,
    width: windowWidth,
    height: 240,
    opacity: 0.5,
  },
  touch: {
    fontSize: 20,
    color: 'gray',
    padding:10,
    position: 'relative',
    marginTop: 10,
    marginLeft: 260,
    marginBottom: 20,
  },
  Btn: {
    marginTop: 100,
    padding: 7,
    textAlign: 'center',
    width: 200,
    height: 40,
    backgroundColor: COLORS.lightWhite,
    color: COLORS.secondary,
    borderRadius: 10,
  },
  primarytext: {
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  secondarytext: {
    fontSize: SIZES.medium,
    color: COLORS.secondary,
    lineHeight: 24,
    
  },
});
