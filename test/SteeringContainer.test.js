import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
configure({ adapter: new Adapter() });

import { SteeringContainer } from '../client/src/containers/SteeringContainer';
import Header from '../client/src/components/Header';
import PoliticalSlider from '../client/src/components/PoliticalSlider';
import CatagorySlider from '../client/src/components/CatagorySlider';

describe('<SteeringContainer />', () => {
  let wrapper;

  before(() => {
    wrapper = shallow(<SteeringContainer />);
  });

  it('renders a Header', () => {
    expect(wrapper.find(Header).length).to.equal(1);
  });

  it('renders a Political and Category Slider', () => {
    expect(wrapper.find(PoliticalSlider).length).to.equal(1);
    expect(wrapper.find(CatagorySlider).length).to.equal(1);
  });
});
