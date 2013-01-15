'use strict';
var Element = function(settings){
	this.id = Helper.uniq();
	/** coordinates */
	this.x = 0;
	this.y = 0;
	/** angle */
	this.rotationAngle = 0;
	/** outer box size*/
	this.boxWidth = 0;
	this.boxHeight = 0;
	/** speed params*/
	this.speed = 0;
	this.speedAngle = 0;
	this.horizontalSpeedProj = 0;
	this.verticalSpeedProj = 0;
	/** acceleration params */
	this.acceleration = 0;
	this.accelerationAngle = 0;
	this.horizontalAccelerationProj = 0;
	this.verticalAccelerationProj = 0;

	Helper.applySettings(this, settings);
};
/** remove object from canvas
 * @param ctx - контекст canvas 2d
 */
Element.prototype.clear = function (ctx) {};

/** draw object on canvas
 * @param ctx - контекст canvas 2d
 */
Element.prototype.draw = function (ctx) {};

/** recalculate object params
 */
Element.prototype.calculateState = function () {};


/** onmousemove
 * @param e - объект event
 */
Element.prototype.mousemove = function (e) {};

/** onmousedown
 * @param e - объект event
 */
Element.prototype.mousedown = function (e) {};

/** click
 * @param e - объект event
 */
Element.prototype.click = function (e) {};
