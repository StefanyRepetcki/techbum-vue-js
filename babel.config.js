module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['transform-require-ignore', {
      extensions: ['.css']
    }]
  ]
}