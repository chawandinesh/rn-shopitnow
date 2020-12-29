import React from 'react';
import {View, Text} from 'react-native';
import {Header, Container, Footer, Content, Grid, Col, Item, Icon,Button, Input} from 'native-base';

export default function SearchItems(props) {
  return (
    <Container>
      <Header
        searchBar
        rounded
        style={{
          backgroundColor: 'white',
          borderColor: 'black',
          borderBottomWidth: 0,
        }}>
        <Item style={{justifyContent:'center', alignItems:'center'}}>
            <Icon type="AntDesign" name="left" onPress={() => props.navigation.goBack() }/>
          {/* <Icon name="ios-people" /> */}
          <Input placeholder="Search" />
          <Icon name="ios-search" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>No items</Text>
      </View>
      
    </Container>
  );
}
