import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text>Main Wallet</Text>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
    container:{
       padding:30 
    }
})