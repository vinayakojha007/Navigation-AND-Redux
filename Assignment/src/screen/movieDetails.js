import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList,
  } from 'react-native';
  import React from 'react';
  import {useNavigation} from '@react-navigation/native';
  import {useDispatch, useSelector} from 'react-redux';
  
  
  const Cart = () => {
  
    const items = useSelector(state => state);
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              width: '100%',
              height: 70,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                paddingLeft: 20,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 15,
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <Text style={{fontWeight: '700', fontSize: 20}}>Back</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={items}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '90%',
                    height: 100,
                    borderRadius: 15,
                    alignSelf: 'center',
                    marginTop: 10,
                    borderWidth: 0.2,
                    borderColor: '#8e8e8e',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                  }}>
                  <View style={{width: '60%', padding: 20}}>
                    <Text>{item.name}</Text>
                    <TouchableOpacity
                      style={{
                        height: 30,
                        borderRadius: 10,
                        width: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'red',
                        marginTop: 5,
                      }}
                      >
                    </TouchableOpacity>
                  </View>
                  <Image
                    source={{uri: item.imageUrl}}
                    style={{
                      width: 100,
                      height: 90,
                      borderRadius: 10,
                      marginRight: 15,
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default Cart;
  