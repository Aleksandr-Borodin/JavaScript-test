var d = document.getElementById("blabla2");

// События
var EventsCl = {
  mogvai: function() {
    alert("HI2" + " " + event.type);
    if(event.type == "keydown") {
      alert("Это событие нажатия любой кнопки клавиатуры \n" + event.key); 
    }
  },
  eventsfunc: function(a, b) {
    a.addEventListener(b, this.mogvai);
  }
};
EventsCl.eventsfunc(d, "click");
EventsCl.eventsfunc(window, "load");
EventsCl.eventsfunc(window, "keydown");






