var turnScore = 0;
var turnScore2 = 0;

function playertwo(){

}

$(document).ready(function() {
  $("#roll").click(function() {
    var roll = Math.floor(Math.random() * 6 + 1);
    turnScore += roll;
    document.getElementById('dice').innerHTML = roll;
    document.getElementById('turnscore').innerHTML = turnScore;
  });
  $("#hold").click(function() {
    $("#roll").hide();
    $("#hold").hide();
    $("#roll2").show();
    $("#hold2").show();
    turnScore = 0;
  });
  $("#roll2").click(function() {
    var roll2 = Math.floor(Math.random() * 6 + 1);
    turnScore2 += roll2;
    document.getElementById('dicetwo').innerHTML = roll2;
    document.getElementById('turnscore2').innerHTML = turnScore2;
  });
  $("#hold2").click(function() {
    $("#roll2").hide();
    $("#hold2").hide();
    $("#roll").show();
    $("#hold").show();
    totalScore2 = 0;
  });
});
