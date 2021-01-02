import React, {useState} from 'react';
import {Alert, Dimensions} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useSelector, useDispatch} from 'react-redux';
import {ACTIONS} from '../redux/actions';
import {
  Container,
  Text,
  Spinner,
  View,
  Form,
  Item,
  Input,
  Icon,
  Button,
  Grid,
  Row,
} from 'native-base';
import constants from '../utils/constants';
const {height, width} = Dimensions.get('window');

export function SignUp(props) {
  const signUpStatus = useSelector((state) => state.signUpStatus);
  const [loading, setLoading] = useState(false);
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [icons, setIcons] = useState({
    passwordIcon: false,
    confirmPasswordIcon: false,
  });
  const handleSubmit = () => {
    const {password, confirmPassword, email} = signupData;
    setLoading(true);
    if (email.length && password.length && confirmPassword.length) {
      if (password !== confirmPassword) {
        alert("password doesn't match ");
        setLoading(false);
      } else {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then((res) => {
            setLoading(false);
            alert('User account created & signed in!');
            props.navigation.navigate(constants.Profile);
          })
          .catch((error) => {
            setLoading(false);
            if (error.code === 'auth/email-already-in-use') {
              alert('That email address is already in use!');
            }
            if (error.code === 'auth/invalid-email') {
              alert('That email address is invalid!');
            }
          });
      }
    } else {
      setLoading(false);
      alert('please fill all the details');
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
                onChangeText={(text) =>
                  setSignupData({...signupData, email: text})
                }
              />
            </Item>
            <Item last>
              <Input
                secureTextEntry={icons.passwordIcon ? false : true}
                placeholder="Password"
                onChangeText={(text) =>
                  setSignupData({...signupData, password: text})
                }
              />
              <Icon
                active
                name={icons.passwordIcon ? 'eye' : 'eye-off'}
                onPress={() =>
                  setIcons({...icons, passwordIcon: !icons.passwordIcon})
                }
              />
            </Item>
            <Item last>
              <Input
                secureTextEntry={icons.confirmPasswordIcon ? false : true}
                placeholder="Confirm Password"
                onChangeText={(text) =>
                  setSignupData({...signupData, confirmPassword: text})
                }
              />
              <Icon
                active
                name={icons.confirmPasswordIcon ? 'eye' : 'eye-off'}
                onPress={() =>
                  setIcons({
                    ...icons,
                    confirmPasswordIcon: !icons.confirmPasswordIcon,
                  })
                }
              />
            </Item>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Button
                style={{
                  backgroundColor: '#5cbedb',
                  width: width * 0.3,
                  justifyContent: 'center',
                }}
                onPress={handleSubmit}>
                {loading ? <Spinner color="#fff" /> : <Text> SignUp </Text>}
              </Button>
            </View>
          </Form>
        </Row>
      </Grid>
    </Container>
  );
}

export default SignUp;
