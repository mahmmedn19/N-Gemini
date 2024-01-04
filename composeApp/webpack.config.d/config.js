const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          compress: false,
          output: {
            beautify: false,
          },
        },
      }),
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 8082, // Adjust the port as needed
    host: '0.0.0.0', // This allows access from any IP address
    hot: true,
    open: true,
    https: true,
  },
};
