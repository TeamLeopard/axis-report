import React from 'react';

import Header from '../client/src/components/Header';
import Search from '../client/src/components/Search';
//const Header = require('../client/src/components/Header');
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, render} from 'enzyme';
configure({ adapter: new Adapter() });
import { expect } from 'chai'

describe('Header', () => {
  // let props;
  // const header = () => {
  //  const wrapper = render(<Header />);
  //  expect(wrapper.find(Search));
  //   };

  it('renders a div with the search bar', () => {
    const wrapper = shallow(<Header />);
   //expect(wrapper).to.have.property(<Search />,1);
   // expect(wrapper.contains(<div id="search-field" />)).to.equal(true);
    expect(wrapper.contains(<Search />)).to.equal(true);
    //expect(wrapper.find('#search-field')).to.have.length(1);
    //expect(wrapper.find(Search)).to.have.length(1);
  });
});

