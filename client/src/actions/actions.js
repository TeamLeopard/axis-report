import * as types from '../constants/actionTypes';
// const request = require('request');

export const searchArticles = (response) => ({
  type: types.SEARCH_ARTICLES,
  payload: response,
});

export const handleSearch = (value) => ({
  type: types.HANDLE_SEARCH,
  payload: value,
});

export const sliderChange = (value) => ({
  type: types.SLIDER_CHANGE,
  payload: value,
});

export const verticalSliderChange = (value) => ({
  type: types.VERTICAL_SLIDER_CHANGE,
  payload: value,
});

export const filterArticles = () => ({
  type: types.FILTER_ARTICLES,
});

export const filterGoodContent = () => ({
  type: types.FILTER_GOOD_CONTENT,
});

export const reloadNews = () => ({
  type: types.RELOAD_NEWS,
});

export const filterBadContent = () => ({
  type: types.FILTER_BAD_CONTENT,
});

export function handleKeyPress(event) {
  return function (dispatch, getState) {
    if (event.charCode === 13) {
      // console.log('keypressed', event);
      // console.log('value in textfield is: ', getState().steering.textValue);
      dispatch(onSubmit());
    }
  }
}

export function onSubmit() {
  return function (dispatch, getState) {
    const stateText = getState().steering.textValue;
    const request = new Request(`http://localhost:3000/api/articles/?q=${stateText}`);
    return fetch(request)
      .then(response => response.json())
      .then(json => dispatch(searchArticles(json)))
      .catch(err => {
        console.log(err);
      })
  }
}

export const fetchPosts = () => ({
  type: types.FETCH_POSTS,
});

export function onLoad() {
  return function (dispatch, getState) {
    // const stateText = getState().steering.textValue;
    const request = new Request('http://localhost:3000/api/top');
    return fetch(request)
      .then(response => response.json())
      .then(json => dispatch(searchArticles(json)))
      .catch(err => {
        console.log(err);
      })
  }
}
