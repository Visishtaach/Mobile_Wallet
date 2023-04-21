import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Search = () => {

    const insets = useSafeAreaInsets();
  return (
    <View style={{margin: insets.top}}>
      <Text style={{fontSize:20}}>List of cryptoCurrencies appear here</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})