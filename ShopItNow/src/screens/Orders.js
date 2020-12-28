import React from 'react';
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
const Orders = (props) => {
  return (
    <Container style={{backgroundColor: '#eee'}}>
      <Header style={{backgroundColor: '#fff'}}>
        <Left>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Filters</Text>
        </Left>
        <Body></Body>
        <Right></Right>
      </Header>
      <Body style={{flex: 1, flexDirection: 'row'}}></Body>
      <Footer style={{backgroundColor: '#fff', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={{fontWeight: 'bold'}}>APPLY</Text>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default  Orders
