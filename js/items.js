/**
 * User: Lior Elrom
 * Date: 09/05/14
 * Time: 11:00 AM
 */

'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Item = require('./item');

Backbone.$ = $;

module.exports = Backbone.Collection.extend({
	model: Item,

	initialize: function() {
		console.log('Items initialized!');
	}
});
