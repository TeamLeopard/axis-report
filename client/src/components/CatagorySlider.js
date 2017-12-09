import React from 'react';
import Slider from 'material-ui/Slider';
import logo from './y-axis-red-blue-line.png'; 

const CatagorySlider = (props) => {
  // console.log(props.sliderValue);
  return (
    <div id="y-slider">
      <Slider
        axis={'y'}
        defaultValue={1}
        step={1}
        min={-10}
        max={10}
        
        value={props.verticalSliderValue}
        onChange={(e, val) => {
          props.verticalSliderChange(val);
          if (val > 5) props.filterGoodContent();
          if (val < -5) props.filterBadContent();
          if (val === 0) props.reloadNews();
        }}
      />
      
      <img id='y-axis-red-blue-line' src={logo}/>
      
    </div>
    
  );
};

export default CatagorySlider;
