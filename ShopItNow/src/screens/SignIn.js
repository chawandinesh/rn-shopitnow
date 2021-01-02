import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Dimensions, TouchableOpacity} from 'react-native';
import {
  Container,
  Text,
  View,
  Form,
  Icon,
  Spinner,
  Item,
  Input,
  Button,
  Grid,
  Row,
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import constants from '../utils/constants';
import {ACTIONS} from '../redux/actions';
const {height, width} = Dimensions.get('window');

export function Signin(props) {
  const [showPassword, setShowPassword] = useState(false);
  const loginStatus = useSelector((state) => state.loginStatus);
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({email: '', password: ''});

  const handleLogin = () => {
    setLoading(true);
    if (!loginData.email.length || !loginData.password.length) {
      alert('please fill all details');
      setLoading(false);
    } else {
      auth()
        .signInWithEmailAndPassword(loginData.email, loginData.password)
        .then(() => {
          alert('User signed in');
          setLoading(false);
          props.navigation.goBack();
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          if (error.code === 'auth/user-not-found') {
            alert('There is no user record corresponding to this');
          }
          if (error.code === 'auth/invalid-email') {
            alert('invalid email format');
          }
          if (error.code === 'auth/wrong-password') {
            alert(
              'The password is invalid or the user does not have a password',
            );
          }
          if (error.code === 'auth/too-many-requests') {
            alert(
              'Access to this account has been temporarily disabled due to many failed login attempts',
            );
          }
        });
    }
  };
  return (
    <Container>
      <Grid>
        <Row
          style={{
            height: height * 0.6,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Form
            style={{
              width: width * 0.7,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Item>
              <Input
                placeholder="Email"
                value={loginData.email}
                onChangeText={(text) =>
                  setLoginData({...loginData, email: text})
                }
              />
            </Item>
            <Item last>
              <Input
                secureTextEntry={showPassword ? false : true}
                placeholder="Password"
                value={loginData.password}
                onChangeText={(text) =>
                  setLoginData({...loginData, password: text})
                }
              />
              <Icon
                active
                name={showPassword ? 'eye' : 'eye-off'}
                onPress={() => setShowPassword(!showPassword)}
              />
            </Item>
            <TouchableOpacity
              onPress={() => props.navigation.navigate(constants.SignUp)}
              style={{width: width * 0.7, alignItems: 'flex-end', margin: 10}}>
              <Text style={{color: '#5cbebd'}}>Signup</Text>
            </TouchableOpacity>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Button
                style={{backgroundColor: '#5cbedb', width: width * 0.3, justifyContent:'center'}}
                onPress={() => handleLogin()}>
                {loading ? <Spinner color="#fff"/> : <Text> SignIn </Text>}
              </Button>
            </View>
          </Form>
        </Row>
      </Grid>
    </Container>
  );
}

export default Signin;
