require('babel-register')({
  presets: ['es2015', 'react'],
});


require('enzyme');

require('mocha');
require('chai');
require('supertest');

require.extensions[".png"] = function () {
 return null;
};


