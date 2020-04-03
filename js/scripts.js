//Business Logic
var beep = "beep";
var boop = "boop";
var neighb = "Won't you be my neighbor?";

var messageConvert = function(string){
  var outputArray = [];
  var indexString = "";
  for(i = 0; i <= string.length; i++){
    indexString = i.toString();
    alert(typeof indexString);
    alert(i);
    if (indexString.indexOf(3) > -1){
      outputArray.push(neighb);
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
    var input = $("#user-input").val();
    alert(typeof input);

    $("#output").text(messageConvert(input));
  })
})