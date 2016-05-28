module.exports = {
  entry: './app/index.js',
  devtool: 'source-map',
  output: {
    filename: 'public/bundle.js'       
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      { 
        test: /\.css$/, 
        loader: "style!css" 
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      }
    ]
  }
};