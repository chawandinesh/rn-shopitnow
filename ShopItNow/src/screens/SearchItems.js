import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';
import {
  Header,
  Container,
  Footer,
  Content,
  Grid,
  Col,
  Item,
  Icon,
  Button,
  Input,
} from 'native-base';
import CardItems from '../components/CardItem';
export default function SearchItems(props) {
  const [text, setText] = useState('');
  const products = useSelector((state) => state.products.data);

  const handleChangeItems = (items) => {
    setText(items);
    const abc = products.filter((e) =>
      e.name.trim().toLowerCase().includes(items.trim()),
    );
  };
  return (
    <Container>
      <Header
        searchBar
        rounded
        style={{
          backgroundColor: '#fff',
          borderColor: 'black',
          borderBottomWidth: 0,
        }}>
        <Item style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icon
            type="AntDesign"
            name="left"
            onPress={() => props.navigation.goBack()}
          />
          <Input
            placeholder="Search"
            onChangeText={(text) => handleChangeItems(text)}
          />
          <Icon
            name="ios-search-outline"
            type="Ionicons"
            style={{color: 'black'}}
          />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      <Content style={{backgroundColor: '#eee'}}>
        <CardItems items={text} editable={true} />
      </Content>
    </Container>
  );
}
