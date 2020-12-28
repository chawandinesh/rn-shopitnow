import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {
  Content,
  Container,
  Header,
  Footer,
  Body,
  Button,
  Left,
  Right,
  Icon,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('window');
const Orders = (props) => {
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
          Account
        </Text>
      </Header>

      <View style={{flex: 1}}>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 4}}>
          <Icon type="EvilIcons" name="user" style={{fontSize: 200}} />
        </View>
        <View style={{alignItems: 'center', flex: 1}}>
          <Text>
            Email: <Text style={{color: 'red'}}>empty</Text>
          </Text>
        </View>
        <View style={{flex: 7, alignSelf: 'center'}}>
          <Button
            style={{
              width: width * 0.25,
              justifyContent: 'center',
              backgroundColor: '#529FF3',
              borderRadius: 10
            }}>
            <Text style={{textAlign: 'center', color: '#fff'}}> SignIn </Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default Orders;
