import * as React from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import {loadProduct} from './actions';
import Carousel from '../component/carousel';
import { dummyData } from '../data/dummyData';
import { hollywood } from '../actions';
import HollywoodReducer from '../reducers/HollywoodReducer';


class HollywoodList extends React.Component {
  hollywood = () => {
    this.props.dispatchLoadhollywood(this.state);
  };
   
  render() {
    const {hollywood} = this.props;

    return (
      <View style={styles.container}>
       

        <ScrollView style={styles.BooksContainer}>
        <View>
            <Carousel data = {dummyData}/>
        </View>
          {hollywood.map((hollywood, index) => (
            <View style={styles.book} key={index}>
            <View>
            <ImageBackground
              style={{height:120,width:100}}
              source={{
                uri: hollywood.imgUrl,
              }}
            >
                <Image source={require('../../../assets/heart.png')} style={{ color: 'green', height:25, width:25 ,alignSelf:'flex-end'}}/>
            </ImageBackground>
            </View>
            <View style={{padding:5}}>
            <Text style={styles.name}>{hollywood.name}</Text>
              <Text style={styles.details}> {hollywood.genre}</Text>
              <Text style={styles.details}>{hollywood.imdbRating}</Text>
              <Text style={styles.details}>{hollywood.director}</Text>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{marginRight:8}}><Text>Save</Text></TouchableOpacity>
                <TouchableOpacity><Text>Watch Later</Text></TouchableOpacity>
              </View>
              
            </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    paddingTop: 30,
    paddingBootom: 20,
    fontSize: 20,
    textAlign: 'center',
  },

  BooksContainer: {
    borderWidth: 1,
    borderTopColor: 'red',
    flex: 1,
  },

  book: {
    padding: 20,
    flexDirection:'row',
    
  },
  name: {
    fontSize: 15,
    color:'black',
    marginRight:10
  },
  details: {
    fontSize: 14,
    color: 'grey',
  },
});

const mapDispatchToProps = {
  dispatchLoadhollywood: hollywood => hollywood(hollywood),
};

const mapStateToProps = state => ({
  hollywood: state.HollywoodReducer.hollywood,
});

export default connect(mapStateToProps, mapDispatchToProps)(HollywoodList);
