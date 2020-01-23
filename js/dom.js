document.title = "Новое название окна";
//alert(document.nodeType);
//var d1 = document.getElementsByTagName("div");
var d1 = document.getElementById("bla");
//alert(d1.hasChildNodes());
//alert(d1.childNodes[0].nodeValue);
//d1.childNodes[0].appendData(" Новый текст для 0-го абзаца");
//d1.childNodes[0].insertData(3, " Новый текст для 0-го абзаца");

// Чтение тега и его значению. Иследование древа тегов.
var d2 = document.getElementById("bla2");

//alert(d2.childNodes[0].nodeType);

//alert(d2.childNodes[0].childNodes[0].nodeValue);

// Вставка нового тега
var eldiv = document.createElement("div");
eldiv.className = "jeam";
var textmode = document.createTextNode("текст внутри тегов");
eldiv.appendChild(textmode);
document.body.appendChild(eldiv);

// Вставка в конкретное место
d2.insertAdjacentHTML('beforebegin', "<b>текст</b>");

var d3 = document.getElementById("blabla");
var d4 = document.getElementById("blabla2");
// Прокрутка
//d3.scrollIntoView();


