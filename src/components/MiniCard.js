import {observer} from 'mobx-react-lite';
import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {FONTS, images} from '../constants';
import {hp, RFValue, wp} from '../helpers/responsive';

const MiniCard = observer(({userImage, userName, green}) => {
  return (
    <View style={{marginTop: hp(1.5)}}>
      <Image
        source={userImage}
        style={{height: hp(8), width: wp(15)}}
        resizeMode="contain"
      />
      <Image
        source={green}
        style={{
          height: hp(3.5),
          width: wp(3.5),
          position: 'absolute',
          marginTop: hp(5),
          marginLeft: wp(11),
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          color: 'black',
          fontFamily: FONTS.medium,
          fontSize: RFValue(12),
          width: wp(15),
          textAlign: 'center',
        }}>
        {userName}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default MiniCard;
