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
<<<<<<< HEAD
  BackHandler,
} from 'react-native';
import {height, hp, RFValue, wp} from '../../helpers/responsive';
import {FONTS, images} from '../../constants';
import {set} from 'mobx';
import store from '../../store/store';

const SignIn = observer(({navigation: {navigate, goBack}}) => {
  const [signIndex, setSignIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    phone: '',
  });

=======
} from 'react-native';
import {height, hp, RFValue, wp} from '../../helpers/responsive';
import {FONTS, images} from '../../constants';
import store from '../../store/store';
import Lang from '../../language';

const SignIn = observer(({navigation: {navigate}}) => {
  const [signIndex, setSignIndex] = useState(0);
  const [textInput, setTextInput] = useState('');
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    gender: '',
  });

  const validateInputs = () => {
    const newErrors = {};
    if (signIndex === 0 && !name) newErrors.name = Lang.errorMessage;
    if (signIndex === 1 && !about) newErrors.about = Lang.errorMessage2;
    if (signIndex === 2) {
      if (!height) newErrors.height = Lang.errorMessage3;
      if (!weight) newErrors.weight = Lang.errorMessage4;
    }
    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  const DATA = [
    {
      id: 0,
      title: "What's your name?",
      description: 'Enter your name',
      TextInput: setName,
      placeHolder: 'Name',
      value: {name},
      errorMessage: 'Please enter your name',
    },
    {
      id: 1,
      title: 'Tell your about',
      description: 'Tell something about yourself',
      TextInput: setAbout,
      placeHolder: 'About',
      value: {about},
      errorMessage: 'Please tell about yourself',
    },
    {
      id: 2,
      title: 'Tell your about',
      description: 'Your weight ',
      TextInput: setWeight,
      placeHolder: 'Weight',
      value: {weight},
      errorMessage: 'Please enter your weight',
      descriptionh: 'Your height',
      TextInputh: setHeight,
      placeHolderh: 'Height',
      valueh: {height},
      errorMessageh: 'Please enter your height',
    },
  ];

  const userData = {
    name,
    about,
    weight,
    height,
  };

>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
<<<<<<< HEAD
        barStyle={'dark-content'}
=======
        barStyle={'light-content'}
>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c
      />
      <ScrollView>
        {signIndex === 0 ? (
          <View>
<<<<<<< HEAD
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity style={styles.oneSignView}>
                <Image
                  source={images.back}
                  style={styles.oneBackIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Image
                source={images.anybuylogo}
                style={styles.oneAnyBuyLogo}
                resizeMode="contain"
              />
            </View>
            <Image
              source={images.signlogo}
              style={styles.oneSignLogo}
              resizeMode="contain"
            />

            <TextInput
              style={styles.oneEmailTextInput}
              placeholder={errors.email ? errors.email : 'Email adress'}
              placeholderTextColor={errors.email ? 'red' : '#9D9FA0'}
              onChangeText={text => {
                setEmail(text);
              }}
              value={email}
            />
            <TextInput
              style={styles.onePasswordTextInput}
              placeholder={errors.password ? errors.password : 'Password'}
              placeholderTextColor={errors.password ? 'red' : '#9D9FA0'}
              onChangeText={text => {
                setPassword(text);
              }}
              value={password}
              secureTextEntry={true}
            />

            <Text style={styles.oneLupaText}>Lupa kata sandi?</Text>

            <TouchableOpacity
              onPress={() => {
                let valid = true;
                if (!email) {
                  setErrors({...errors, email: 'Email adress '});
                  valid = false;
                } else {
                  setErrors(prevErrors => ({
                    ...prevErrors,
                    email: '',
                  }));
                }
                if (!password) {
                  setErrors({...errors, password: 'Password '});
                  valid = false;
                } else {
                  setErrors(prevErrors => ({
                    ...prevErrors,
                    password: '',
                  }));
                }
                if (valid) {
                  store.update('userData', {
                    ...store.userData,
                    email: email,
                    password: password,
                  });
                  navigate('Main');
                }
              }}
              style={styles.loginTouchable}>
              <Text style={styles.loginText}>LOG IN</Text>
            </TouchableOpacity>

            <Text style={styles.oneOrText}>OR</Text>

            <TouchableOpacity style={styles.googleTouchable}>
              <Image
                source={images.google}
                style={styles.googleIcon}
                resizeMode="contain"
              />
              <Text style={styles.continueText}>CONTINUE WITH GOOGLE</Text>
            </TouchableOpacity>
            <View style={styles.belumView}>
              <Text style={styles.belumText}>BELUM PUNYA AKUN?</Text>
              <Text
                onPress={() => {
                  setSignIndex(signIndex + 1);
                }}
                style={styles.signText}>
                SIGN - UP
              </Text>
            </View>
          </View>
        ) : (
          <View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity style={styles.signTwoView}>
                <Image
                  source={images.back}
                  style={styles.backIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Image
                source={images.anybuylogo}
                style={styles.anyBuyLogo}
                resizeMode="contain"
              />
            </View>

            <View style={{width: wp(85), marginLeft: wp(5)}}>
              <Text style={styles.twoSignText}>SIGN UP</Text>
              <Text style={styles.isi}>isi identitas kamu yuk!</Text>
            </View>

            <Text style={styles.email}>Email</Text>
            <TextInput
              style={styles.EmailTextInput}
              placeholder={errors.email ? errors.email : 'Email adress'}
              placeholderTextColor={errors.email ? 'red' : '#A1A4B2'}
              onChangeText={text => {
                setEmail(text);
              }}
              value={email}
            />
            <Text style={styles.password}>Password</Text>
            <TextInput
              style={styles.PasswordTextInput}
              placeholder={errors.password ? errors.password : 'Password'}
              placeholderTextColor={errors.password ? 'red' : '#A1A4B2'}
              onChangeText={text => {
                setPassword(text);
              }}
              value={password}
              secureTextEntry={true}
            />

            <Text style={styles.nomorText}>nomor Telepone</Text>
            <TextInput
              style={{
                height: hp(7),
                width: wp(95),
                backgroundColor: '#F2F3F7',
                borderRadius: wp(2),
                paddingLeft: wp(5),
                fontSize: RFValue(15),
                marginTop: hp(0.5),
              }}
              placeholder={errors.phone ? errors.phone : '08XXXXXX'}
              placeholderTextColor={errors.phone ? 'red' : '#A1A4B2'}
              onChangeText={text => {
                setPhone(text);
              }}
              value={phone}
            />

            <TouchableOpacity
              onPress={() => {
                let valid = true;
                if (!email) {
                  setErrors({...errors, email: 'Email'});
                  valid = false;
                } else {
                  setErrors(prevErrors => ({
                    ...prevErrors,
                    email: '',
                  }));
                }
                if (!password) {
                  setErrors({...errors, password: 'Password'});
                  valid = false;
                } else {
                  setErrors(prevErrors => ({
                    ...prevErrors,
                    password: '',
                  }));
                }
                if (!phone) {
                  setErrors({...errors, phone: 'Phones'});
                  valid = false;
                } else {
                  setErrors(prevErrors => ({
                    ...prevErrors,
                    phone: '',
                  }));
                }
                if (valid) {
                  store.update('userData', {
                    ...store.userData,
                    email: email,
                    password: password,
                    phone: phone,
                  });
                  navigate('Main');
                }
              }}
              style={styles.daftarTouchable}>
              <Text style={styles.daftarText}>DAFTAR SEKARANG</Text>
            </TouchableOpacity>

            <View style={styles.udahView}>
              <Text style={styles.udahText}>udah punya akun?</Text>
              <Text
                onPress={() => {
                  setSignIndex(signIndex - 1);
                }}
                style={styles.yukText}>
                Log-in yuk!
              </Text>
            </View>
          </View>
        )}
=======
            {/* <TouchableOpacity
              onPress={() => {}}
              style={styles.backTouchable}></TouchableOpacity> */}
            <Text style={styles.oneTitle}>{DATA[signIndex].title}</Text>
            <TextInput
              style={styles.oneTextinput}
              placeholder={DATA[signIndex].placeHolder}
              placeholderTextColor={'black'}
              onChangeText={text => {
                setName(text);
                setErrors(prevErrors => ({
                  ...prevErrors,
                  name: text.length === 0 ? Lang.errorMessage : '',
                }));
              }}
              value={name}
              maxLength={12}
            />
            {errors.name !== '' && (
              <Text style={styles.messagetextName}>{errors.name}</Text>
            )}
          </View>
        ) : signIndex === 1 ? (
          <View>
            <TouchableOpacity
              onPress={() => {
                setSignIndex(signIndex - 1);
              }}
              style={styles.backTouchable}>
              <Image
                source={images.leftback}
                style={styles.leftIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.twoTitle}>{DATA[signIndex].title}</Text>
            <TextInput
              style={styles.twoTextinput}
              placeholder={DATA[signIndex].placeHolder}
              placeholderTextColor={'black'}
              numberOfLines={5}
              multiline={true}
              onChangeText={text => {
                setAbout(text);
                setErrors(prevErrors => ({
                  ...prevErrors,
                  about: text.length === 0 ? Lang.errorMessage : '',
                }));
              }}
              value={about}
              maxLength={200}
            />
            {errors.about !== '' && (
              <Text style={styles.messagetextAbout}>{errors.about}</Text>
            )}
          </View>
        ) : (
          <View>
            <TouchableOpacity
              onPress={() => {
                setSignIndex(signIndex - 1);
              }}
              style={styles.backTouchable}>
              <Image
                source={images.leftback}
                style={styles.leftIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.threeTitle}>{DATA[signIndex].title}</Text>

            <Text style={styles.weightTitle}>
              {DATA[signIndex].description}
            </Text>
            <TextInput
              style={styles.weightTextinput}
              placeholder={DATA[signIndex].placeHolder}
              placeholderTextColor={'black'}
              keyboardType="numeric"
              onChangeText={text => {
                setWeight(text);
                setErrors(prevErrors => ({
                  ...prevErrors,
                  weight: text.length === 0 ? Lang.errorMessage : '',
                }));
              }}
              value={weight}
              maxLength={3}
            />
            {errors.weight !== '' && (
              <Text style={styles.messagetextWeight}>{errors.weight}</Text>
            )}

            <Text style={styles.heightTitle}>
              {DATA[signIndex].descriptionh}
            </Text>
            <TextInput
              style={styles.heightTextinput}
              placeholder={DATA[signIndex].placeHolderh}
              placeholderTextColor={'black'}
              keyboardType="numeric"
              onChangeText={text => {
                setHeight(text);
                setErrors(prevErrors => ({
                  ...prevErrors,
                  height: text.length === 0 ? Lang.errorMessage : '',
                }));
              }}
              value={height}
              maxLength={3}
            />
            {errors.height !== '' && (
              <Text style={styles.messagetextHeight}>{errors.height}</Text>
            )}
          </View>
        )}

        <TouchableOpacity
          onPress={() => {
            const isValid = validateInputs();
            if (isValid) {
              if (signIndex < 2) {
                setSignIndex(signIndex + 1);
              } else {
                store.update('userData', {
                  ...store.userData,
                  ...userData,
                });
                console.log('data', store.userData);
                navigate('Main');
              }
            }
          }}
          style={styles.continueTouchable}>
          <Text style={styles.continueText}>
            {signIndex === 2 ? 'Finish' : 'Continue'}
          </Text>
        </TouchableOpacity>
>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    alignItems: 'center',
    flex: 1,
    paddingTop: StatusBar.currentHeight * 2,
    backgroundColor: '#FFFFFF',
  },
  oneSignLogo: {
    zIndex: 1,
    height: hp(38),
    width: wp(80),
    marginTop: hp(1),
  },
  oneEmailTextInput: {
    height: hp(7.5),
    width: wp(90),
    backgroundColor: '#F2F3F7',
    borderRadius: wp(2),
    paddingLeft: wp(5),
    fontSize: RFValue(14),
    marginTop: hp(3),
  },
  onePasswordTextInput: {
    height: hp(7.5),
    width: wp(90),
    backgroundColor: '#F2F3F7',
    borderRadius: wp(2),
    paddingLeft: wp(5),
    fontSize: RFValue(14),
    marginTop: hp(2.5),
  },
  oneLupaText: {
    color: 'black',
    fontFamily: FONTS.bold,
    fontSize: RFValue(12),
    marginTop: hp(1),
    marginLeft: wp(60),
  },
  loginTouchable: {
    height: hp(8),
    width: wp(90),
    backgroundColor: '#FC9101',
    marginTop: hp(3),
    borderRadius: wp(8),
  },
  loginText: {
    color: 'white',
    fontFamily: FONTS.bold,
    fontSize: RFValue(12),
    textAlign: 'center',
    marginTop: hp(3),
  },
  oneOrText: {
    color: '#A1A4B2',
    fontFamily: FONTS.bold,
    fontSize: RFValue(12),
    textAlign: 'center',
    marginTop: hp(1.5),
  },
  googleTouchable: {
    height: hp(8),
    width: wp(90),
    backgroundColor: 'white',
    marginTop: hp(1.5),
    borderRadius: wp(8),
    borderWidth: wp(0.3),
    borderColor: '#EBEAEC',
    flexDirection: 'row',
  },
  googleIcon: {
    zIndex: 1,
    height: hp(2.8),
    width: wp(5.6),
    alignSelf: 'center',
    marginLeft: wp(7),
  },
  continueText: {
    color: '#3F414E',
    fontFamily: FONTS.bold,
    fontSize: RFValue(12),
    alignSelf: 'center',
    marginLeft: wp(12),
  },
  belumView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp(0.8),
  },
  belumText: {
    color: '#979797',
    fontFamily: FONTS.bold,
    fontSize: RFValue(11.5),
    textAlign: 'center',
  },
  signText: {
    color: '#FF9701',
    fontFamily: FONTS.bold,
    fontSize: RFValue(11.5),
    textAlign: 'center',
    marginLeft: wp(3),
  },
  oneSignView: {
    height: hp(5.5),
    width: wp(11),
    borderWidth: wp(0.1),
    justifyContent: 'center',
    borderRadius: wp(100),
    marginTop: hp(1),
  },
  oneBackIcon: {
    zIndex: 1,
    height: hp(2.2),
    width: wp(4.4),
    alignSelf: 'center',
  },
  oneAnyBuyLogo: {
    zIndex: 1,
    height: hp(8),
    width: wp(25),
    alignSelf: 'center',
    marginLeft: wp(22),
    marginTop: hp(1),
  },
  signTwoView: {
    height: hp(5.5),
    width: wp(11),
    borderWidth: wp(0.1),
    justifyContent: 'center',
    borderRadius: wp(100),
    marginTop: hp(1),
  },
  backIcon: {
    zIndex: 1,
    height: hp(2.2),
    width: wp(4.4),
    alignSelf: 'center',
  },
  anyBuyLogo: {
    zIndex: 1,
    height: hp(8),
    width: wp(25),
    alignSelf: 'center',
    marginLeft: wp(25),
    marginTop: hp(1),
  },
  twoSignText: {
    color: 'black',
    fontFamily: FONTS.bold,
    fontSize: RFValue(20),
    marginTop: hp(2),
  },
  isi: {
    color: '#979797',
    fontSize: RFValue(17),
    marginTop: hp(0.5),
  },
  email: {
    color: '#979797',
    fontSize: RFValue(16),
    marginTop: hp(3.3),
    marginLeft: wp(3),
  },
  EmailTextInput: {
    height: hp(7),
    width: wp(95),
    backgroundColor: '#F2F3F7',
    borderRadius: wp(2),
    paddingLeft: wp(5),
    fontSize: RFValue(15),
    marginTop: hp(0.5),
  },
  password: {
    color: '#979797',
    fontSize: RFValue(16),
    marginTop: hp(2),
    marginLeft: wp(3),
  },
  PasswordTextInput: {
    height: hp(7),
    width: wp(95),
    backgroundColor: '#F2F3F7',
    borderRadius: wp(2),
    paddingLeft: wp(5),
    fontSize: RFValue(15),
    marginTop: hp(0.5),
  },
  nomorText: {
    color: '#979797',
    fontSize: RFValue(16),
    marginTop: hp(5.5),
    marginLeft: wp(3),
  },
  daftarTouchable: {
    height: hp(7.5),
    width: wp(90),
    backgroundColor: '#FC9101',
    marginTop: hp(5),
    borderRadius: wp(9),
    alignSelf: 'center',
  },
  daftarText: {
    color: '#F6F1FB',
    fontFamily: FONTS.bold,
    fontSize: RFValue(12),
    textAlign: 'center',
    marginTop: hp(2.8),
  },
  udahView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp(2),
  },
  udahText: {
    color: '#4E4E4E',
    fontSize: RFValue(12),
    textAlign: 'center',
  },
  yukText: {
    color: '#FF9701',
    fontSize: RFValue(12),
    textAlign: 'center',
    marginLeft: wp(2),
=======
    backgroundColor: '#FDF7FD',
    flex: 1,
  },
  backTouchable: {
    backgroundColor: 'white',
    height: hp(5),
    width: wp(10),
    borderWidth: wp(0.1),
    borderColor: '#4B164C',
    marginTop: hp(6),
    borderRadius: wp(100),
    marginLeft: wp(5),
  },
  leftIcon: {
    height: hp(2),
    width: wp(4),
    alignSelf: 'center',
    marginTop: hp(1.5),
  },
  oneTitle: {
    color: '#4B164C',
    fontSize: RFValue(24),
    fontWeight: '600',
    marginTop: hp(13.5),
    width: wp(85),
    fontFamily: FONTS.bold,
    alignSelf: 'center',
    textAlign: 'center',
  },
  oneTextinput: {
    height: hp(7.5),
    width: wp(85),
    borderWidth: wp(0.5),
    borderColor: '#DD88CF',
    borderRadius: wp(4),
    alignSelf: 'center',
    marginTop: hp(3),
    paddingLeft: wp(5),
    fontSize: RFValue(16),
  },
  twoTitle: {
    color: '#4B164C',
    fontSize: RFValue(24),
    fontWeight: '600',
    marginTop: hp(4),
    width: wp(85),
    fontFamily: FONTS.bold,
    alignSelf: 'center',
    textAlign: 'center',
  },
  twoTextinput: {
    height: hp(18),
    width: wp(85),
    borderWidth: wp(0.5),
    borderColor: '#DD88CF',
    borderRadius: wp(4),
    alignSelf: 'center',
    marginTop: hp(3),
    paddingLeft: wp(3),
    fontSize: RFValue(16),
    marginBottom: hp(3),
    textAlignVertical: 'top',
  },
  threeTitle: {
    color: '#4B164C',
    fontSize: RFValue(24),
    fontWeight: '600',
    marginTop: hp(3),
    width: wp(85),
    fontFamily: FONTS.bold,
    alignSelf: 'center',
    textAlign: 'center',
  },
  weightTitle: {
    color: 'black',
    fontSize: RFValue(15),
    fontWeight: '600',
    marginTop: hp(5),
    width: wp(80),
    fontFamily: FONTS.bold,
    alignSelf: 'center',
  },
  weightTextinput: {
    height: hp(5.5),
    width: wp(70),
    borderWidth: wp(0.5),
    borderColor: '#DD88CF',
    borderRadius: wp(3),
    marginTop: hp(1),
    paddingLeft: wp(3),
    fontSize: RFValue(16),
    marginBottom: hp(3),
    marginLeft: wp(9),
  },
  heightTitle: {
    color: 'black',
    fontSize: RFValue(15),
    fontWeight: '600',
    width: wp(80),
    fontFamily: FONTS.bold,
    alignSelf: 'center',
    marginTop: hp(1),
  },
  heightTextinput: {
    height: hp(5.5),
    width: wp(70),
    borderWidth: wp(0.5),
    borderColor: '#DD88CF',
    borderRadius: wp(3),
    paddingLeft: wp(3),
    fontSize: RFValue(16),
    marginBottom: hp(-2.2),
    marginLeft: wp(9),
    marginTop: hp(1.5),
  },
  continueTouchable: {
    backgroundColor: '#4B164C',
    height: hp(8),
    width: wp(80),
    borderWidth: wp(0.1),
    borderColor: '#4B164C',
    marginTop: hp(7),
    borderRadius: wp(100),
    alignSelf: 'center',
  },
  continueText: {
    color: 'white',
    fontSize: RFValue(16),
    fontFamily: FONTS.bold,
    alignSelf: 'center',
    marginTop: hp(2.5),
  },
  messagetext: {
    color: 'red',
    fontSize: RFValue(10),
    marginLeft: wp(8),
  },
  messagetextName: {
    color: 'red',
    fontSize: RFValue(14),
    marginLeft: wp(8),
    position: 'absolute',
    marginTop: hp(30),
  },
  messagetextAbout: {
    color: 'red',
    fontSize: RFValue(14),
    marginLeft: wp(8),
    position: 'absolute',
    marginTop: hp(42),
  },
  messagetextWeight: {
    color: 'red',
    fontSize: RFValue(14),
    marginLeft: wp(9),
    position: 'absolute',
    marginTop: hp(33),
  },
  messagetextHeight: {
    color: 'red',
    fontSize: RFValue(14),
    marginLeft: wp(9),
    position: 'absolute',
    marginTop: hp(46),
>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c
  },
});

export default SignIn;
