import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

import {Offers} from '../../mocks/offers';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      offers={Offers}
      onPlaceTitleClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
