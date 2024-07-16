module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-react'
  ],
  plugins: [ 
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic'
      }
    ]
  ],
  overrides: [{
    "plugins": [
      ["@babel/plugin-transform-private-methods", {
        "loose": true
      }]
    ]
  }]
};
