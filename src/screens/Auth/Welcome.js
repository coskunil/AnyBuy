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
} from 'react-native';
import {height, hp, RFValue, wp} from '../../helpers/responsive';
import {COLORS, FONTS, images} from '../../constants';

const Welcome = observer(({navigation: {navigate, goBack}}) => {
  const [textValue, setTextValue] = useState(null);

  useEffect(() => {
    console.log(textValue);
  }, [textValue]);

  return (
    <View style={styles.container}>
      <Image
        source={images.anybuylogo}
        style={styles.anybuylogo}
        resizeMode="contain"
      />
      <Image
        source={images.anybuytext}
        style={styles.anybuytext}
        resizeMode="contain"
      />
      <Image
        source={images.splash}
        style={{zIndex: 1, height: hp(60), width: wp(80), marginTop: hp(2)}}
        resizeMode="contain"
      />

      <View style={styles.oneView}>
        <TouchableOpacity
          onPress={() => {
            navigate('SignIn');
          }}
          style={styles.signTouchable}>
          <Text style={styles.getText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#C31700',
    paddingTop: StatusBar.currentHeight * 2,
  },
  anybuylogo: {
    zIndex: 1,
    height: hp(8),
    width: wp(25),
    alignSelf: 'center',
    marginTop: hp(2.5),
  },
  anybuytext: {
    zIndex: 1,
    height: hp(5),
    width: wp(20),
    alignSelf: 'center',
  },
  oneView: {
    width: wp(100),
    height: hp(22),
    backgroundColor: '#9B1300',
    marginTop: hp(1),
    borderTopLeftRadius: wp(4),
    borderTopRightRadius: wp(4),
  },
  signTouchable: {
    height: hp(7.5),
    width: wp(90),
    backgroundColor: 'white',
    marginTop: hp(5),
    borderRadius: wp(8),
    alignSelf: 'center',
  },
  getText: {
    color: '#FC9101',
    fontFamily: FONTS.bold,
    fontSize: RFValue(12),
    textAlign: 'center',
    marginTop: hp(2.5),
  },
});

export default Welcome;
