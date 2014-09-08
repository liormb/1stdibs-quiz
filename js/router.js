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

	home: function() {
		console.log("Home Page");

		$('#content').empty();

		if ( _.isEmpty(this.collection) ) {
			var self = this;
			var item = new Item({ id: 'item.json' });
			
			item.fetch({
				success: function(result) {
					console.log("Fetched item(s) from item.json");

					var items = new Items( result.toJSON().result.item );

					self.collection = items;
					self.renderHome();
				},
				error: function(d) {
					console.log("Can't get data from the server");
				}
			});
		} else {
			this.renderHome();
		}
	},

	newItem: function() {
		console.log("New Item Page");

		this.createForm({
			collection: this.collection,
			router: this
		});
	},

	editItem: function(id) {
		console.log("Edit Item Page");

		var self = this;
		
		this.createForm({
			collection: this.collection,
			router: this,
			callback: function() {
				var model = this.collection.get(id) || this.collection.get(cid);
				self.addFormValues(model);
				return id;
			}
		});
	},

	deleteItem: function(id) {
		console.log("Delete Item Page");

		var model = this.collection.get(id) || this.collection.get(cid);
		
		this.collection.remove(model);
		this.navigate('', true);
	},

	renderHome: function() {
		var itemsView = new ItemsView({
			collection: this.collection,
			router: this
		});

		this.newItemLink();
		$('#content').append( TPL.get('items-table') );
		$('table').append( itemsView.render().el );
	},

	createForm: function(options) {
		var options = options || {};

		$('#content').empty()
			.prepend( TPL.get('form-header') )
			.append( TPL.get('form') );
			
		return new FormView(options);
	},

	addFormValues: function(item) {
		$('#title').val( item.get('title') );
		$('#description').val( item.get('description') );
		$('#internal-notes').val( item.get('dealerInternalNotes') );
		$('#material').val( item.get('material').description );
		if (item.get('material').restricted === 'Y') {
			$('#restricted-matirials').prop('checked', true);
		}
		$('#measurements input[value="'+item.get('measurement').unit+'"]').attr('checked', true);
		$('#measured input[value="'+item.get('measurement').shape+'"]').attr('checked', true);
		$('#length').val( item.get('measurement').length );
		$('#depth').val( item.get('measurement').depth );
		$('#height').val( item.get('measurement').height );
		$('#condition input[value="'+item.get('condition').description+'"]').attr('checked', true);
		return false;
	},

	newItemLink: function() {
		var self = this;

		$('#content').prepend( TPL.get('new-item-link') );

		$('#create-new').on('click', function(event) {
			event.preventDefault();
			self.navigate('new', true);
		});
	}
});
