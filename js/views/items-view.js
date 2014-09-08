/**
 * User: Lior Elrom
 * Date: 09/05/14
 * Time: 05:00 PM
 */

'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var ItemView = require('../views/item-view');

Backbone.$ = $;

module.exports = Backbone.View.extend({
	tagName: 'tbody',

	initialize: function(options) {
		this.options = options || {};
		this.collection.on('add', this.addItem, this);
	},

	addItem: function(item){
		var itemView = new ItemView({
			model: item,
			router: this.options.router
	 	});
		this.$el.append( itemView.render().el );
	},

	render: function() {
		this.collection.each(this.addItem, this);
		return this;
	}
});
