import { StyleSheet, View, Animated, useWindowDimensions } from 'react-native';
import React from 'react';

export default function Paginator({ data, scrollX }) {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.paginator}>
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 30, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View 
            style={[styles.dot, { width: dotWidth,opacity }]}
            key={index.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  paginator: {
    flexDirection: 'row',
    justifyContent:'center',
    height: 64,
  },
  dot: {
    height: 12,

    borderRadius: 5,
    backgroundColor: 'skyblue',
    marginHorizontal: 6,
  },
});
