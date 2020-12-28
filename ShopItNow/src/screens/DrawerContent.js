import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {Thumbnail, Container, Footer, Header, Body, Icon} from 'native-base';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import constants from '../utils/constants';

const {height, width} = Dimensions.get('window');
export default function DrawerContent(props) {
  const [active, setActive] = React.useState('');
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View>
          <Image
            source={require('../assets/images/drawerTop1.jpg')}
            resizeMode={'stretch'}
            style={{width: width * 0.7, height: height * 0.15, margin: 5}}
          />

          <Drawer.Section>
            <Drawer.Item
              label="Ordered"
              icon={() => (
                <Icon
                  type="MaterialCommunityIcons"
                  name="truck-delivery-outline"
                />
              )}
            //   active={active === 'ordered'}
              onPress={() => setActive('ordered')}
            />
            <Drawer.Item
              label="Viewed"
              icon={() => (
                <Icon type="MaterialCommunityIcons" name="eye-outline" />
              )}
            //   active={active === 'viewed'}
              onPress={() => setActive('viewed')}
            />
            <Drawer.Item
              label="Account"
              icon={() => <Icon type="EvilIcons" name="user" />}
            //   active={active === 'account'}
              onPress={() => {
                  setActive('account')
                  props.navigation.navigate(constants.Profile)
                
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section>
        <Drawer.Item label="Logout" onPress={() => setActive('logout')} />
      </Drawer.Section>
    </View>
    //    <Container>
    //        <Header style={{backgroundColor:'#fff', height: height* 0.15}}><Image source={require('../assets/images/drawerTop1.jpg')} resizeMode={"stretch"} style={{width:width * 0.7, height: height * 0.15 ,margin:5}}/></Header>
    //        <Body style={{marginTop: 30, alignItems:"flex-start"}}>
    //            <View style={{marginTop: 5}}>
    //                <Text>Orderd</Text>
    //            </View>
    //            <View style={{marginTop: 5}}>
    //                <Text>Viewed</Text>
    //            </View>
    //            <View style={{marginTop: 5}}>
    //                <Text>Account</Text>
    //            </View>
    //        </Body>
    //        {/* <Footer style={{backgroundColor:"darkred",alignItems:'center'}}><Text style={{color:'#fff'}}>Logout</Text></Footer> */}
    //    </Container>
  );
}
