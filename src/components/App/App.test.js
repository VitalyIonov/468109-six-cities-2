import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      realty={[
        `Beautiful & luxurious apartment at great location`,
        `Wood and stone place`,
        `Canal View Prinsengracht`,
        `Nice, cozy, warm big bed apartment`]}
      onPlaceTitleClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
