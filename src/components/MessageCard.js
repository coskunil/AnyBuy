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

const MessageCard = observer(({userImage, userName, message, hour}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: hp(2),
          flexDirection: 'row',
          width: wp(90),
          alignSelf: 'center',
        }}>
        <Image
          source={userImage}
          style={{height: hp(8), width: wp(15)}}
          resizeMode="contain"
        />
        <View style={{marginLeft: wp(4)}}>
          <Text
            style={{
              color: 'black',
              fontFamily: FONTS.bold,
              fontSize: RFValue(15),
              width: wp(50),
              marginTop: hp(1),
            }}>
            {userName}
          </Text>
          <Text
            style={{
              color: '#C1C0C9',
              fontFamily: FONTS.medium,
              fontSize: RFValue(12.5),
              width: wp(60),
              marginTop: hp(0.5),
            }}>
            {message}
          </Text>
        </View>
        <Text
          style={{
            color: '#C1C0C9',
            fontFamily: FONTS.medium,
            fontSize: RFValue(11),
            width: wp(60),
            marginTop: hp(1.5),
            marginLeft: wp(1),
          }}>
          {hour}
        </Text>
      </View>
      <View
        style={{
          height: hp(0.1),
          width: wp(90),
          backgroundColor: '#C1C0C9',
          marginTop: hp(0.5),
          marginLeft: wp(24),
        }}></View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MessageCard;
