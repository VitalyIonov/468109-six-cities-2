import React from 'react';
import renderer from 'react-test-renderer';
import ProposalList from './proposal-list';

import {Offers} from '../../mocks/offers';

it(`ProposalList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<ProposalList
      data={Offers}
      onChangeItem={jest.fn()}
      onPlaceTitleClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
