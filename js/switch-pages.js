var gotoGame = function() {
  $("#playGame").on("click", function() {
    $("#MainMenu").css("display", "none");
    $("#EnumerateGame").css("display", "inline");
    $("#GameTable").css("display", "table");
  })
}

var gotoMenu = function() {
  $("#gotoMenu").on("click", function() {
    $("#MainMenu").css("display", "inline");
    $("#EnumerateGame").css("display", "none");
    $("#GameTable").css("display", "none");
  })
}

$(document).ready(gotoGame)
