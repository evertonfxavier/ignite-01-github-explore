const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: path.resolve(__dirname, "src", "index.jsx"),
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", 'sass-loader'],
      },
    ],
  },
};

//   antes > entry: "src/index.jsx",
//a utilização do path é importante por causa das variaveis de ambiente OS.
// no windows por exemplo, a barra é invertida.

//o output é pra saber qual o arquivo que vai ser gerado com o webpack

//extensios > //pra saber quais os tipos de extensoes ele vai ler. por padrão é JS

//module > como a aplicação vai se comportar quando eu tiver importando cada um dos tipos de arquivos

///\.jsx$/, //aqui eu uso expressao regular pra especificar o tipo da extenção

//instalar o babel loader: yarn add babel-loader -D
//integra o babel e o webpack
