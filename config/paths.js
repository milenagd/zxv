const path = require('path');

const PATHS = {
  root: path.join(__dirname, '../'),
  app: path.join(__dirname, '../app'),
  static: path.join(__dirname, '../static'),
  dist: path.join(__dirname, '../dist'),
  pages: path.join(__dirname, '../app/pages'),
  routes: path.join(__dirname, '../app/routes'),
  modules: path.join(__dirname, '../app/modules'),
  components: path.join(__dirname, '../app/components'),
  icons: path.join(__dirname, '../app/icons'),
};

module.exports = PATHS;
