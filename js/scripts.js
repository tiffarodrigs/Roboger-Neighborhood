$("document").ready(function() {
  $("form#beep").submit(function(event) {
    let input = $("#num").val();
    let userName = $("#name").val();
    let greet = beepBoop(input, userName);
    changeImage(input);
    $("#result").text(greet).show();
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

function changeImage(num) {
  var image = document.getElementById('myImage');
  if (num < 10) {
    $("img").attr("src", "img/image2.jpeg");
  } else if (num < 30) {
    $("img").attr("src", "img/image3.jpeg");
  } else if (num < 40) {
    $("img").attr("src", "img/image4.jpeg");
  } else {
    $("img").attr("src", "img/image1.jpeg");
  }

}
