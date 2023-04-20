import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES } from '../../constants';
import Header from './Header';
import Ionicons from '@expo/vector-icons/Ionicons';
import Main from './Main';
import { TokensAdded } from '../../helpers/TokensAdded';
import Tokens from './Tokens';
import NftSection from './NftSection';

const Home = ({ navigation }) => {
  const [walletAmount, setWalletAmount] = useState(0);
  const [status, setStatus] = useState('Tokens');
  console.log(TokensAdded);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.wallet}>
        <Text
          style={styles.walletText}
          onPress={() => navigation.navigate('Screen1')}
        >
          ${walletAmount}.00
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Screen1')}>
          <Text style={{ color: COLORS.secondary }}>
            Main Wallet
            <Ionicons name="md-caret-down-sharp" style={{ fontSize: 18 }} />
          </Text>
        </TouchableOpacity>
      </View>
      <Main />

      <View style={styles.listTab}>
        <View
          style={[styles.btnTab, status === 'Tokens' && styles.activeBtnTab]}
        >
          <TouchableOpacity
            onPress={() => {
              setStatus('Tokens');
            }}
          >
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.medium,
                textAlign: 'center',
              }}
            >
              Tokens
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.btnTab, status === 'NFT' && styles.activeBtnTab]}>
          <TouchableOpacity
            onPress={() => {
              setStatus('NFT');
            }}
          >
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.medium,
                textAlign: 'center',
              }}
            >
              NFT
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {status === 'Tokens' ? <Tokens /> : <NftSection />}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 1,
  },
  wallet: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  walletText: {
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  listTab: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 5,
  },
  btnTab: {
    width: Dimensions.get('window').width / 3.5,

    padding: 2,
  },
  activeBtnTab: {
    borderBottomColor: '#b8860b',
    borderBottomWidth: 4,
    // backgroundColor:'pink'
  },
  tokenlist: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
});
