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
        ref="slide"
        onChange={(e, val) => {
          props.sliderChange(val);
          props.filterArticles();
        }}
      />
      <img id="red-blue-line" role="presentation" src={logo} />
      <div id="sliderText">
        <div className="category" style={styles.category}>
          <span>Business Music General Tech Science/Nature</span>
        </div>
        <div className='adjust' style={styles.adjust}>
          <p>Feeling Bad</p>
          <p>Adjust the slider left or right to select the catagory</p>
          <p>Adjust the slider up or down for feel good or bad news </p>
        </div>


      </div>
      
    </div>
  );
};

const styles = {
  category: {
    wordSpacing: '40px',
    marginTop: '-170px'
  },
  adjust: {
    marginTop: '160px'
  },
  bad: {

  }
}

export default PoliticalSlider;
