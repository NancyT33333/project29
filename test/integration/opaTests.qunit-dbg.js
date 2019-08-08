/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/m/sample/Control_extension/project_29/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});