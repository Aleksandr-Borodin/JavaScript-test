var d = document.getElementById("main-form");

// Формы
//alert(d.method);
//alert(d.elements[0].type);
d.elements[1].focus();
//d.elements[1].blur();

d.addEventListener("submit", function(){alert("Вы попытались отправить данные формы на сервер");});