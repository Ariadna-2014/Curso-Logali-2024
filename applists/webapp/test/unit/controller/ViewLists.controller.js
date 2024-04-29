/*global QUnit*/

sap.ui.define([
	"logaligroup/applists/controller/ViewLists.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewLists Controller");

	QUnit.test("I should test the ViewLists controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
