// alert("Hello World");
  
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
var d = {};
d.name = "Дмитрий";
Object.defineProperty(d, "name", {
  value: "Вася",
  writable: false, // запретить присвоение "user.name="
  configurable: false // запретить удаление "delete user.name"
});
  //Object.defineProperty(b, "name" {value: "Вася", configurable: true, writable: true, enumerable: true });
  // alert(a.name);
  // alert(b.name);
  // alert(c.name);
alert(d.name);
