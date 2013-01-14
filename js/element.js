var Element = function(settings){
	'use strict';
	/** координаты */
	this.x = 0;
	this.y = 0;
	/** текущий угол поворота */
	this.rotationAngle = 0;
	/** размеры ограничивающего прямоугольника*/
	this.boxWidth = 0;
	this.boxHeight = 0;
	/** текущая скорость, угол направления движения и проекции скорости на оси координат */
	this.speed = 0;
	this.speedAngle = 0;
	this.horizontalSpeedProj = 0;
	this.verticalSpeedProj = 0;
	/** ускорение - скалярная величина и угол, проекции скал. ускорения на оси координат */
	this.velocity = 0;
	this.velocityAngle = 0;
	this.horizontalVelocityProj = 0;
	this.verticalVelocityProj = 0;
	this.id = null;
};
/** удаление элемента с холста
 * @param ctx - контекст canvas 2d
 */
Element.prototype.clear = function (ctx) {};

/** рисование элемента на холсте
 * @param ctx - контекст canvas 2d
 */
Element.prototype.draw = function (ctx) {};

/** пересчет свойств объекта - положения, угла поворота, ускорения, етс
 */
Element.prototype.calculateState = function () {};


/** обработчик события onmousemove
 * @param e - объект event
 */
Element.prototype.onmousemove = function (e) {};

/** обработчик события click
 * @param e - объект event
 */
Element.prototype.click = function (e) {};
