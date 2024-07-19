import {observer} from 'mobx-react-lite';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';

import {COLORS, FONTS, animations, images} from '../../constants';
import Rate, {AndroidMarket} from 'react-native-rate';
import store from '../../store/store';
import {CustomButton} from '../../helpers';
import Lang from '../../language';
import LottieView from 'lottie-react-native';
import appConfig from '../../config/appConfig';
import {hp, RFValue, wp} from '../../helpers/responsive';

const height = Dimensions.get('window').height;

const RateModal = observer(props => {
  const [isVisible, setIsVisible] = useState(store.RateModal);

  const close = () => {
    setIsVisible(false);
    setTimeout(() => {
      store.update('isRating', true);
      store.update('RateModal', false);
    }, 400);
  };

  const options = {
    AppleAppID: appConfig.appId,
    GooglePackageName: 'com.turkiyekesifcisi.app',
    AmazonPackageName: 'com.turkiyekesifcisi.app',
    preferredAndroidMarket: AndroidMarket.Google,
    preferInApp: true,
    openAppStoreIfInAppFails: true,
  };

  const rateUs = async () => {
    Rate.rate(options, (success, errorMessage) => {
      if (success) {
        close();
      }
      if (errorMessage) {
        console.error(`Example page Rate.rate() error: ${errorMessage}`);
      }
    });
  };

  return (
    <Modal
      onBackdropPress={close}
      hardwareAccelerated={false}
      swipeDirection="down"
      animationInTiming={800}
      animationOutTiming={400}
      backdropTransitionOutTiming={400}
      onSwipeComplete={close}
      backdropColor="#000"
      isVisible={isVisible}
      propagateSwipe={true}>
      <View style={styles.container}>
        <Image
          style={{
            width: wp(40),
            height: hp(5),
            alignSelf: 'center',
            marginTop: hp(2),
          }}
          resizeMode="contain"
          source={images.anybuylogo}
        />
        {/* <LottieView
          source={animations.rate}
          autoPlay
          loop
          style={{
            width: wp(70),
            height: hp(20),
          }}
        /> */}

        <Text style={styles.info}>{Lang.rateText}</Text>

        <TouchableOpacity
          style={{
            backgroundColor: '#FF9900',
            height: hp(7.5),
            width: wp(80),
            alignSelf: 'center',
            marginTop: hp(6),
            borderRadius: 20,
          }}
          onPress={() => {
            [rateUs()];
          }}>
          <Text
            style={{
              alignSelf: 'center',
              top: hp(2.5),
              color: 'white',
              fontFamily: FONTS.bold,
              fontSize: RFValue(16), // Opsiyonel: Yazı boyutu için varsayılan değer
            }}>
            {Lang.rateButton1}
          </Text>
        </TouchableOpacity>

        {/* <CustomButton
          onPress={() => [rateUs()]}
          width={wp(80)}
          height={hp(7)}
          marginT={hp(2)}
          textSize={RFValue(16)}
          buttonText={'Bizi Oyla'}
          textColor="#EFEFF1"
          widthBlur={wp(90)}
          heightBlur={hp(12)}
        /> */}

        <TouchableOpacity
          onPress={() => [close()]}
          style={{marginBottom: hp(3)}}>
          <Text style={styles.cancelText}>{Lang.rateButton2}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: hp(20),
    backgroundColor: '#1F1F1F',
  },

  header: {
    color: FONTS.primaryTextColor,
    fontSize: RFValue(19),
    width: height <= 736 ? wp(60) : wp(70),
    fontFamily: FONTS.bold,
    textAlign: 'center',
    marginTop: hp(2),
  },
  info: {
    color: '#fff',
    fontSize: RFValue(16),
    width: height <= 736 ? wp(80) : wp(80),
    fontFamily: FONTS.bold,
    textAlign: 'center',
    marginTop: hp(2),
    lineHeight: hp(2.5),
  },
  cancelText: {
    color: '#fff',
    fontSize: RFValue(14),
    fontFamily: FONTS.medium,
    textAlign: 'center',
    marginTop: hp(2.5),
  },
});

export default RateModal;
