//business logic

var tempScore = 0;
var totalScore = 0;
var roll = 0;

// function player(name, score) {
//   this.playerName = name;
//   this.gameScore = score;
// }

// PlayerInfo.prototype.roundScore = function () {
//   roundTotal += this.player1DiceRoll
// }
//
// PlayerInfo.prototype.totalScore = function () {
//   totalScore += this.playerRoundTotal
// }


var throwdice = function () {
  roll = Math.floor(6*Math.random()) + 1;
  if (roll === 1) {
    tempScore = 0;
  } else {
    tempScore += roll;
  }
  return roll;
}

var runningScore = function () {
  totalScore += tempScore;
  return totalScore;
}

$(document).ready(function() {
 $("button#start").click(function(event){
   $(".player-console").show();
   $(".start-menu").hide();
    var player1Name = $(".player1Name").val();
   $("#player1Name").text(player1Name);
    var player2Name = $(".player2Name").val();
   $("#player2Name").text(player2Name);
  })
  $("button#new-game").click(function(event){
   $(".player-console").hide();
   $(".start-menu").show();
   tempScore = 0;
 })
  $("button#player1-roll").click(function(event){
   event.preventDefault();
