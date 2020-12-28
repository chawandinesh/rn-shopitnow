import React, {Component} from 'react';
import {Image, Dimensions, View} from 'react-native';
import {Card, CardItem, Text} from 'native-base';
const {height, width} = Dimensions.get('window');
export default class CardImageExample extends Component {
  productsList = [
    {
      name: 'Highlander Men Blue shirt',
      desc: 'good fit and comfort',
      price: '$56',
      image: require('../assets/images/shirt1.jpg'),
    },
    {
      name: 'Roadster White and red shirt',
      desc: 'nice and good comfort',
      price: '$23',
      image: require('../assets/images/shirt2.jpg'),
    },
    {
      name: 'Wrogon Blue shirt casual',
      desc: 'slim fit and good',
      price: '$24',
      image: require('../assets/images/shirt3.jpg'),
    },
    {
      name: 'Roadster brown checked',
      desc: 'good knowledge',
      price: '$32',
      image: require('../assets/images/shirt4.jpg'),
    },
    {
      name: 'Peter england shirt',
      desc: 'good fit',
      price: '$28',
      image: require('../assets/images/shirt5.jpg'),
    },
    {
      name: 'Roadster Black Checked',
      desc: 'black checked and good fit',
      price: '$19',
      image: require('../assets/images/shirt6.jpg'),
    },
    {
      name: 'Wrogon Red Black half sleeve',
      desc: 'fit comfort',
      price: '$21',
      image: require('../assets/images/shirt7.jpg'),
    },
    {
      name: 'Highlander White shirt',
      desc: 'well fabricated',
      price: '$29',
      image: require('../assets/images/shirt8.jpg'),
    },
  ];
  component = (
    <Card style={{width: width * 0.48, marginTop: 1}}>
      <CardItem cardBody>
        <Image
          source={require('../assets/images/shirt1.jpg')}
          resizeMode="stretch"
          style={{height: 200, width: null, flex: 1}}
        />
      </CardItem>
      <CardItem style={{backgroundColor: '#fff', flexWrap: 'wrap'}}>
        <View style={{margin: 0}}>
          <Text
            style={{
              // textAlign: 'left',
              fontWeight: 'bold',
              fontSize: 20,
              width: '100%',
            }}>
            Item name
          </Text>
        </View>
        <Text style={{textAlign: 'left', color: 'gray', fontSize: 15}}>
          Fashion shop 80%
        </Text>
        <Text style={{textAlign: 'left', fontWeight: 'bold', width: '100%'}}>
          $110
        </Text>
      </CardItem>
    </Card>
  );
  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          margin: 0,
          flexWrap: 'wrap',
          width: width,
        }}>
        {this.productsList.map((e, idx) => (
          <Card style={{width: width * 0.48, marginTop: 1}} key={idx}>
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
                    // textAlign: 'left',
                    fontWeight: 'bold',
                    fontSize: 20,
                    width: '100%',
                  }}>
                  {e.name.slice(0,15)}...
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
        ))}
        {/* {this.component}
        {this.component}
        {this.component}
        {this.component}
        {this.component}
        {this.component} */}
      </View>
    );
  }
}
