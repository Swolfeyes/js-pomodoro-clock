$(document).ready(function() {
  $("#minutes").text(target / 60);
  setSessionLength();
  resetTimer();
});

var target = 1500;
var active = false;
var pomodoro;

function timeOut() {
  pomodoro = setInterval(function() {
    console.log(setInterval);
    target--;
    active = true;
    document.getElementById("timer").innerHTML = formatTime(target);

    if (target <= 0) {
      clearInterval(pomodoro);
      document.getElementById("pomodoro").innerHTML = "EXPIRED";
    }
  }, 1000);
}

$("#pomodoro").click(function() {
  if (active === false) {
    timeOut();
  } else {
    clearInterval(pomodoro);
    $("#timer").text("- Resume -");
    active = false;
  }
});

function formatTime(time) {
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  hours = Math.floor(time / 60 / 60);
  time -= hours * 60 * 60;
  minutes = Math.floor(time / 60);
  time -= minutes * 60;
  seconds = time;
  return hours + "h:" + minutes + "m:" + seconds + "s";
}

function setSessionLength() {
  $("#lower-session-length").click(function() {
    if (target > 60) {
      target = Math.floor(target - 60);
      $("#minutes").text(Math.floor(target / 60));
    }
  });

  $("#increase-session-length").click(function() {
    target = Math.floor(target + 60);
    $("#minutes").text(Math.floor(target / 60));
  });
}

function resetTimer() {
  $("#reset").click(function() {
    target = 1500;
    $("#minutes").text(Math.floor(target / 60));
    if(active !== false) {
      clearInterval(pomodoro);
      $("#timer").text("Start Pomodoro");
      active = false;
    }
  });
}
