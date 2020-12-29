import React, {Component, createRef} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Drawer,
  Button,
  Item,
  Input,
  Icon,
  Badge,
  Title,
} from 'native-base';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import constants from '../utils/constants';
export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.drawerRef = createRef(null);
  }

  render() {
    return (
      <Header style={{backgroundColor: '#fff'}}>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}>
            <Icon name="menu" style={{color: 'black'}} />
          </Button>
        </Left>
        <Body>
          <Title style={{color: 'black', fontWeight: 'bold'}}>
            Shop It Now
          </Title>
        </Body>
        <Right>
          <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.navigate(constants.SearchItems)}>
            <Icon name="search" style={{color: 'black'}} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => this.props.navigation.navigate(constants.Favorite)}>
            <Icon
              name="tag-outline"
              type="MaterialCommunityIcons"
              style={{color: 'black'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => this.props.navigation.navigate(constants.Cart)}>
            <Text
              style={{
                borderRadius: 10,
                width: 20,
                zIndex: 3,
                textAlign: 'center',
                color: '#fff',
                backgroundColor: 'red',
                position: 'absolute',
                right: 1,
              }}>
              1
            </Text>
            <Icon
              name="cart-outline"
              type="Ionicons"
              style={{color: 'black'}}
            />
          </TouchableOpacity>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    padding: 5,
  },
});
