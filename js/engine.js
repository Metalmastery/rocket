"use strict";
var Engine = function(settings){
	this.elements = [];
	this.eventDriver = new EventDriver();

	this.width = 0;
	this.height = 0;

	this.x = 0;
	this.y = 0;

	this.canva = document.createElement('canvas');
};
/**
 * @param ctx - canvas context 2d
 *
 */
Engine.prototype.draw = function(ctx){};

Engine.prototype.listen = function(){
	var self = this;

	window.addEventListener("mousedown", function(evt){
		var e = {
			x: evt.x,
			y: evt.y
		};
		if(!e.x) {
			e.x = evt.clientX;
		}
		e.x = e.x + window.scrollX;
		if(!e.y) {
			e.y = evt.clientY;
		}
		e.y = e.y + window.scrollY;
		self.eventDriver.trigger("mousedown", e);
	}, false);

	window.addEventListener("mousemove", function(evt){
		var e = {
			x: evt.x,
			y: evt.y
		};
		if(!e.x) {
			e.x = evt.clientX;
		}
		e.x = e.x + window.scrollX;
		if(!e.y) {
			e.y = evt.clientY;
		}
		e.y = e.y + window.scrollY;
		self.eventDriver.trigger("mousemove", e);
	}, false);

	window.addEventListener("mouseup", function(evt){
		var e = {
			x: evt.x,
			y: evt.y
		};
		if(!e.x) {
			e.x = evt.clientX;
		}
		e.x = e.x + window.scrollX;
		if(!e.y) {
			e.y = evt.clientY;
		}
		e.y = e.y + window.scrollY;
		self.eventDriver.trigger("mouseup", e);
	}, false);
};
