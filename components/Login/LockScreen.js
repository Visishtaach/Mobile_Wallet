import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Button
  } from 'react-native';
  import React, { useState } from 'react';
  import Ionicons from '@expo/vector-icons/Ionicons';
  import { COLORS, SIZES } from '../../constants';
  import { useSafeAreaInsets } from 'react-native-safe-area-context';
  const LockScreen = ({navigation}) => {
    const insets = useSafeAreaInsets();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
  
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  
    const numClickHandler = (num) => {
      let tempCode = [...otp];
      for (var i = 0;i<tempCode.length;i++) {
        if (tempCode[i] == '') {
          tempCode[i] = num;
          break;
        } else {
          continue;
        }
      }
      console.log('num clicked')
      setOtp(tempCode);
    };
  
    const cancelHandler = () => {
      let tempCode = [...otp];
      for (var i =  tempCode.length-1; i>=0;i--) {
        if (tempCode[i] != '') {
          tempCode[i] = '';
          break;
        } else {
          continue;
        }
      }
      console.log('cancel clicked')
      setOtp(tempCode);
    };
  
    const fingerPrintCaptureHandlers = () =>{
      alert('currently unavailable')
    }
    return (
      <SafeAreaView style={[styles.container, { margin: insets.top }]}>
        <View style={[styles.lockScreen]}>
          <Text style={{ fontSize: SIZES.xxLarge }}>Enter Password</Text>
        </View>
        <View style={[styles.passwordText]}>
          {otp.map((p, index) => {
            let style = p != '' ? styles.enteredPin : styles.pin;
            return <View style={style} key={index}></View>;
          })}
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.numPad}>
            {numbers.map((num, idx) => {
              return (
                <TouchableOpacity style={styles.number} key={idx} onPress={()=>numClickHandler(num)}>
                  <Text style={styles.text}>{num}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity>
              <Text style={[styles.btnText,{left:10.5, textAlign:'center'}]} onPress={()=>{fingerPrintCaptureHandlers()}}>
                <Ionicons
                  name="finger-print-outline"
                  style={{ fontSize: SIZES.xxLarge,  }}
                />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>cancelHandler()}>
              <Text style={[styles.btnText,{left:-11,textAlign:'center'}]}>X</Text>
            </TouchableOpacity>
          </View>
        <View style={{flexDirection:'column',justifyContent: 'center', alignItems: 'center'}}>
           <TouchableOpacity style={styles.Btn} onPress={()=>navigation.navigate("Tour")} >
           <Text style={{textAlign:'center', padding:8, color:'white', fontSize:SIZES.large, textTransform:'capitalize'}}>create password</Text>
   
    
        </TouchableOpacity>
    
     </View>
     <Text style={styles.text2}>Password adds an extra layer of security when using the app</Text>
      </SafeAreaView>
    );
  };
  
  export default LockScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    lockScreen: {
      marginTop: 55,
      justifyContent: 'center',
      alignItems: 'center',
    },
    passwordText: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
    },
    pin: {
      width: 18,
      height: 18,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: COLORS.gray,
      margin:8,
    },
    enteredPin: {
      width: 18,
      height: 18,
      borderRadius: 18, 
      margin: 8,
      backgroundColor: COLORS.gray3,
    },
    numPad: {
      marginTop: 70,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      
    },
  
    number: {
      width: 85,
      height: 55,
      margin: 4,
      borderRadius: 10,
      backgroundColor: 'rgba(255,255,255,0.3)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: SIZES.xLarge,
      textAlign: 'center',
      color: COLORS.gray,
    },
    buttons: {
      
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    btnText: {
      fontSize: SIZES.xLarge,
      width: 85,
      height: 55,
      margin: 2,
      borderRadius: 10,
      backgroundColor: 'rgba(255,255,255,0.3)',
      position:'relative',
      top:-60,
      color:COLORS.gray2,
      padding:8
    },
    Btn:{
      width:200,
      height:45,
      borderRadius:10,
      backgroundColor:'#6CB4EE',
      marginTop: 30,
      textAlign:'center'  ,
      marginBottom:10,
    },
    text2:{
        fontSize:SIZES.xSmall,
        textAlign:'center'
    }
  });
  