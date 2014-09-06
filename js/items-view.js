/**
 * User: Lior Elrom
 * Date: 09/05/14
 * Time: 05:00 PM
 */

'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Item = require('./item');
var ItemView = require('./item-view');

Backbone.$ = $;

module.exports = Backbone.View.extend({
	tagName: 'tbody',

	initialize: function() {
		this.collection.on('add', this.addItem, this);
	},

	addItem: function(item){
		var itemView = new ItemView({ model: item });
		this.$el.append( itemView.render().el );
	},

	render: function() {
		this.collection.each(this.addItem, this);
		return this;
	}
});
