import React, {Component, createRef} from 'react';
import {
  View,
  Footer,
  FooterTab,
  Button,
  Text,
  List,
  ListItem,
  Left,
  Right,
  Content,
  Radio,
  Icon,
  Container,
} from 'native-base';
import {Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import constants from '../utils/constants';
const {height, width} = Dimensions.get('window');
export default class FooterTabsExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
          selectedSort: 'HighToLow'
        }
    }
    
  sheetRef = createRef(null);
  fall = new Animated.Value(1);

  handleSelection(){
    alert("i am clicked")
  }
  
  renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 10,
        height: 250,
      }}>
      <Text style={{fontWeight: 'bold', margin: 10}}>SORT BY</Text>
      <View
        style={{
          backgroundColor: '#ccc',
          height: 1,
          width: width * 0.9,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}></View>
      <List>
        <ListItem  >
          <Left style={{alignItems:'center'}}>
            <Icon type="Foundation" name="burst-new" style={{fontSize: 20,marginRight: 10}}/>
            <Text style={{textAlign: 'center', fontWeight:'bold'}}>Latest</Text>
          </Left>
          <Right>
            <Radio selected={this.state.selectedSort === "Latest"} onPress={() => this.setState({selectedSort: "Latest"})} />
          </Right>
        </ListItem>
        <ListItem button={true} onPress = {() => this.handleSelection()} >
          <Left>
          <Icon type="Ionicons" name="arrow-up-circle-outline" style={{fontSize: 20,marginRight: 10}}/>
            <Text style={{textAlign: 'center'}}>Price : High to Low</Text>
          </Left>
          <Right>
            <Radio selected={this.state.selectedSort === "HighToLow"}  onPress={() => this.setState({selectedSort:"HighToLow"})} />
          </Right>
        </ListItem>
        <ListItem >
          <Left>
          <Icon type="Ionicons" name="arrow-down-circle-outline" style={{fontSize: 20,marginRight: 10}}/>
            <Text style={{textAlign: 'center'}}>Price : Low to High</Text>
          </Left>
          <Right>
            <Radio selected={this.state.selectedSort === "LowToHigh"} onPress={() => this.setState({selectedSort: "LowToHigh"})} />
          </Right>
        </ListItem>
      </List>
    </View>
  );

  render() {
    console.log(this.state)
    return (
      <Footer>
        <BottomSheet
          ref={this.sheetRef}
          snapPoints={[250, 0]}
          borderRadius={10}
          callbackNode={this.fall}
          initialSnap={1}
          enabledGestureInteraction
          renderContent={this.renderContent}
        />
        <FooterTab style={{backgroundColor: '#fff'}}>
          <Button onPress={() => this.sheetRef.current.snapTo(0)}>
            <Text style={{fontSize: 15, padding: 10, color: 'black'}}>
              <Icon
                type="MaterialCommunityIcons"
                name="sort"
                style={{color: 'black', fontSize: 20}}
              />
              Sort
            </Text>
          </Button>
          <View
            style={{
              marginVertical: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#ccc'}}>|</Text>
          </View>
          <Button onPress={() => this.props.navigation.navigate(constants.Filters)}>
            <Text style={{fontSize: 15, padding: 10, color: 'black'}}>
              {' '}
              <Icon
                type="Ionicons"
                name="filter-outline"
                style={{color: 'black', fontSize: 20}}
              />{' '}
              Filter
            </Text>
          </Button>
        </FooterTab>
      </Footer>

      //   </Container>
    );
  }
}
