import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import NewsFeedItem from '../client/src/components/NewsFeedItem';

describe('<NewsFeedItem />', () => {
  let wrapper;

  before(() => {
    wrapper = shallow(<NewsFeedItem />);
  });

  it('renders a div with id card', () => {
    expect(wrapper.find('#card').length).to.equal(1);
  });
});
