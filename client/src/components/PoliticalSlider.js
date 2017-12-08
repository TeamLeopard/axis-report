import React from 'react';
import Slider from 'material-ui/Slider';
import logo from './red-blue-line.png'; 

const PoliticalSlider = (props) => {
  // console.log(props.sliderValue);
  return (
    <div id="slider">
      <Slider
        defaultValue={0}
        step={1}
        min={-10}
        max={10}
        value={props.sliderValue}
        onChange={(e, val) => {
          props.sliderChange(val);
          props.filterArticles();
        }}
      />
      <img id='red-blue-line' src={logo}/>
      <div id="sliderText">
        <p>Adjust the slider left or right to select the catagory</p>
              <p>Adjust the slider up or down for feel good or bad news </p>
      </div>
      
    </div>
  );
};

export default PoliticalSlider;
