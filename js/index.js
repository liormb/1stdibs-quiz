/**
 * User: Lior Elrom
 * Date: 09/04/14
 * Time: 04:50 PM
 * URL: http://localhost:9966
 */

'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var TPL = require('./tpl');
var Router = require('./router');
var templates = ['header', 'items-table', 'item', 'form', 'new-item-link'];
var router;
var tpl;

tpl = TPL.loadTemplates(templates, function() {
	router = new Router();
	Backbone.history.start();
});