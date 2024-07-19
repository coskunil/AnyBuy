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

const Detail = observer(({navigation: {navigate, goBack}}) => {
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: wp(90),
        }}>
        <TouchableOpacity
          style={{
            height: hp(5.5),
            width: wp(11),
            borderWidth: wp(0.1),
            justifyContent: 'center',
            borderRadius: wp(100),
            marginTop: hp(5),
          }}>
          <Image
            source={images.back}
            style={{
              height: hp(2.2),
              width: wp(4.4),
              alignSelf: 'center',
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#D23F07',
            width: wp(16),
            height: hp(12),
            marginRight: wp(-5),
            borderBottomLeftRadius: wp(4),
          }}>
          <Image
            source={images.detailheart}
            style={{
              height: hp(4.5),
              width: wp(9),
              alignSelf: 'center',
              marginTop: hp(6),
            }}
            resizeMode="contain"
          />
        </View>
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
        keyExtractor={item => {
          item.id;
        }}
        renderItem={({item, index}) => {
          return (
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
                  marginTop: hp(0.5),
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          );
        }}
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
              height: hp(1),
              width: currentIndex === index ? wp(2) : wp(2),
              borderRadius: wp(2),
              backgroundColor: currentIndex === index ? '#FF9900' : '#D3D3D3',
              marginHorizontal: wp(1.5),
            }}
          />
        ))}
      </View>
      <View
        style={{
          backgroundColor: '#FF9701',
          width: wp(100),
          height: hp(58),
          marginTop: hp(3),
        }}>
        <Text
          style={{
            color: 'black',
            width: wp(29.5),
            fontFamily: FONTS.bold,
            fontSize: RFValue(19),
            backgroundColor: '#FFB61D',
            textAlign: 'center',
            height: hp(6),
            paddingTop: wp(3),
            borderRadius: wp(3),
            position: 'absolute',
            left: wp(69),
            top: hp(-1.5),
          }}>
          $579
        </Text>
        <Text
          style={{
            color: 'white',
            width: wp(95),
            fontFamily: FONTS.medium,
            fontSize: RFValue(23),
            alignSelf: 'center',
            marginTop: hp(2),
          }}>
          Nintendo Switch V-2
        </Text>
        <Text
          style={{
            color: 'black',
            width: wp(95),
            fontFamily: FONTS.bold,
            fontSize: RFValue(13),
            alignSelf: 'center',
            marginTop: hp(3),
          }}>
          Dapatkan akun Nintendo+
        </Text>
        <Text
          style={{
            color: '#804C01',
            width: wp(90),
            fontFamily: FONTS.medium,
            fontSize: RFValue(12.5),
            alignSelf: 'center',
            marginTop: hp(1.5),
            marginRight: wp(4),
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta
          dapibus.
        </Text>

        <View
          style={{
            width: wp(95),
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: hp(1),
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: FONTS.bold,
              fontSize: RFValue(11.5),
              alignSelf: 'center',
            }}>
            Full description
          </Text>
          <Image
            source={images.detailvector}
            style={{
              height: hp(2),
              width: wp(4),
              marginLeft: wp(2),
            }}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            height: hp(9),
            width: wp(80),
            backgroundColor: '#F0F0F0',
            alignSelf: 'center',
            marginTop: hp(4),
            borderRadius: wp(3),
          }}>
          <Text
            style={{
              color: 'black',
              fontFamily: FONTS.bold,
              fontSize: RFValue(14),
              marginTop: hp(0.5),
              marginLeft: wp(4),
            }}>
            Warna
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: hp(4),
                width: wp(20),
                backgroundColor: '#FFFFFF',
                borderRadius: wp(2),
                marginLeft: wp(4),
                marginTop: hp(1),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: wp(2.5),
              }}>
              <View
                style={{
                  height: hp(1.5),
                  width: wp(3),
                  backgroundColor: 'black',
                  borderRadius: wp(100),
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontFamily: FONTS.bold,
                  fontSize: RFValue(10),
                }}>
                Hiltam
              </Text>
            </View>

            <View
              style={{
                height: hp(4),
                width: wp(25),
                backgroundColor: '#FFFFFF',
                borderRadius: wp(2),
                marginLeft: wp(4),
                marginTop: hp(1),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: wp(2.5),
                borderWidth: wp(0.2),
                borderColor: '#FFB61D',
              }}>
              <View
                style={{
                  height: hp(1.5),
                  width: wp(3),
                  backgroundColor: '#1A15FF',
                  borderRadius: wp(100),
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontFamily: FONTS.bold,
                  fontSize: RFValue(10),
                }}>
                Biru-Merah
              </Text>
            </View>

            <View
              style={{
                height: hp(4),
                width: wp(20),
                backgroundColor: '#FFFFFF',
                borderRadius: wp(2),
                marginLeft: wp(4),
                marginTop: hp(1),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: wp(2.5),
              }}>
              <View
                style={{
                  height: hp(1.5),
                  width: wp(3),
                  backgroundColor: '#9EAE9B',
                  borderRadius: wp(100),
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontFamily: FONTS.bold,
                  fontSize: RFValue(10),
                }}>
                Putih
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: wp(90),
            alignSelf: 'center',
            marginTop: hp(9.5),
            gap: wp(5),
          }}>
          <TouchableOpacity
            onPress={() => {
              goBack();
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: FONTS.medium,
                fontSize: RFValue(17),
                backgroundColor: '#E05500',
                paddingLeft: wp(7),
                paddingRight: wp(7),
                height: hp(7),
                paddingTop: hp(2),
                borderRadius: wp(3),
              }}>
              chat
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              goBack();
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: FONTS.medium,
                fontSize: RFValue(17),
                backgroundColor: '#C31700',
                height: hp(7),
                paddingTop: hp(2),
                paddingLeft: wp(20),
                paddingRight: wp(20),
                borderRadius: wp(3),
              }}>
              BUY NOW
            </Text>
          </TouchableOpacity>
          <Image
            source={images.detailplane}
            style={{
              zIndex: 1,
              height: hp(3),
              width: wp(6),
              top: hp(1),
              left: wp(16),
              position: 'absolute',
            }}
            resizeMode="contain"
          />
        </View>
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

export default Detail;
