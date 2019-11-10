import {initialState} from "./constants/reducer";

import {CHANGE_CITY} from "./constants/actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CITY: return Object.assign({}, state, {
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
