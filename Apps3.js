import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './login.js';
import SignUpPage from './singUp.js'
import ShopPage from './shop.js'
import BagPage from './bag.js'
import FavoritePage from './favorit.js'
import ProfilePage from './profile.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/icon/home-aktif.png';
import HomeInaktif from './assets/icon/home.png';
import Shop from './assets/icon/shop-aktif.png'
import ShopInaktif from './assets/icon/shop-non-aktif.png'
import Bag from './assets/icon/bag-aktif.png'
import BagInaktif from './assets/icon/bag-non-aktif.png'
import Favorite from './assets/icon/favorite-aktif.png'
import FavoriteInaktif from './assets/icon/favorite-non-aktif.png'
import Profile from './assets/icon/profil-aktif.png'
import ProfileInaktif from './assets/icon/profil-non-aktif.png'

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeAktif : HomeInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopPage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Shop : ShopInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={BagPage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Bag : BagInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritePage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Favorite : FavoriteInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Profile : ProfileInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUpPage} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}} />
        <Stack.Screen name="ShopPage" component={ShopPage} options={{headerShown: false}} />
        <Stack.Screen name="BagPage" component={BagPage} options={{headerShown: false}} />
        <Stack.Screen name="FavoritePage" component={FavoritePage} options={{headerShown: false}} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;