/**
 * User: Lior Elrom
 * Date: 09/05/14
 * Time: 05:15 PM
 */

'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

Backbone.$ = $;

module.exports = Backbone.View.extend({
	tagName: 'tr',
	className: 'item-row',
	template: _.template( $('#item-template').html() ),

	initialize: function() {
		this.model.on('change', this.render, this);
	},

	render: function() {
		this.$el.html( this.template(this.model.toJSON()) );
		return this;
	}
});
