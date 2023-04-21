import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import { COLORS } from '../../constants';
  
  const NftSection = () => {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/Main.jpg')} style={styles.image} />
        <Text style={{ color: '#6CB4EE', fontSize: 20, padding: 4 }}>
          Collectibles will appear here
        </Text>
        <TouchableOpacity style={styles.btn}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              paddingTop: 8,
              fontSize: 14,
            }}
          >
            Receive
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ color: '#6CB4EE', padding: 6 }}
          onPress={() => {}}
        >
          <Text style={{ color: COLORS.gray3,marginTop:15 }}>Open on OpenSea.io</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default NftSection;
  
  const styles = StyleSheet.create({
    container: {
      width: window.width,
      height: '55%',
      // backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      opacity: 0.6,
    },
    btn: {
      width: 100,
      height: 40,
  
      borderRadius: 50,
      backgroundColor: '#899499',
    },
  });
  
  /*  #899499 --- Pewter */
  