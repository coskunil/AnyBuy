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

const ProfileCard = observer(({imagee, profileText, arrowImage}) => {
  return (
    <View>
      <View
        style={{
          height: hp(6.7),
          width: wp(90),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: wp(2),
        }}>
        <Image
          source={imagee}
          style={{height: hp(2.7), width: wp(5.4), marginLeft: wp(3)}}
          resizeMode="contain"
        />
        <Text
          style={{
            color: 'black',
            width: wp(72),
            fontSize: RFValue(15),
            marginLeft: wp(2),
          }}>
          {profileText}
        </Text>
        <Image
          source={arrowImage}
          style={{height: hp(1.5), width: wp(3), marginRight: wp(3)}}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          height: hp(0.1),
          width: wp(87),
          backgroundColor: '#C1C0C9',
          alignSelf: 'center',
        }}></View>
    </View>
  );
});

const styles = StyleSheet.create({});

export default ProfileCard;
