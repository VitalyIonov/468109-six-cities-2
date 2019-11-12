import React from 'react';
import renderer from 'react-test-renderer';
import {CitiesList} from './cities-list';

it(`CitiesList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<CitiesList
      cities={[`Paris`, `Cologne`, `Brussels`, `Amsterdam`]}
      currentCity={`Paris`}
      handleCityClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
