import * as React from 'react';
import {Button, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProductList from '../../screen/BollywoodList';
import SaveVideo from '../../component/SaveVideo';
import FavouriteVideo from '../../component/FavouriteVideo';
import LikedVideo from '../../component/LikedVideo';
import MyTabs from '../TabNavigation';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Dashboard" component={MyTabs} options={{
        drawerIcon: () => (
          <Image source={require("../../../../assets/homeIcon.png")}  style={{ color: 'green', height:20, width:20 }}/>
        ),
      }} />
       <Drawer.Screen name="Save video" component={SaveVideo} options={{
        drawerIcon: () => (
          <Image source={require("../../../../assets/multimedia.png")}  style={{ color: 'green', height:20, width:20 }}/>
        ),
      }} />
       <Drawer.Screen name="Favourite Videos" component={FavouriteVideo} options={{
        drawerIcon: () => (
          <Image source={require("../../../../assets/favorite.png")}  style={{ color: 'green', height:20, width:20 }}/>
        ),
      }} />
       <Drawer.Screen name="Liked Videos" component={LikedVideo} options={{
        drawerIcon: () => (
          <Image source={require("../../../../assets/heart.png")}  style={{ color: 'green', height:20, width:20 }}/>
        ),
      }} />
      </Drawer.Navigator>

  );
}
