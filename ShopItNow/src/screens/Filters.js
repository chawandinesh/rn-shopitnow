import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {
  Container,
  Header,
  List,
  ListItem,
  Footer,
  Body,
  Left,
  Right,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('window');

const Filters = (props) => {
  const filterTypes = [
    {name: 'Gender', indent: false, backgroundColor: '#eee'},
    {name: 'Price', indent: false, backgroundColor: '#eee'},
    {name: 'Brand', indent: true, backgroundColor: '#fff'},
  ];

  const filterBrands = [
    'Adidas',
    'Bata',
    "HRX",
    'Nike',
    'Peter England',
    'Puma',
    'Roadster',
    'Wrogon',
  ];
  const LeftSideFilters = (
    <List>
      {filterTypes.map((e, idx) => (
        <ListItem
          noIndent={e.indent}
          style={{borderBottomWidth: 0, backgroundColor: e.backgroundColor}}
          key={idx}>
          <Left>
            <Text>{e.name}</Text>
          </Left>
        </ListItem>
      ))}
    </List>
  );

  const RightSideFilters = (
    <List>
      {filterBrands.map((e, idx) => (
        <ListItem key={idx}>
          <Left>
            <Text>{e}</Text>
          </Left>
        </ListItem>
      ))}
    </List>
  );

  const BodyFilters = (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 2, elevation: 1, backgroundColor: '#eee'}}>
        {LeftSideFilters}
      </View>
      <View style={{flex: 3, backgroundColor: '#fff', elevation: 1}}>
        {RightSideFilters}
      </View>
    </View>
  );

  return (
    <Container style={{backgroundColor: '#eee'}}>
      <Header style={{backgroundColor: '#fff'}}>
        <Left>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Filters</Text>
        </Left>
        <Body></Body>
        <Right></Right>
      </Header>
      {BodyFilters}
      <Footer style={{backgroundColor: '#fff', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={{fontWeight: 'bold'}}>APPLY</Text>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default Filters;
