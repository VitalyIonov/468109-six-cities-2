import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from './app';

import {Offers} from '../../mocks/offers';

Enzyme.configure({adapter: new Adapter()});

it(`Title click is correct`, ()=> {
  const clickHandler = jest.fn();
  const app = shallow(<App
    offers={Offers}
    currentCity="Cologne"
    onPlaceTitleClick={clickHandler}
  />);

  const placeTitles = app.find(`.place-card__name`);

  placeTitles.forEach((title) => title.simulate(`click`));

  expect(clickHandler).toHaveBeenCalledTimes(placeTitles.length);
});
