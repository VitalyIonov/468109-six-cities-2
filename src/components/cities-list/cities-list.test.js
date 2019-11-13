import React from 'react';
import renderer from 'react-test-renderer';
import {CitiesList} from './cities-list';

it(`CitiesList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<CitiesList
      cities={[`Paris`, `Cologne`, `Brussels`, `Amsterdam`]}
      currentItem={`Paris`}
      onChangeItem={jest.fn()}
      handleCityChange={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
