/**
 * User: Lior Elrom
 * Date: 09/05/14
 * Time: 02:00 PM
 */

'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Item = require('./models/item-model');
var Items = require('./collections/items-list');
var FormView = require('./views/form-view');
var ItemsView = require('./views/items-view');
var HeaderView = require('./views/header-view');
var TPL = require('./tpl');
var Router;

Backbone.$ = $;

module.exports = Router = Backbone.Router.extend({
	collection: {},

	initialize: function() {
		var headerView = new HeaderView();
		$('#page').prepend( headerView.render().el );
	},

	routes: {
		""           : "home",
		"new"        : "newItem",
		"edit/:id"   : "editItem",
		"delete/:id" : "deleteItem"
	},

	createNewItem: function() {
		var self = this;

		$('#content').prepend( TPL.get('new-item-link') );
		$('#create-new').on('click', function(event) {
			event.preventDefault();
			self.navigate('new', true);
		});
	},

	home: function() {
		console.log("Home Page");

		if ( _.isEmpty(this.collection) ) {
			var self = this;
			var item = new Item({ id: 'item.json' });
			
			item.fetch({
				success: function(result) {
					console.log("Fetched item(s) from item.json");

					var items = new Items( result.toJSON().result.item );
					var itemsView = new ItemsView({ collection: items });

					self.collection = items;

					self.createNewItem();
					$('#content').append( TPL.get('items-table') );
					$('table').append( itemsView.render().el );
				},
				error: function(d) {
					console.log("Can't get data from the server");
				}
			});
		} else {
			var itemsView = new ItemsView({ collection: this.collection });
			this.createNewItem();
			$('#content').append( TPL.get('items-table') );
			$('table').append( itemsView.render().el );
		}
	},

	newItem: function() {
		console.log("New Item Page");

		$('table').remove();
		$('#create-new').remove();
		$('#content').append( TPL.get('form') );

		var formView = new FormView({
			collection: this.collection,
			router: this
		});
	},

	editItem: function(id) {
		console.log("Edit Item Page");
	},

	deleteItem: function(id) {
		console.log("Delete Item Page");
		var model = this.collection.get(id);
		console.log(model);
		//this.collection.remove(model);
		//this.home();
	}
});
