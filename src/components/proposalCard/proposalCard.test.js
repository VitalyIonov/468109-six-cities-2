import React from 'react';
import renderer from 'react-test-renderer';
import ProposalCard from './proposalCard';

import {Offers} from '../../mocks/offers';

it(`ProposalCard correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<ProposalCard
      proposal={Offers[0]}
      onCardMouseEnter={jest.fn()}
      onCardMouseLeave={jest.fn()}
      onPlaceTitleClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
