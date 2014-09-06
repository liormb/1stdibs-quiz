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

	initialize: function() {
		this.template = _.template( TPL.get('item') );
		this.model.on('change', this.render, this);
	},

	render: function() {
		this.$el.html( this.template(this.model.toJSON()) );
		return this;
	}
});
