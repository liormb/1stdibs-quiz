/**
 * User: Lior Elrom
 * Date: 09/05/14
 * Time: 02:00 PM
 */

'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Item = require('./models/item-model');
var Items = require('./collections/items-list');
var FormView = require('./views/form-view');
var ItemsView = require('./views/items-view');
var TPL = require('./tpl');

Backbone.$ = $;

module.exports = Backbone.Router.extend({
	initialize: function() {
		
	},

	routes: {
		""           : "inventory",
		"new"        : "newItem",
		"edit/:id"   : "editItem",
		"delete/:id" : "deleteItem"
	},

	inventory: function() {
		var item = new Item({ id: 'item.json' });

		console.log("Home Page");

		item.fetch({
			success: function(result) {
				console.log("Fetched item(s) from item.json");

				var items = new Items( result.toJSON().result.item );
				var itemsView = new ItemsView({ collection: items });

				$('#content').append( TPL.get('items-table') );
				$('table').append( itemsView.render().el );
			},
			error: function(d) {
				console.log("Can't get data from the server");
			}
		});
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
