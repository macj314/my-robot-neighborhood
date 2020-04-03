//Business Logic
var beep = "beep";
var boop = "boop";
var neighbor = "Won't you be my neighbor?";

var messageConvert = function(int){
  var outputArray = [];
  var indexString = "";
  for(i = 0; i <= int; i++){
    indexString = i.toString();
    if (indexString.indexOf(3) > -1){
      outputArray.push(neighbor);
    }
    else if (indexString.indexOf(2) > -1){
      outputArray.push(boop);
    }
    else if (indexString.indexOf(1) > -1){
      outputArray.push(beep);
    }
    else outputArray.push(i);
  }
  return outputArray;
}

//User Logic
$(document).ready(function(){
  $("#formOne").submit(function(){
    event.preventDefault();
    var input = parseInt($("#user-input").val());
    $("#output").text(messageConvert(input));
  })
})