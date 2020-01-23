// Фабрика
function FactoryFunc() {
  var a = new Object();
  a.next = 1;
  a.back = 2; 
  return a;
}
var b1 = FactoryFunc();
//alert(b1.next);


// Конструктор
function ConstructorPat(a,b) {
  this.face = a;
  this.spin = arguments[1];
}
var b2 = new ConstructorPat('text', 56);
//alert(b2.face);
  

// Паразитный конструктора
function ParFunc() {
  var a = new Object();
  a.max = 46;
  a.min = 21; 
  return a;
}
var b3 = new ParFunc();
//alert(b3.min);
//alert(Object.getOwnPropertyNames(b3));


// Прототип + конструктора
// Частные св. для об. кл.
function Battleship(a, b) {
  this.a1 = a;
  this.a2 = b;
}
// Общие св. и м. для об. кл.
Battleship.prototype = {
  constructor: Battleship,
  a3: 25
};
var b4 = new Battleship("text2", 68);
//alert(b4.a3);


// Защищенный конструктор 
//без открытых св. и м., без this в м., без new при создании
function Dest(a) {
  var h = new Object();
  h.cn1 = a;
  return h;
}
var b5 = Dest('text3');
//alert(b5.cn1);


// Прототипное наследование
var b6 = Object(b5, b4);
//alert(Object.getOwnPropertyNames(b6));


// Паразитное наследование
function CreateObj(a) {
  var a = Object(a);
  a.a1 = 56;
  return a;
}
var b7 = CreateObj(b5);
//alert(Object.getOwnPropertyNames(b7));

  
// Прототипы, наследование
function A1() {  
  this.colors = ["grey", "yellow"];
}
function A2 (name) {this.name = name;}
A2.prototype = new A1();
//A2.prototype = {};	// затрется наследование, если попытаться добавить св. через литерал;

var d = new A2("Sasha");
d.colors.push("red", "black");	// изменения коснутся и других об. кл., поскольку массив colors принадлежит прототипу A1;

var c = new A2("Alex");
//alert(c.name);
//alert(c.colors);


// Использование паттерна Кража конструктора для !исправления! общего использования св. протипа объектами класса
function B1() {
  this.colors = ["t1", "t2"];
}
function B2 () {
  B1.call(this);
}

var dub = new B2();
dub.colors.push("t3", "t4");

var dub2 = new B2();
//alert(dub.colors);
//alert(dub2.colors);


// Комбинированное наследование
// Общие методы, уникальные св.
function D1(name) {
  this.name = name;
  this.colors = ["d1", "d2"];
}
D1.prototype.SayName = function() {
  alert(this.name);
};
function D2 (name) {
  D1.call(this, name);	// наследование свойств
}
D2.prototype = new D1();

var hub = new D2("Sasha");
hub.colors.push("d3", "d4");
//alert(hub.colors);
var hub2 = new D2("Jamie");
//hub2.SayName();
//alert(hub2.colors);


// Паразитное комбинированное наследование
function Polygon(sides){
 this.sides = sides;
}  
function Rectangle(width, height, sides){
  Polygon.call(this, sides);  
  this.width = width;
  this.height = height;
}
Rectangle.prototype = new Polygon();

var rect = new Rectangle(5, 10, 2);
//alert(rect.sides);


// Модуль - Синглтон в php
var v = function(){
  // некий код, переменные, ф-ции;
  return {
    a1: true,
    a2: function(){}
  };
}();
//alert(v.a1);


class Rabbit extends Object{
  constructor(name) {
    super();
    this.name = name;
  }
}
let rabbit = new Rabbit("Rab");
alert(rabbit.name);
