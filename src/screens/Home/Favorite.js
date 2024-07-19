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
import {FONTS, images} from '../../constants';

const Favorite = observer(({navigation: {navigate, goBack}}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />
      <View style={styles.oneView}>
        <TouchableOpacity style={styles.backTouchable}>
          <Image
            source={images.back}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.favorit}>Favorit</Text>
      </View>
      <Image
        source={images.anybuylogo}
        style={styles.anybuylogo}
        resizeMode="contain"
      />
      <Text style={styles.kamu}>Kamu belum nambahin apapun nih..</Text>
      <Text style={styles.cari}>cari barang kesukaanmu yuk!</Text>
      <TouchableOpacity>
        <Text style={styles.order}>Order</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight * 2,
  },
  oneView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backTouchable: {
    height: hp(5.5),
    width: wp(11),
    borderWidth: wp(0.1),
    justifyContent: 'center',
    borderRadius: wp(100),
    marginLeft: wp(4),
  },
  backIcon: {
    zIndex: 1,
    height: hp(2.2),
    width: wp(4.4),
    alignSelf: 'center',
  },
  favorit: {
    color: 'black',
    fontFamily: FONTS.bold,
    fontSize: RFValue(16),
    marginLeft: wp(27),
  },
  anybuylogo: {
    zIndex: 1,
    height: hp(25),
    width: wp(75),
    alignSelf: 'center',
    marginTop: hp(8.5),
  },
  kamu: {
    color: 'black',
    fontFamily: FONTS.bold,
    fontSize: RFValue(22),
    textAlign: 'center',
    width: wp(80),
    alignSelf: 'center',
    marginTop: hp(2.5),
  },

  cari: {
    color: '#6E6E6E',
    fontFamily: FONTS.medium,
    fontSize: RFValue(13),
    textAlign: 'center',
    width: wp(80),
    alignSelf: 'center',
    marginTop: hp(5.5),
  },
  order: {
    color: 'white',
    fontFamily: FONTS.bold,
    fontSize: RFValue(13),
    backgroundColor: '#FC9101',
    height: hp(5.5),
    paddingTop: hp(1.5),
    paddingLeft: wp(10),
    paddingRight: wp(10),
    borderRadius: wp(2),
    width: wp(53),
    left: wp(25),
    textAlign: 'center',
    marginTop: hp(6.5),
  },
});

export default Favorite;
