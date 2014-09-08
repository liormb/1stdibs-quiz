/**
 * User: Lior Elrom
 * Date: 09/06/14
 * Time: 05:45 PM
 */

'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var TPL = require('../tpl');
var HeaderView;

Backbone.$ = $;

module.exports = HeaderView = Backbone.View.extend({
	className: "row navbar navbar-fixed-top",

	events: {
		'click #create-new': 'newItem'
	},

	initialize: function() {
		this.template = _.template( TPL.get('header') );
	},

	newItem: function(event) {
		Backbone.history.navigate('/new', { trigger: true });
		return false;
	},

	render: function() {
		this.$el.html( this.template() );
		return this;
	}

});