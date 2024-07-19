import {observer} from 'mobx-react-lite';
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
  Linking,
  BackHandler,
} from 'react-native';
import store from '../../store/store';
import {COLORS, FONTS, images} from '../../constants';
import {RFValue, wp, hp} from '../../helpers/responsive';
import Lang from '../../language';
import SettingsCard from '../../components/SettingsCard';
import Share from 'react-native-share';
import {Modal} from 'react-native';
import LogModal from '../../components/Modal/LogModal';

const Settings = observer(({navigation: {navigate, goBack, isFocused}}) => {
  const shareOnpress = async () => {
    const options = {
      title: 'AnyBuy',
      message:
        '! I found an app called Hydro Mate. With this app, you can learn everything about your daily water intake. Click here to download it',
      url: Lang.url,
    };
    try {
      const res = await Share.open(options);
      console.log(res);
    } catch (error) {
      console.log(
        'Paylaşım işlemi iptal edildi veya hata oluştu:',
        error.message,
      );
    }
  };

  useEffect(() => {
    const backAction = () => {
      if (isFocused()) {
        return true;
      }
      return false;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <ImageBackground source={images.background} style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'light-content'}
      />
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: hp(2),
        }}>
        <TouchableOpacity
          style={{
            height: hp(5.5),
            width: wp(11),
            borderWidth: wp(0.1),
            justifyContent: 'center',
            borderRadius: wp(100),
            marginLeft: wp(4),
          }}>
          <Image
            source={images.ar}
            style={{
              zIndex: 1,
              height: hp(5),
              width: wp(10),
              alignSelf: 'center',
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontFamily: FONTS.bold,
            fontSize: RFValue(16),
            marginLeft: wp(20),
          }}>
          Profile Settings
        </Text>
      </View>
      <View style={{marginTop: hp(10)}}></View>
      <SettingsCard
        imagee={images.eula}
        text={Lang.eula}
        onPress={() =>
          Linking.openURL(`https://sites.google.com/view/apgoltd/ana-sayfa`)
        }
      />
      <SettingsCard
        imagee={images.security}
        text={Lang.privacy}
        onPress={() =>
          Linking.openURL(`https://sites.google.com/view/apgoltd/ana-sayfa`)
        }
      />

      <SettingsCard
        imagee={images.recomend}
        text={Lang.settingsRecomend}
        onPress={() => {
          shareOnpress();
        }}
      />

      <SettingsCard
        imagee={images.rate}
        text={Lang.rateus}
        onPress={() => {
          store.update('RateModal', true);
        }}
      />

      <SettingsCard
        imagee={images.exit}
        text={Lang.settingsLogout}
        onPress={() => {
          store.update('LogModal', true);
        }}
      />

      <LogModal />
    </ImageBackground>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight * 2,
  },
});

export default Settings;
