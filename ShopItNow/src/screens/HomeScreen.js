import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Container, Content, ActionSheet, Root, Drawer} from 'native-base';
import HeaderComponent from '../components/Header';
import HeaderSearch from '../components/HeaderSearch';
import FooterTabsExample from '../components/FooterTab';
import BottomSheet from '../components/BottomActionSheet';
import CardItem from '../components/CardItem';

function HomeScreen(props) {
  return (
    <Container>
      <HeaderComponent navigation={props.navigation} title={{show: false}} />
      <Content style={{backgroundColor: '#eee'}}>
        <CardItem editable={false} navigation = {props.navigation} />
      </Content>
      <FooterTabsExample navigation={props.navigation} />
    </Container>
  );
}

export {HomeScreen};
