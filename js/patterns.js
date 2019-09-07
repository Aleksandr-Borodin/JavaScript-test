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
alert(c.name);
//alert(c.colors);

// Использование паттерна Кража конструктора для исправления общего исопльзования св. протипа объектами класса
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







