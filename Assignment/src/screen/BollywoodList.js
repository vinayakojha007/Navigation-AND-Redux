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

import {loadProduct} from '../actions';
import Carousel from '../component/carousel';
import {dummyData} from '../data/dummyData';
import {addItemToLikes} from '../actions';

class BollywoodList extends React.Component {
  loadProduct = () => {
    this.props.dispatchLoadbMovies(this.state);
  };
  addItem = item => {
    dispatch(addItemToLikes(item));
  };
 

  render() {
    const {bMovies} = this.props;
    

    return (
      <View style={styles.container}>
        <ScrollView style={styles.BooksContainer}>
          <View style={styles.CarouselContainer}>
            <Carousel data={dummyData} />
          </View>
          {bMovies.map((bMovies, index) => (
            <View style={styles.book} key={index}>
              <View>
                <ImageBackground
                  style={styles.MovieImage}
                  source={{
                    uri: bMovies.imageUrl,
                  }}>
                  <TouchableOpacity>
                    <Image
                    source={require('../../../assets/heart.png')}
                    style={{
                      color: 'green',
                      height: 25,
                      width: 25,
                      alignSelf: 'flex-end',
                    }}
                  />
                  </TouchableOpacity>
                  
                </ImageBackground>
              </View>
              <View style={{padding: 5}}>
                <Text style={styles.name}>{bMovies.name}</Text>
                <Text style={styles.details}> {bMovies.genre}</Text>
                <Text style={styles.details}>{bMovies.imdbRating}</Text>
                <Text style={styles.details}>{bMovies.director}</Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => {
                      addItem(bMovies[index]);
                    }}
                    style={{marginRight: 8}}>
                    <Text>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text>Watch Later</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate("MovieDetail")}}>
                <Image
                  source={require('../../../assets/right-arrow.png')}
                  style={{
                    color: 'green',
                    height: 25,
                    width: 25,
                    alignSelf: 'flex-end',
                  }}
                />
              </TouchableOpacity>
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
    backgroundColor:'teal'
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
    flexDirection: 'row',
    borderWidth:1,
    // backgroundColor:'mediumturquoise'
  },
  name: {
    fontSize: 15,
    color: 'black',
    marginRight: 10,
  },
  details: {
    fontSize: 14,
    color: 'white',
  },
  CarouselContainer:{
   
  },
  MovieImage:{
    borderRadius:20,
    height: 120, width: 100
  }
});

const mapDispatchToProps = {
  dispatchLoadbMovies: bollywood => loadProduct(bollywood),
};

const mapStateToProps = state => ({
  bMovies: state.BollywoodReducer.bollywood,
});

export default connect(mapStateToProps, mapDispatchToProps)(BollywoodList);
