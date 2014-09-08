/**
 * User: Lior Elrom
 * Date: 09/06/14
 * Time: 11:00 AM
 */

'use strict';

var $ = require('jquery');
var tpl;

module.exports = tpl = {

	templates: {},

	loadTemplates: function(names, callback) {
		var self = this;

		var loadTemplate = function(index) {
			var name = names[index];
			var tplName = './templates/' + name + '.tpl';

			console.log("Loading template: " + name);

			$.ajax({
				url: tplName
			}).done(function(data){
				self.templates[name] = data;
				index++;
				if (callback) {
					(index < names.length) ? loadTemplate(index) : callback();
				}
			}).error(function(data){
				console.log("Can't load templates from the server");
			});
		};

		loadTemplate(0);
	},

	get: function(name) {
		return this.templates[name];
	}
};