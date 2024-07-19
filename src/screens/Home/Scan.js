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
import {height, hp, RFValue, wp} from '../../helpers/responsive';
import {COLORS, FONTS, images} from '../../constants';

const Scan = observer(({navigation: {navigate, goBack}}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />
      <Image
        source={images.scan}
        style={{width: wp(100), height: hp(105), position: 'absolute'}}
      />
      <View style={styles.oneView}>
        <TouchableOpacity style={styles.threeTouchable}>
          <Image source={images.nokta} style={styles.noktaIcon} />
        </TouchableOpacity>

        <View
          style={{flexDirection: 'row', alignItems: 'center', gap: wp(-14.7)}}>
          <TouchableOpacity style={styles.arTouchable}>
            <Text style={styles.arText}>AR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.objectTouchable}>
            <Text style={styles.objectText}>Object</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={images.yellowscan}
        style={styles.yellowscan}
        resizeMode="contain"
      />
      <View style={styles.shopView}>
        <TouchableOpacity
          onPress={() => goBack()}
          style={styles.yellowTouchable}>
          <Image
            source={images.yellowback}
            style={styles.yellowback}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Image
          source={images.shop}
          style={styles.shopIcon}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.cameraTouchable}>
          <Image
            source={images.whitecamera}
            style={styles.whitecameraIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: StatusBar.currentHeight * 2,
  },
  oneView: {
    flexDirection: 'row',
    width: wp(90),
    justifyContent: 'space-between',
  },
  threeTouchable: {
    height: hp(5),
    width: wp(10),
    backgroundColor: '#464540',
    justifyContent: 'center',
    borderRadius: wp(100),
  },
  noktaIcon: {
    width: wp(5),
    height: hp(2),
    alignSelf: 'center',
  },
  arTouchable: {
    height: hp(4.5),
    width: wp(14),
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    borderRadius: wp(3),
    zIndex: 1,
  },
  arText: {
    color: '#0A84FF',
    textAlign: 'center',
    fontFamily: FONTS.bold,
    fontSize: RFValue(11),
  },
  objectTouchable: {
    width: wp(34),
    height: hp(5),
    backgroundColor: '#464540',
    justifyContent: 'center',
    borderRadius: wp(3),
  },
  objectText: {
    color: 'white',
    textAlign: 'center',
    fontSize: RFValue(13),
    paddingLeft: wp(14),
  },
  yellowscan: {
    width: wp(90),
    height: hp(59),
    marginTop: hp(11),
  },
  shopView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(90),
    justifyContent: 'space-between',
    marginTop: hp(8),
  },
  yellowTouchable: {
    backgroundColor: 'trasnparent',
    height: hp(7.5),
    width: wp(15),
    justifyContent: 'center',
    borderRadius: wp(100),
    borderWidth: wp(1),
    borderColor: '#FF9701',
    marginTop: hp(4),
  },
  yellowback: {
    height: hp(4),
    width: wp(8),
    alignSelf: 'center',
  },
  shopIcon: {
    height: hp(10),
    width: wp(20),
  },
  cameraTouchable: {
    backgroundColor: 'white',
    height: hp(7.5),
    width: wp(15),
    justifyContent: 'center',
    borderRadius: wp(100),
    marginTop: hp(3),
  },
  whitecameraIcon: {
    height: hp(5),
    width: wp(10),
    alignSelf: 'center',
  },
});

export default Scan;
