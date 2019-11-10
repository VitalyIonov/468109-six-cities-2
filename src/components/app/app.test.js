import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {App} from './app';

import {Offers} from '../../mocks/offers';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(jest.fn())}>
          <App
            offers={Offers}
            currentCity="Cologne"
            onPlaceTitleClick={jest.fn()}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
