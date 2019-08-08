sap.ui.define([

	"sap/m/Switch",
	"sap/m/SwitchRenderer"
], function ( Switch, SwitchRenderer) {
	"use strict";

	var Switch = Switch.extend("sap.m.sample.Control_extension.project_29.CustomSwitch", {renderer: SwitchRenderer});

		/* =========================================================== */
		/* Lifecycle methods                                           */
		/* =========================================================== */

	
	Switch.prototype.onAfterRendering = function() {
		this.addStyleClass("myCustomSwt");
		
		};
	return Switch;


});