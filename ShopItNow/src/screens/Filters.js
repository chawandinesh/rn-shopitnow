import React, {useState} from 'react';
import {useSelector} from 'react-redux';
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
  const [filterType, setFilterType] = useState({type: 'Gender', data: ''});
  const filterData = {
    Gender: useSelector((state) => state.filters.gender),
    Price: useSelector((state) => state.filters.Price),
    Brand: useSelector((state) => state.filters.Brands),
  };

  const LeftSideFilters = (
    <List>
      {Object.keys(filterData).map((e, idx) => (
        <ListItem
          onPress={() => {
            setFilterType({...filterType, type: e});
          }}
          noIndent={true}
          style={{backgroundColor: filterType.type === e ? '#fff' : null}}
          key={idx}>
          <Left>
            <Text>{e}</Text>
          </Left>
        </ListItem>
      ))}
    </List>
  );
  console.log(filterType)

  const RightSideFilters = (
    <List>
      {filterData[filterType.type].map((e, idx) => (
        <ListItem
          key={idx}
          onPress={() => {
            setFilterType({...filterType, data: e});
          }}
          noIndent={true}
          style={{backgroundColor: filterType.data === e ? '#eee' : null}}>
          <Left>
            <Text>{e}</Text>
          </Left>
        </ListItem>
      ))}
    </List>
  );

  const BodyFilters = (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 2, elevation: 1, backgroundColor: '#eeeeee'}}>
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
