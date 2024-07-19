import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {RFValue, hp, wp} from '../helpers/responsive';
import {images, FONTS, animations} from '../constants';

const SettingsCard = ({imagee, text, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: wp(85),
        height: hp(6),
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: hp(2),
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      onPress={onPress}>
      <Image
        resizeMode="contain"
        tintColor={'#FC9101'}
        source={imagee}
        style={{
          height: hp(2.5),
          width: wp(5),
          left: wp(3),
        }}
      />
      <Text
        style={{
          color: '#828590',
          fontSize: RFValue(14),
          position: 'absolute',
          left: wp(10),
        }}>
        {text}
      </Text>

      <Image
        source={images.rightback}
        resizeMode="contain"
        style={{
          height: hp(1.5),
          width: wp(3),
          right: wp(5),
        }}
      />
    </TouchableOpacity>
  );
};

export default SettingsCard;
