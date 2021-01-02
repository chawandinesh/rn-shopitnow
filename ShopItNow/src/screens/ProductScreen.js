import React, {Component} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  Content,
  Container,
  Header,
  Footer,
  Body,
  Icon,
  Left,
  Right,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HeaderComponent from '../components/Header';
import {ACTIONS} from '../redux/actions'
const {height, width} = Dimensions.get('window');
export const ProductScreen = (props) => {
  const dispatch = useDispatch()
  const product = useSelector((state) =>
    state.products.data.find((e) => e.id === props.route.params.id),
  );
   const state = useSelector(state => state)
//    console.log(state,'stateredux')

  const handleUserWishList = (data) => {
    //  dispatch(ACTIONS.atnUserWishlist(product))
  }
  console.log(state)

  const handleUserCart = (data) => {
    //   dispatch(ACTIONS.atnUserCart(data))
  }


  return (
    <Container style={{backgroundColor: '#eee'}}>
      <HeaderComponent
        navigation={props.navigation}
        title={{show: true, name: product.name}}
      />

      <Content style={{flex: 1, backgroundColor: '#fff'}}>
        <View>
          <Image
            source={product.image}
            resizeMode="stretch"
            style={{width: width, height: height * 0.6}}
          />
        </View>
        <View style={{margin: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {product.name} and {product.desc}
          </Text>
        </View>
        <View style={{margin: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{product.price}</Text>
        </View>
      </Content>
      <Footer
        style={{
          backgroundColor: '#fff',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={(id) => handleUserWishList(product.id)}
          style={{
            justifyContent: 'center',
            width: width * 0.45,
            borderWidth: 1,
            padding: 9,
            borderRadius: 10,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icon type="Ionicons" name="ios-heart-outline" />
          <Text style={{fontWeight: 'bold', fontSize: 15, margin: 5}}>
            WISHLIST
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(id) => handleUserCart(product.id)}
          style={{
            backgroundColor: 'purple',
            width: width * 0.45,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 15,
            flexDirection: 'row',
          }}>
          <Icon name="cart-outline" type="Ionicons" style={{color: 'white'}} />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              margin: 5,
              color: '#fff',
            }}>
            ADD TO BAG
          </Text>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default ProductScreen;
