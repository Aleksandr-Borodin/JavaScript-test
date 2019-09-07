var a = /[mn]o/g;
var b = "ggnomolmob" + '\n' + "bmo";
var p = new Array(), c;
/*for(var i = 0; i < 50; i++) {

}*/
while(true) {
  c = a.exec(b);
  if(c != null) {
    p.push(c.index);
  } else {
    break;
  }	
}
//alert(p);

//alert(a.multiline);

// только истина или ложь;
//c = a.test(b);
//alert(s);

// не стандартизированное свойство:
//alert(RegExp.lastMatch);

var pos = b.search(a);
//alert(pos);

var result = b.replace(a, "vau");
alert(result);