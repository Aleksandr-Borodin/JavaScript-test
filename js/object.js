var a = new Object();
a.name = "marko";
a.age = 29; 
var b = {};
b.name = "polo";
b.age = 28;  
var c = {
  name: "jamie",
  age: 30
}
var d = {
  Orbit: function(){
    return this.name;
  },
  get fullname(){
    return this.name + " name";
  }
};
d.name = "Дмитрий";
d.secondName = "Маша";

Object.defineProperty(d, "name", {
  get: function(){	
    return this.secondName;
  }
});
//alert(d.name);
//alert(d.Orbit());
//alert(d.fullname);
//alert(Object.key(d));

// Узнать доступные св. и методы в объекта класса;
//alert(Object.keys(d));

// Задание сразу нескольких свойств;
var d2 = {};
Object.defineProperties(
    d2,
    {
        name:{ enumerable: true, configurable: true, get: function(){return this.secondname + ' имя';}},
        secondname:{ value : "Дима", writable: true, enumerable: true, configurable: true}
    }
);

alert(d2.name);