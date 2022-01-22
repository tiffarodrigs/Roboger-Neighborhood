$("document").ready(function() {
  $("form#beep").submit(function(event) {
    let input = $("#num").val();
    let userName = $("#name").val();
    let greet = beepBoop(input, userName);
    $("#result").text(greet).show();
    //text(greet).slideDown();
    event.preventDefault();
  });
});

function beepBoop(num, personName) {
  let result = []
  let numArray = []
  if (num != "") {
    for (var i = 0; i <= num; i++) {
      numArray.push(i);
    }
  }
  numArray.map(function(element) {
    if ((element === 3) || (element.toString().includes(3))) {
      result.push("Won't you be my neighbor?," + personName);
    } else if ((element === 2) || (element.toString().includes(2))) {
      result.push("Boop!");
    } else if ((element === 1) || (element.toString().includes(1))) {
      result.push("Beep!");
    } else {
      result.push(element.toString());
    }
  });

  return result.join();
}

/*function changeImage(num) {
  var image = document.getElementById('myImage');
  if (num > 10) {
      $("img").src = "waterbottel.gif";
  }
  else if (num > 20) { 
      image.src = "colorbottel.gif";
  }
}*/
