import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {hp, RFValue, wp} from '../helpers/responsive';
import {FONTS, images} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import {observer} from 'mobx-react-lite';

const UserCard = observer(
  ({userImage, userName, userGender, userAge, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          gap: wp(3),
          alignSelf: 'center',
          width: wp(47),
          marginLeft: hp(1),
        }}>
        <Image
          resizeMode="contain"
          source={userImage}
          style={{height: hp(31), width: wp(47), marginTop: hp(0.5)}}
        />
        <Text
          style={{
            color: 'white',
            position: 'absolute',
            marginTop: hp(28),
            marginLeft: wp(3),
            fontFamily: FONTS.bold,
            fontSize: RFValue(12),
          }}>
          {userName}
        </Text>
        <TouchableOpacity
          style={{
            height: hp(2),
            width: wp(9),
            left: wp(19),
            borderRadius: wp(2),
            position: 'absolute',
            marginTop: hp(28),
            marginLeft: wp(17),
            flexDirection: 'row',
          }}>
          <LinearGradient
            colors={['#FF8960', '#FF62A5']}
            style={{
              ...StyleSheet.absoluteFillObject,
              borderRadius: wp(2),
            }}
          />
          <Image
            source={userGender}
            style={{
              height: hp(1.3),
              width: wp(3),
              marginLeft: wp(1),
              marginTop: hp(0.4),
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              color: 'white',
              fontFamily: FONTS.bold,
              fontSize: RFValue(11),
              marginTop: hp(0.2),
            }}>
            {userAge}
          </Text>
        </TouchableOpacity>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default UserCard;
