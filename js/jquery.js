// Промисы
function bla() {
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
