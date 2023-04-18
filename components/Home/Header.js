
import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.icon}>
            <MaterialIcons name="notifications-none" style={{fontSize:28}}/>
          </Text>
          <Text style={styles.icon}>
            <MaterialIcons name="menu" style={{fontSize:28}}/>
          </Text>
        </View>
    </SafeAreaView>
  )
}

export default Header


const styles = StyleSheet.create({
    container:{
      padding:30,
    //   flex:1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop:10
    },
    icon:{
    
    }
  })