import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES } from '../../constants';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { TextInput } from '@react-native-material/core';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const Screen2 = (props) => {
  const insets = useSafeAreaInsets();
  const { navigate } = props.navigation;
  const { id, name } = props.route.params.item;
  console.log(id, name);
  // alert('clicked', title)
  const [activeStatus, setActiveStatus] = useState('Not Active');
  return (
    <View style={{ margin: insets.top }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity onPress={() => navigate('Screen1')}>
          <Text>
            
            <MaterialCommunityIcons
              name="arrow-left"
              style={{ fontSize: 26 }}
      
            />
          </Text> 
       </TouchableOpacity>
        {/* <TouchableOpacity> */}
          {/* <Text> */}
            <MaterialCommunityIcons
              name="delete-outline"
              style={{ fontSize: 26 }}
            />
          {/* </Text>{' '} */}
        {/* </TouchableOpacity> */}
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}> {name}</Text>
        <TextInput
          style={{ marginTop: 30, borderColor: 'black', letterSpacing: 1 }}
          label="Name"
          variant="outlined"
          value={name}
        />
      </View>
      <View style={styles.backupBox}>
        <Text style={styles.backupText}>Secert phase backups</Text>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <Ionicons
            name="cloud-done-outline"
            style={{ fontSize: 28, marginTop: -1 }}
          />
          <View style={styles.backupContainer}>
            <Text style={{ fontSize: SIZES.large }}>Google Drive Backup</Text>
            <Text style={{ color: COLORS.tertiary }}>{activeStatus}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <MaterialIcons name="edit" style={{ fontSize: 26 }} />
          <View style={styles.backupContainer}>
            <Text style={{ fontSize: SIZES.large }}>Manual backup</Text>
            <Text style={{ color: COLORS.tertiary }}>{activeStatus}</Text>
          </View>
        </TouchableOpacity>
        <MaterialCommunityIcons
          name="alert-circle-outline"
          style={{ fontSize: 20 }}
        />
        <Text>
          We highly recommend completing both backup options to help prevent the
          lss of your crypto.
        </Text>
      </View>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  backupBox: {
    marginTop: 30,
  },
  backupText: {
    fontSize: SIZES.medium,
    padding: 5,
  },
  backupContainer: {
    flexDirection: 'column',
    padding: 5,
  },
});
