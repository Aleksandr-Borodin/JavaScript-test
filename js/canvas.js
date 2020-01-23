// canvas - рисование
var a = document.getElementById("canvas1");
var b = a.getContext("2d");
// Прямоугольники
b.strokeStyle = "blue";
b.strokeRect(10, 10, 100, 100);
b.strokeStyle = "red";
b.rotate(10 * Math.PI / 180);
b.strokeRect(50, 30, 75, 100);

// Линии
b.beginPath();
b.strokeStyle = "green";
b.rotate(-10 * Math.PI / 180);
b.moveTo(50,50);
b.lineTo(200, 50);
b.stroke();






