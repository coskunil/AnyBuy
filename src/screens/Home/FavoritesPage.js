import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {hp, RFValue, wp} from '../../helpers/responsive';
import {FONTS, images} from '../../constants';
import {UserCard} from '../../components';

const FavoritesPage = () => {
  const user = [
    {
      id: 0,
      userImage: images.woman1,
      userName: 'Augusta Castro',
      userGender: images.woman,
      userAge: '18',
    },
    {
      id: 1,
      userImage: images.woman2,
      userName: 'Susie Delgada ',
      userGender: images.woman,
      userAge: '22',
    },
    {
      id: 2,
      userImage: images.woman3,
      userName: 'Lena',
      userGender: images.woman,
      userAge: '29',
    },
    {
      id: 3,
      userImage: images.woman2,
      userName: 'Mina Howell',
      userGender: images.woman,
      userAge: '26',
    },
    {
      id: 4,
      userImage: images.man1,
      userName: 'Cornelia Gilbert',
      userGender: images.man,
      userAge: '26',
    },
    {
      id: 5,
      userImage: images.woman2,
      userName: 'Lottie Hodges',
      userGender: images.woman,
      userAge: '26',
    },
    {
      id: 4,
      userImage: images.man2,
      userName: 'Cornelia Gilbert',
      userGender: images.man,
      userAge: '26',
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.favoritesText}>Favorites</Text>

      <View style={styles.line}></View>

      <FlatList
        style={styles.flatlist}
        contentContainerStyle={{paddingBottom: hp(15)}}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={user}
        keyExtractor={(item, index) => {
          index.toString();
        }}
        renderItem={({item, index}) => {
          return (
            <UserCard
              userImage={item.userImage}
              userName={item.userName}
              userGender={item.userGender}
              userAge={item.userAge}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  favoritesText: {
    color: 'black',
    fontSize: RFValue(30),
    fontFamily: FONTS.bold,
    width: wp(85),
    alignSelf: 'center',
    marginTop: hp(6),
  },
  line: {
    height: hp(0.1),
    width: wp(100),
    backgroundColor: 'gray',
    marginTop: hp(8),
  },
  flatlist: {
    alignSelf: 'center',
    flexGrow: 0,
    gap: wp(5),
    paddingTop: hp(-0.5),
  },
});

export default FavoritesPage;
