<<<<<<< HEAD
import React from 'react';
import {observer} from 'mobx-react-lite';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {hp, wp} from '../helpers/responsive';
import {Image, View} from 'react-native';
import {images} from '../constants';
import {Favorite, Main, Profile, Settings} from '../screens';
=======
import React, {Component} from 'react';
import {observer} from 'mobx-react-lite';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RFValue, hp, wp} from '../helpers/responsive';
import {Image, View} from 'react-native';
import {images} from '../constants';
// import Main from '../screens/Home/Main';
import {
  FavoritesPage,
  MessagePage,
  ProfilePage,
  Main,
  ProfileDetail,
} from '../screens';

>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c
const Tab = createBottomTabNavigator();

const BottomTabView = (focused, index) => {
  const style = {
    width: wp(28),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(3),
    height: hp(8.5),
    overflow: 'hidden',
    marginTop: Platform.OS === 'ios' ? hp(3) : 0,
  };
  return style;
};

const TABS = [
<<<<<<< HEAD
  {name: 'Favorite', component: Favorite, icon: images.tabs1},
  {name: 'Main', component: Main, icon: images.tabs2},
  {name: 'Settings', component: Settings, icon: images.tabs3},
  {name: 'bb', component: Favorite, icon: images.tabs4},
=======
  {name: 'ProfileDetail', component: ProfileDetail, icon: images.matchicons},
  {name: 'Main', component: Main, icon: images.shape},
  {name: 'FavoritesPage', component: FavoritesPage, icon: images.favorite},
  {name: 'MessagePage', component: MessagePage, icon: images.message},
  {name: 'ProfilePage', component: ProfilePage, icon: images.profile},
>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c
];

const Tabs = observer(() => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        gestureDirection: 'vertical',
        animation: 'slide_from_right',
        tabBarShowLabel: false,
        tabBarStyle: {
<<<<<<< HEAD
          flex: 1,
          height: hp(9),
          width: wp(100),
          borderRadius: wp(3),
          position: 'absolute',
          backgroundColor: 'white',
          opacity: 0.9,
=======
          //   display: Store.storyActive ? 'none' : 'flex',
          flex: 1,
          height: hp(11),
          width: wp(100),
          //   bottom: hp(2),
          //   marginLeft: wp(5),
          // borderRadius: wp(3),
          position: 'absolute',
          backgroundColor: 'white',
          opacity: 1,
>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c
          borderColor: '#ECF0F6',
          borderWidth: 2,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          alignSelf: 'center',
          paddingHorizontal: wp(3),
        },
      }}>
      {TABS.map(screen => (
        <Tab.Screen
          key={screen.name}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={BottomTabView(focused)}>
                {focused && (
                  <Image
                    source={images.tabline}
                    resizeMode="contain"
                    style={{
                      width: wp(28),
                      height: hp(0.35),
                      position: 'absolute',
<<<<<<< HEAD
                      top: -hp(0.05),
=======
                      top: -hp(0.09),
>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c
                    }}
                  />
                )}
                <Image
                  source={screen.icon}
                  resizeMode="contain"
                  style={{
<<<<<<< HEAD
                    width: wp(5.5),
                    height: wp(5.5),
                    tintColor: focused ? '#FF7020' : '#768CA7',
=======
                    width: wp(7),
                    height: wp(7),
                    tintColor: focused ? '#FF826E' : '#C1C0C9',
                    marginBottom: hp(3),
>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c
                  }}
                />
              </View>
            ),
          }}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Tab.Navigator>
  );
});

export default Tabs;
