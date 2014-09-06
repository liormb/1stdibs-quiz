/**
 * User: Lior Elrom
 * Date: 09/06/14
 * Time: 05:45 PM
 */

'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var FormView = require('./form-view');
var Item = require('../models/item-model');
var TPL = require('../tpl');
var HeaderView;

Backbone.$ = $;

module.exports = HeaderView = Backbone.View.extend({
	events: {
		'click #create-new': 'newItem'
	},

	initialize: function() {
		this.template = _.template( TPL.get('header') );
	},

	newItem: function(event) {
		$('table').remove();

		var formView = new FormView({ model: new Item() });
		//console.log(formView);
		//alert("HELLO");
		//$('#content').append( formView.render().el );
		//alert("Stop");

		return false;
	},

	render: function() {
		this.$el.html( this.template() );
		return this;
	}

});