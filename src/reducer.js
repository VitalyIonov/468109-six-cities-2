import {CHANGE_CITY, LOAD_OFFERS} from "./constants/actions";
import {getOffersByCity, getCitiesList, formatToClient} from './utils/offers';
import configureAPI from './api';

const initialState = {
  offers: [],
  cities: null,
  currentCity: null,
  offersByCity: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CITY: return Object.assign({}, state, {
      offersByCity: getOffersByCity(action.payload, state.offers),
      currentCity: action.payload
    });
    case LOAD_OFFERS: {
      const cities = getCitiesList(action.payload);

      return Object.assign({}, state, {
        offers: action.payload,
        offersByCity: getOffersByCity(cities[0], action.payload),
        cities,
        currentCity: cities[0]
      });
    }
  }

  return state;
};

const actionCreator = {
  changeCity: (city) => {
    return {
      type: CHANGE_CITY,
      payload: city
    };
  },

  loadOffers: (offers) => ({
    type: LOAD_OFFERS,
    payload: offers
  })
};

const sources = {
  getOffers: () => (dispatch) => {
    return configureAPI(dispatch).get(`/hotels`)
      .then((response) => {
        dispatch(actionCreator.loadOffers(formatToClient(response.data)));
      });
  }
};

export {
  reducer,
  sources,
  actionCreator
};
