// const expect = require('expect');
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new Adapter() });

// import React from 'react';
import { expect } from 'chai';
// import {render} from 'enzyme';
// const expect = require('expect');
// // const React = require('react');
// import { shallow } from 'enzyme';
// import CategorySlider from '../src/components/CategorySlider.js';
// // // import Foo from './Foo';

import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import mockery from "mockery";
// mockery.enable();
// mockery.registerMock('../client/src/components/red-blue-line.png', 0);
// mockery.registerMock('../client/src/components/y-axis-red-blue-line.png', 0);

// import CatagorySlider from '../client/src/components/CatagorySlider.js';

import Header from '../client/src/components/Header.js';
import NewsFeedItem from '../client/src/components/NewsFeedItem.js'

// import Search from '../client/src/components/Search.js';
// import TextField from 'materisal-ui/TextField';
// import MainContainer from '../client/src/containers/MainContainer.js'


// import PoliticalSlider from '../client/src/components/PoliticalSlider.js';
// import logo from '../client/src/components/red-blue-line.png';



import sinon from 'sinon';
configure({ adapter: new Adapter() });


describe('<Header />', () => {
	it('render something testing', () => {
		const wrapper = shallow(<Header><div ></div></Header>);
		expect(wrapper.find("div").length).to.equal(1);
	})
})

describe('<NewsFeedItem />', () => {
	it('render something testing', () => {
		const wrapper = shallow(<NewsFeedItem />);
		expect(wrapper.find("#card").length).to.equal(1);
	})
})

// describe('<MainContainer />', () => {
// 	it('MainContainer', () => {
// 		const wrapper = shallow((<MainContainer />));
// 		expect(wrapper.find("#mainContainer").length).to.equal(1);
// 	})
// })

// describe('<PoliticalSlider />', () => {
// 	it('PoliticalSlider', () => {
// 		const wrapper = shallow((<PoliticalSlider />));
// 		expect(wrapper.find('img').prop('src')).to.equal(logo);
// 	})
// })