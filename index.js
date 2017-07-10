/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-device-detection',

  normalizeEntityName() {},

  included() {
    this._super.included.apply(this, arguments);

    this.import('bower_components/ua-parser-js/dist/ua-parser.min.js');
    this.import('vendor/detect.js');
  }
};
