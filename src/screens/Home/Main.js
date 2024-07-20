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
import store from '../../store/store';
import {KonsolCard} from '../../components';
import Favorite from './Favorite';

const Main = observer(({navigation: {navigate, goBack}}) => {
  const bigdata = [
    {
      id: 1,
      imagee: images.nintendo,
    },
    {
      id: 2,
      imagee: images.nintendo,
    },
    {
      id: 3,
      imagee: images.nintendo,
    },
  ];

  const datatext = [
    {
      id: 1,
      text: 'konsol game',
    },
    {
      id: 2,
      text: 'Laptop',
    },
    {
      id: 3,
      text: 'Smartphone',
    },
    {
      id: 4,
      text: 'Mainan',
    },
  ];

  const konsol = [
    {
      id: 1,
      imagee: images.ps5,
      name: 'Play Station 5',
      price: '$ 359',
    },
    {
      id: 2,
      imagee: images.ps5,
      name: 'Xbox Series X',
      price: '$ 400',
    },
    {
      id: 3,
      imagee: images.ps5,
      name: 'Play Station 5',
      price: '$ 359',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <View style={styles.container}>
    <StatusBar
      backgroundColor={'transparent'}
      translucent
      barStyle={'dark-content'}
    />

    <View style={styles.oneView}>
      <Image
        source={images.threeline}
        style={styles.threeIcon}
        resizeMode="contain"
      />
      <Image
        source={images.anybuylogo}
        style={styles.anybuyIcon}
        resizeMode="contain"
      />
      <View>
        <Image
          source={images.ar}
          style={styles.arIcon}
          resizeMode="contain"
        />
        <Text style={{color: 'black', alignSelf: 'center'}}>AR</Text>
      </View>
    </View>
    <Text style={styles.lets}>let’s Find Your Item!</Text>
    <View style={styles.searchView}>
      <TextInput
        style={styles.searchTextInput}
        placeholder={'Search'}
        placeholderTextColor={'black'}
      />
      <Image
        source={images.search}
        style={styles.searchIcon}
        resizeMode="contain"
      />
      <TouchableOpacity
        onPress={() => {
          navigate('Scan');
        }}>
        <Image
          source={images.camera}
          style={styles.cameraIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
    <View style={styles.oneView}>
      <Text style={styles.nearbyText}>Nearby</Text>
      <TouchableOpacity
        onPress={() => navigate('ProfileDetail')}
        style={styles.oneTouchable}>
        <Image
          source={images.three}
          style={{height: hp(2.5), width: wp(5)}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
    <FlatList
      style={{flexGrow: 0}}
      contentContainerStyle={{
        paddingLeft: wp(3),
        paddingRight: wp(4),
        gap: wp(5.5),
      }}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={bigdata}
      keyExtractor={item => item.id.toString()}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => {
            navigate('Detail');
          }}>
          <Image
            source={item?.imagee}
            style={{
              zIndex: 1,
              height: hp(30),
              width: wp(90),
              marginTop: hp(6.5),
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
    />
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: hp(1),
      }}>
      {bigdata.map((_, index) => (
        <View
          key={index}
          style={{
            height: hp(0.6),
            width: currentIndex === index ? wp(2) : wp(10),
            borderRadius: wp(2),
            backgroundColor: '#FF9900',
            marginHorizontal: wp(0.2),
          }}
        />
      ))}
    </View>
    <FlatList
      style={{flexGrow: 0}}
      contentContainerStyle={{marginTop: hp(4), gap: wp(3.5)}}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={datatext}
      keyExtractor={item => item.id.toString()}
      renderItem={({item, index}) => {
        const isSelected = index === selectedFilterIndex;
        return (
          <View key={item.id}>
            <TouchableOpacity
              onPress={() => {
                setSelectedFilterIndex(index);
              }}>
              <Text
                style={[
                  styles.oneFlatlistText,
                  isSelected ? {color: '#FF9900'} : null,
                ]}>
                {item.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.oneFlatlistTouchable,
                isSelected ? {backgroundColor: '#FF9900'} : null,
              ]}
            />
          </View>
        );
      }}
    />
    <FlatList
      contentContainerStyle={{
        paddingLeft: wp(5),
        paddingRight: wp(5),
        gap: wp(5.5),
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={konsol}
      keyExtractor={item => item.id.toString()}
      renderItem={({item, index}) => (
        <KonsolCard
          key={index}
          imagee={item.imagee}
          name={item.name}
          price={item.price}
        />
      )}
    />
    <View style={styles.line}></View>
    <FlatList
      style={styles.twoFlatlist}
      contentContainerStyle={{paddingBottom: hp(35)}}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      data={store.userList}
      keyExtractor={item => item.id.toString()}
      renderItem={({item, index}) => (
        <UserCard
          key={index}
          userImage={item.userImage}
          userName={item.userName}
          userGender={item.userGender}
          userAge={item.userAge}
        />
      )}
    />
  </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: StatusBar.currentHeight * 1.1,
    backgroundColor: '#FFFFFF',
  },
  oneView: {
    flexDirection: 'row',
    width: wp(90),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  threeIcon: {
    zIndex: 1,
    height: hp(3),
    width: wp(6),
    alignSelf: 'center',
  },
  anybuyIcon: {
    zIndex: 1,
    height: hp(6),
    width: wp(20),
    alignSelf: 'center',
    marginLeft: wp(6),
  },
  arIcon: {
    zIndex: 1,
    height: hp(6),
    width: wp(12),
    alignSelf: 'center',
  },
  lets: {
    color: 'black',
    width: wp(90),
    fontFamily: FONTS.medium,
    fontSize: RFValue(19),
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(90),
    justifyContent: 'space-between',
  },
  searchTextInput: {
    height: hp(6),
    width: wp(70),
    borderRadius: wp(3),
    fontSize: RFValue(15),
    marginTop: hp(2),
    borderWidth: wp(0.3),
    paddingLeft: wp(10),
  },
  searchIcon: {
    height: hp(2.5),
    width: wp(5),
    position: 'absolute',
    left: wp(3),
    top: hp(4.2),
  },
  cameraIcon: {
    height: hp(7),
    width: wp(14),
    marginTop: hp(2),
  container: {},
  oneView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(6.5),
  },
  nearbyText: {
    color: 'black',
    fontSize: RFValue(35),
    fontFamily: FONTS.bold,
  },
  oneTouchable: {
    backgroundColor: '#DFDFDF',
    height: hp(5),
    width: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(100),
  },
  oneFlatlist: {
    marginTop: hp(1.6),
    gap: wp(8),
    paddingLeft: wp(5),
    paddingRight: wp(5),
  },
  oneFlatlistText: {
    fontSize: RFValue(17),
    color: 'black',
    textAlign: 'center',
    marginTop: hp(0.5),
  },
  oneFlatlistTouchable: {
    width: wp(14),
    height: hp(1.4),
    alignSelf: 'center',
    marginTop: hp(0.5),
  },
  line: {
    height: hp(0.1),
    width: wp(100),
    backgroundColor: 'gray',
  },
  twoFlatlist: {
    alignSelf: 'center',
    flexGrow: 0,
    gap: wp(5),
    paddingTop: hp(0.5),
  },
});

export default Main;
