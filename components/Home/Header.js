
import React from 'react'
import { StyleSheet, Text, SafeAreaView, View,TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const Header = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.icon}>
            <MaterialIcons name="notifications-none" style={{fontSize:28}}/>
          </Text>
          <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Search')} >
          <Text>
            <MaterialIcons name="menu" style={{fontSize:28}}/>
            </Text>
          </TouchableOpacity>
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