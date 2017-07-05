/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-device-detection',
  contentFor: function(type, config) {
    if (type === 'head-footer') {
      if (config.environment === 'test') {
        return ''
      } else {
        return "<script src='/assets/ua-parser.min.js'></script>"
      }
    }
  }
};
