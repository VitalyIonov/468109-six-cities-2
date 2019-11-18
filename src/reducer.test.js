import MockAdapter from 'axios-mock-adapter';

import {actionCreator, sources} from "./reducer";
import {CHANGE_CITY, LOAD_OFFERS} from "./constants/actions";
import {Offers} from "./mocks/offers";
import {api} from './api';


it(`Action creator for change city returns correct action`, () => {
  expect(actionCreator.changeCity(`Paris`)).toEqual({
    type: CHANGE_CITY,
    payload: `Paris`
  });
});

it(`Action creator for load offers correct action`, () => {
  expect(actionCreator.loadOffers(Offers)).toEqual({
    type: LOAD_OFFERS,
    payload: Offers
  });
});

it(`Should make a correct API call to /hotels`, () => {
  const dispatch = jest.fn();
  const apiMock = new MockAdapter(api);
  const offersLoader = sources.getOffers();

  apiMock
    .onGet(`/hotels`)
    .reply(200, Offers);

  return offersLoader(dispatch)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: LOAD_OFFERS,
        payload: Offers
      });
    });
});
