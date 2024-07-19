import AsyncStorage from '@react-native-async-storage/async-storage';
import {toJS} from 'mobx';
import {observer} from 'mobx-react-lite';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';
import store from '../../store/store';
import {COLORS, FONTS, images} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {hp, RFValue, wp} from '../../helpers/responsive';
import {useNavigation} from '@react-navigation/native';
import Lang from '../../language';

const height = Dimensions.get('window').height;

const LogModal = observer(() => {
  const [isVisible, setIsVisible] = useState(store.LogModal);

  const close = () => {
    setIsVisible(false);
    setTimeout(() => {
      store.update('LogModal', false);
    }, 400);
  };

  const navigation = useNavigation();

  const handleCancel = () => {
    close(); // Modalı kapat
  };

  return (
    <Modal
      hardwareAccelerated={false}
      swipeDirection="down"
      onSwipeComplete={close}
      onBackdropPress={close}
      animationInTiming={800}
      animationOutTiming={400}
      backdropTransitionOutTiming={400}
      backdropColor={COLORS.modalOpacity}
      isVisible={isVisible}
      style={{alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.container}>
        <Image
          source={images.logoText}
          style={{height: hp(2.5), top: hp(2)}}
          resizeMode="contain"
        />
        <Text
          style={{
            marginTop: hp(4),
            fontSize: RFValue(15),
            color: 'black',
            fontFamily: FONTS.medium,
            width: wp(70),
            textAlign: 'center',
          }}>
          {Lang.logText}
        </Text>
        <TouchableOpacity
          style={{
            width: wp(55),
            height: hp(6),
            backgroundColor: '#FF9900',
            alignSelf: 'center',
            marginTop: hp(2),
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            close();
            store.deleteData();
            setTimeout(() => {
              navigation.reset({
                index: 0,
                routes: [{name: 'Splash'}],
              });
            }, 500);
          }}>
          <Text
            style={{
              color: 'Black',
              fontFamily: FONTS.bold,
              fontSize: RFValue(14),
            }}>
            {Lang.settingsLogout}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: wp(60),
            height: hp(6),
            alignSelf: 'center',
            marginTop: hp(2),
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            bottom: hp(1),
          }}
          onPress={handleCancel}>
          <Text
            style={{
              color: 'black',
              fontFamily: FONTS.bold,
              fontSize: RFValue(14),
            }}>
            {Lang.giveup}
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  container: {
    width: wp(85),
    height: hp(30),
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: wp(8),
    position: 'absolute',
    bottom: 290,
    borderWidth: 1,
    borderColor: '#3B3A4C',
    justifyContent: 'center',
  },
});

export default LogModal;
