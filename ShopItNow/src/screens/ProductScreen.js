import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {
  Content,
  Container,
  Header,
  Footer,
  Body,
  Left,
  Right,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('window');
export default class ProductScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container style={{backgroundColor: '#eee'}}>
        <Header style={{backgroundColor: '#fff', alignItems: 'center'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
              alignItems: 'center',
            }}>
            Cart
          </Text>
        </Header>
        <Body style={{flex: 1, flexDirection: 'row'}}>
          <Text>Empty</Text>
        </Body>
        <Footer
          style={{
            backgroundColor: '#fff',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Text style={{fontWeight: 'bold'}}>Total (0 items)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{
              backgroundColor: 'purple',
              width: width * 0.4,
              alignItems: 'center',
              padding: 10,
              borderRadius: 15,
            }}>
            <Text style={{color: '#fff'}}>PLACE ORDER</Text>
          </TouchableOpacity>
        </Footer>
      </Container>
    );
  }
}
