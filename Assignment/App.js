import React from 'react';
import rootReducer from './src/reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AppDrawer from './src/navigation/drawer_navigation/AppDrawer';
import {createStackNavigator} from '@react-navigation/stack';
import MyTabs from './src/navigation/TabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import Cart from './src/screen/movieDetails';
const Stack = createStackNavigator();
const store = createStore(rootReducer); // adding reduer inside store
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
              name="AppDrawer"
              component={AppDrawer}
              options={{headerShown: false}}
            />
            <Stack.Screen name="TabNavgation" component={MyTabs} />
            <Stack.Screen name="MovieDetail" component={Cart} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
