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
		'click a.action': 'action'
	},

	initialize: function(options) {
		this.options = options || {};
		this.template = _.template( TPL.get('item') );
		this.options.model.on('change', this.render, this);
		this.options.model.on('destroy', this.close, this);
	},

	action: function(event) {
		var path = event.currentTarget.pathname;
		this.options.router.navigate(path, true);
		return false;
	},

	render: function() {
		this.$el.html( this.template(this.options.model.toJSON()) );
		return this;
	},

	close: function() {
		this.$el.unbind();
		this.$el.remove();
	}
});
