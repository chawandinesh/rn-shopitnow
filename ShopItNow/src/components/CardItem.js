import React, {Component, useEffect} from 'react';
import {Image, Dimensions, View, TouchableOpacity, TouchableOpacityBase} from 'react-native';
import {Card, CardItem, Text} from 'native-base';
import {useSelector} from 'react-redux';
import constants from '../utils/constants';
const {height, width} = Dimensions.get('window');
export const CardImageExample = (props) => {
  const productsList = useSelector((state) => state.products.data);
  const filteredProducts = props.items
    ? props.items.length
      ? productsList.filter(
          (e) =>
            e.name
              .trim()
              .toLowerCase()
              .includes(props.items.trim().toLowerCase()) ||
            e.desc
              .trim()
              .toLowerCase()
              .includes(props.items.trim().toLowerCase()),
        )
      : []
    : productsList;
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 0,
        flexWrap: 'wrap',
        width: width,
      }}>
      {filteredProducts.map((e, idx) => (
        <TouchableOpacity

          key={idx}
          onPress={() => props.navigation.navigate(constants.Product,{id: e.id})}>
          <Card style={{width: width * 0.489, marginTop: 1}}>
            <CardItem cardBody>
              <Image
                source={e.image}
                resizeMode="stretch"
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem style={{backgroundColor: '#fff', flexWrap: 'wrap'}}>
              <View style={{margin: 0}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    width: '100%',
                  }}>
                  {e.name.slice(0, 15)}...
                </Text>
              </View>
              <Text style={{textAlign: 'left', color: 'gray', fontSize: 15}}>
                {e.desc}
              </Text>
              <Text
                style={{textAlign: 'left', fontWeight: 'bold', width: '100%'}}>
                {e.price}
              </Text>
            </CardItem>
          </Card>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CardImageExample;
