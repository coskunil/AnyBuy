import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {hp, RFValue, wp} from '../../helpers/responsive';
import {FONTS, images} from '../../constants';
import {observer} from 'mobx-react-lite';
import {MessageCard, MiniCard} from '../../components';

const MessagePage = observer(() => {
  const data = [
    {
      id: 0,
      userImage: images.mini1,
      userName: 'Christop Santos',
      message: "Hey! How's it going?",
      hour: '2:30 PM',
      green: images.green,
    },
    {
      id: 1,
      userImage: images.mini2,
      userName: 'Danny Rice',
      message: 'What kind of music do you like?',
      hour: '2:30 PM',
      green: images.green,
    },
    {
      id: 2,
      userImage: images.mini3,
      userName: 'Sena Potter',
      message: 'Sounds good to me?',
      hour: '2:30 PM',
      green: images.green,
    },
    {
      id: 3,
      userImage: images.mini4,
      userName: 'Laura Rodrig',
      message: 'What are you doing today?',
      hour: '2:30 PM',
      green: images.green,
    },
    {
      id: 4,
      userImage: images.mini5,
      userName: 'Jenny Doe',
      message: 'I am doing great!',
      hour: '2:30 PM',
      green: images.green,
    },
    {
      id: 5,
      userImage: images.mini3,
      userName: 'Christop Santos',
      message: "Hey! How's it going?",
      hour: '2:30 PM',
      green: images.green,
    },
    {
      id: 6,
      userImage: images.mini3,
      userName: 'Laura Santos',
      message: "Hey! How's it going?",
      hour: '2:30 PM',
      green: images.green,
    },
    {
      id: 6,
      userImage: images.mini5,
      userName: 'Christop Santos',
      message: "Hey! How's it going?",
      hour: '2:30 PM',
      green: images.green,
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.messageText}>Message</Text>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Image
            tintColor={'#C1C0C9'}
            source={images.search}
            style={styles.searchIcon}
            resizeMode="contain"
          />
          <TextInput
            style={styles.searchInput}
            placeholder={'Search...'}
            placeholderTextColor={'gray'}></TextInput>
        </View>

        <View style={styles.line}></View>

        <Text style={styles.onlineText}>ONLINE USERS</Text>

        <FlatList
          contentContainerStyle={styles.oneFlatlist}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <MiniCard
                userImage={item.userImage}
                userName={item.userName}
                green={item.green}
              />
            );
          }}
        />

        <View style={styles.twoLine}></View>

        <FlatList
          contentContainerStyle={{
            paddingBottom: hp(2),
          }}
          data={data}
          keyExtractor={(item, index) => {
            index.toString();
          }}
          renderItem={({item, index}) => {
            return (
              <MessageCard
                userImage={item.userImage}
                userName={item.userName}
                message={item.message}
                hour={item.hour}
              />
            );
          }}
        />
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  messageText: {
    color: 'black',
    fontSize: RFValue(35),
    fontFamily: FONTS.bold,
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(6),
  },
  searchIcon: {
    height: hp(2.5),
    width: wp(6),
    marginTop: hp(2.5),
    position: 'absolute',
    marginLeft: wp(3),
    zIndex: 1,
  },
  searchInput: {
    backgroundColor: '#E6E6E6',
    height: hp(5),
    width: wp(90),
    borderRadius: wp(3),
    marginTop: hp(1.3),
    paddingLeft: wp(12),
    fontSize: RFValue(17.5),
  },
  line: {
    height: hp(0.1),
    width: wp(100),
    backgroundColor: '#C1C0C9',
    marginTop: hp(1.6),
  },
  onlineText: {
    color: '#C1C0C9',
    fontSize: RFValue(14),
    fontFamily: FONTS.bold,
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(2.5),
  },
  oneFlatlist: {
    paddingLeft: wp(5),
    paddingRight: wp(5),
    gap: wp(6.5),
  },
  twoLine: {
    height: hp(2.5),
    width: wp(100),
    backgroundColor: '#F7F7F7',
    marginTop: hp(1),
  },
});

export default MessagePage;
