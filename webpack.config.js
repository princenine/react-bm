const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  // Specify the entry point file.
  entry: "./src/App.tsx",
  // Specify the output location.
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/, // This will load the tree from the entry point, If not required in the tree it won't copy or compile it to the bundle
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"], // Webpack uses resolve.extensions to generate all the possible paths to the module
  },
  devServer: {
    static: {
      directory: __dirname, // Where it serve the bundle.js when in development
    },
    devMiddleware: {
      writeToDisk: true, // Output build things to dist, Dev server save them in some kind of memory cache/disk cache IDK, I want to see the output that's why I put this config
    },
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // This will append our generated js bundle to the single index.html
    }),
  ],
};
