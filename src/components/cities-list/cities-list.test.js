import React from 'react';
import renderer from 'react-test-renderer';
import {CitiesList} from './cities-list';
import {Cities} from '../../mocks/cities';

it(`CitiesList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<CitiesList
      cities={Cities}
      currentItem={Cities[0]}
      onChangeItem={jest.fn()}
      handleCityChange={jest.fn()}
      handleOffersByCityChange={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
