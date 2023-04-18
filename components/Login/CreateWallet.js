import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TextField,
} from 'react-native';
import React, { useState } from 'react';
import VirtualKeyboard from 'react-native-virtual-keyboard';
export default function CreateWallet({ navigation }) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [cpswd, setCpswd] = useState('');

  const [text, setText] = useState('');

  const changeText = (newText) => {
    setText(newText);

    if (text.length === 6) {
      console.log('change', text);
      navigation.navigate('Tour');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[{ fontSize: 24 }]}>Create Password</Text>
      {/* {otp.map((val,index)=>{
      <Text>{val}</Text>
    })}
     */}
      <TextInput maxLength={6} style={styles.text}>
        {text}
      </TextInput>

      <VirtualKeyboard
        color="black"
        pressMode="string"
        onPress={(val) => changeText(val)}
        clearOnLongPress={true}
      />

      <View style={styles.Btn}>
        <Button
          title="create password"
          onPress={() => navigation.navigate('Tour')}
        />
      </View>
      <Text style={styles.text2}>
        Password adds an extra layer of security when using the app
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    width: 60,
  },
  text2: {
    // width:250,
    fontSize: 11,
    marginTop: 20,
    padding: 10,
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Btn: {
    marginTop: 30,
  },
});
