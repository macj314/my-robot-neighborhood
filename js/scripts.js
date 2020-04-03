//Business Logic
var beep = "beep";
var boop = "boop";
var neighb = "Won't you be my neighbor?";

var messageConvert = function(int){
  var outputArray = [];
  for(i = 0; i <= int; i++){
    if (i === 3){
      outputArray.push(neighb);
    }
    else if (i === 2){
      outputArray.push(boop);
    }
    else if (i === 1){
      outputArray.push(beep);
    }
    else outputArray.push(i);
  }
}

//User Logic
$(document).ready(function(){
  $("#formOne").submit(function(){
    event.preventDefault();
    var input = parseInt($("#user-input").val());
    messageConvert(input);

    $("#output").text(messageConvert(input));
  })
})