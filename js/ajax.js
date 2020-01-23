// ajax
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {  // получаем об. xhr и проверяем статус запроса;
  // нужна еще проверка на "состояние"
    alert(xhr.responseText);  // ответ в виде текста;
  }  
};
xhr.open("GET", "php/ajax.php", true);  // здесь, в заголовке можно передать данные для запроса типа get;
xhr.send(null); // данные для тела, для запроса типа post;