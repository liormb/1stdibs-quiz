/**
 * User: Lior
 * Date: 09/04/14
 * Time: 04:45 PM
 */

'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Item;

Backbone.$ = $;

module.exports = Item = Backbone.Model.extend({
	urlRoot: "./json",
	
	defaults: function() {
		return {
			"id": null,
			"title": "",
			"description": "",
			"dealerInternalNotes": "",
			"material": {
			  "description": "",
			  "restricted": ""
			},
			"measurement": {
			  "unit": "",
			  "shape": "",
			  "length": "",
			  "depth": "",
			  "height": ""
			},
			"condition": {
			  "description": ""
			}
		}
	}
});