// Песочница
function Mark (a1, b1) {
  this.a = a1;
  this.b = b1;
}

var b = new Mark("Маврикий", 56);
console.log(b.a);

console.log(Object.getOwnPropertyNames(b));


var r = [];
for(var i = 0; i < 10; i++) {
  r[i] = function(a) {
    return a;
  }(i);
}
//alert(r);

var r2 = [];
for(var i2 = 0; i2 < 10; i2++) {
  r2[i2] = function() {
    return i2;
  }();
}
//alert(r2[9]);