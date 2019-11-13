import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './with-active-item';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const WrappedMockComponent = withActiveItem(MockComponent);

it(`Set default value`, () => {
  const wrapper = mount(
      <WrappedMockComponent
        initialItem='someInitialId'
      />
  );

  expect(wrapper.state().currentItem).toEqual(`someInitialId`);
});

it(`Can change value`, () => {
  const wrapper = mount(
      <WrappedMockComponent
        initialItem='someInitialId'
      />
  );

  wrapper.instance()._handleChangeItem(`newId`);

  setTimeout(() => {
    expect(wrapper.state().currentItem).toEqual(`newId`);
  }, 0);
});
