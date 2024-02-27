var comingdate = new Date("March 23, 2024 00:00:00");

var x = setInterval(function () {
  var now = new Date();
  var des = comingdate.getTime() - now.getTime();

  if (des <= 0) {
    clearInterval(x);
    document.getElementById("d").innerHTML = "00";
    document.getElementById("h").innerHTML = "00";
    document.getElementById("m").innerHTML = "00";
    document.getElementById("s").innerHTML = "00";
  } else {
    var days = Math.floor(des / (1000 * 60 * 60 * 24));
    var hours = Math.floor((des % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((des % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((des % (1000 * 60)) / 1000);

    document.getElementById("d").innerHTML = getTrueNumber(days);
    document.getElementById("h").innerHTML = getTrueNumber(hours);
    document.getElementById("m").innerHTML = getTrueNumber(mins);
    document.getElementById("s").innerHTML = getTrueNumber(secs);
  }
}, 1000);

function getTrueNumber(x) {
  return x < 10 ? "0" + x : x;
}
