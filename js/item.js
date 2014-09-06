/**
 * User: Lior
 * Date: 09/04/14
 * Time: 04:45 PM
 */

'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Item;

Backbone.$ = $;

module.exports = Item = Backbone.Model.extend({
	defaults: function() {
	   return {
	 	   "id": 0,
	        "title": "placeholder",
	        "description": "placeholder",
	        "dealerInternalNotes": "placeholder",
	        "material": {
	            "description": "placeholder",
	            "restricted": "placeholder"
	        },
	        "measurement": {
	            "unit": "placeholder",
	            "shape": "placeholder",
	            "length": "0",
	            "depth": "0",
	            "height": "0"
	        },
	        "condition": {
	            "description": "placeholder"
	        }
	    }
	},
	urlRoot: "./json"
});