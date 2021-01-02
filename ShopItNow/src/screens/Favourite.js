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
export default class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container style={{backgroundColor: '#eee'}}>
        {/* <Header style={{backgroundColor: '#fff', alignItems:'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center', alignItems:'center'}}>Favorite</Text>
        </Header> */}
        <Body style={{flex: 1, flexDirection: 'row'}}>
          <Text>Empty</Text>
        </Body>
        {/* <Footer style={{backgroundColor: '#fff', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text style={{fontWeight: 'bold'}}>APPLY</Text>
          </TouchableOpacity>
        </Footer> */}
      </Container>
    );
  }
}
