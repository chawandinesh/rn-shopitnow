import React, {useState, useEffect} from 'react';
import {Text, View, Dimensions, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
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
import {useDispatch, useSelector} from 'react-redux';
import {ACTIONS} from '../redux/actions';
import constants from '../utils/constants';
const {height, width} = Dimensions.get('window');
const Profile = (props) => {
  const [initializing, setInitializing] = useState(true);
  const dispatch = useDispatch();
  const state = useSelector(state => state.loginStatus)
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user);
    console.log(user,'user')
    dispatch(ACTIONS.atnUserLogin(user))
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            auth()
              .signOut()
              .then(() => console.log('User signed out!'))
              .catch((error) => console.log(error));
          },
        },
      ],
      {cancelable: false},
    );
  };

  if (initializing) return null;

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
          {!user ? (
            <Text>Login</Text>
          ) : (
            <Text>
              Email: <Text style={{color: 'red'}}>{user.email}</Text>
            </Text>
          )}
        </View>
        <View style={{flex: 7, alignSelf: 'center'}}>
          {!user ? (
            <Button
              onPress={() => props.navigation.navigate(constants.SignIn)}
              style={{
                width: width * 0.25,
                justifyContent: 'center',
                backgroundColor: '#529FF3',
                borderRadius: 10,
              }}>
              <Text style={{textAlign: 'center', color: '#fff'}}> SignIn </Text>
            </Button>
          ) : (
            <Button
              onPress={() => handleLogout()}
              style={{
                width: width * 0.25,
                justifyContent: 'center',
                backgroundColor: 'darkred',
                borderRadius: 10,
              }}>
              <Text style={{textAlign: 'center', color: '#fff'}}> Logout </Text>
            </Button>
          )}
        </View>
      </View>
    </Container>
  );
};

export default Profile;
