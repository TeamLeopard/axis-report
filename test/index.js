require('babel-register')({
  presets: ['es2015', 'react'],
});

require.extensions['.png'] = function () {
  return null;
};

require('enzyme');
