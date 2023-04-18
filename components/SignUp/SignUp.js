import React, { useState, useRef } from 'react';
import { slides } from '../../constants/slides';

import {
  Text,
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Button,
} from 'react-native';

import ImageSlider from './ImageSlider';
import Paginator from './Paginator';
const SignUp = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems.index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <ImageSlider item={item} />}
          horizontal
          showsHorizontalScrollIndicator
          keyExtractor={(item) => item.id}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
      </SafeAreaView>
      <Paginator data={slides} scrollX={scrollX} />
      <View
        style={[
          {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}
      >
        <Button
          title="Create A New Wallet"
          onPress={() => navigation.navigate('CreateWallet')}
        />

        <TouchableOpacity style={styles.TxtBtn}>
          <Text>I already have an wallet</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 10,
  },
  BtnText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Roboto',
    letterSpacing: 1,
    textTransform: 'capitalize',
  },
  Btn: {
    backgroundColor: '#6CB4EE',

    borderRadius: 10,
    // paddingVertical: 13,
    // paddingHorizontal: 22,
    // elevation: 8,
  },
  TxtBtn: {
    marginBottom: 50,
    marginTop: 3,
  },
});
