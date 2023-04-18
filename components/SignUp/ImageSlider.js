import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import { COLORS, SIZES, FONT } from '../../constants';

export default function ImageSlider({ item }) {
  console.log(item);
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <View style={{ flex: 0.3, alignItems:'center',justifyContent:'center' }}>
        <Text style={{ color: COLORS.gray, fontSize: SIZES.xLarge }}>
          {item.title}
        </Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Image
        source={item.imageUrl}
        style={[styles.image, { width, resizeMode: 'contain' }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  image: {
    // flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    width:50,
    height:60,
    
  },
  description: {
    fontWeight: '300',
    color: '#36454F',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});
