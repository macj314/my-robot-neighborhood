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
    else {outputArray.push(i);}
  }
  return outputArray;
}

var messageReverse = function(int){
  var outputArray = [];
  var indexString = "";
  for(i = int; i >= 0; i--){
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
    else {outputArray.push(i);}
  }
  return outputArray;
}

$(document).ready(function(){
  var inputInt = parseInt($("#input-int").val()); 
  var inputString = $("#input-string").val();
  
  $("#button-one").click(function(){   
      event.preventDefault();    
      // alert(typeof inputInt)
      alert(inputInt);
      $("#output").text(messageConvert(inputInt));
      $("#form-one").submit()
  })
  $("#button-two").click(function(){
    event.preventDefault();    
    $("#output").text(messageReverse(inputInt));
    $("#form-one").submit()
  })
})