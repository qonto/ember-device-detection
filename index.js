/* eslint-env node */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-device-detection',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included() {
    this._super.included.apply(this, arguments);

    this.import('bower_components/ua-parser-js/dist/ua-parser.min.js');
    this.import('vendor/detect.js');
  }
};
