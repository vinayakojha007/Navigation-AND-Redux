import React from "react";
import ProductList from "../screen/BollywoodList";
import { Image,StyleSheet } from "react-native";
import HollywoodList from "../screen/HollywoodList";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Bolloywood" component={ProductList} options={{
        headerShown:false,
         tabBarIcon: () => (
          <Image source={require("../../../assets/movie_icon.png")}  style={styles.icon}/>
        ),
      }} />
      <Tab.Screen name="Hollywood" component={HollywoodList} options={{
        headerShown:false,
         tabBarIcon: () => (
          <Image source={require("../../../assets/multimedia.png")} style={styles.icon}/>
        ),
      }} />
    </Tab.Navigator>
  );
}
const styles =StyleSheet.create({
  icon:{
  color:'green',
  height:20,
  width:20
  }
})