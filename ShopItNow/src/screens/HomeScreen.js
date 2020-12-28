import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Container, Content, ActionSheet, Root, Drawer} from 'native-base';
import HeaderComponent from '../components/Header';
import HeaderSearch from '../components/HeaderSearch';
import FooterTabsExample from '../components/FooterTab';
import BottomSheet from '../components/BottomActionSheet';
import CardItem from '../components/CardItem'

function HomeScreen(props) {
  return (
    <Container>
                      {/* <Drawer
          ref={(ref) => {
            this.drawerRef = ref;
          }}
          content={<Text>yoyo</Text>}
          onClose={() => this.drawerRef._root.close()}/> */}
      <HeaderComponent navigation= {props.navigation} />
      {/* <HeaderSearch /> */}
      <Content style={{backgroundColor: '#eee'}}>
        <CardItem/>
      </Content>
      <FooterTabsExample navigation= {props.navigation} />
    </Container>
  );
}

export {HomeScreen};
