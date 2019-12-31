const path = require("path");

module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "index.js",
    libraryTarget: "commonjs"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js"]
  }
};
