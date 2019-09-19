document.title = "Новое название окна";
//alert(document.nodeType);
//var d1 = document.getElementsByTagName("div");
var d1 = document.getElementById("bla");
//alert(d1.hasChildNodes());
//alert(d1.childNodes[0].nodeValue);
//d1.childNodes[0].appendData(" Новый текст для 0-го абзаца");
//d1.childNodes[0].insertData(3, " Новый текст для 0-го абзаца");

var d2 = document.getElementById("bla2");
//alert(d2.childNodes[0].nodeType);
alert(d2.childNodes[0].childNodes[0].nodeValue);


