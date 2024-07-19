import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  Splash,
  Detail,
  Intro,
  Main,
  Settings,
  SignIn,
<<<<<<< HEAD
  Welcome,
  Scan,
  Favorite,
=======
  FavoritesPage,
  MessagePage,
  ProfilePage,
  ProfileDetail,
>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c
} from '../screens';
import {observer} from 'mobx-react-lite';
import {NavigationContainer} from '@react-navigation/native';
import store from '../store/store';
import Tabs from './tab';
<<<<<<< HEAD
import {LogModal, RateModal} from '../components';
=======
>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c

const AppStack = createNativeStackNavigator();

const SCREENS = [
  {name: 'Splash', component: Splash},
  {name: 'SignIn', component: SignIn},
<<<<<<< HEAD
  {name: 'Welcome', component: Welcome},
  {name: 'Main', component: Tabs},
  {name: 'Scan', component: Scan},
  {name: 'Detail', component: Detail},
  {name: 'Favorite', component: Tabs},
  {name: 'Settings', component: Tabs},
=======
  {name: 'Main', component: Tabs},
  {name: 'FavoritesPage', component: Tabs},
  {name: 'MessagePage', component: Tabs},
  {name: 'ProfilePage', component: Tabs},
  {name: 'ProfileDetail', component: ProfileDetail},
>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c
];

const openModal = name => store[name] === true;

const StackNavigation = observer(() => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName={'Splash'}
        screenOptions={{
          animation: 'slide_from_right',
          gestureEnabled: false,
          gestureDirection: 'vertical',
          headerShown: false,
        }}>
        {SCREENS.map(screen => (
          <AppStack.Screen
            key={screen.name}
            options={{
              animation: 'slide_from_right',
              gestureEnabled: false,
              gestureDirection: 'vertical',
              headerShown: false,
            }}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </AppStack.Navigator>
<<<<<<< HEAD
      {openModal('RateModal') && <RateModal />}
      {openModal('LogModal') && <LogModal />}
=======
      {/* {openModal('HydroModal') && <HydroModal  ÖRNEKKKKKKK/>} */}
>>>>>>> a1fd2e5f014d7b480a17be55a2b819de1d1acd5c

      {/* 		
			Örnek modal Importu Aşağıda ki gibidir
			{openModal("storyActive") && <Stories />} */}
    </NavigationContainer>
  );
});

export default StackNavigation;
