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
import CatagorySlider from '../client/src/components/CatagorySlider.js';
import Header from '../client/src/components/Header.js';
import NewsFeedItem from '../client/src/components/NewsFeedItem.js'
import NewsContainer from '../client/src/containers/NewsContainer.js'
import Search from '../client/src/components/Search.js';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';

import { SteeringContainer } from '../client/src/containers/SteeringContainer.js'
import PoliticalSlider from '../client/src/components/PoliticalSlider.js';
// import logo from '../client/src/components/red-blue-line.png';
import sinon from 'sinon';
configure({ adapter: new Adapter() });




describe("Header", () => {
	let wrapper; 
	before(() => {
		wrapper = shallow(<Header />);
	});

	it('Test if Header has a div', () => {
		const wrapper = shallow(<Header><div ></div></Header>);
		expect(wrapper.find("div").length).to.equal(1);
	});

	it('expects Header not to have any images', () => {
	const wrapper = shallow(<Header />);
	expect(wrapper.contains(<img />)).to.equal(false);

	});
})



describe('<NewsFeedItem />', () => {
	it('Test if NewsFeedItem has #card', () => {
		const wrapper = shallow(<NewsFeedItem />);
		expect(wrapper.find("#card").length).to.equal(1);
	})
})


describe('Search', () => {
  it('expects Search to have a searchfield', () => {
    const wrapper = shallow(<Search steering={"string"}/>);
		expect(wrapper.find("#search-field").length).to.equal(1);

  });

  it('expects Search to have a Textfield', () => {
    const wrapper = shallow(<Search steering={"string"} />);
		expect(wrapper.find('TextField')).to.have.length(1);
  });

   it('expects Search not to have a button', () => {
    const wrapper = shallow(<Search steering={"string"} />);
		expect(wrapper.contains('button')).to.equal(false);
  });
});


describe('<PoliticalSlider />', () => {
	it('PoliticalSlider should have an image', () => {
		const wrapper = shallow((<PoliticalSlider />));
		expect(wrapper.find('img')).to.have.length(1);
	})
	it('PoliticalSlider should have a slider component', () => {
		const wrapper = shallow((<PoliticalSlider />));
		expect(wrapper.find('Slider')).to.have.length(1);
	})
	it('check PoliticalSlider has an onChange method', (done) => {
		const wrapper = shallow(<PoliticalSlider />);
		expect(wrapper.find('Slider').prop('onChange')).to.have.length(2);
		done()
	})
})



describe('<CatagorySlider />', () => {
	it('check that CatagorySlider has an onChange method', (done) => {
		const wrapper = shallow(<CatagorySlider />);
		expect(wrapper.find('Slider').prop('onChange')).to.have.length(2);
		done();
	})
})



//containers

// const shallowWithStore = (component, store) => {
// 	const context = {
// 		store,
// 	};
// 	return shallow(component, { context });
// };

// describe('<MainContainer />', () => {
// 	it('check if MainContainer works', (done) => {
// 		const store = createMockStore(testState)
// 		const component = shallowWithStore(<MainContainer />, store)
// 	})
// })

// describe("SteeringContainer", () => {
// 	it ('checking SteeringContainer', (done) => {
// 		const wrapper = shallow(<SteeringContainer />);
// 		expect(wrapper.find("#slider").prop('onSubmit')).to.have.length(2);
// 	})
// })


