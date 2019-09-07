var a = new Array(5);
var b = 1;
for (var i=0; i<5; i++) {  
  a[i] = b++;		// сначала присвоение, потом счетчик;
  // a[i] = --b;	// сначала счетчик, потом присвоение;
}
//alert(a);

// именнованные индексы массива;
a['marko'] = 'polo';
//alert(a['marko']);

// индекс через переменную;
var b = 'marko';
//alert(a[b]);

// every
function pereborEvery(a) {
  if(a > 0) {
	return true;
  }
}
var c = a.every(pereborEvery);
//alert(c);

// filter
var d = a.filter(function(){
  //alert(arguments.length);
  if(arguments[0] > 2) {
	return true;
  }
});
alert(d);


