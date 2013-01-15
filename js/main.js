"use strict";
var Rocket = function (){};

//Rocket.Engine.start = function(){};

//var a = new Rocket.Engine.start();

var Helper = {
	uniqId: 0,
	uniq: function() {
		Helper.uniqId++;
		return Helper.uniqId;
	},
	applySettings : function(receiver, params){
		if (typeof receiver === 'object' && typeof params === 'object') {
			for (var property in params) {
				if (params.hasOwnProperty(property) && property in receiver) {
					receiver[property] = params[property];
				}
			}
		}
	}
};

var Logger = {

};

var EventDriver = function(){
	/** event listeners list */
	this.listeners = [];

	/**
	* @param {Element} listener
	* @param {String} type - event.type
	*/
	this.addListener = function(listener, type){
		if (!this.listeners[listener.id]) {
			console.log(listener.id);
			this.listeners.push(listener);
		}
	};

	/**
	* @param {Element} listener
	* @param {String} type
	*/
	this.removeListener = function(listener, type){
		if (this.listeners[listener.id]) {
			delete this.listeners[listener.id];
		}
	};

	this.trigger = function(type, e){
		this.listeners.forEach(function(elem){
			if (typeof elem[type] === 'function') {
				elem[type]();
			}
		});
	};
};

window.onload = function(){
	var a = {
		id: 'test3',
		test: function(e){
			console.log('event');
		}
	};
	var eventDriver = new EventDriver();
	eventDriver.addListener(new Element(a), 'test');
	eventDriver.addListener(new Element(), 'test');
	eventDriver.addListener(new Element(), 'test');
	eventDriver.trigger('test');
	console.log(eventDriver);
};
