import {observer} from 'mobx-react-lite';
import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
  ScrollView,
  BackHandler,
  FlatList,
} from 'react-native';
import {height, hp, RFValue, wp} from '../helpers/responsive';
import {FONTS, images} from '../constants';

const KonsolCard = observer(({imagee, name, price}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: hp(22),
          width: wp(35),
          backgroundColor: '#EDEDED',
          alignItems: 'center',
          borderRadius: wp(4),
          marginTop: hp(2),
          elevation: 5,
        }}>
        <Image
          source={imagee}
          style={{
            zIndex: 1,
            height: hp(12),
            width: wp(25),
            marginTop: hp(1.3),
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: RFValue(12),
            color: 'black',
            textAlign: 'center',
            marginTop: hp(1),
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontSize: RFValue(15),
            color: '#FF9900',
            textAlign: 'center',
            marginTop: hp(0.6),
            fontFamily: FONTS.bold,
          }}>
          {price}
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
});

export default KonsolCard;
