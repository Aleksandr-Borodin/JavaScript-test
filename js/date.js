var d1 = new Date();
//alert(d1);


var d2 = new Date(Date.parse("May 25, 2004"));
//alert(d2);


// Время выполнения;
var t1, t2;
t1 = Date.now();
for (var i=0; i<1000000; i++) {
  var y1 = 2*i;
}
t2 = Date.now();
//alert(t2-t1);

//alert(d1.toTimeString());
