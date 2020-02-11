
// Промисы
/*function bla() {
  alert("Ура");
}
var d1 = $.Deferred();
$.when(d1).done(bla);
var b = function() {};
var tt = setTimeout(function() {
    d1.resolve();
  }, 2000);
tt();
clearTimeout(tt);
$.when(d1).done(bla);
*/

// Сравнение измерения размеров через jquery и js
//alert("Ширина body: " + $("body").width() + "\n" + "Размеры через js: " + document.documentElement.clientWidth);

  // Принимает коллекцию jquery, в которую входит всплывающее окно;
  function display_popup(popup_window) {
    popup_window.removeClass("popup-close");
    popup_window.addClass("popup-display");
    
    //popup_window.show();
    // Центрирование
    popup_window.offset({ top: 50, left: $("body").width()/2-popup_window.width()/2 });
  }

function data_refresh() {
  // доступен стандартный об. js event, но через посредника
  event.preventDefault();
  
  // вывод на консоль
  console.log("Текст элемента: " + $(this).text() + "\n" + "Тип события: " + event.type);
  
  // действия:
  $(".paragraph-area").text('текст для параграфа');

  // визуализация и центрирования всплывающего окна
  display_popup($(".popup-main"));
}
$("a").addClass('text-color').on("click", data_refresh);

$(".popup-main a").click(function(){
  event.preventDefault();
  //$(this).parent().slideUp(2000);
  //$(this).parent().fadeOut(2000);
  //$(this).parent().hide(2000);
  $(this).parent().addClass('popup-close');
});

// Чтение/установка атрибутов и свойств
//alert($(".header-one").attr('style'));
//alert($(".header-one").prop('style').color);
//$(".header-one").css('color', 'yellow');

// Запуск анимации
//$("a").click();




