import {ACTION_TYPES} from '../actionTypes';
import {ACTIONS} from '../actions';

const initialState = {
  loginStatus: {
    data: [],
  },
  filters: {
    gender: ['Boys', 'Girls', 'Male', 'Female'],
    Price: ['Under $20', '$20 to $40', '$40 to $60', '$60 to $80', 'Over $80'],
    Brands: [
      'Campus Sutra',
      'Flying Machine',
      'Free Autherity',
      'GAP',
      'H&M',
      'HERE&NOW',
      'HRX by Hrithik Roshan',
      'Puma',
      'Roadster',
      'SWEET ANGEL',
    ],
    selectedFilter: null,
  },
  products: {
    loading: false,
    error: false,
    data: [
      {
        id: "01",
        name: 'Highlander Men Blue shirt',
        desc: 'good fit and comfort',
        price: '$56',
        brand: 'Highlander',
        gender: 'Men',
        image: require('../../assets/images/shirt1.jpg'),
      },
      {
        id: "02",
        name: 'Roadster White and red shirt',
        desc: 'nice and good comfort',
        price: '$23',
        brand: 'Roadster',
        gender: 'Men',
        image: require('../../assets/images/shirt2.jpg'),
      },
      {
        id: "03",
        name: 'Wrogon Blue shirt casual',
        desc: 'slim fit and good',
        price: '$24',
        brand: 'Wrogon',
        gender: 'Men',
        image: require('../../assets/images/shirt3.jpg'),
      },
      {
        id: "04",
        name: 'Roadster brown checked',
        desc: 'good knowledge',
        price: '$32',
        brand: 'RoadSter',
        gender: 'Men',
        image: require('../../assets/images/shirt4.jpg'),
      },
      {
        id: "05",
        name: 'Peter england shirt',
        desc: 'good fit',
        price: '$28',
        brand: 'PeterEngland',
        gender: 'Men',
        image: require('../../assets/images/shirt5.jpg'),
      },
      {
        id: "06",
        name: 'Roadster Black Checked',
        desc: 'black checked ...',
        price: '$19',
        brand: 'Roadster',
        gender: 'Men',
        image: require('../../assets/images/shirt6.jpg'),
      },
      {
        id: "07",
        name: 'Wrogon Red Black half sleeve',
        desc: 'fit comfort',
        price: '$21',
        brand: 'Wrogon',
        gender: 'Men',
        image: require('../../assets/images/shirt7.jpg'),
      },
      {
        id: "08",
        name: 'Highlander White shirt',
        desc: 'well fabricated',
        price: '$29',
        brand: 'Highlander',
        gender: 'Men',
        image: require('../../assets/images/shirt8.jpg'),
      },
    ],
  },
  cart: {
    products: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loginStatus: {
          ...state.loginStatus,
          data: action.data,
        },
      };  
    case ACTION_TYPES.USER_FETCH_PRODUCTS:
      return state;
    default:
      return state;
  }
};

export {reducer};
