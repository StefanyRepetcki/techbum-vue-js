module.exports = {
  presets: [
    '@babel/preset-env',
    '@vue/cli-plugin-babel/preset',
  ],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest"
  },
  plugins: [
    ['transform-require-ignore', {
      extensions: ['.css'],
    }],
  ],
};
