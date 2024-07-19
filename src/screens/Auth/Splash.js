import {observer} from 'mobx-react-lite';
<<<<<<< HEAD
import React, {useEffect, useRef, useState} from 'react';
=======
import React, {useEffect} from 'react';
>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c
import {
  Text,
  View,
  StyleSheet,
<<<<<<< HEAD
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
  ScrollView,
  BackHandler,
} from 'react-native';
import {height, hp, RFValue, wp} from '../../helpers/responsive';
import {FONTS, images} from '../../constants';
import store from '../../store/store';

const Splash = observer(({navigation: {navigate, goBack}}) => {
  useEffect(() => {
    setTimeout(() => {
      if (store.userData.email) {
        navigate('Main');
      } else {
        navigate('Welcome');
=======
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import images from '../../constants/images';
import {hp, RFValue, wp} from '../../helpers/responsive';
import store from '../../store/store';

const Splash = observer(({navigation: {navigate}}) => {
  useEffect(() => {
    setTimeout(() => {
      if (store.userData.name) {
        navigate('Main');
      } else {
        navigate('SignIn');
>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c
      }
    }, 1000);
  }, []);

  return (
<<<<<<< HEAD
    <View style={styles.container}>
=======
    <ImageBackground
      source={images.splashbg}
      resizeMode="cover"
      style={{height: hp(105), width: wp(100), justifyContent: 'center'}}>
>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'light-content'}
      />
      <Image
<<<<<<< HEAD
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
=======
        source={images.logotext}
        resizeMode="contain"
        style={{
          alignItems: 'center',
          width: wp(40),
          height: hp(12),
          alignSelf: 'center',
        }}
      />
    </ImageBackground>
>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c
  );
});

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    backgroundColor: '#C31700',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
=======
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c
  },
});

export default Splash;
