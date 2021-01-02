import {ACTION_TYPES} from '../actionTypes';
import auth from '@react-native-firebase/auth';

const atnUserLogin = (data) => {
  return {
    type: ACTION_TYPES.USER_LOGIN_SUCCESS,
    data: data,
  };
};

const atnUserCart = (data) => {
  return {
    type: ACTION_TYPES.USER_CART,
    data: data,
  };
};

const atnUserWishlist = (data) => {
  return {
    type: ACTION_TYPES.USER_WISHLIST,
    data: data,
  };
};

const atnUserGetProducts = () => {
  return {
    type: ACTION_TYPES.USER_FETCH_PRODUCTS,
  };
};

export const ACTIONS = {
  atnUserGetProducts,
  atnUserLogin,
  atnUserCart,
  atnUserWishlist
};
