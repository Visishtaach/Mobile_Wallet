import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Main = () => {
  return (
    <ScrollView>
    <View style={{flexDirection:'row', justifyContent: 'space-around', alignItems: 'center'}}>
    <View  >
      <TouchableOpacity>
        <Text style={{color:'#007FFF',  }}>
        <Ionicons name="arrow-up-circle-sharp" style={{ fontSize: 38 }} />
        </Text>
        <Text>Send</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Text style={{color:'#007FFF',  }}>
        <Ionicons name="arrow-down-circle-sharp" style={{ fontSize: 38 }} />
        </Text>
        <Text>Receive</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Text style={{color:'#007FFF',  }}>
        <AntDesign name="codepen-circle" style={{ fontSize: 36 }} />
        </Text>
        <Text>Buy</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Text style={{color:'#007FFF',  }}>
        <MaterialIcons name="swap-horizontal-circle" style={{ fontSize: 38 }} />
        </Text>
        <Text>Swap</Text>
      </TouchableOpacity>
    </View>

  </View>
  </ScrollView>
  )
}

export default Main

const styles = StyleSheet.create({})