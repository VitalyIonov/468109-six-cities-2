import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProposalCard from './proposal-card';

import {Offers} from '../../mocks/offers';

Enzyme.configure({adapter: new Adapter()});

it(`ProposalCard's 'onCardMouseEnter' has correct params`, () => {
  const mouseEnterHandler = jest.fn();
  const proposal = Offers[0];
  const card = shallow(<ProposalCard
    proposal={proposal}
    onCardMouseEnter={mouseEnterHandler}
    onCardMouseLeave={jest.fn()}
    onPlaceTitleClick={jest.fn()}
  />);

  card.simulate(`mouseEnter`);

  expect(mouseEnterHandler).toHaveBeenCalledWith(proposal.id);
});
