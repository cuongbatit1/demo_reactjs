const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

// var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
// var server_host = process.env.YOUR_HOST || "0.0.0.0";
var server_port = 5000;
var server_host = "0.0.0.0";
module.exports = {
  entry: path.join(__dirname, "src", "index.js"),

  //   context: path.resolve(__dirname),
  //   entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/public/dist"),
    filename: "bundle.js",
    publicPath: "/",
    // publicPath: "dist",
  },
  //   output: {
  //     path: path.join(__dirname, "/dist"), // Thư mục chứa file được build ra
  //     filename: "bundle.js", // Tên file được build ra
  //   },

  module: {
    rules: [
      {
        test: /\.js?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },

      // Used for Bootstrap Less Source Files
      {
        use: ["style-loader", "css-loader", "less-loader"],
        exclude: /node_modules/,
        test: /\.less$/,
      },

      // Used for Bootstrap CSS Source Files
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        // exclude: /node_modules/,
        test: /\.(css|sass|scss)$/,
      },

      // Used for Bootstrap Glyphicon Fonts
      {
        test: /\.(jpe?g|png|gif|woff2?|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 15000 },
          },
        ],
      },
      // {
      //   test: /\.(png|jpg|svg|gif)?$/,
      //   use: "file-loader",
      // },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  //   externals: {
  //     react: "React",
  //   },
  devServer: {
    historyApiFallback: true,
    static: __dirname + "/public/",
    port: server_port,
    host: server_host,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
