import {observer} from 'mobx-react-lite';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,

} from 'react-native';
import {height, hp, RFValue, wp} from '../../helpers/responsive';
import {FONTS, images} from '../../constants';
import store from '../../store/store';


const Splash = observer(({navigation: {navigate}}) => {
  useEffect(() => {
    setTimeout(() => {
      if (store.userData.name) {
        navigate('Main');
      } else {
        navigate('SignIn');
      }
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
       <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'light-content'}
      />
     
      <Image
        source={images.anybuylogo}
        style={{zIndex: 1, height: hp(8), width: wp(25)}}
        resizeMode="contain"
      />
      <Image
        source={images.anybuytext}
        style={{zIndex: 1, height: hp(2.5), width: wp(40), marginTop: hp(1)}}
        resizeMode="contain"
      />

    </View>
  
 

  );
});

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#C31700',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,

  },
});

export default Splash;
