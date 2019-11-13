import {CHANGE_CITY} from "./constants/actions";
import {getOffersByCity, getCitiesList} from './utils/offers';

const offers = [
  {
    id: 1,
    city: `Cologne`,
    image: {
      src: `img/room.jpg`,
      width: `260`,
      height: `200`,
      alt: `Place image`
    },
    price: `80`,
    period: `night`,
    rating: `80%`,
    coordinates: [52.3909553943508, 4.85309666406198],
    description: `Beautiful & luxurious apartment at great location`,
    type: `Private room`
  },
  {
    id: 2,
    city: `Cologne`,
    image: {
      src: `img/room.jpg`,
      width: `260`,
      height: `200`,
      alt: `Place image`
    },
    price: `180`,
    period: `night`,
    rating: `60%`,
    coordinates: [52.369553943508, 4.85309666406198],
    description: `Wood and stone place`,
    type: `Private room`
  },
  {
    id: 3,
    city: `Paris`,
    image: {
      src: `img/room.jpg`,
      width: `260`,
      height: `200`,
      alt: `Place image`
    },
    price: `820`,
    period: `night`,
    rating: `30%`,
    coordinates: [52.3909553943508, 4.929309666406198],
    description: `Canal View Prinsengracht`,
    type: `Private room`
  },
  {
    id: 4,
    city: `Paris`,
    image: {
      src: `img/room.jpg`,
      width: `260`,
      height: `200`,
      alt: `Place image`
    },
    price: `81`,
    period: `night`,
    rating: `100%`,
    coordinates: [52.3809553943508, 4.939309666406198],
    description: `Nice, cozy, warm big bed apartment`,
    type: `Private room`
  },
  {
    id: 5,
    city: `Paris`,
    image: {
      src: `img/room.jpg`,
      width: `260`,
      height: `200`,
      alt: `Place image`
    },
    price: `80`,
    period: `night`,
    rating: `80%`,
    coordinates: [52.3809553943508, 4.87309666406198],
    description: `Beautiful & luxurious apartment at great location`,
    type: `Private room`
  },
  {
    id: 6,
    city: `Brussels`,
    image: {
      src: `img/room.jpg`,
      width: `260`,
      height: `200`,
      alt: `Place image`
    },
    price: `180`,
    period: `night`,
    rating: `60%`,
    coordinates: [52.379553943508, 4.86309666406198],
    description: `Wood and stone place`,
    type: `Private room`
  },
  {
    id: 7,
    city: `Amsterdam`,
    image: {
      src: `img/room.jpg`,
      width: `260`,
      height: `200`,
      alt: `Place image`
    },
    price: `820`,
    period: `night`,
    rating: `30%`,
    coordinates: [52.3909553943508, 4.909309666406198],
    description: `Canal View Prinsengracht`,
    type: `Private room`
  },
  {
    id: 8,
    city: `Amsterdam`,
    image: {
      src: `img/room.jpg`,
      width: `260`,
      height: `200`,
      alt: `Place image`
    },
    price: `81`,
    period: `night`,
    rating: `100%`,
    coordinates: [52.3859553943508, 4.930309666406198],
    description: `Nice, cozy, warm big bed apartment`,
    type: `Private room`
  }
];

const cities = getCitiesList(offers);

const initialState = {
  offers,
  cities,
  currentCity: cities[0],
  offersByCity: getOffersByCity(cities[0], offers)
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CITY: return Object.assign({}, state, {
      offersByCity: getOffersByCity(action.payload, state.offers),
      currentCity: action.payload
    });
  }

  return state;
};

const actionCreator = {
  changeCity: (city) => {
    return {
      type: CHANGE_CITY,
      payload: city
    };
  }
};

export {
  reducer,
  actionCreator
};
