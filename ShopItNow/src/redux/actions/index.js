import {ACTION_TYPES} from '../actionTypes';
import auth from '@react-native-firebase/auth';


const atnUserLogin = (data) => {
    return {
        type: ACTION_TYPES.USER_LOGIN_SUCCESS,
        data: data
    }
};

const atnUserGetProducts = () => {
  return {
    type: ACTION_TYPES.USER_FETCH_PRODUCTS,
  };
};

export const ACTIONS = {
  atnUserGetProducts,
  atnUserLogin,
};
