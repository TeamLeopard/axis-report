// // import chai from 'chai'
// // import chaiEnzyme from 'chai-enzyme'
// // import chaiJsx from 'chai-jsx'
// // import {jsdom} from 'jsdom'

// var chai = require('chai');
// var chaiEnzyme = require ('chai-enzyme');
// var chaiJsx = require ('chai-jsx')
// var jsdom = require ('jsdom')

// chai.use(chaiEnzyme())
// chai.use(chaiJsx)

// global.document = jsdom('<!doctype html><html><body></body></html>')
// global.window = document.defaultView
// global.navigator = global.window.navigator

require('babel-register')({
  presets: ['es2015', 'react'],
});

// require('./js/unit');
// require('./js/supertest');
// require('./js/zombie');
require('enzyme');