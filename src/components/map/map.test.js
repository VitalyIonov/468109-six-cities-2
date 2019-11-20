import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map';

import {Offers} from '../../mocks/offers';
import {Cities} from '../../mocks/cities';

it(`Map correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Map
      cords={Offers.map((offer) => ([offer.location.latitude, offer.location.longitude]))}
      currentCity={[Cities[0].location.latitude, Cities[0].location.longitude]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
