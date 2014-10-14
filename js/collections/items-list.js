/**
 * User: Lior Elrom
 * Date: 09/05/14
 * Time: 11:00 AM
 */

"use strict";

var $ = require('jquery');
var Backbone = require('backbone');
var Item = require('../models/item-model');
var Items;

Backbone.$ = $;

module.exports = Items = Backbone.Collection.extend({
	model: Item,

	initialize: function() {
		console.log('Items initialized!');
	}
});
