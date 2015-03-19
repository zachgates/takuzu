var gotoGame = function() {
  $("#playGame").on("click", function() {
    $("#MainMenu").fadeOut(2000);
    $("#EnumerateGame").fadeIn(2000);
    $("#GameTable").fadeIn(2000);
  })
}

var gotoMenu = function() {
  $("#gotoMenu").on("click", function() {
    $("#EnumerateGame").fadeOut(1000);
    $("#GameTable").fadeOut(1000);
    $("#MainMenu").fadeIn(1000);
  })
}

$(document).ready(gotoGame);
$(document).ready(gotoMenu);
