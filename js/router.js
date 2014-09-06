/**
 * User: Lior Elrom
 * Date: 09/05/14
 * Time: 02:00 PM
 */

'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Item = require('./item');
var Items = require('./items');
var FormView = require('./form-view');
var ItemsView = require('./items-view');

Backbone.$ = $;

module.exports = Backbone.Router.extend({
	initialize: function() {
		var item = new Item({ id: 'item.json' });

		item.fetch({
			success: function(result) {
				console.log("Fetched item(s) from item.json");
				var items = new Items( result.toJSON().result.item );
				var itemsView = new ItemsView({ collection: items });
				$('#inventory').append( itemsView.render().el );
			},
			error: function(d) {
				console.log("Can't get data from the server");
			}
		});
	},

	routes: {
		""           : "home",
		"new"        : "newItem",
		"edit/:id"   : "editItem",
		"delete/:id" : "deleteItem"
	},

	home: function() {
		console.log("Home Page");
	},

	newItem: function() {
		console.log("New Item Page");
		var formView = new FormView();
	},

	editItem: function(id) {
		
	},

	deleteItem: function(id) {

	}
});
