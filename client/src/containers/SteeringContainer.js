import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import SlidersContainer from './SlidersContainer';

import * as actions from '../actions/actions';
// import { bindActionCreators } from 'redux'; //refactor to use bindActionCreators

const mapStateToProps = state => ({
  // add pertinent state here
  steering: state.steering,
});

const mapDispatchToProps = actions;

class SteeringContainer extends Component {
  render() {
    return (
      <div>
        <h3>News To Suit Your Moods</h3>
        <Header
          steering={this.props.steering}
          onSubmit={this.props.onSubmit}
          handleSearch={this.props.handleSearch}
          handleKeyPress={this.props.handleKeyPress}
        />
        <div id="sliderscontainer">
      <SlidersContainer />
      </div>
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SteeringContainer);
