import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import {hp, RFValue, wp} from '../../helpers/responsive';
import {FONTS, images} from '../../constants';
import {observer} from 'mobx-react-lite';
import {ProfileCard} from '../../components';
import store from '../../store/store';

const ProfilePage = observer(() => {
  const profileData = [
    {
      id: 0,
      imagee: images.like,
      profileText: 'Likes',
      arrowImage: images.rightarrow,
    },
    {
      id: 1,
      imagee: images.visits,
      profileText: 'Visitors',
      arrowImage: images.rightarrow,
    },
    {
      id: 2,
      imagee: images.groups,
      profileText: 'Groups',
      arrowImage: images.rightarrow,
    },
  ];

  const data = [
    {
      id: 0,
      imagee: images.wallet,
      profileText: 'Wallet',
      arrowImage: images.rightarrow,
    },
    {
      id: 1,
      imagee: images.vipcenter,
      profileText: 'VIP Center',
      arrowImage: images.rightarrow,
    },
    {
      id: 2,
      imagee: images.find,
      profileText: 'Find friends',
      arrowImage: images.rightarrow,
    },
    {
      id: 3,
      imagee: images.blacklist,
      profileText: 'Blacklist',
      arrowImage: images.rightarrow,
    },
    {
      id: 4,
      imagee: images.settings,
      profileText: 'Settings',
      arrowImage: images.rightarrow,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.orangeView}></View>

      <View style={styles.profileView}>
        <View style={styles.profileAndText}>
          <View style={styles.ppView}>
            <Image source={images.pp} style={{height: hp(12), width: wp(24)}} />
            <Image source={images.vip} style={styles.vipIcon} />
          </View>
          <View style={styles.nameView}>
            <Text style={styles.nameText}>{store.userData.name}</Text>
            <Image source={images.pencil} style={styles.pencilIcon} />
          </View>
          <Text style={styles.countryText}>Seattle, USA</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.threeView}>
          <View>
            <Text style={styles.visitorText}>VISITORS</Text>
            <Text style={styles.oneNumber}>2318</Text>
          </View>
          <View>
            <Text style={styles.likeTextikeText}>LIKES</Text>
            <Text style={styles.twoNumber}>364</Text>
          </View>
          <View>
            <Text style={styles.matchedText}>MATCHED</Text>
            <Text style={styles.threeNumber}>15</Text>
          </View>
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.oneFlatlist}
        data={profileData}
        keyExtractor={(item, index) => {
          index.toString();
        }}
        renderItem={({item, index}) => {
          return (
            <ProfileCard
              imagee={item.imagee}
              profileText={item.profileText}
              arrowImage={item.arrowImage}
            />
          );
        }}
      />

      <FlatList
        style={styles.twoFlatlist}
        data={data}
        keyExtractor={(item, index) => {
          index.toString();
        }}
        renderItem={({item, index}) => {
          return (
            <ProfileCard
              imagee={item.imagee}
              profileText={item.profileText}
              arrowImage={item.arrowImage}
            />
          );
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orangeView: {
    height: hp(30),
    width: wp(100),
    backgroundColor: '#FF7C63',
  },
  profileView: {
    height: hp(27),
    width: wp(90),
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    marginTop: hp(11.5),
    alignSelf: 'center',
    borderRadius: wp(3),
  },
  profileAndText: {
    width: wp(90),
    flexDirection: 'row',
  },
  ppView: {
    marginTop: hp(3),
    marginLeft: wp(5),
  },
  vipIcon: {
    height: hp(3.5),
    width: wp(7),
    position: 'absolute',
    marginTop: hp(8),
    marginLeft: wp(16),
  },
  nameView: {
    flexDirection: 'row',
    marginTop: hp(3),
  },
  nameText: {
    color: 'black',
    fontSize: RFValue(22),
    fontFamily: FONTS.bold,
    marginTop: hp(2.5),
    marginLeft: wp(7),
  },
  pencilIcon: {
    height: hp(2.2),
    width: wp(4.4),
    marginTop: hp(3.3),
    tintColor: '#FF7C63',
    marginLeft: wp(1),
  },
  countryText: {
    color: '#C1C0C9',
    fontSize: RFValue(13),
    marginTop: hp(10.2),
    marginLeft: wp(36),
    position: 'absolute',
    fontFamily: FONTS.medium,
  },
  line: {
    height: hp(0.02),
    width: wp(90),
    backgroundColor: '#C1C0C9',
    marginTop: hp(3.5),
  },
  threeView: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: wp(17),
    marginTop: hp(1.5),
  },
  visitorText: {
    color: '#C1C0C9',
    fontSize: RFValue(10.5),
    fontFamily: FONTS.medium,
  },
  oneNumber: {
    color: 'black',
    fontSize: RFValue(19),
    fontFamily: FONTS.bold,
    marginLeft: wp(1),
    marginTop: hp(0.5),
  },
  likeText: {
    color: '#C1C0C9',
    fontSize: RFValue(10.5),
    fontFamily: FONTS.medium,
    marginLeft: wp(1.5),
  },
  twoNumber: {
    color: 'black',
    fontSize: RFValue(19),
    fontFamily: FONTS.bold,
    marginLeft: wp(1),
    marginTop: hp(0.5),
  },
  matchedText: {
    color: '#C1C0C9',
    fontSize: RFValue(10.5),
    fontFamily: FONTS.medium,
  },
  threeNumber: {
    color: 'black',
    fontSize: RFValue(19),
    fontFamily: FONTS.bold,
    marginLeft: wp(5),
    marginTop: hp(0.5),
  },
  oneFlatlist: {
    borderRadius: wp(3),
    width: wp(90),
    alignSelf: 'center',
    backgroundColor: 'white',
    height: hp(20.3),
    flexGrow: 0,
    marginTop: hp(10),
  },
  twoFlatlist: {
    borderRadius: wp(3),
    width: wp(90),
    alignSelf: 'center',
    backgroundColor: 'white',
    height: hp(38),
    flexGrow: 0,
    marginTop: hp(1.3),
  },
});

export default ProfilePage;
