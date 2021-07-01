const mode = process.env.NODE_ENV === 'production' 
? 'production' 
: 'development';

module.exports = {
  mode: mode,
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          // without additional setting, this will reference .babelrc
          loader: 'babel-loader'
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
  },
}