import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import PoliticalSlider from '../components/PoliticalSlider';
import CatagorySlider from '../components/CatagorySlider';

const mapStateToProps = state => ({
  main: state.main,
});

const mapDispatchToProps = actions;

export class SlidersContainer extends Component {

  componentDidMount(){
    this.props.onLoad();
  }

  render() {
    return (
      <div>
          {/* <p id="header">The Axis</p> */}
        
       
        <PoliticalSlider sliderValue={this.props.sliderValue} sliderChange={this.props.sliderChange} filterArticles={this.props.filterArticles} />
        <CatagorySlider
          verticalSliderValue={this.props.verticalSliderValue}
          verticalSliderChange={this.props.verticalSliderChange}
          filterBadContent={this.props.filterBadContent}
          filterGoodContent={this.props.filterGoodContent}
          reloadNews={this.props.reloadNews}
        />
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SlidersContainer);
