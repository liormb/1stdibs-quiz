/**
 * User: Lior Elrom
 * Date: 09/05/14
 * Time: 05:15 PM
 */

'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var TPL = require('../tpl');

Backbone.$ = $;

module.exports = Backbone.View.extend({
	tagName: 'tr',
	className: 'item-row',

	events: {
		'click a': 'links'
	},

	links: function(event) {
		event.preventDefault();
		var path = event.currentTarget.pathname;
		Backbone.history.navigate(path, { trigger: true });
	},

	initialize: function() {
		this.template = _.template( TPL.get('item') );
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.close, this);
	},

	render: function() {
		this.$el.html( this.template(this.model.toJSON()) );
		return this;
	},

	close: function() {
		this.$el.unbind();
		this.$el.remove();
	}
});
