//Business Logic
var beep = "beep";
var boop = "boop";
var neighb = "Won't you be my neighbor?";

var messageConvert = function(int){

}

//User Logic
$(document).ready(function(){
  $("#formOne").submit(function(){
    event.preventDefault();
    var input = $("#user-input").val();
    alert(typeof input);
    messageConvert(input);
  })
})