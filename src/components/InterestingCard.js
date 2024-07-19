import {observer} from 'mobx-react-lite';
import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {FONTS, images} from '../constants';
import {hp, RFValue, wp} from '../helpers/responsive';

const InterestingCard = observer(({interesting}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#4A4A4A',
          fontSize: RFValue(16),
          fontFamily: FONTS.medium,
          alignSelf: 'center',
          marginTop: hp(1),
          textAlign: 'center',
          borderRadius: wp(2),
          borderWidth: wp(0.3),
          height: hp(4.8),
          paddingTop: hp(0.8),
          paddingLeft: wp(2.5),
          paddingRight: wp(2.5),
          borderColor: '#DAD9E2',
          marginLeft: wp(5),
        }}>
        {interesting}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
});

export default InterestingCard;
