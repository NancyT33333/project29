/*global QUnit*/

sap.ui.define([
	"sap/m/sample/Control_extension/project_29/controller/Switch.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Switch Controller");

	QUnit.test("I should test the Switch controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});