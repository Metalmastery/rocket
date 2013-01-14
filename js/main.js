var Rocket = function (){};

//Rocket.Engine.start = function(){};

//var a = new Rocket.Engine.start();

var Helper = {

};

var Logger = {

};

var EventDriver = {
	/** список слушателей событий */
	listeners : [],

	/** добавление нового объекта-слушателя
	* @param {Element} listener
	* @param {String} type - event.type
	*/
	addListener : function(listener, type){
		'use strict';
		if (!this.listeners[listener.id]) {
			this.listeners.push(listener);
		}
	},

	/** удаление слушателя
	* @param {Element} listener
	* @param {String} type
	*/
	removeListener: function(listener, type){
		"use strict";
		if (this.listeners[listener.id]) {
			delete this.listeners[listener.id];
		}
	},

	trigger: function(type){
		"use strict";
		this.listeners.forEach(function(elem){
			console.log(elem);
			if (typeof elem[type] === 'function') {
				elem[type]();
			}
		});
	}


};

window.onload = function(){
	'use strict';
	var a = {
		id: 'test3',
		test: function(e){
			console.log('event');
		}
	};
	EventDriver.addListener({'id':'test'}, 'test');
	EventDriver.addListener({'id':'test2'}, 'test');
	EventDriver.addListener(a, 'test');
	EventDriver.trigger('test');
	console.log(EventDriver);
};
