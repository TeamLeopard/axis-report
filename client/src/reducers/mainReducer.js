import * as types from '../constants/actionTypes';
const keywords = require('./keywords');
const sourcesObj = require('./../../../server/db/sources');

let feedList = [];
let allFeed = [];

const initialState = {
  isFetching: false,
  allFeed: allFeed,
  feedList: feedList,
  sliderValue: 0,
  verticalSliderValue: 0,
};

// an array of obj obj = {}.source.id
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER_ARTICLES:
      const range = 3;
      const min = state.sliderValue - range;
      const max = state.sliderValue + range;
      const sources = Object.keys(sourcesObj)
        .filter(key => sourcesObj[key] >= min && sourcesObj[key] <= max);
      feedList = state.allFeed.filter(article => sources.includes(article.source.id));
      // console.log('filtered sources', sources);
      feedList = feedList.sort((a, b) => { // sort by date so that most recent stories are on top
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      });
      return {
        ...state,
        isFetching: false,
        feedList: feedList
      }

    case types.FILTER_BAD_CONTENT:
      feedList = state.allFeed.filter((article) => {
          if (article.description !== null) {
            return new RegExp(keywords.bad.join("|")).test(article.description);
          }
      });

      feedList = feedList.sort((a, b) => { // sort by date so that most recent stories are on top
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      });
      return {
        ...state,
        isFetching: false,
        feedList,
      }

    case types.FILTER_GOOD_CONTENT:
      feedList = state.allFeed.filter((article) => {
        if (article.description !== null) {
          return new RegExp(keywords.good.join("|")).test(article.description);
        }
      });

      feedList = feedList.sort((a, b) => { // sort by date so that most recent stories are on top
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      });
      return {
        ...state,
        isFetching: false,
        feedList,
      }

    case types.RELOAD_NEWS:
      feedList = state.allFeed.slice();
      return {
        ...state,
        isFetching: false,
        feedList,
      }
      // console.log('filtered sources', sources)
    case types.SEARCH_ARTICLES:
      // console.log('response is: ', action.payload);
      if (action.payload.length === 0) feedList = [];
      else {
        const range = 2;
        const min = state.sliderValue - range;
        const max = state.sliderValue + range;
        const sources = Object.keys(sourcesObj)
          .filter(key => sourcesObj[key] >= min && sourcesObj[key] <= max);
        allFeed = action.payload;
        feedList = action.payload.filter(article => sources.includes(article.source.id));
        feedList = feedList.sort((a, b) => { // sort by date so that most recent stories are on top
          return new Date(b.publishedAt) - new Date(a.publishedAt);
        });
      }

      return {
        ...state,
        isFetching: false,
        allFeed: allFeed,
        feedList: feedList
      };

    case types.SLIDER_CHANGE:
      return {
        ...state,
        sliderValue: action.payload
      };

    case types.VERTICAL_SLIDER_CHANGE:
      return {
        ...state,
        veticalSliderValue: action.payload
      };

    case types.FETCH_POSTS:
      return {
        ...state,
        isFetching: true
      };

    default:
      return state;
  }
}

export default mainReducer;
