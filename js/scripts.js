var messageConvert = function(int, string){
  var outputArray = [];
  var indexString = "";
  for(i = 0; i <= int; i++){
    indexString = i.toString();
    if((i % 3 === 0) && (indexString.indexOf(3) > -1) && (i != 0) && (string !== "")){
      outputArray.push("Won't you be my neighbor " + string + "?")
    }
    else if (indexString.indexOf(3) > -1){
      outputArray.push("Won't you be my neighbor?");
    }
    else if (indexString.indexOf(2) > -1){
      outputArray.push("boop");
    }
    else if (indexString.indexOf(1) > -1){
      outputArray.push("beep");
    }
    else {outputArray.push(i);}
  }
  return outputArray;
}

var messageReverse = function(int, string){
  var outputArray = [];
  var indexString = "";
  for(i = int; i >= 0; i--){
    indexString = i.toString();
    if((i % 3 === 0) && (indexString.indexOf(3) > -1) && (i != 0) && (string !== "")){
      outputArray.push("Won't you be my neighbor " + string + "?")
    }
    else if (indexString.indexOf(3) > -1){
      outputArray.push("Won't you be my neighbor?");
    }
    else if (indexString.indexOf(2) > -1){
      outputArray.push("boop");
    }
    else if (indexString.indexOf(1) > -1){
      outputArray.push("beep");
    }
    else {outputArray.push(i);}
  }
  return outputArray;
}

$(document).ready(function(){
  $("#button-one").click(function(event){   
      event.preventDefault();
      var inputInt = parseInt($("#input-int").val()); 
      var inputString = $("#input-string").val();  
      $("#output").text(messageConvert(inputInt, inputString));
  })
  $("#button-two").click(function(event){
    event.preventDefault();    
    var inputInt = parseInt($("#input-int").val()); 
    var inputString = $("#input-string").val(); 
    $("#output").text(messageReverse(inputInt, inputString));
  })
})