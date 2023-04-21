import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { COLORS, SIZES } from '../../constants';
import React from 'react';
import { WalletAccounts } from '../../helpers/WalletAccounts';

// const {width, height} = Dimensions.get('window');
const Screen1 = ({ navigation }) => {
  const data = WalletAccounts;
  const insets = useSafeAreaInsets();

  const Item = ( item ) => {
    // const item = title
    console.log(item);
  
    return (
      <View style={styles.item}>
      <View style={{flexDirection:'row', gap:5}}>
        <View style={{width:40,height:40, borderWidth:1,borderColor:COLORS.gray3,borderRadius:30,justifyContent:'center',alignItems: 'center'}}>
          <Image source={item.image} style={{width:30,height:30,top:2,}}/>
        </View>
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={{color:COLORS.gray2}}>Multi coin wallet</Text>
        </View>
        </View>
        <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Screen2',{item})}>
          <MaterialCommunityIcons name="dots-vertical" style={{fontSize:SIZES.large}}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={[styles.container, { margin: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.headerTitle}>
            <Feather name="arrow-left" style={styles.icon} />
            Wallets
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>
            <Feather name="plus" style={styles.icon} />
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <Text style={styles.text}>Multi Coin Wallets</Text>
        </View>
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return(Item(item))
            }
            
            
              // <Item title={item.name} icon={item.image} />
            }
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    // padding:2,
  },
  header: {
    height: 50,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    fontSize: SIZES.xLarge,
  },
  headerTitle: {
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  text: {
    color: COLORS.gray3,
    fontSize: 14,
  },
  item: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding:2,
    margin:3
  },
  title:{
    color: COLORS.secondary,
    fontSize: SIZES.large,
  }
});
