import {CHANGE_CITY, LOAD_OFFERS, CHANGE_OFFERS_BY_CITY, LOAD_OFFERS_BY_CITY, LOAD_CITIES} from "./constants/actions";
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
      currentCity: action.payload
    });
    case CHANGE_OFFERS_BY_CITY:
    case LOAD_OFFERS_BY_CITY: return Object.assign({}, state, {
      offersByCity: action.payload,
    });
    case LOAD_OFFERS: return Object.assign({}, state, {
      offers: action.payload
    });
    case LOAD_CITIES: {
      console.log('action.payload', action.payload);
      return Object.assign({}, state, {
        cities: action.payload.cities,
        currentCity: action.payload.currentCity
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

  changeOffersByCity: (city) => (dispatch, getState) => {
    const offers = getState().offers;
    const offersByCity = getOffersByCity(city, offers);

    return dispatch({
      type: CHANGE_OFFERS_BY_CITY,
      payload: offersByCity
    });
  },

  loadOffers(offers) {
    return (dispatch) => {
      const cities = getCitiesList(offers);
      const offersByCity = getOffersByCity(cities[0], offers);

      dispatch(this.loadOffersByCity(offersByCity));
      dispatch(this.loadCities(cities));

      return dispatch({
        type: LOAD_OFFERS,
        payload: offers
      });
    };
  },

  loadOffersByCity: (offers) => ({
    type: LOAD_OFFERS_BY_CITY,
    payload: offers
  }),


  loadCities: (cities) => ({
    type: LOAD_CITIES,
    payload: {
      cities,
      currentCity: cities[0]
    }
  })
};

const sources = {
  getOffers: () => (dispatch) => {
    return configureAPI(dispatch).get(`/hotels`)
      .then((response) => {
        const updatedPayload = formatToClient(response.data);

        dispatch(actionCreator.loadOffers(updatedPayload));
      });
  }
};

export {
  reducer,
  sources,
  actionCreator
};
