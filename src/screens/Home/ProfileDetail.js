import {observer} from 'mobx-react-lite';
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
  ScrollView,
} from 'react-native';
import {hp, RFValue, wp} from '../../helpers/responsive';
import {FONTS, images} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {InterestingCard, MiniCard} from '../../components';
import store from '../../store/store';

const ProfileDetail = observer(({navigation: {navigate}}) => {
  const data = [
    {
      id: 0,
      userImage: images.mini1,
      userName: 'Christop Santos',
      message: "Hey! How's it going?",
      hour: '2:30 PM',
    },
    {
      id: 1,
      userImage: images.mini2,
      userName: 'Danny Rice',
      message: 'What kind of music do you like?',
      hour: '2:30 PM',
    },
    {
      id: 2,
      userImage: images.mini3,
      userName: 'Sena Potter',
      message: 'Sounds good to me?',
      hour: '2:30 PM',
    },
    {
      id: 3,
      userImage: images.mini4,
      userName: 'Laura Rodrig',
      message: 'What are you doing today?',
      hour: '2:30 PM',
    },
    {
      id: 4,
      userImage: images.mini5,
      userName: 'Jenny Doe',
      message: 'I am doing great!',
      hour: '2:30 PM',
    },
    {
      id: 5,
      userImage: images.mini3,
      userName: 'Christop Santos',
      message: "Hey! How's it going?",
      hour: '2:30 PM',
    },
    {
      id: 6,
      userImage: images.mini3,
      userName: 'Laura Santos',
      message: "Hey! How's it going?",
      hour: '2:30 PM',
    },
    {
      id: 6,
      userImage: images.mini5,
      userName: 'Christop Santos',
      message: "Hey! How's it going?",
      hour: '2:30 PM',
    },
  ];

  const interesting = [
    {
      id: 0,
      interesting: 'Guitar',
    },
    {
      id: 1,
      interesting: 'Music',
    },
    {
      id: 2,
      interesting: 'Fishing',
    },
    {
      id: 3,
      interesting: 'Swimming',
    },
    {
      id: 4,
      interesting: 'Book',
    },
    {
      id: 5,
      interesting: 'Dancing',
    },
  ];

  const looking = [
    {
      id: 0,
      interesting: 'Friend',
    },
    {
      id: 1,
      interesting: 'SoulMate',
    },
    {
      id: 2,
      interesting: 'Marriage',
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'light-content'}
      />
      <ScrollView style={{marginBottom: hp(2)}}>
        <Image
          source={images.bigImage}
          style={{width: wp(100), height: hp(74)}}
          resizeMode="cover"
        />
        <TouchableOpacity
          onPress={() => {
            navigate('Main');
          }}
          style={styles.closeTouchable}>
          <Image
            source={images.close}
            style={styles.closeIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Image
          source={images.five}
          style={styles.fiveIcon}
          resizeMode="contain"
        />
        <View style={styles.oneView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.nameText}>{store.userData.name}</Text>

            <TouchableOpacity style={styles.genderAge}>
              <LinearGradient
                colors={['#FF8960', '#FF62A5']}
                style={{
                  ...StyleSheet.absoluteFillObject,
                  borderRadius: wp(2),
                }}
              />
              <Image
                source={images.woman}
                style={styles.genderIcon}
                resizeMode="contain"
              />
              <Text style={styles.ageText}> 24</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.threeTouchable}>
            <Image
              source={images.threeoval}
              style={styles.threeIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.countryText}>Seattle, USA</Text>
        <View style={styles.line}></View>
        <Text style={styles.aboutText}>About</Text>
        <Text style={styles.aboutDescription}>{store.userData.about}</Text>
        <Text style={styles.showMore}>Show More</Text>
        <Text style={styles.friendsText}>Friends</Text>
        <FlatList
          contentContainerStyle={styles.ppFlatlist}
          horizontal
          data={data}
          keyExtractor={(item, index) => {
            index.toString();
          }}
          renderItem={({item, index}) => {
            return <MiniCard userImage={item.userImage} />;
          }}
        />
        <Text style={styles.basicProfile}>Basic profile</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.heightText}>Height:{'  '}</Text>
          <Text style={styles.heightDescription}>
            {store.userData.height} {'cm'}
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.profileTitle}>Weight: </Text>
          <Text style={styles.profileData}>
            {store.userData.weight} {'kg'}
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.profileTitle}>Relationship status: </Text>
          <Text style={styles.profileData}>Single</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.profileTitle}>Joined date:{'  '}</Text>
          <Text style={styles.profileData}>Dec 25, 2017</Text>
        </View>

        <Text style={styles.interestingText}>Interesting</Text>

        <FlatList
          contentContainerStyle={{gap: wp(1), marginTop: hp(1)}}
          numColumns={3}
          data={interesting}
          keyExtractor={(item, index) => {
            index.toString();
          }}
          renderItem={({item, index}) => {
            return <InterestingCard interesting={item.interesting} />;
          }}
        />

        <Text style={styles.lookingforText}>Looking for</Text>

        <FlatList
          contentContainerStyle={{gap: wp(1), marginTop: hp(1.5)}}
          numColumns={3}
          data={looking}
          keyExtractor={(item, index) => {
            index.toString();
          }}
          renderItem={({item, index}) => {
            return <InterestingCard interesting={item.interesting} />;
          }}
        />

        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: hp(3)}}>
          <Image source={images.bigh} style={{height: hp(10), width: wp(20)}} />
          <Image source={images.bigs} style={{height: hp(10), width: wp(20)}} />
          <Image source={images.bigm} style={{height: hp(10), width: wp(20)}} />
        </View>
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeTouchable: {
    backgroundColor: '#2D2D2D',
    height: hp(5),
    width: wp(10),
    borderRadius: wp(100),
    justifyContent: 'center',
    position: 'absolute',
    marginTop: hp(6.5),
    marginLeft: wp(4),
  },
  closeIcon: {height: hp(2), width: wp(4), alignSelf: 'center'},
  fiveIcon: {
    height: hp(9),
    width: wp(2.5),
    alignSelf: 'center',
    position: 'absolute',
    marginTop: hp(6.5),
    right: wp(4),
  },
  oneView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(2),
    justifyContent: 'space-between',
  },
  nameText: {
    color: 'black',
    fontSize: RFValue(22),
    fontFamily: FONTS.bold,
  },
  genderAge: {
    height: hp(2),
    width: wp(9),
    borderRadius: wp(2),
    flexDirection: 'row',
    marginLeft: wp(2),
  },
  genderIcon: {
    height: hp(1.3),
    width: wp(3),
    marginTop: hp(0.4),
  },
  ageText: {
    color: 'white',
    fontFamily: FONTS.bold,
    fontSize: RFValue(11),
    marginTop: hp(0.2),
  },
  threeTouchable: {
    backgroundColor: '#F2F2F2',
    height: hp(5),
    width: wp(10),
    borderRadius: wp(100),
    justifyContent: 'center',
  },
  threeIcon: {height: hp(4.5), width: wp(9), alignSelf: 'center'},
  countryText: {
    color: '#C9C7D0',
    fontSize: RFValue(15),
    fontFamily: FONTS.medium,
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(0.5),
  },
  line: {
    height: hp(0.1),
    width: wp(100),
    backgroundColor: '#C1C0C9',
    marginTop: hp(2),
  },
  aboutText: {
    color: '#4A4A4A',
    fontSize: RFValue(25),
    fontFamily: FONTS.bold,
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(2),
  },
  aboutDescription: {
    color: 'black',
    fontSize: RFValue(16),
    fontFamily: FONTS.medium,
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(1),
  },
  showMore: {
    color: '#FF689A',
    fontSize: RFValue(16),
    fontFamily: FONTS.medium,
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(1.5),
  },
  friendsText: {
    color: '#4A4A4A',
    fontSize: RFValue(25),
    fontFamily: FONTS.bold,
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(2.5),
  },
  ppFlatlist: {
    paddingLeft: wp(3),
    paddingRight: wp(5),
    gap: wp(4),
  },
  basicProfile: {
    color: '#4A4A4A',
    fontSize: RFValue(25),
    fontFamily: FONTS.bold,
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(2),
  },
  heightText: {
    color: 'black',
    fontSize: RFValue(16),
    fontFamily: FONTS.medium,
    marginTop: hp(2.5),
    marginLeft: wp(5),
  },
  heightDescription: {
    color: '#9B9B9B',
    fontSize: RFValue(16.5),
    fontFamily: FONTS.medium,
    marginTop: hp(2.5),
  },
  profileTitle: {
    color: 'black',
    fontSize: RFValue(16),
    fontFamily: FONTS.medium,
    marginTop: hp(1),
    marginLeft: wp(5),
  },
  profileData: {
    color: '#9B9B9B',
    fontSize: RFValue(16.5),
    fontFamily: FONTS.medium,
    marginTop: hp(1),
  },
  interestingText: {
    color: '#4A4A4A',
    fontSize: RFValue(24),
    fontFamily: FONTS.bold,
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(3),
  },
  lookingforText: {
    color: '#4A4A4A',
    fontSize: RFValue(23),
    fontFamily: FONTS.bold,
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(3),
  },
});

export default ProfileDetail;
