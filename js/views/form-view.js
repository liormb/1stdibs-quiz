/**
 * User: Lior Elrom
 * Date: 09/05/14
 * Time: 09:30 AM
 */

'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Item = require('../models/item-model');
var FormView;

Backbone.$ = $;

module.exports = FormView = Backbone.View.extend({
	el: '#form',

	events: {
		'submit': 'submit',
		'click #cancel-btn': 'cancel',
		'click input[type="radio"]': 'toggleChecked',
		'click input[name="measured"]': 'measuredChecked'
	},

	initialize: function(options) {
		this.options = options || {};
		this.getEnums();
	},

	getEnums: function() {
		var self = this;

		$.ajax({
			url: '/json/enums.json'
		}).done(function(response) {
			console.log("Fetched data from enums.json");
			self.render(response.itemEnums);
			if (self.options.callback) {
				self.options.currentItemId = self.options.callback();
			}
		}).error(function(response) {
			console.log("Can't get data from the server");
		});
	},

	submit: function(event) {
		var itemObj = {
			"title": $('#title').val(),
			"description": $('#description').val(),
			"dealerInternalNotes": $('#internal-notes').val(),
			"material": {
				"description": $('#material option:selected').val(),
			  	"restricted": $('#restricted-matirials:checked').val() || "N"
			},
			"measurement": {
			  	"unit": $('input[name=measurements]:checked', '#measurements').val(),
			  	"shape": $('input[name=measured]:checked', '#measured').val(),
			  	"length": $('#length').val(),
			  	"depth": $('#depth').val(),
			  	"height": $('#height').val()
			},
			"condition": {
			  	"description": $('input[name=condition]:checked', '#condition').val()
			}
		};

		if (this.options.currentItemId) {
			var id = this.options.currentItemId;
			var item = this.collection.get(id);
			item.set(itemObj);
			
		} else {
			var item = new Item(itemObj);
			item.set('cid', item.cid);
		}
		
		this.collection.push(item);
		this.options.router.navigate('/', true);
		return false;
	},

	cancel: function() {
		this.options.router.navigate('/', true);
		return false;
	},

	toggleChecked: function(event) {
		var $inputs = $( $(event.target).parent().find('input[type="radio"]') );
		var $checked = $inputs.filter(':checked');
		var $unchecked = $inputs.not(':checked');

		$unchecked.attr('checked', false);
		$checked.attr('checked', true);
	},

	measuredChecked: function(event) {
		var disabled = $('#variables input').prop('disabled');
		if (disabled) {
			this.renderVariables();
		}
	},

	renderMaterial: function(material) {
		var $html = "";
		var $material = $('#material');
		_.each(material, function(value) {
			$html += '<option value="'+value+'">'+value+'</option>';
		});
		$material.append($html);
		return this;
	},

	renderMeasurements: function(unit) {
		var i = 0;
		var $html = "";
		var $measurements = $('#measurements');
		_.each(unit, function(value, index) {
			$html += '<input type="radio" name="measurements" value="'+index+'"'+((i===0)?' checked':'')+'>';
			$html += '<label for="measurements">'+value+' ('+index+')</label>';
			i++;
		});
		$measurements.append($html);
		return this;
	},

	renderMeasured: function(shape) {
		var $html = "";
		var $measured = $('#measured');
		_.each(shape, function(value) {
			$html += '<input type="radio" name="measured" value="'+value.toLowerCase()+'">';
			$html += '<label for="measured">'+value+'</label>';
		});
		$measured.append($html);
		return this;
	},

	renderVariables: function() {
		var $variables = $('#variables');
		$variables.find('input').removeAttr("disabled");
		$variables.find('label').css({color: 'black'});
		return this;
	},

	renderCondition: function(condition) {
		var $html = "";
		var $condition = $('#condition');
		_.each(condition, function(value) {
			$html += '<input type="radio" name="condition" value="'+value.toLowerCase()+'">';
			$html += '<label for="condition">'+value+'</label>';
		});
		$condition.append($html);
		return this;
	},

	render: function(enums) {
		this.renderMaterial(enums.material)
			.renderMeasurements(enums.measurement.unit)
			.renderMeasured(enums.measurement.shape)
			.renderCondition(enums.condition.description);
		return this;
	},

	close: function() {
		this.$el.unbind();
		this.$el.empty();
	}
});
