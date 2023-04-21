import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TokensAdded } from '../../helpers/TokensAdded';

const window = Dimensions.get('window');

const Tokens = ({navigation}) => {
  // const { navigate } = props.navigation;
  const insets = useSafeAreaInsets();
  const data = TokensAdded;

  return (
    <View style={[styles.container, { marginTop: insets.top, padding: 3 }]}>
      <ScrollView>
        {data.map((token, index) => (
          <View key={index} style={styles.list}>
            <View>
              <Text style={{ fontSize: 18 }}>
                {token.icon} - {token.tokenName}
              </Text>
              <Text style={{ fontSize: 12,color:'gray' }}>
                {token.price} {token.rate}
              </Text>
            </View>
            <View>
              <Text>{token.count}</Text>
            </View>
          </View>
        ))}

        <TouchableOpacity onPress={() => navigation.navigate('Search')}
          // onPress={() => navigate('Search')}
        >
          <Text style={{ padding: 2, fontSize: 18 }}>
            Add Tokens
            <AntDesign
              name="pluscircle"
              style={{ color: 'crimson', fontSize: 18 }}
            />
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Tokens;

const styles = StyleSheet.create({
  container: {
    width: window.width,
    height: '55%',
  },
  list: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
