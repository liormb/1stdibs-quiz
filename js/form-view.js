/**
 * User: Lior Elrom
 * Date: 09/05/14
 * Time: 09:30 AM
 */

'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

Backbone.$ = $;

module.exports = Backbone.View.extend({
	tagName: 'form',

	events: {
		'submit': 'submit',
		'click input[type="radio"]': 'toggleChecked',
		'click input[name="measured"]': 'measuredChecked'
	},

	initialize: function() {
		this.getEnums();
	},

	getEnums: function() {
		var self = this;
		$.ajax({
			url: '/json/enums.json'
		}).done(function(response) {
			console.log("Fetched data from enums.json");
			self.render(response.itemEnums);
		}).error(function(response) {
			console.log("Can't get data from the server");
		});
	},

	submit: function(event) {
		event.preventDefault();
		var result = event.target;

		var item = {
			"id": 0,
            "title": result[0].value,
            "description": result[1].value,
            "dealerInternalNotes": result[2].value,
            "material": {
                "description": result[3].value,
                "restricted": result[4].value
            },
            "measurement": {
                "unit": $('input[name=measurements]:checked', '#measurements').val(),
                "shape": $('input[name=measured]:checked', '#measured').val(),
                "length": result[9].value,
                "depth": result[11].value,
                "height": result[10].value
            },
            "condition": {
                "description": $('input[name=condition]:checked', '#condition').val()
            }
		};

		console.log(item);
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

	renderVariables: function() {
		var $variables = $('#variables');
		$variables.find('input').removeAttr("disabled");
		$variables.find('label').css({color: 'black'});
	},

	renderMaterials: function(material) {
		var $html = "";
		var $materials = $('#materials');
		_.each(material, function(value) {
			$html += "<option>"+value+"</option>";
		});
		$materials.append($html);
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
	},

	renderMeasured: function(shape) {
		var $html = "";
		var $measured = $('#measured');
		_.each(shape, function(value) {
			$html += '<input type="radio" name="measured" value="'+value.toLowerCase()+'">';
			$html += '<label for="measured">'+value+'</label>';
		});
		$measured.append($html);
	},

	renderCondition: function(condition) {
		var $html = "";
		var $condition = $('#condition');
		_.each(condition, function(value) {
			$html += '<input type="radio" name="condition" value="'+value.toLowerCase()+'">';
			$html += '<label for="condition">'+value+'</label>';
		});
		$condition.append($html);
	},

	render: function(enums) {
		this.renderMaterials(enums.material);
		this.renderMeasurements(enums.measurement.unit);
		this.renderMeasured(enums.measurement.shape);
		this.renderCondition(enums.condition.description);
	}
});
