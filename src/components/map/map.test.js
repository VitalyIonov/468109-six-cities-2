import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map';

import {Offers} from '../../mocks/offers';

it(`Map correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Map
      cords={Offers.map((offer) => offer.coordinates)}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
