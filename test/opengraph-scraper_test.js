'use strict';

var ogs = require('../lib/opengraph-scraper.js');

exports.signature = function(test){
  test.ok(typeof ogs === 'function','should be a function');
  test.done();
};
exports.promise = function(test){
  test.ok(typeof ogs('http://www.google.com') === 'object','should return a promise');
  test.done();
};